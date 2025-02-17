'use client';

import { ErrorBoundary as BaseErrorBoundary } from '@/components/ui/error-boundary';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <BaseErrorBoundary
      title="Projects Page Error"
      message="We couldn't load the projects. Please check your connection and try again."
      buttonText="Reload projects"
    />
  );
}
