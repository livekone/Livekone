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
        <h2 className={styles.sectionTitleEn}>代表メッセージ</h2>
        <li key="1" className={styles.list}>
          <Image
            src="/yuuki_yamana.jpg"
            alt=""
            width={1024}
            height={1024}
            className={styles.image}
          />
          <dl>
            <dt className={styles.name}>山名 雄貴</dt>
            <dd className={styles.position}>最高経営責任者(CEO)</dd>
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
            <dd className={styles.position}>最高戦略責任者(CSO)</dd>
            <dd className={styles.profile}>
              成長戦略の策定・実行および市場分析を担当させていただいております。
            </dd>
          </dl>
        </li>
        <li key="3" className={styles.list}>
          <Image
            src="/takaaki_obara.jpg"
            alt=""
            width={1024}
            height={1024}
            className={styles.image}
          />
          <dl>
            <dt className={styles.name}>小原 峰輝</dt>
            <dd className={styles.position}>最高技術責任者(CTO)</dd>
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
