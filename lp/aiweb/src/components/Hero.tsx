import React from 'react';
import { ChevronDown } from 'lucide-react';
import { CTAButton } from './ui/CTAButton';
import { ThreeAnimation } from './ThreeAnimation';

export default function Hero() {
  return (
    <div className="bg-black text-white relative overflow-hidden">
      {/* Three.js Animation */}
      <ThreeAnimation />

      {/* Main content */}
      <div className="container mx-auto px-4 relative">
        <div className="py-20 sm:py-32 lg:py-40">
          <div className="max-w-2xl mx-auto lg:mx-0">
            {/* Heading */}
            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                <span className="text-gradient inline-block">AIが加速する</span>
              </h1>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                <span className="text-white inline-block">次世代のWeb制作</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-16 text-white/90 leading-relaxed">
              最新のAI技術と豊富なLP制作実績で、<br className="sm:hidden" />
              あなたのビジネスの<span className="text-rose-400 font-medium">成果を最大化</span>します。
            </p>

            {/* CTA Button */}
            <div className="relative z-10 flex justify-start">
              {/* Main Button */}
              <div className="relative max-w-md">
                <CTAButton 
                  showStats={true} 
                  stats={[{ value: '24h', label: '対応' }]} 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-2 text-white/60">
          <div className="text-xs sm:text-sm">Scroll</div>
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
      </div>
    </div>
  );
}