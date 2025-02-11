'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { Home, User2, Briefcase, FileText, Mail, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const menuItems = [
  {
    href: '/',
    label: 'Home',
    icon: Home,
  },
  {
    href: '/about',
    label: 'About',
    icon: User2,
  },
  {
    href: '/services',
    label: 'Services',
    icon: Briefcase,
  },
  {
    href: '/works',
    label: 'Works',
    icon: FileText,
  },
  {
    href: '/blog',
    label: 'Blog',
    icon: FileText,
  },
  {
    href: '/contact',
    label: 'Contact',
    icon: Mail,
  },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center space-x-1">
      {menuItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors rounded-full',
              'hover:text-primary hover:bg-primary/5',
              isActive ? 'text-primary bg-primary/5' : 'text-foreground/60'
            )}
          >
            <Icon className="w-4 h-4" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 -mr-2 text-foreground/60 hover:text-primary"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 p-4 mt-2 bg-background border-t border-border/40 shadow-lg"
          >
            <nav className="grid gap-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors rounded-lg',
                      'hover:text-primary hover:bg-primary/5',
                      isActive ? 'text-primary bg-primary/5' : 'text-foreground/60'
                    )}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
