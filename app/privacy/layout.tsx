import Hero from '@/app/_components/Hero';
import Sheet from '@/app/_components/Sheet';

export const metadata = {
  title: 'プライバシーポリシー｜リブコネ',
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="Privacy Policy" sub="プライバシーポリシー" />
      <Sheet>{children}</Sheet>
    </>
  );
}
