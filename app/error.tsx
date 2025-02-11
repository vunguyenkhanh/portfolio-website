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
      title="Application Error"
      message="We're sorry, but something went wrong. Our team has been notified and is working on it."
      buttonText="Return to home"
    />
  );
}
