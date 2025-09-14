'use client';

import Script from 'next/script';

declare global {
  interface Window {
    UnicornStudio?: {
      init: () => void;
      isInitialized?: boolean;
    };
  }
}

export default function UnicornStudioScript() {
  return (
    <Script
      src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.30/dist/unicornStudio.umd.js"
      strategy="afterInteractive"
      onLoad={() => {
        if (
          typeof window.UnicornStudio?.init === 'function' &&
          !window.UnicornStudio.isInitialized
        ) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      }}
    />
  );
}
