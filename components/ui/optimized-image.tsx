import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoadingComplete'> {
  wrapperClassName?: string;
}

export function OptimizedImage({
  src,
  alt,
  className,
  wrapperClassName,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={cn('overflow-hidden', wrapperClassName)}>
      <Image
        className={cn(
          'duration-700 ease-in-out',
          isLoading ? 'scale-110 blur-lg' : 'scale-100 blur-0',
          className
        )}
        src={src}
        alt={alt}
        quality={90}
        onLoadingComplete={() => setIsLoading(false)}
        {...props}
      />
    </div>
  );
}
