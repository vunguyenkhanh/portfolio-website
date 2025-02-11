'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="relative p-2 text-foreground/60 hover:text-primary dark:text-white/60 dark:hover:text-white/90 transition-colors"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <Sun className="absolute inset-0 h-full w-full transition-transform duration-300 rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute inset-0 h-full w-full transition-transform duration-300 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
      </div>
    </button>
  );
}
