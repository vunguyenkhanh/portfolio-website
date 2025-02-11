'use client';

import { siteConfig } from '@/lib/config/site';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { Briefcase, FileText, Home, Mail, Menu, User2, X } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

type IconType = {
  [key: string]: LucideIcon;
};

const icons: IconType = {
  home: Home,
  about: User2,
  projects: Briefcase,
  blog: FileText,
  contact: Mail,
};

interface MenuItemProps {
  href: string;
  title: string;
  icon?: LucideIcon;
  isActive?: boolean;
  onClick?: () => void;
}

const MenuItem = ({ href, title, icon: Icon, isActive, onClick }: MenuItemProps) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        'group relative flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors rounded-full overflow-hidden',
        isActive ? 'text-primary' : 'text-foreground/60 hover:text-primary'
      )}
    >
      <span
        className={cn(
          'absolute inset-0 bg-primary/5 transition-transform duration-300',
          isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        )}
      />
      {Icon && (
        <Icon
          className={cn(
            'relative w-4 h-4 transition-transform duration-300',
            'group-hover:scale-110'
          )}
        />
      )}
      <span className="relative">{title}</span>
    </Link>
  );
};

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center space-x-1">
      {siteConfig.nav.map((item) => (
        <MenuItem
          key={item.href}
          {...item}
          icon={icons[item.href.replace('/', '') as keyof typeof icons]}
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
              {siteConfig.nav.map((item) => {
                const Icon = icons[item.href.replace('/', '') as keyof typeof icons];
                const isActive = pathname === item.href;

                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MenuItem
                      {...item}
                      icon={Icon}
                      isActive={isActive}
                      onClick={() => setIsOpen(false)}
                    />
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
