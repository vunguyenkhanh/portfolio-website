import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'primary' | 'ghost';
  className?: string;
  text?: string;
}

export function LoadingSpinner({
  size = 'md',
  variant = 'default',
  className,
  text,
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
  };

  const variantClasses = {
    default: 'text-foreground',
    primary: 'text-primary',
    ghost: 'text-muted-foreground',
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={cn('flex items-center justify-center gap-2', className)}
    >
      <Loader2
        className={cn('animate-spin', sizeClasses[size], variantClasses[variant])}
      />
      {text && (
        <span className={cn('text-sm', variantClasses[variant])}>
          {text}
        </span>
      )}
    </motion.div>
  );
}
