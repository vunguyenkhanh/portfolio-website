'use client';

import { ErrorBoundary as BaseErrorBoundary } from '@/components/ui/error-boundary';

export default function ErrorBoundary(props: any) {
  return (
    <BaseErrorBoundary
      {...props}
      title="About Page Error"
      message="We couldn't load the about page. This might be a temporary issue."
      buttonText="Reload page"
    />
  );
}
