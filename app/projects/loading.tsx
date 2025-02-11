import { Skeleton } from '@/components/ui/skeleton';

export default function ProjectsLoading() {
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

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-10 w-24 rounded-full" />
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="group rounded-lg overflow-hidden border">
            {/* Project Image */}
            <Skeleton className="w-full aspect-video" />

            {/* Project Info */}
            <div className="p-6 space-y-4">
              <Skeleton className="h-6 w-3/4" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 3 }).map((_, j) => (
                  <Skeleton key={j} className="h-6 w-16 rounded-full" />
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <Skeleton className="h-10 w-24 rounded-lg" />
                <Skeleton className="h-10 w-24 rounded-lg" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
