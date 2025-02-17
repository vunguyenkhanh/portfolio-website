'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const toggleVisibility = useCallback(() => {
    if (typeof window !== 'undefined') {
      const osInstance = document.querySelector('.os-viewport');
      if (osInstance && osInstance.scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  }, []);

  useEffect(() => {
    const osInstance = document.querySelector('.os-viewport');
    if (osInstance) {
      toggleVisibility();
      osInstance.addEventListener('scroll', toggleVisibility, { passive: true });
      return () => osInstance.removeEventListener('scroll', toggleVisibility);
    }
  }, [toggleVisibility]);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      const osInstance = document.querySelector('.os-viewport');
      if (osInstance) {
        osInstance.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary/50 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 p-3 rounded-full bg-primary/90 text-primary-foreground shadow-lg backdrop-blur-sm hover:bg-primary z-[100]"
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0,
          y: isVisible ? 0 : 20,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </>
  );
}
