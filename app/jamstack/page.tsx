import Image from 'next/image';
import styles from './page.module.css';

export default function Page() {
  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitleEn}>Next Generation Technology JamStack</h2>
      <p className={styles.sectionTitleJa}>次世代の技術 JamStack</p>
      <p className={styles.text}>
        最新の技術であるJamStackを利用してWebサイトを制作しており、
        <br />
        サイトの高速化やセキュリティの向上などを実現しています。
      </p>
      <Image
        src="/jamstack-pricing.jpg"
        alt=""
        width={1024}
        height={1024}
        className={styles.image}
      />
    </div>
  );
}
