import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { ThemeProvider } from "@/components/providers/theme-providers";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | VibeCode Editor",
    default: "VibeCode Editor — AI-Powered Web IDE",
  },
  description:
    "A blazing-fast, AI-integrated web IDE with real-time code execution, AI chat assistant, and support for React, Next.js, Vue, Angular, Express & Hono.",
  keywords: [
    "code editor",
    "web IDE",
    "AI coding",
    "online IDE",
    "React",
    "Next.js",
    "WebContainers",
  ],
  authors: [{ name: "VibeCode" }],
  openGraph: {
    title: "VibeCode Editor — AI-Powered Web IDE",
    description:
      "Write, run, and debug code in your browser with AI assistance. No setup required.",
    type: "website",
    siteName: "VibeCode Editor",
  },
  twitter: {
    card: "summary_large_image",
    title: "VibeCode Editor — AI-Powered Web IDE",
    description:
      "Write, run, and debug code in your browser with AI assistance.",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await auth()

  return (
    <SessionProvider session={session}>
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex flex-col min-h-screen">
              <Toaster/>
    <div className="flex-1">
{children}
    </div>
            </div>
        
        </ThemeProvider>
      </body>
    </html>
    </SessionProvider>
  );
}
