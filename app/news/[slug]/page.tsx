import { Metadata } from 'next';
import { getNewsDetail } from '@/app/_libs/microcms';
import Article from '@/app/_components/Article';
import styles from './page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ dk?: string }>;
};

export const revalidate = 60;

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { dk } = await searchParams;

  const data = await getNewsDetail(slug, { draftKey: dk });

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [data?.thumbnail?.url || ''],
    },
  };
}

export default async function Page({ params, searchParams }: Props) {
  const { slug } = await params;
  const { dk } = await searchParams;

  const data = await getNewsDetail(slug, { draftKey: dk });

  return (
    <>
      <Article data={data} />
      <div className={styles.footer}>
        <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
      </div>
    </>
  );
}
