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
    aiPowered: "5.98万円〜",
    benefits: [
      "AI活用で工数削減",
      "無駄のない開発",
      "明確な料金体系"
    ]
  },
  {
    category: "保守性",
    traditional: "属人化の懸念",
    aiPowered: "標準化された管理",
    benefits: [
      "簡単な更新作業",
      "一貫した品質",
      "自動バックアップ"
    ]
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute w-[800px] h-[800px] -top-40 -right-40 bg-gradient-to-br from-purple-500/10 to-rose-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute w-[600px] h-[600px] top-60 -left-40 bg-gradient-to-br from-emerald-500/10 to-rose-500/10 rounded-full blur-3xl animate-float animation-delay-200" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-8 py-3 rounded-full text-purple-500 shadow-md mb-8">
            <Brain className="w-5 h-5 mr-2" />
            <span className="font-bold">AI特化型Web制作</span>
          </div>

          <h2 className="text-5xl font-bold mb-8">
            <span className="text-gradient">AI Web制作</span>で<br />
            実現する価値
          </h2>
          <p className="text-xl text-gray-600">
            従来のWeb制作とは一線を画す、<br />
            AI特化型の開発プロセスをご提供します。
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-500 to-rose-500 p-8 text-white">
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
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <div className="text-purple-500 mb-2">AI特化型制作</div>
                    <div className="text-2xl font-bold text-purple-500">{aiPowered}</div>
                  </div>
                </div>
                <div className="mt-4">
                  <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-sm text-gray-600 bg-white p-3 rounded-lg shadow-sm">
                        <Zap className="w-4 h-4 text-purple-500 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-rose-500 text-white rounded-xl hover:opacity-90 transition-all duration-300 hover:scale-105 transform shadow-lg">
            <span className="font-bold">AI Web制作を始める</span>
            <Target className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}