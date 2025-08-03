import styles from './page.module.css';

export default function Page() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        ご質問、ご相談は下記フォームよりお問い合わせください。
        <br />
        内容確認後、担当者より通常3営業日以内にご連絡いたします。
      </p>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSerjm-5Uu2YYxj5f_nCf4Hlua4lj6g78SzEh-cmrcd0OqIbbQ/viewform?embedded=true"
        width="100%"
        height="1200"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        読み込んでいます…
      </iframe>
    </div>
  );
}
