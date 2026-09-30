
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { db } from "@/lib/db";
import { z } from "zod";
import { chatRateLimiter } from "@/lib/rate-limit";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

// ── Zod Validation Schema ──────────────────────────────────────────

const chatRequestSchema = z.object({
  message: z.string().min(1, "Message is required").max(10000, "Message too long"),
  history: z.array(
    z.object({
      role: z.enum(["user", "assistant"]),
      content: z.string(),
    })
  ).optional().default([]),
  playgroundId: z.string().optional(),
});

async function generateAIResponse(messages: ChatMessage[]): Promise<string> {
  const systemPrompt = `You are a helpful AI coding assistant. You help developers with:
- Code explanations and debugging
- Best practices and architecture advice  
- Writing clean, efficient code
- Troubleshooting errors
- Code reviews and optimizations

Always provide clear, practical answers. Use proper code formatting when showing examples.`;

  // Map chat history to Gemini's contents format
  const contents = messages.map((msg) => ({
    role: msg.role === "assistant" ? "model" : "user",
    parts: [{ text: msg.content }],
  }));

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: systemPrompt }],
          },
          contents,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 8192,
            topP: 0.9,
          },
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("[Chat API] Gemini API Error Response:", data);
      throw new Error(`Gemini API error: ${response.status} ${response.statusText}`);
    }

    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) {
      console.error("[Chat API] Unexpected Gemini response format:", data);
      throw new Error("No response from AI model");
    }

    return text.trim();
  } catch (error) {
    console.error("[Chat API] AI generation error:", error);
    throw new Error("Failed to generate AI response");
  }
}

export async function POST(req: NextRequest) {
  try {
    // ── Auth Check ────────────────────────────────────────────────
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized: You must be logged in to use the chat" },
        { status: 401 }
      );
    }

    // ── Rate Limit Check ──────────────────────────────────────────
    const rateLimitResult = chatRateLimiter.check(session.user.id);
    if (!rateLimitResult.success) {
      return NextResponse.json(
        {
          error: "Too many requests. Please slow down.",
          retryAfter: Math.ceil((rateLimitResult.resetAt.getTime() - Date.now()) / 1000),
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(Math.ceil((rateLimitResult.resetAt.getTime() - Date.now()) / 1000)),
            "X-RateLimit-Remaining": String(rateLimitResult.remaining),
          },
        }
      );
    }

    const body = await req.json();

    // ── Validate Input with Zod ───────────────────────────────────
    const parsed = chatRequestSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.errors[0]?.message || "Invalid request body" },
        { status: 400 }
      );
    }

    const { message, history, playgroundId } = parsed.data;

    const recentHistory = history.slice(-10);

    const messages: ChatMessage[] = [
      ...recentHistory,
      { role: "user", content: message },
    ];

    // Generate AI response
    const aiResponse = await generateAIResponse(messages);

    // ── Persist chat messages to database ─────────────────────────
    try {
      await db.chatMessage.createMany({
        data: [
          {
            userId: session.user.id,
            role: "user",
            content: message,
            playgroundId: playgroundId ?? null,
          },
          {
            userId: session.user.id,
            role: "assistant",
            content: aiResponse,
            playgroundId: playgroundId ?? null,
          },
        ],
      });
    } catch (dbError) {
      // Don't fail the request if DB persistence fails
      console.error("[Chat API] Failed to persist chat messages:", dbError);
    }

    return NextResponse.json({
      response: aiResponse,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("[Chat API] Error:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json(
      {
        error: "Failed to generate AI response",
        details: errorMessage,
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
