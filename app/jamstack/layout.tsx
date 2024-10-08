import Hero from '@/app/_components/Hero';
import Sheet from '@/app/_components/Sheet';

export const metadata = {
  title: 'JamStack｜合同会社リブコネ',
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="JamStack" sub="JamStack" />
      <Sheet>{children}</Sheet>
    </>
  );
}
