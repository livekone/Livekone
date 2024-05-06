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
          <Image src="/ceo.jpg" alt="" width={1024} height={1024} className={styles.image} />
          <dl>
            <dt className={styles.name}>山名 雄貴</dt>
            <dd className={styles.position}>CEO</dd>
            <dd className={styles.profile}>
              合同会社リブコネはゲーミフィケーションを取り入れたWEBアプリケーション開発を行っているスタートアップです。
              <br />
              <br />
              私はこれからの時代に承認欲求の競争ではない起業家のエンタメが必要だと考えています。
              <br />
              <br />
              インフルエンサーとIT技術をかけあわせ「その日その日を好きな夢をみて暮らすこと」を目指します。
              <br />
            </dd>
          </dl>
        </li>
        <h2 className={styles.sectionTitleEn}>Member</h2>
        <p className={styles.sectionTitleJa}>メンバー</p>
        <li key="2" className={styles.list}>
          <Image
            src="/genki_murase.jpg"
            alt=""
            width={1024}
            height={1024}
            className={styles.image}
          />
          <dl>
            <dt className={styles.name}>村瀬 元旗</dt>
            <dd className={styles.position}>最高執行責任者(COO)</dd>
            <dd className={styles.profile}>
              日常は当たり前でできていると考えています。
              <br />
              <br />
              合同会社リブコネでは当たり前ではないものを作ると同時に、当たり前を創り出していきます。
              <br />
              <br />
              主にデザイン・営業・事業統括業務を担当させていただいております。
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
