'use client';

import { ErrorBoundary as BaseErrorBoundary } from '@/components/ui/error-boundary';

export default function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <BaseErrorBoundary
      error={error}
      reset={reset}
      title="Contact Page Error"
      message="We couldn't load the contact form. Please check your connection and try again."
      buttonText="Reload form"
    />
  );
}
