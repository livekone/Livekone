import Hero from '@/app/_components/Hero';
import Sheet from '@/app/_components/Sheet';

export const metadata = {
  title: '注文完了｜リブコネ',
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="success" sub="注文完了" />
      <Sheet>{children}</Sheet>
    </>
  );
}
