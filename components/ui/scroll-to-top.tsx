'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const calculateScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      const maxScroll = scrollHeight - clientHeight;

      // Calculate progress percentage
      const progress = (scrollTop / maxScroll) * 100;
      setScrollProgress(Math.min(Math.max(progress, 0), 100));

      // Update visibility
      setIsVisible(scrollTop > 300);
    };

    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(calculateScroll);
    };

    // Initial calculation
    calculateScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary/10 z-[9999]" initial={false}>
        <motion.div
          className="h-full bg-primary origin-left"
          style={{
            transform: `scaleX(${scrollProgress / 100})`,
          }}
          transition={{ duration: 0.1 }}
        />
      </motion.div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className={cn(
          'fixed bottom-8 right-8 p-3',
          'bg-primary hover:bg-primary/90',
          'text-primary-foreground',
          'rounded-full shadow-lg hover:shadow-xl',
          'transition-all duration-200 ease-in-out',
          'z-[9999]',
        )}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : 20,
          scale: isVisible ? 1 : 0.8,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>
    </>
  );
}
