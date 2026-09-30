/**
 * Simple in-memory rate limiter using a sliding window approach.
 * Suitable for single-instance deployments. For distributed systems,
 * consider using Redis-based rate limiting (e.g., @upstash/ratelimit).
 */

interface RateLimitEntry {
  timestamps: number[];
}

interface RateLimiterOptions {
  /** Maximum number of requests allowed within the window */
  maxRequests: number;
  /** Time window in milliseconds */
  windowMs: number;
}

interface RateLimitResult {
  success: boolean;
  remaining: number;
  resetAt: Date;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

// Periodic cleanup of stale entries (every 5 minutes)
const CLEANUP_INTERVAL = 5 * 60 * 1000;
let cleanupTimer: ReturnType<typeof setInterval> | null = null;

function startCleanup(windowMs: number) {
  if (cleanupTimer) return;
  cleanupTimer = setInterval(() => {
    const now = Date.now();
    for (const [key, entry] of rateLimitStore) {
      entry.timestamps = entry.timestamps.filter((t) => now - t < windowMs);
      if (entry.timestamps.length === 0) {
        rateLimitStore.delete(key);
      }
    }
  }, CLEANUP_INTERVAL);
  // Don't prevent Node from exiting
  if (cleanupTimer && typeof cleanupTimer === "object" && "unref" in cleanupTimer) {
    cleanupTimer.unref();
  }
}

/**
 * Creates a rate limiter with the given options.
 *
 * @example
 * ```ts
 * const limiter = createRateLimiter({ maxRequests: 10, windowMs: 60_000 });
 * const result = limiter.check("user-123");
 * if (!result.success) {
 *   return NextResponse.json({ error: "Too many requests" }, { status: 429 });
 * }
 * ```
 */
export function createRateLimiter(options: RateLimiterOptions) {
  const { maxRequests, windowMs } = options;

  startCleanup(windowMs);

  return {
    check(identifier: string): RateLimitResult {
      const now = Date.now();
      const entry = rateLimitStore.get(identifier) || { timestamps: [] };

      // Remove expired timestamps outside the sliding window
      entry.timestamps = entry.timestamps.filter((t) => now - t < windowMs);

      if (entry.timestamps.length >= maxRequests) {
        // Rate limit exceeded
        const oldestTimestamp = entry.timestamps[0];
        const resetAt = new Date(oldestTimestamp + windowMs);

        return {
          success: false,
          remaining: 0,
          resetAt,
        };
      }

      // Allow the request
      entry.timestamps.push(now);
      rateLimitStore.set(identifier, entry);

      return {
        success: true,
        remaining: maxRequests - entry.timestamps.length,
        resetAt: new Date(now + windowMs),
      };
    },
  };
}

// ── Pre-configured rate limiters for API routes ────────────────────

/** Chat API: 20 requests per minute per user */
export const chatRateLimiter = createRateLimiter({
  maxRequests: 20,
  windowMs: 60 * 1000,
});

/** Code completion API: 30 requests per minute per user */
export const codeCompletionRateLimiter = createRateLimiter({
  maxRequests: 30,
  windowMs: 60 * 1000,
});
