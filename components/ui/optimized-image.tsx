import { cn } from '@/lib/utils';
import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad'> {
  wrapperClassName?: string;
  fill?: boolean;
  width?: number | `${number}`;
  height?: number | `${number}`;
}

export function OptimizedImage({
  src,
  alt,
  className,
  wrapperClassName,
  fill,
  width,
  height,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={cn('overflow-hidden', fill ? 'relative w-full h-full' : '', wrapperClassName)}
      style={
        !fill && width && height
          ? {
              width: typeof width === 'number' ? `${width}px` : width,
              height: typeof height === 'number' ? `${height}px` : height,
            }
          : undefined
      }
    >
      <Image
        className={cn(
          'duration-700 ease-in-out',
          isLoading ? 'scale-110 blur-lg' : 'scale-100 blur-0',
          className,
        )}
        src={src}
        alt={alt}
        quality={90}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        onLoad={() => setIsLoading(false)}
        {...props}
      />
    </div>
  );
}
