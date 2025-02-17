'use client';

import { useEffect } from 'react';

export function ClassProvider() {
  useEffect(() => {
    // Remove any unwanted classes that might be added by extensions
    document.documentElement.classList.remove('mdl-js');
  }, []);

  return null;
}
