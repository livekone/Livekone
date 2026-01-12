import Hero from '@/app/_components/Hero';
import Sheet from '@/app/_components/Sheet';

export const metadata = {
  title: '特定商取引法に基づく表示｜リブコネ',
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="Legal Notice" sub="特定商取引法に基づく表示" />
      <Sheet>{children}</Sheet>
    </>
  );
}
