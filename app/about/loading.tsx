import { Skeleton } from '@/components/ui/skeleton';

export default function AboutLoading() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <Skeleton className="h-12 w-48 mx-auto mb-4" />
        <div className="max-w-2xl mx-auto space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6 mx-auto" />
        </div>
      </div>

      {/* Experience Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="p-6 rounded-lg border">
            <Skeleton className="h-8 w-40 mb-4" />
            <div className="space-y-2 mb-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-4/5" />
            </div>
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 3 }).map((_, j) => (
                <Skeleton key={j} className="h-6 w-20 rounded-full" />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="mb-16">
        <Skeleton className="h-10 w-32 mx-auto mb-8" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex items-center gap-3 p-4 rounded-lg border">
              <Skeleton className="h-8 w-8 rounded" />
              <Skeleton className="h-6 w-24" />
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div>
        <Skeleton className="h-10 w-40 mx-auto mb-8" />
        <div className="space-y-6 max-w-2xl mx-auto">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="p-6 rounded-lg border">
              <Skeleton className="h-6 w-48 mb-2" />
              <Skeleton className="h-4 w-32 mb-4" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
