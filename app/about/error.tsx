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
      title="About Page Error"
      message="We couldn't load the about page. This might be a temporary issue."
      buttonText="Reload page"
    />
  );
}
