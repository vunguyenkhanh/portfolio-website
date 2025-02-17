'use client';

import { ThemeProvider as NextThemeProvider, type ThemeProviderProps as NextThemeProviderProps } from 'next-themes';

export function ThemeProvider({ children, ...props }: NextThemeProviderProps) {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
}
