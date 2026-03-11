/**
 * Skeleton loader for the project detail page.
 */
export function ProjectDetailSkeleton() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 animate-pulse">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
        {/* Gallery Skeleton */}
        <div className="w-full lg:w-[52%] flex flex-col gap-3">
          <div className="w-full aspect-[4/3] bg-gray-200 rounded-lg" />
          <div className="grid grid-cols-3 gap-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-24 bg-gray-200 rounded-lg" />
            ))}
          </div>
        </div>

        {/* Info Skeleton */}
        <div className="w-full lg:w-[48%] flex flex-col gap-4 pt-2">
          <div className="h-6 w-24 bg-gray-200 rounded-full" />
          <div className="h-10 w-3/4 bg-gray-200 rounded" />
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-2/3 bg-gray-200 rounded" />
          </div>
          <div className="h-12 w-full bg-gray-200 rounded mt-8" />
        </div>
      </div>
    </div>
  );
}
