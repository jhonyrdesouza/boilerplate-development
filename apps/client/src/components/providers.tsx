'use client';

import { ThemeProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/types';
import * as React from 'react';
import { TooltipProvider } from 'ui/components/ui/tooltip';

type Props = {
  theme?: ThemeProviderProps;
  children: React.ReactNode;
};

export function Providers({ children, theme }: Props) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange {...theme}>
      <TooltipProvider>{children}</TooltipProvider>
    </ThemeProvider>
  );
}
