import { cache } from "react";
import { getAllPlaygroundForUser } from "@/modules/dashboard/actions";

/**
 * Cached data fetcher for playground data.
 * Uses React's `cache()` to deduplicate the `getAllPlaygroundForUser` call
 * across `dashboard/layout.tsx` and `dashboard/page.tsx` within the same
 * request lifecycle, eliminating duplicate database queries.
 */
export const getCachedPlaygrounds = cache(async () => {
  return getAllPlaygroundForUser();
});
