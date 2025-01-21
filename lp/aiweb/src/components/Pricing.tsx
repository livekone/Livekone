import React from 'react';
import { Bot, MessageSquare, Globe, Zap, Sparkles } from 'lucide-react';
import { PricingCard } from './PricingCard';
import { CTAButton } from './ui/CTAButton';

const pricingPlans = [
  {
    title: 'バリはやプラン',
    subtitle: '最短3日でスピード納品',
    price: 59800,
    features: [
      'フルカスタマイズデザイン',
      'AI活用による高速開発',
      'アクセス解析設定',
      'SEO対策の実装',
      '最短3日納品',
      'サポートチケット3枚付き'
    ],
    badge: 'スピード重視'
  },
  {
    title: 'プレミアムプラン',
    subtitle: '24時間365日、AIが自動で商談対応',
    price: 99800,
    features: [
      'フルカスタマイズデザイン',
      'AIチャットボットの搭載',
      'マーケティング戦略提案',
      'A/Bテストの実装',
      '最短5日納品',
      'サポートチケット5枚付き'
    ],
    badge: 'AIチャットボット搭載'
  }
];

export default function Pricing() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm text-rose-500 shadow-md mb-4 sm:mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            <span className="font-bold">目的に合わせて選べる</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            料金プラン
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            プロジェクトの規模や目的に合わせて、<br className="hidden sm:block" />
            最適なプランをお選びいただけます。
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-4">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full text-xs sm:text-sm whitespace-nowrap">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
              最短3日で納品
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-600 px-3 py-1.5 rounded-full text-xs sm:text-sm whitespace-nowrap">
              <Bot className="w-3 h-3 sm:w-4 sm:h-4" />
              AIチャットボット対応
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.title} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}