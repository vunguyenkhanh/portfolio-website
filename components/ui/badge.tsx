import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { HTMLAttributes } from 'react';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset transition-colors',
  {
    variants: {
      variant: {
        default:
          'bg-primary/10 text-primary ring-primary/20',
        secondary:
          'bg-secondary/10 text-secondary ring-secondary/20',
        destructive:
          'bg-destructive/10 text-destructive ring-destructive/20',
        outline:
          'text-foreground ring-border',
        success:
          'bg-green-500/10 text-green-700 dark:text-green-400 ring-green-500/20',
        warning:
          'bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 ring-yellow-500/20',
        info:
          'bg-blue-500/10 text-blue-700 dark:text-blue-400 ring-blue-500/20',
      },
      size: {
        default: 'text-xs',
        sm: 'text-[0.6875rem]',
        lg: 'text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size, className }))} {...props} />
  );
}

export { Badge, badgeVariants };
