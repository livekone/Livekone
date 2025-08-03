import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Web制作｜合同会社リブコネ',
  icons: {
    // public/vite.svg を参照
    icon: '/vite.svg',
  },
};

export default function AiWebLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
