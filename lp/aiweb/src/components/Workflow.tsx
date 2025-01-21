import React, { useEffect, useRef, useState } from 'react';
import { MessageSquare, Lightbulb, Code2, Rocket, Bot, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import { CTAButton } from './ui/CTAButton';

const steps = [
  {
    icon: MessageSquare,
    title: "ヒアリング",
    description: "お客様の課題とゴールを詳しくお伺いします",
    details: [
      "目的の明確化",
      "ターゲット層の特定",
      "必要な機能の洗い出し"
    ],
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    gradient: "from-blue-500/20 to-blue-500/5"
  },
  {
    icon: Bot,
    title: "AI分析・提案",
    description: "AIが最適な解決策を分析・提案",
    details: [
      "競合サイトの自動分析",
      "最適な技術スタックの選定",
      "コンバージョン率の予測"
    ],
    color: "text-purple-500",
    bgColor: "bg-purple-50",
    gradient: "from-purple-500/20 to-purple-500/5"
  },
  {
    icon: Lightbulb,
    title: "デザイン設計",
    description: "AIがデザインの初期案を生成",
    details: [
      "複数デザイン案の自動生成",
      "ユーザー動線の最適化",
      "レスポンシブ対応"
    ],
    color: "text-amber-500",
    bgColor: "bg-amber-50",
    gradient: "from-amber-500/20 to-amber-500/5"
  },
  {
    icon: Code2,
    title: "高速開発",
    description: "AIによる効率的なコーディング",
    details: [
      "コードの自動生成",
      "品質チェックの自動化",
      "SEO対策の実装"
    ],
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
    gradient: "from-emerald-500/20 to-emerald-500/5"
  },
  {
    icon: Rocket,
    title: "テスト・デプロイ",
    description: "品質を担保して素早くリリース",
    details: [
      "自動テストの実行",
      "パフォーマンス最適化",
      "セキュリティチェック"
    ],
    color: "text-rose-500",
    bgColor: "bg-rose-50",
    gradient: "from-rose-500/20 to-rose-500/5"
  }
];

export default function Workflow() {
  const [activeStep, setActiveStep] = useState(-1);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // セクションが画面内に入っていない場合は-1を設定
      if (sectionRect.top > windowHeight || sectionRect.bottom < 0) {
        setActiveStep(-1);
        return;
      }

      // 各ステップの位置を確認し、画面中央に最も近いものをアクティブにする
      const screenCenter = windowHeight / 2;
      let closestStep = -1;
      let minDistance = Infinity;

      stepRefs.current.forEach((stepRef, index) => {
        if (stepRef) {
          const rect = stepRef.getBoundingClientRect();
          const distance = Math.abs(rect.top + rect.height / 2 - screenCenter);
          if (distance < minDistance) {
            minDistance = distance;
            closestStep = index;
          }
        }
      });

      setActiveStep(closestStep);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初期表示時にも実行

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-12 sm:py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-0 sm:px-4">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[500px] h-[500px] -top-20 -right-20 bg-rose-500/5 rounded-full blur-3xl" />
          <div className="absolute w-[300px] h-[300px] top-40 -left-20 bg-blue-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-16 relative px-4">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm text-rose-500 shadow-md mb-4 sm:mb-6">
            <Zap className="w-4 h-4 mr-2" />
            AI Web制作プロセス
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-gradient">AI</span>による
            <br className="sm:hidden" />最速のWeb制作フロー
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            従来の制作工程をAIで効率化。<br className="hidden sm:block" />
            スピードと品質を両立した新しいWeb制作の形を実現します。
          </p>
        </div>

        <div className="relative">
          {steps.map(({ icon: Icon, title, description, details, color, bgColor, gradient }, index) => (
            <div 
              key={title} 
              ref={el => {
                stepRefs.current[index] = el;
              }}
              className={`relative mb-6 sm:mb-12 last:mb-0 transition-all duration-1000 ${
                index === activeStep ? 'opacity-100 scale-100' : 'opacity-50 scale-95'
              }`}
            >
              {/* Connection Line */}
              {index !== steps.length - 1 && (
                <div className={`absolute left-6 sm:left-[2.25rem] top-20 sm:top-24 bottom-0 w-0.5 ${
                  index === activeStep ? color : 'bg-gray-200'
                } hidden sm:block transition-colors duration-1000`} />
              )}
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start px-4 sm:px-0">
                {/* Left Side - Step Number & Icon */}
                <div className="flex-shrink-0 relative">
                  <div className={`w-12 h-12 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl ${
                    index === activeStep ? bgColor : 'bg-gray-100'
                  } ${index === activeStep ? color : 'text-gray-400'} 
                    flex items-center justify-center shadow-lg transform transition-all duration-1000`}
                  >
                    <Icon className="w-6 h-6 sm:w-10 sm:h-10" />
                  </div>
                  <div className={`absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full ${
                    index === activeStep ? color.replace('text-', 'bg-') : 'bg-gray-400'
                  } text-white flex items-center justify-center text-xs sm:text-sm font-bold transition-colors duration-1000`}>
                    {index === activeStep ? <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" /> : index + 1}
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className={`flex-1 bg-white p-4 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 w-full ${
                  index === activeStep ? `${color.replace('text-', 'border-')} bg-gradient-to-br ${gradient}` : 'border-transparent'
                }`}>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                    {/* Main Content */}
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 flex items-center gap-2 sm:gap-3">
                        {title}
                        {index === activeStep && (
                          <CheckCircle className={`w-4 h-4 sm:w-5 sm:h-5 ${color}`} />
                        )}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{description}</p>
                      <ul className="space-y-2 sm:space-y-4">
                        {details.map((detail) => (
                          <li key={detail} className="flex items-center gap-2 sm:gap-3 group">
                            <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                              index === activeStep ? color : 'bg-gray-300'
                            } group-hover:scale-150 transition-all duration-300`} />
                            <span className="text-sm sm:text-base text-gray-600">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Arrow for next step */}
                    {index !== steps.length - 1 && (
                      <div className="hidden sm:flex items-center">
                        <ArrowRight className={`w-6 h-6 sm:w-8 sm:h-8 ${
                          index === activeStep ? color : 'text-gray-300'
                        } transition-colors duration-1000`} />
                      </div>
                    )}
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
