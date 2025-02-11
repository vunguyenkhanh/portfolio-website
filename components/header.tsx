'use client';

import { motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Logo } from './logo';
import { MobileNavigation, Navigation } from './navigation';
import { ThemeToggle } from './theme-toggle';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsScrolled(latest > 0);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-sm shadow-sm'
          : 'bg-background/50 backdrop-blur-none'
      }`}
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <Logo />
          <Navigation />

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <MobileNavigation />

            <motion.a
              href="#contact"
              className="hidden md:flex items-center gap-2 px-6 py-2 text-sm font-medium bg-primary hover:bg-primary/90 rounded-full transition-colors text-white dark:text-primary dark:bg-white/10 dark:hover:bg-white/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let&apos;s Talk
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
