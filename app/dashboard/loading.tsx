
export default function DashboardLoading() {
  return (
    <div className="flex flex-col justify-start items-center min-h-screen mx-auto max-w-7xl px-4 py-10">
      {/* Action Cards Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <div className="h-32 rounded-xl border bg-card animate-pulse" />
        <div className="h-32 rounded-xl border bg-card animate-pulse" />
      </div>

      {/* Table Skeleton */}
      <div className="mt-10 w-full">
        <div className="border rounded-lg overflow-hidden">
          {/* Header */}
          <div className="h-12 bg-muted/50 animate-pulse" />
          {/* Rows */}
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-4 border-t"
            >
              <div className="h-4 w-1/4 bg-muted rounded animate-pulse" />
              <div className="h-4 w-16 bg-muted rounded animate-pulse" />
              <div className="h-4 w-24 bg-muted rounded animate-pulse" />
              <div className="flex items-center gap-2 flex-1">
                <div className="h-8 w-8 rounded-full bg-muted animate-pulse" />
                <div className="h-4 w-20 bg-muted rounded animate-pulse" />
              </div>
              <div className="h-8 w-8 bg-muted rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
