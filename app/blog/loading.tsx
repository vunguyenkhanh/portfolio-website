import { Skeleton } from '@/components/ui/skeleton';

export default function BlogLoading() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <Skeleton className="h-12 w-48 mx-auto mb-4" />
        <div className="max-w-2xl mx-auto space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6 mx-auto" />
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12">
        <Skeleton className="h-12 w-full md:w-96 rounded-lg" />
        <div className="flex gap-4">
          <Skeleton className="h-12 w-32 rounded-lg" />
          <Skeleton className="h-12 w-32 rounded-lg" />
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="group rounded-lg overflow-hidden border">
            {/* Post Image */}
            <Skeleton className="w-full aspect-video" />

            {/* Post Info */}
            <div className="p-6 space-y-4">
              {/* Meta Info */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Skeleton className="h-6 w-6 rounded-full" />
                  <Skeleton className="h-4 w-24" />
                </div>
                <Skeleton className="h-4 w-24" />
              </div>

              {/* Title and Preview */}
              <Skeleton className="h-6 w-5/6" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 3 }).map((_, j) => (
                  <Skeleton key={j} className="h-6 w-16 rounded-full" />
                ))}
              </div>

              {/* Read More */}
              <Skeleton className="h-10 w-32" />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-12">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-10 w-10 rounded-lg" />
        ))}
      </div>
    </div>
  );
}
