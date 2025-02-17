'use client';

import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import 'overlayscrollbars/overlayscrollbars.css';
import { ReactNode } from 'react';

interface ScrollWrapperProps {
  children: ReactNode;
}

const options = {
  scrollbars: {
    theme: 'os-theme-dark',
    autoHide: 'scroll',
    autoHideDelay: 400,
  },
  overflow: {
    x: 'hidden',
  },
};

export function ScrollWrapper({ children }: ScrollWrapperProps) {
  return (
    <OverlayScrollbarsComponent options={options} defer className="h-screen">
      {children}
    </OverlayScrollbarsComponent>
  );
}
