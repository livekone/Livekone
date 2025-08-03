import React from 'react';
import { Target, Zap, Brain } from 'lucide-react';

const advantages = [
  {
    category: "開発スピード",
    traditional: "2-3ヶ月",
    aiPowered: "最短3日",
    benefits: [
      "AIによる高速開発",
      "リアルタイム修正",
      "即時デプロイ"
    ]
  },
  {
    category: "品質",
    traditional: "担当者次第",
    aiPowered: "AI品質保証",
    benefits: [
      "自動コード最適化",
      "パフォーマンス保証",
      "セキュリティ対策"
    ]
  },
  {
    category: "コスト",
    traditional: "50-100万円",
    aiPowered: "59,800円〜",
    benefits: [
      "AI活用で工数削減",
      "無駄のない開発",
      "明確な料金体系"
    ]
  },
  {
    category: "保守性",
    traditional: "属人化の懸念",
    aiPowered: "統一された管理",
    benefits: [
      "簡単な更新作業",
      "一貫した品質",
      "自動バックアップ"
    ]
  }
];

export default function WebDevComparison() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute w-[800px] h-[800px] -top-40 -right-40 bg-gradient-to-br from-rose-500/10 to-red-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute w-[600px] h-[600px] top-60 -left-40 bg-gradient-to-br from-red-500/10 to-rose-500/10 rounded-full blur-3xl animate-float animation-delay-200" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm text-rose-500 shadow-md mb-4 sm:mb-6">
            <Brain className="w-4 h-4 mr-2" />
            <span className="font-bold">AI特化型Web制作</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            <span className="text-gradient">AI Web制作</span>で<br className="sm:hidden" />
            実現する価値
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            従来のWeb制作とは一線を画す、<br className="hidden sm:block" />
            AI特化型の開発プロセスをご提供します。
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-rose-500 to-red-500 p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-white" />
              <h3 className="text-2xl font-bold">従来型との比較</h3>
            </div>
            <p className="text-white/90">
              AI技術の活用により、従来のWeb制作では実現できなかった<br />
              スピードと品質、コストパフォーマンスを実現します。
            </p>
          </div>

          <div className="p-8">
            {advantages.map(({ category, traditional, aiPowered, benefits }) => (
              <div key={category} className="mb-8 last:mb-0">
                <h4 className="font-bold text-lg mb-4">{category}</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="text-gray-500 mb-2">従来のWeb制作</div>
                    <div className="text-2xl font-bold text-gray-400">{traditional}</div>
                  </div>
                  <div className="bg-rose-50 p-6 rounded-xl">
                    <div className="text-rose-500 mb-2">AI特化型制作</div>
                    <div className="text-2xl font-bold text-rose-500">{aiPowered}</div>
                  </div>
                </div>
                <div className="mt-4">
                  <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-sm text-gray-600 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                        <Zap className="w-4 h-4 text-rose-500 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}