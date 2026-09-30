"use client";

import { Button } from "@/components/ui/button";
import { AlertCircle, ArrowLeft, RotateCcw } from "lucide-react";
import Link from "next/link";

export default function PlaygroundError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4">
      <div className="flex flex-col items-center gap-4 text-center max-w-md">
        <div className="rounded-full bg-destructive/10 p-4">
          <AlertCircle className="h-8 w-8 text-destructive" />
        </div>
        <h2 className="text-xl font-semibold">Failed to load playground</h2>
        <p className="text-sm text-muted-foreground">
          {error.message ||
            "The playground could not be loaded. It may have been deleted or you may not have access."}
        </p>
        <div className="flex gap-3">
          <Button onClick={reset} variant="outline" className="gap-2">
            <RotateCcw className="h-4 w-4" />
            Try Again
          </Button>
          <Link href="/dashboard">
            <Button variant="default" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
