export const metadata = {
  title: 'AI Web制作｜合同会社リブコネ',
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return <div>{children}</div>;
}
