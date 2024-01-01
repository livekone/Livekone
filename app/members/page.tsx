import Image from 'next/image';
import styles from './page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';

type Props = {
  searchParams: {
    dk: string;
  };
};

export const revalidate = 60;

export default async function Page({ searchParams }: Props) {
  return (
    <div className={styles.container}>
      <ul>
        <li key="1" className={styles.list}>
          <Image src="/ceo.png" alt="" width={1024} height={1024} className={styles.image} />
          <dl>
            <dt className={styles.name}>山名 雄貴</dt>
            <dd className={styles.position}>CEO</dd>
            <dd className={styles.profile}>
              合同会社リブコネはゲーミフィケーションを取り入れたWEBアプリケーション開発を行っているスタートアップです。
              <br />
              私はこれからの時代に承認欲求の競争ではない起業家のエンタメが必要だと考えています。
              <br />
              インフルエンサーとIT技術をかけあわせ「その日その日を好きな夢をみて暮らすこと」を目指します。
              <br />
            </dd>
          </dl>
        </li>
      </ul>
      <div className={styles.footer}>
        <h2 className={styles.message}>We are hiring</h2>
        <p>最先端の技術を取り入れたスタートアップで共に働きましょう。</p>
        <ButtonLink href="/contact">お問い合わせへ</ButtonLink>
      </div>
    </div>
  );
}
