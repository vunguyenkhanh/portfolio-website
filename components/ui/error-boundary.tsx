'use client';

import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

interface ErrorBoundaryProps {
  error: Error & { digest?: string };
  reset: () => void;
  title?: string;
  message?: string;
  buttonText?: string;
}

export function ErrorBoundary({
  error,
  reset,
  title = 'Something went wrong!',
  message,
  buttonText = 'Try again',
}: ErrorBoundaryProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] px-4 text-center">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-foreground/60 mb-8 max-w-md">
        {message || error.message || 'An unexpected error occurred. Please try again later.'}
      </p>
      <Button onClick={reset} variant="outline">
        {buttonText}
      </Button>
    </div>
  );
}
