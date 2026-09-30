"use server";

import { z } from "zod";
import { db } from "@/lib/db";
import { currentUser } from "@/modules/auth/actions";
import { revalidatePath } from "next/cache";

// ── Zod Validation Schemas ──────────────────────────────────────────

const createPlaygroundSchema = z.object({
  title: z.string().min(1, "Title is required").max(100, "Title too long"),
  template: z.enum(["REACT", "NEXTJS", "EXPRESS", "VUE", "HONO", "ANGULAR"]),
  description: z.string().max(500, "Description too long").optional(),
});

const editProjectSchema = z.object({
  title: z.string().min(1, "Title is required").max(100, "Title too long"),
  description: z.string().max(500, "Description too long"),
});

// ── Helper: Get authenticated user ID or throw ──────────────────────

async function requireAuth() {
  const user = await currentUser();
  if (!user?.id) {
    throw new Error("Unauthorized: You must be logged in");
  }
  return user;
}

// ── Helper: Verify playground ownership ─────────────────────────────

async function verifyOwnership(playgroundId: string, userId: string) {
  const playground = await db.playground.findUnique({
    where: { id: playgroundId },
    select: { userId: true },
  });

  if (!playground) {
    throw new Error("Playground not found");
  }

  if (playground.userId !== userId) {
    throw new Error("Forbidden: You do not own this playground");
  }

  return playground;
}

// ── Actions ─────────────────────────────────────────────────────────

export const toggleStarMarked = async (
  playgroundId: string,
  isChecked: boolean
) => {
  const user = await requireAuth();

  try {
    if (isChecked) {
      await db.starMark.create({
        data: {
          userId: user.id!,
          playgroundId,
          isMarked: isChecked,
        },
      });
    } else {
        await db.starMark.delete({
        where: {
          userId_playgroundId: {
            userId: user.id!,
            playgroundId: playgroundId,

          },
        },
      });
    }

     revalidatePath("/dashboard");
    return { success: true, isMarked: isChecked };
  } catch (error) {
    console.error("[toggleStarMarked]", error);
    return { success: false, error: "Failed to update star mark" };
  }
};

export const getAllPlaygroundForUser = async () => {
  const user = await requireAuth();

  try {
    const playground = await db.playground.findMany({
      where: {
        userId: user.id,
      },
      include: {
        user: true,
        starMarks:{
            where:{
                userId: user.id!
            },
            select:{
                isMarked:true
            }
        }
      },
      orderBy: {
        updatedAt: "desc",
      },
    });

    return playground;
  } catch (error) {
    console.error("[getAllPlaygroundForUser]", error);
    throw new Error("Failed to fetch playgrounds");
  }
};

export const createPlayground = async (data: {
  title: string;
  template: "REACT" | "NEXTJS" | "EXPRESS" | "VUE" | "HONO" | "ANGULAR";
  description?: string;
}) => {
  const user = await requireAuth();

  // Validate input with Zod
  const validated = createPlaygroundSchema.safeParse(data);
  if (!validated.success) {
    throw new Error(validated.error.errors[0]?.message || "Invalid input");
  }

  const { template, title, description } = validated.data;

  try {
    const playground = await db.playground.create({
      data: {
        title,
        description,
        template,
        userId: user.id!,
      },
    });

    revalidatePath("/dashboard");
    return playground;
  } catch (error) {
    console.error("[createPlayground]", error);
    throw new Error("Failed to create playground");
  }
};

export const deleteProjectById = async (id: string) => {
  const user = await requireAuth();
  await verifyOwnership(id, user.id!);

  try {
    await db.playground.delete({
      where: {
        id,
      },
    });
    revalidatePath("/dashboard");
  } catch (error) {
    console.error("[deleteProjectById]", error);
    throw new Error("Failed to delete playground");
  }
};

export const editProjectById = async (
  id: string,
  data: { title: string; description: string }
) => {
  const user = await requireAuth();
  await verifyOwnership(id, user.id!);

  // Validate input with Zod
  const validated = editProjectSchema.safeParse(data);
  if (!validated.success) {
    throw new Error(validated.error.errors[0]?.message || "Invalid input");
  }

  try {
    await db.playground.update({
      where: {
        id,
      },
      data: validated.data,
    });
    revalidatePath("/dashboard");
  } catch (error) {
    console.error("[editProjectById]", error);
    throw new Error("Failed to update playground");
  }
};

export const duplicateProjectById = async (id: string) => {
  const user = await requireAuth();
  await verifyOwnership(id, user.id!);

  try {
    const originalPlayground = await db.playground.findUnique({
      where: { id },
      include: {
        templateFiles: true,
      },
    });

    if (!originalPlayground) {
      throw new Error("Original playground not found");
    }

    const duplicatedPlayground = await db.playground.create({
      data: {
        title: `${originalPlayground.title} (Copy)`,
        description: originalPlayground.description,
        template: originalPlayground.template,
        userId: originalPlayground.userId,
        // Duplicate associated template files
        templateFiles: originalPlayground.templateFiles.length > 0
          ? {
              create: originalPlayground.templateFiles.map((file) => ({
                content: file.content,
              })),
            }
          : undefined,
      },
    });

    revalidatePath("/dashboard");
    return duplicatedPlayground;
  } catch (error) {
    console.error("[duplicateProjectById]", error);
    throw new Error("Failed to duplicate playground");
  }
};
