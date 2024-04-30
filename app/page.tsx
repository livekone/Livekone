import Image from 'next/image';
import { getNewsList } from '@/app/_libs/microcms';
import { TOP_NEWS_LIMIT } from '@/app/_constants';
import NewsList from '@/app/_components/NewsList';
import styles from './page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';

export const metadata = {
  title: '合同会社リブコネ',
};

export const revalidate = 60;

export default async function Page() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>
            <ruby className={styles.ruby}>
              Live one day at a time
              <rt className={styles.rt}>その日その日を好きな夢をみて暮らすこと</rt>
            </ruby>
          </h1>
          <p className={styles.description}>
            頭の冴えを取り戻そう
            <br />
            まどろみの中で働いてもこの世界は変わらないから
            <br />
            明日のことを気にする必要もないぐらい、今を大切に生きることができる
            <br />
            リブコネが目指すのは「その日その日を好きな夢をみて暮らすこと」です
          </p>
        </div>
        <Image className={styles.bgimg} src="/new-img-mv.gif" alt="" width={3600} height={1200} />
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
              リブコネはゲーミフィケーションを取り入れたWEBアプリケーション開発を行っているスタートアップです。
              <br />
              また、JamstackによるWEBサイト制作、DAO構築、自社メディア運営を行っています。
            </p>
            <ButtonLink href="/business">もっとみる</ButtonLink>
          </div>
          <Image
            className={styles.businessImg}
            src="/img-business.png"
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
              width={6000}
              height={4000}
            />
            <div>
              <h2 className={styles.sectionTitleEn}>About Us</h2>
              <p className={styles.sectionTitleJa}>私たちについて</p>
              <p className={styles.sectionDescription}>
                リブコネは「その日その日を好きな夢をみて暮らすこと」を目指しています。
                <br />
                ゲーミフィケーションによって、効率の良い働き方を突き詰め、誰もが夢を追いかけられる世界を創造します。
              </p>
              <dl className={styles.info}>
                <dt className={styles.infoTitle}>社名</dt>
                <dd className={styles.infoDescription}>合同会社リブコネ</dd>
              </dl>
              <dl className={styles.info}>
                <dt className={styles.infoTitle}>設立</dt>
                <dd className={styles.infoDescription}>２０２３年９月１５日</dd>
              </dl>
              <dl className={styles.info}>
                <dt className={styles.infoTitle}>所在地</dt>
                <dd className={styles.infoDescription}>
                  〒812-0016
                  <br />
                  福岡県福岡市博多区博多駅南
                  <br />
                  ２丁目９番１５－７１６号
                </dd>
              </dl>
              <dl className={styles.info}>
                <dt className={styles.infoTitle}>代表者</dt>
                <dd className={styles.infoDescription}>山名 雄貴</dd>
              </dl>
              <dl className={styles.info}>
                <dt className={styles.infoTitle}>資本金</dt>
                <dd className={styles.infoDescription}>３０万円</dd>
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
              リブコネではフロー状態に入ることができる人材を求めています。
              <br />
              効率の良い働き方を突き詰め、集中できる環境で活躍したい方は、ぜひご応募ください。最先端の技術を取り入れたスタートアップで共に働きましょう。
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
