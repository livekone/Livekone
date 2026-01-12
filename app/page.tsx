import Image from 'next/image';
import { getNewsList } from '@/app/_libs/microcms';
import { TOP_NEWS_LIMIT } from '@/app/_constants';
import NewsList from '@/app/_components/NewsList';
import styles from './page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';
import UnicornStudioScript from './_components/UnicornStudioScript';

export const metadata = {
  title: 'リブコネ',
};

export const revalidate = 60;

export default async function Page() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });
  return (
    <>
      <section className={styles.top}>
        <div data-us-project="sekK0ZSF7ZtE46Jt6NBm" className={styles.unicornContainer}></div>
        <UnicornStudioScript />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList articles={data.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.horizontal}>
          <div>
            <h2 className={styles.sectionTitleEn}>Business</h2>
            <p className={styles.sectionTitleJa}>事業内容</p>
            <p className={styles.sectionDescription}>
              <strong>AI Web制作事業</strong>
              <br />
              最先端のAIツールとマーケティング戦略を活用した、成果重視のWebサイト・LP制作を提供。クライアントの課題に寄り添い、ビジネスの成長を加速させます。
              <br />
              <br />
              <strong>AIタレント事業（Livpro）</strong>
              <br />
              LivproはAIとストリーミングの可能性を広げる 次世代タレントプロダクションです。
              <br />
              また、AIタレントと企業をマッチングするAIタレントマッチングサービス「AIney（アイニー）」を開発中です。
              <br />
              <br />
              <strong>AI教育事業（AI WEB CAMP）</strong>
              <br />
              未経験から最前線へ。実務に直結するAI活用スキルを提供し、Web業界での活躍を目指す人材を育成。実践的なAIスキルとWeb制作ノウハウを習得できるカリキュラムを展開しています。
            </p>
            <ButtonLink href="/business">もっとみる</ButtonLink>
          </div>
          <Image
            className={styles.businessImg}
            src="/img-business.jpg"
            alt=""
            width={1024}
            height={1024}
          />
        </div>
      </section>
      <div className={styles.aboutus}>
        <section className={styles.section}>
          <div className={styles.horizontal}>
            <Image
              className={styles.aboutusImg}
              src="/img-aboutus.jpg"
              alt=""
              width={1200}
              height={800}
            />
            <div>
              <h2 className={styles.sectionTitleEn}>About Us</h2>
              <p className={styles.sectionTitleJa}>私たちについて</p>
              <p className={styles.sectionDescription}>
                リブコネは「その日その日を好きな夢をみて暮らすこと」を目指しています。
                <br />
                働き方にゲーミフィケーションの概念を取り入れ、効率性と楽しさを両立。
                誰もが“好き”を原動力に、自由に夢を追いかけられる世界を創造します。
              </p>
              <dl className={styles.info}>
                <dt className={styles.infoTitle}>屋号</dt>
                <dd className={styles.infoDescription}>リブコネ</dd>
              </dl>
              <dl className={styles.info}>
                <dt className={styles.infoTitle}>設立</dt>
                <dd className={styles.infoDescription}>２０２３年９月１５日</dd>
              </dl>
              <dl className={styles.info}>
                <dt className={styles.infoTitle}>代表者</dt>
                <dd className={styles.infoDescription}>山名 雄貴</dd>
              </dl>
            </div>
          </div>
        </section>
      </div>
      <section className={styles.section}>
        <div className={styles.horizontal}>
          <div>
            <h2 className={styles.sectionTitleEn}>We are hiring</h2>
            <p className={styles.sectionTitleJa}>採用情報</p>
            <p className={styles.sectionDescription}>
              集中してるときが、一番自由。
              <br />
              リブコネは、そんな“夢中”を大事にできる人を求めています。
              <br />
              余計なストレスなく、最高のパフォーマンスを発揮したいなら、
              リブコネでその才能を試してみてください。
            </p>
            <ButtonLink href="/contact">お問い合わせへ</ButtonLink>
          </div>
          <Image
            className={styles.hiringImg}
            src="/img-hiring.jpg"
            alt=""
            width={960}
            height={960}
          />
        </div>
      </section>
    </>
  );
}
