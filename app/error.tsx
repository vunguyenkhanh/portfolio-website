'use client';

import { ErrorBoundary as BaseErrorBoundary } from '@/components/ui/error-boundary';

export default function ErrorBoundary(props: any) {
  return (
    <BaseErrorBoundary
      {...props}
      title="Application Error"
      message="We're sorry, but something went wrong. Our team has been notified and is working on it."
      buttonText="Return to home"
    />
  );
}
