'use client';

import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: ReactNode;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'default' | 'lg';
  showArrow?: boolean;
  isLoading?: boolean;
}

export function Button({
  children,
  className,
  variant = 'default',
  size = 'default',
  showArrow,
  isLoading,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all',
        {
          'bg-primary text-white hover:bg-primary/90': variant === 'default',
          'border border-border hover:border-primary/50 hover:bg-primary/5': variant === 'outline',
          'hover:bg-primary/5': variant === 'ghost',
          'px-4 py-2 text-sm': size === 'sm',
          'px-6 py-3': size === 'default',
          'px-8 py-4 text-lg': size === 'lg',
          'opacity-50 cursor-not-allowed': disabled || isLoading,
        },
        className
      )}
      whileHover={!disabled && !isLoading ? { scale: 1.05 } : undefined}
      whileTap={!disabled && !isLoading ? { scale: 0.95 } : undefined}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <svg
          className="animate-spin h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : (
        <>
          {children}
          {showArrow && <ArrowRight className="w-4 h-4" />}
        </>
      )}
    </motion.button>
  );
}
