'use client';

import { Options } from 'overlayscrollbars';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import 'overlayscrollbars/overlayscrollbars.css';
import { ReactNode } from 'react';

interface ScrollWrapperProps {
  children: ReactNode;
}

const options: Options = {
  scrollbars: {
    theme: 'os-theme-dark',
    visibility: 'auto',
    autoHide: 'scroll',
    autoHideDelay: 400,
    autoHideSuspend: false,
    dragScroll: true,
    clickScroll: true,
    pointers: ['mouse', 'touch', 'pen'],
  },
  overflow: {
    x: 'hidden',
    y: 'scroll',
  },
  paddingAbsolute: false,
  showNativeOverlaidScrollbars: false,
  update: {
    elementEvents: [['img', 'load']],
    debounce: [0, 33],
    attributes: null,
    ignoreMutation: null,
  },
};

export function ScrollWrapper({ children }: ScrollWrapperProps) {
  const handleInitialized = () => {
    document.documentElement.classList.add('os-initialized');
  };

  const handleDestroyed = () => {
    document.documentElement.classList.remove('os-initialized');
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <OverlayScrollbarsComponent
        options={options}
        defer
        element="div"
        className="absolute inset-0"
        events={{
          initialized: handleInitialized,
          destroyed: handleDestroyed,
        }}
      >
        {children}
      </OverlayScrollbarsComponent>
    </div>
  );
}
