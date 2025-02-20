import styles from './page.module.css';

export default function Page() {
  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          <th>事業者</th>
          <td>合同会社リブコネ</td>
        </tr>
        <tr>
          <th>代表責任者</th>
          <td>山名 雄貴</td>
        </tr>
        <tr>
          <th>所在地</th>
          <td>
            〒812-0016
            <br />
            福岡県福岡市博多区博多駅南２丁目９番１５－７１６号
          </td>
        </tr>
        <tr>
          <th>メールアドレス</th>
          <td>info@livekone.com</td>
        </tr>
        <tr>
          <th>販売価格</th>
          <td>各サービスの申込みページに記載の金額</td>
        </tr>
        <tr>
          <th>販売価格以外に必要となる費用</th>
          <td>当社のサービスを利用するために必要な通信機器及び通信費</td>
        </tr>
        <tr>
          <th>代金の支払方法</th>
          <td>クレジットカード決済、銀行振込、その他電子決済サービス</td>
        </tr>
        <tr>
          <th>代金の支払時期</th>
          <td>
            クレジットカード：注文時に直ちに処理されます。
            <br />
            銀行口座：請求月の末日までにお支払いください。
            <br />
            その他電子決済サービス：注文時に直ちに処理されます。
          </td>
        </tr>
        <tr>
          <th>サービスの引渡時期</th>
          <td>お客様とのご相談により決定します。</td>
        </tr>
        <tr>
          <th>返品及びキャンセル</th>
          <td>サービスの性質上、返品及びキャンセルはできません。</td>
        </tr>
      </tbody>
    </table>
  );
}
