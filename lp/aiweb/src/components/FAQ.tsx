import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: "制作期間はどのくらいかかりますか？",
    answer: "最短3日間での納品が可能です。AI技術の活用により、従来の制作期間を大幅に短縮しています。ただし、プロジェクトの規模や要件によって期間は変動する場合があります。",
    category: "納期・料金"
  },
  {
    question: "AIを使用することでクオリティは下がりませんか？",
    answer: "AIはあくまでも制作を効率化するためのツールとして使用しています。最終的なクオリティチェックやデザインの調整は、経験豊富なデザイナーが行いますので、品質は従来以上のものをご提供できます。",
    category: "品質・技術"
  },
  {
    question: "修正回数に制限はありますか？",
    answer: "納品までの修正回数は無制限です。お客様のご要望を完全に満たすまで、何度でも修正対応させていただきます。納品後の修正については、チケット制のサポートをご用意しています。",
    category: "サポート"
  },
  {
    question: "納品後のサポート体制はどうなっていますか？",
    answer: "納品後は、チケット制のサポートをご用意しています。サイトの更新や軽微な修正、技術的なサポートなど、必要に応じてチケットを使用してご依頼いただけます。また、24時間対応のチャットボットサポートも提供しています。",
    category: "サポート"
  },
  {
    question: "SEO対策は含まれていますか？",
    answer: "はい、すべてのプランに基本的なSEO対策が含まれています。タイトル・メタディスクリプションの最適化、画像のalt属性設定、構造化データの実装など、検索エンジン対策を標準で行っています。さらに高度なSEO対策もオプションでご用意しています。",
    category: "品質・技術"
  },
  {
    question: "独自ドメインの取得や設定も対応していますか？",
    answer: "はい、ドメインの取得から設定まで一括で対応可能です。また、既にお持ちのドメインがある場合は、そちらを使用することも可能です。DNSの設定やSSL証明書の導入なども含めてサポートいたします。",
    category: "サポート"
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center bg-rose-50 text-rose-500 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm mb-4 sm:mb-6">
            <MessageCircle className="w-4 h-4 mr-2" />
            よくあるご質問
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            お客様からよく<br className="sm:hidden" />
            いただく質問
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Web制作に関する不安や疑問にお答えします。<br className="hidden sm:block" />
            ご不明な点がございましたら、お気軽にお問い合わせください。
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-center gap-4"
              >
                <span className="font-medium text-sm sm:text-base">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`px-4 sm:px-6 transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'py-3 sm:py-4 border-t border-gray-100' : 'max-h-0 overflow-hidden'
                }`}
              >
                <p className="text-sm sm:text-base text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}