import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-4 py-16 lg:py-32">
      {/* Text Content */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl">
        <div className="flex items-center gap-2 mb-4">
          <Skeleton className="h-2 w-6" />
          <Skeleton className="h-6 w-32 rounded-full" />
        </div>

        <Skeleton className="h-12 w-3/4 mb-4" />
        <div className="space-y-2 mb-8 w-full">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/5" />
        </div>

        <div className="flex items-center gap-4">
          <Skeleton className="h-12 w-32 rounded-full" />
          <Skeleton className="h-12 w-32 rounded-full" />
        </div>

        <div className="flex items-center gap-4 mt-8">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-10 w-10 rounded-full" />
          ))}
        </div>
      </div>

      {/* Image */}
      <div className="relative w-64 h-64 lg:w-96 lg:h-96">
        <Skeleton className="w-full h-full rounded-full" />
      </div>
    </div>
  );
}
