'use client';

import { ErrorBoundary as BaseErrorBoundary } from '@/components/ui/error-boundary';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <BaseErrorBoundary
      error={error}
      reset={reset}
      title="Blog Page Error"
      message="We couldn't load the blog posts. Please refresh the page or try again later."
      buttonText="Reload posts"
    />
  );
}
