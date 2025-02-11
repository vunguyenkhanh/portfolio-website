'use client';

import { ErrorBoundary as BaseErrorBoundary } from '@/components/ui/error-boundary';

export default function ErrorBoundary(props: any) {
  return (
    <BaseErrorBoundary
      {...props}
      title="Projects Page Error"
      message="We couldn't load the projects. Please check your connection and try again."
      buttonText="Reload projects"
    />
  );
}
