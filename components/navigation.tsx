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

const MenuItem = ({ href, label, icon: Icon, isActive }: any) => {
  return (
    <Link
      href={href}
      className={cn(
        'group relative flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors rounded-full overflow-hidden',
        isActive ? 'text-primary' : 'text-foreground/60 hover:text-primary'
      )}
    >
      <span className={cn(
        'absolute inset-0 bg-primary/5 transition-transform duration-300',
        isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
      )} />
      <Icon className={cn(
        'relative w-4 h-4 transition-transform duration-300',
        'group-hover:scale-110'
      )} />
      <span className="relative">{label}</span>
    </Link>
  );
};

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center space-x-1">
      {menuItems.map((item) => (
        <MenuItem
          key={item.href}
          {...item}
          isActive={pathname === item.href}
        />
      ))}
    </nav>
  );
}

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 -mr-2 text-foreground/60 hover:text-primary"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 p-4 mt-2 bg-background/95 backdrop-blur-sm border-t border-border/40 shadow-lg"
          >
            <nav className="grid gap-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
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
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
