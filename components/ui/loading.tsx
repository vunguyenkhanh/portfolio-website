export function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="w-full h-full border-4 border-primary/20 rounded-full" />
          <div className="absolute top-0 left-0 w-full h-full border-4 border-primary rounded-full animate-spin border-t-transparent" />
        </div>
      </div>
    </div>
  );
}
