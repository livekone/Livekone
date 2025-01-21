import React from 'react';
import { Zap, CheckCircle } from 'lucide-react';

const solutions = [
  {
    title: "最短3日のスピード納品",
    description: "AI活用による開発時間の大幅短縮で、急ぎのプロジェクトにも対応",
    benefits: [
      "AI活用による開発時間の大幅短縮",
      "並行作業による効率的な制作フロー",
      "豊富な実績による無駄のない進行"
    ],
    stats: {
      value: "75%",
      label: "開発時間短縮"
    },
    color: "text-orange-500",
    bgColor: "bg-orange-50"
  },
  {
    title: "コスト削減を実現",
    description: "AI活用による効率化で、高品質なサイトを手頃な価格で提供",
    benefits: [
      "テンプレート活用による初期費用削減",
      "保守費用を抑える最適化設計",
      "段階的な機能追加プラン"
    ],
    stats: {
      value: "60%",
      label: "コスト削減"
    },
    color: "text-emerald-500",
    bgColor: "bg-emerald-50"
  },
  {
    title: "成果を出すLP設計",
    description: "SEO対策とコンバージョン重視の設計で成果を実現",
    benefits: [
      "検索エンジン最適化の徹底対応",
      "ユーザー行動分析に基づく改善",
      "SNSとの連携による集客強化"
    ],
    stats: {
      value: "3.2倍",
      label: "CV率改善"
    },
    color: "text-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    title: "安心の保守サポート",
    description: "24時間体制のサポートと簡単な管理画面で安心",
    benefits: [
      "直感的な管理画面の提供",
      "定期的な性能チェックと最適化",
      "セキュリティ対策の自動化"
    ],
    stats: {
      value: "24h",
      label: "サポート対応"
    },
    color: "text-purple-500",
    bgColor: "bg-purple-50"
  }
];

export function Solutions() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-rose-50 text-rose-500 px-6 py-2 rounded-full text-sm mb-6">
            <Zap className="w-4 h-4 mr-2" />
            リブコネの解決策
          </div>
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-gradient">最新技術</span>で<br />
            全ての課題を解決
          </h2>
          <p className="text-gray-600">
            AIと熟練のプロフェッショナルチームが、<br />
            あなたのWeb制作の課題を解決します。
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {solutions.map(({ title, description, benefits, stats, color, bgColor }) => (
            <div
              key={title}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className={`${bgColor} ${color} p-3 rounded-xl flex-shrink-0`}>
                  <Zap className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold">{title}</h3>
                    <div className={`${color} text-sm font-bold ml-auto`}>
                      {stats.value}
                      <span className="text-gray-500 text-xs ml-1">
                        {stats.label}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{description}</p>
                  <ul className="space-y-2">
                    {benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2">
                        <CheckCircle className={`w-4 h-4 ${color} mt-1 flex-shrink-0`} />
                        <span className="text-gray-600 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-xl hover:bg-gray-800 transition-all duration-300 group">
            <span>無料相談を始める</span>
            <Zap className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}