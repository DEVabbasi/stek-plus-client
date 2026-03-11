/**
 * Skeleton loader for ProjectCard.
 */
export function ProjectCardSkeleton() {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-100 rounded-xl overflow-hidden animate-pulse min-h-[160px]">
      <div className="w-full sm:w-[45%] min-h-[160px] bg-gray-200" />
      <div className="w-full sm:w-[55%] p-5 md:p-6 flex flex-col justify-center gap-3 bg-white">
        <div className="h-4 w-20 bg-gray-200 rounded-full" />
        <div className="h-6 w-3/4 bg-gray-200 rounded" />
        <div className="h-4 w-full bg-gray-200 rounded" />
        <div className="h-8 w-32 bg-gray-200 rounded mt-2" />
      </div>
    </div>
  );
}
