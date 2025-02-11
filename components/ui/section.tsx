import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { HTMLAttributes, forwardRef } from 'react';
import { Container } from './container';

const sectionVariants = cva('relative py-16 sm:py-24', {
  variants: {
    variant: {
      default: 'bg-background',
      muted: 'bg-muted',
      accent: 'bg-primary text-primary-foreground',
    },
    spacing: {
      default: 'py-16 sm:py-24',
      sm: 'py-8 sm:py-12',
      lg: 'py-24 sm:py-32',
    },
  },
  defaultVariants: {
    variant: 'default',
    spacing: 'default',
  },
});

interface SectionProps extends HTMLAttributes<HTMLElement>, VariantProps<typeof sectionVariants> {
  containerSize?: 'default' | 'sm' | 'md' | 'lg';
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, variant, spacing, containerSize = 'default', children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(sectionVariants({ variant, spacing, className }))}
        {...props}
      >
        <Container size={containerSize}>{children}</Container>
      </section>
    );
  },
);

Section.displayName = 'Section';

export { Section, sectionVariants };
