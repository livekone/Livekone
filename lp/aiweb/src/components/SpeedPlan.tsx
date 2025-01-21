import React from 'react';
import { Zap, Rocket, Clock, Target, ArrowRight, CheckCircle, Star, AlertTriangle, Timer, Gift, Sparkles, Trophy, Users } from 'lucide-react';

export default function SpeedPlan() {
  return (
    <section className="py-12 sm:py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute w-[800px] h-[800px] -top-40 -right-40 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute w-[600px] h-[600px] top-60 -left-40 bg-gradient-to-br from-sky-500/20 to-blue-500/20 rounded-full blur-3xl animate-float animation-delay-200" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm text-blue-500 shadow-md mb-4 sm:mb-6">
            <Zap className="w-4 h-4 mr-2" />
            <span className="font-bold">人気No.1プラン</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-8">
            <span className="text-gradient-blue">最短3日</span>で<br className="sm:hidden" />
            高品質なLPを制作
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12">
            AI技術と豊富な実績を組み合わせた独自の制作フローで、<br className="hidden sm:block" />
            スピーディーかつ高品質なLPをお届けします。
          </p>

          {/* Price Card */}
          <div className="relative bg-white border-4 border-blue-500 p-6 sm:p-8 md:p-12 rounded-3xl mb-8 sm:mb-16 max-w-2xl mx-auto transform hover:scale-102 transition-all duration-300 shadow-2xl">
            {/* Campaign Badge */}
            <div className="absolute -top-3 sm:-top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 text-white px-4 sm:px-8 py-1 sm:py-2 rounded-full text-sm sm:text-base font-bold flex items-center gap-2 shadow-lg animate-gradient whitespace-nowrap">
              <Timer className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
              期間限定特別価格
            </div>

            <div className="mt-6 sm:mt-8 mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">バリはやプラン</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600">スピード重視のハイパフォーマンスプラン</p>
            </div>

            {/* Price Display */}
            <div className="relative mb-6 sm:mb-8 bg-gradient-to-br from-blue-50 to-blue-100 p-6 sm:p-8 md:p-10 rounded-2xl border-2 border-blue-200">
              <div className="absolute -right-2 sm:-right-4 -top-2 sm:-top-4 bg-blue-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full transform rotate-12 shadow-lg flex items-center gap-1 sm:gap-2 text-sm sm:text-base">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="font-bold">15%OFF</span>
              </div>
              <div className="text-center">
                <div className="text-sm sm:text-base md:text-lg text-gray-500 line-through mb-3">通常価格 ¥59,800</div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3">
                  <div className="bg-blue-500/10 px-3 py-1 rounded-full mb-2 sm:mb-0">
                    <span className="text-base sm:text-xl md:text-2xl text-blue-500 font-medium">今だけ</span>
                  </div>
                  <div className="flex items-baseline gap-1 sm:gap-2">
                    <span className="text-3xl sm:text-5xl md:text-7xl font-bold text-blue-500 tracking-tight">¥49,800</span>
                    <span className="text-sm sm:text-base text-blue-500">（税込）</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Campaign Timer */}
            <div className="bg-gradient-to-r from-sky-50 to-blue-50 border-2 border-blue-200 p-4 sm:p-6 md:p-8 rounded-2xl mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-2 sm:gap-3">
                  <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-600 animate-pulse" />
                  <div className="text-base sm:text-lg md:text-xl font-bold text-blue-800">残りわずか</div>
                </div>
                <div className="bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-blue-800 font-mono font-bold shadow-sm text-center text-sm sm:text-base">
                  残り3枠
                </div>
              </div>
            </div>

            {/* Campaign Benefits */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-2xl mb-8 sm:mb-10 border-2 border-gray-100">
              <div className="text-left font-bold mb-4 sm:mb-6 flex items-center gap-2 text-base sm:text-lg md:text-xl">
                <Gift className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-500" />
                <span>キャンペーン特典</span>
              </div>
              <div className="grid gap-3 sm:gap-4">
                {[
                  "通常価格から15%OFF",
                  "最短3日で納品",
                  "24時間対応可能"
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3 sm:gap-4 bg-white p-4 sm:p-5 rounded-xl shadow-sm">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <a 
              href="https://livekone.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 text-white rounded-xl inline-flex items-center justify-center gap-3 sm:gap-4 hover:from-blue-600 hover:via-blue-700 hover:to-blue-600 transition-all duration-300 shadow-xl animate-gradient"
            >
              <span className="text-base sm:text-lg md:text-xl font-bold">いますぐ特別価格で申し込む</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}