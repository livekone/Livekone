import React from 'react';
import { Users, Star, Zap, ArrowRight, Gift, Clock, CheckCircle, Ticket, Tag, Sparkles } from 'lucide-react';

export default function InfluencerPlan() {
  return (
    <section className="py-20 bg-gradient-to-br from-rose-50 to-purple-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center bg-rose-50 text-rose-500 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm mb-4 sm:mb-6">
            <Users className="w-4 h-4 mr-2" />
            インフルエンサー限定プラン
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">インフルエンサー</span>の<br />
            ビジネスを加速する
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            フォロワー10,000人以上のインフルエンサー限定。<br className="hidden sm:block" />
            特別価格でプロフェッショナルなLPを制作いたします。
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
            {/* Header */}
            <div className="bg-gradient-to-r from-rose-500 to-purple-500 p-8 text-white relative">
              <div className="absolute top-4 right-4">
                <Star className="w-8 h-8 text-yellow-300 animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold mb-2">インフルエンサープラン</h3>
              <div className="mt-4">
                <div className="text-sm text-white/80 line-through">通常価格 ¥59,800</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">¥19,800</span>
                  <span className="text-white/90">（税込）</span>
                </div>
                <div className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm mt-2">
                  <Gift className="w-4 h-4" />
                  70%OFF
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Features */}
              <div className="space-y-4 mb-8">
                {[
                  'フルカスタマイズデザイン',
                  'お問い合わせフォーム設定',
                  '最短5日納品'
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a 
                href="https://livekone.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full group bg-gradient-to-r from-rose-500 to-purple-500 text-white rounded-xl px-8 py-4 font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-300"
              >
                インフルエンサープランで申し込む
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}