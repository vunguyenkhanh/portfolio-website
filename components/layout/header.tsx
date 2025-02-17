'use client';

import { Logo } from '@/components/ui/logo';
import { useScroll } from '@/lib/hooks/use-scroll';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MobileNavigation, Navigation } from './navigation';

export function Header() {
  const isScrolled = useScroll();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b shadow-sm'
          : 'bg-background/50 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Logo />
          </motion.div>

          <Navigation />

          <div className="flex items-center gap-4">
            <MobileNavigation />

            <Link href="/contact">
              <motion.div
                className="hidden md:flex items-center gap-2 px-6 py-2 text-sm font-medium bg-primary hover:bg-primary/90 rounded-full transition-colors text-primary-foreground shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                Let&apos;s Talk
                <motion.svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </motion.svg>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
