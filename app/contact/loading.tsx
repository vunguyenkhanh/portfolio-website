import { Skeleton } from '@/components/ui/skeleton';

export default function ContactLoading() {
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

      <div className="max-w-2xl mx-auto">
        {/* Contact Form */}
        <div className="space-y-6 mb-12">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-12 w-full rounded-lg" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-12 w-full rounded-lg" />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-12 w-full rounded-lg" />
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-12 w-full rounded-lg" />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-32 w-full rounded-lg" />
          </div>

          {/* Submit Button */}
          <Skeleton className="h-12 w-full md:w-32 rounded-lg" />
        </div>

        {/* Alternative Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="p-6 rounded-lg border space-y-4">
              <div className="flex items-center gap-4">
                <Skeleton className="h-10 w-10 rounded-full" />
                <Skeleton className="h-6 w-32" />
              </div>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-10 w-32 rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
