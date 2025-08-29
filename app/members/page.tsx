import Image from 'next/image';
import styles from './page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';

type Props = {
  searchParams: Promise<{
    dk?: string;
  }>;
};

export const revalidate = 60;

export default async function Page({ searchParams }: Props) {
  const { dk } = await searchParams;
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
              合同会社リブコネは「AIで新しい職種を生み出す」ことをミッションに掲げるスタートアップです。
              <br />
              <br />
              ノーコードツールを活用したAI
              Web制作やAIタレントマーケティングサービスの開発に注力しています。
              <br />
              <br />
              私はこれからの時代には、承認欲求を競うのではなく、起業家がエンターテインメント性をもって活動することが必要だと考えています。
              <br />
              <br />
              AIで新しい職種を生み出すことで、より多くの人が起業家として挑戦できる環境を実現していきます。
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
              ソフトテニス実業団
              リブコネLYNXの設立をはじめ、eスポーツチームの運営経験を活かして、AIタレントを活用したマーケティング領域を主導しています。
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
            <dd className={styles.position}>最高インターン者(CIO)</dd>
            <dd className={styles.profile}>
              日本語・英語・中国語を自在に操るトリリンガルであり、その語学力と映像表現の専門性を活かして、AIタレントの企画・制作を担当しています。
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
