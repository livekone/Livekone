import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CTAButtonProps {
  showStats?: boolean;
  stats?: Array<{
    value: string;
    label: string;
  }>;
  className?: string;
}

export function CTAButton({ 
  showStats = true,
  stats = [{ value: '24h', label: '対応' }],
  className = ''
}: CTAButtonProps) {
  return (
    <a 
      href="https://livekone.com/contact"
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex flex-col sm:flex-row items-center gap-2 sm:gap-4 px-6 sm:px-8 py-4 sm:py-6 bg-gradient-to-r from-rose-500 via-purple-500 to-rose-500 text-white rounded-xl transition-all duration-300 hover:scale-105 transform animate-gradient bg-[length:200%_200%] w-full sm:w-auto ${className}`}
    >
      {/* Left Side */}
      <div className="flex flex-col w-full sm:w-auto">
        <div className="flex items-center justify-center sm:justify-start gap-2">
          <span className="text-xs sm:text-sm text-white/80">AI Web制作の</span>
        </div>
        <div className="flex items-center justify-center sm:justify-start gap-2">
          <span className="text-lg sm:text-xl font-bold">無料相談はこちら</span>
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
      
      {showStats && (
        <>
          {/* Divider - Only visible on desktop */}
          <div className="hidden sm:block h-12 w-px bg-white/20"></div>
          
          {/* Right Side - Stats - Hidden on mobile */}
          <div className="hidden sm:flex items-center gap-4 sm:gap-6">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-xl sm:text-2xl font-bold">{value}</div>
                <div className="text-[10px] sm:text-xs text-white/80">{label}</div>
              </div>
            ))}
          </div>
        </>
      )}
    </a>
  );
}