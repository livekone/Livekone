import Link from 'next/link';
import styles from './index.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <Link href="/news">ニュース</Link>
          </li>
          <li className={styles.item}>
            <Link href="/business">事業内容</Link>
          </li>
          <li>
            <Link href="/lp/aiweb">AI Web制作</Link>
          </li>
          <li className={styles.item}>
            <Link href="/members">代表挨拶</Link>
          </li>
          <li className={styles.item}>
            <Link href="/contact">お問い合わせ</Link>
          </li>
          <li className={styles.item}>
            <Link href="/privacy">プライバシーポリシー</Link>
          </li>
          <li className={styles.item}>
            <Link href="/legal-notice">特定商取引法に基づく表示</Link>
          </li>
        </ul>
      </nav>
      <p className={styles.cr}>© Livekone Inc. All Rights Reserved 2023</p>
    </footer>
  );
}
