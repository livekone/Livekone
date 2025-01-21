import React from 'react';
import { AlertTriangle, CheckCircle, ArrowRight, Zap, Bot, Sparkles, Gift } from 'lucide-react';
import { CTAButton } from './ui/CTAButton';

const problems = [
  {
    title: "納期に間に合わない",
    description: "従来のWeb制作では、打ち合わせや修正に時間がかかり、急ぎのプロジェクトに対応できない",
    problem: [
      "打ち合わせに時間がかかる",
      "修正のたびに待ち時間が発生",
      "担当者の空き状況に依存"
    ],
    solution: {
      title: "最短3日のスピード納品",
      description: "AI活用による開発時間の大幅短縮で、急ぎのプロジェクトにも対応",
      points: [
        "AI活用による開発時間の大幅短縮",
        "並行作業による効率的な制作フロー",
        "豊富な実績による無駄のない進行"
      ]
    },
    color: "text-orange-500",
    bgColor: "bg-orange-50",
    gradient: "from-orange-500/20 to-orange-500/5"
  },
  {
    title: "予算が限られている",
    description: "高額な制作費用が負担に。追加の修正費用も発生し、予算管理が難しい",
    problem: [
      "初期費用が高額",
      "修正の度に追加料金",
      "保守費用の見通しが立たない"
    ],
    solution: {
      title: "圧倒的なコスト削減",
      description: "AI活用による効率化で、高品質なサイトを手頃な価格で提供",
      points: [
        "テンプレート活用による初期費用削減",
        "保守費用を抑える最適化設計",
        "段階的な機能追加プラン"
      ]
    },
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
    gradient: "from-emerald-500/20 to-emerald-500/5"
  },
  {
    title: "集客できていない",
    description: "せっかく制作したサイトなのに、アクセスが集まらず、成果に繋がらない",
    problem: [
      "SEO対策が不十分",
      "コンバージョン率が低い",
      "分析・改善ができていない"
    ],
    solution: {
      title: "成果を出すLP設計",
      description: "SEO対策とコンバージョン重視の設計で成果を実現",
      points: [
        "検索エンジン最適化の徹底対応",
        "ユーザー行動分析に基づく改善",
        "SNSとの連携による集客強化"
      ]
    },
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    gradient: "from-blue-500/20 to-blue-500/5"
  }
];

export default function Problems() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute w-[800px] h-[800px] -top-40 -right-40 bg-gradient-to-br from-rose-500/5 to-purple-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute w-[600px] h-[600px] top-60 -left-40 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl animate-float animation-delay-200" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-rose-50 text-rose-500 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm mb-4 sm:mb-6">
            <AlertTriangle className="w-4 h-4 mr-2" />
            こんなお悩みありませんか？
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Web制作の<span className="text-gradient">課題</span>を<br className="sm:hidden" />
            <span className="text-gradient">最新AI</span>で解決
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            多くの企業が直面するWeb制作の課題を、<br className="hidden sm:block" />
            最新AIとプロフェッショナルチームが解決します。
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-8">
          {problems.map(({ title, description, problem, solution, color, bgColor, gradient }) => (
            <div
              key={title}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row">
                {/* Problem Section */}
                <div className="p-8 md:w-[35%] relative">
                  <div className="flex flex-col h-full">
                    <div className={`${bgColor} ${color} p-4 rounded-xl group-hover:scale-110 transition-transform duration-500 self-start`}>
                      <AlertTriangle className="w-8 h-8" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between mt-4">
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900">
                          {title}
                        </h3>
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed min-h-[3rem]">
                          {description}
                        </p>
                      </div>
                      <ul className="space-y-3">
                        {problem.map((point) => (
                          <li key={point} className="flex items-center gap-2 text-gray-500 text-sm">
                            <AlertTriangle className={`w-4 h-4 ${color} flex-shrink-0`} />
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Arrow Divider */}
                <div className="relative md:w-[10%] flex items-center justify-center py-6 md:py-0">
                  <div className={`${bgColor} rounded-full p-4 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <ArrowRight className={`w-8 h-8 ${color}`} />
                  </div>
                  <div className="absolute inset-0 flex items-center">
                    <div className={`h-0.5 w-full ${bgColor}`} />
                  </div>
                </div>

                {/* Solution Section */}
                <div className={`p-8 md:w-[55%] bg-gradient-to-br ${gradient}`}>
                  <div className="flex flex-col h-full">
                    <div className={`bg-white ${color} p-4 rounded-xl group-hover:scale-110 transition-transform duration-500 self-start`}>
                      <Zap className="w-8 h-8" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between mt-4">
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900">
                          {solution.title}
                        </h3>
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed min-h-[3rem]">
                          {solution.description}
                        </p>
                      </div>
                      <ul className="space-y-3">
                        {solution.points.map((point) => (
                          <li key={point} className="flex items-center gap-2 text-gray-500 text-sm">
                            <CheckCircle className={`w-4 h-4 ${color} flex-shrink-0`} />
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block relative group">
            {/* Main Button */}
            <CTAButton 
              showStats={true} 
              stats={[
                { value: '24h', label: '対応' }
              ]} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}