'use client';

import { ErrorBoundary as BaseErrorBoundary } from '@/components/ui/error-boundary';

export default function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <BaseErrorBoundary
      error={error}
      reset={reset}
      title="Projects Page Error"
      message="We couldn't load the projects. Please check your connection and try again."
      buttonText="Reload projects"
    />
  );
}
