import Hero from '@/app/_components/Hero';
import Sheet from '@/app/_components/Sheet';

export const metadata = {
  title: '代表挨拶｜合同会社リブコネ',
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="Message" sub="代表挨拶" />
      <Sheet>{children}</Sheet>
    </>
  );
}
