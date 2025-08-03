import { getNewsList } from '@/app/_libs/microcms';
import { NEWS_LIST_LIMIT } from '@/app/_constants';
import Pagination from '@/app/_components/Pagination';
import ArticleList from '@/app/_components/NewsList';

type Props = {
  params: Promise<{ current: string }>;
};

export const revalidate = 60;

export default async function Page({ params }: Props) {
  const { current } = await params;
  const currentPage = parseInt(current, 10);

  const data = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    offset: NEWS_LIST_LIMIT * (currentPage - 1),
  });

  return (
    <>
      <ArticleList articles={data.contents} />
      <Pagination totalCount={data.totalCount} current={currentPage} basePath="/news" />
    </>
  );
}
