'use client';

import { useEffect } from 'react';
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
  const initUnicornStudio = () => {
    if (typeof window.UnicornStudio?.init === 'function') {
      window.UnicornStudio.init();
    }
  };

  // ページ遷移で戻ってきた時など、コンポーネントが再マウントされた時に実行
  useEffect(() => {
    initUnicornStudio();
  });

  return (
    <Script
      src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.30/dist/unicornStudio.umd.js"
      strategy="afterInteractive"
      onLoad={() => {
        if (
          typeof window.UnicornStudio?.init === 'function' &&
          !window.UnicornStudio.isInitialized // 初回ロード時のみisInitializedをtrueにする
        ) {
          initUnicornStudio();
          window.UnicornStudio.isInitialized = true;
        }
      }}
    />
  );
}
