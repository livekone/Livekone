import React from 'react';
import { Check, Sparkles, Users, Star, Bot } from 'lucide-react';
import { PaymentButton } from './ui/PaymentButton';

interface PricingFeature {
  feature: string;
  icon?: React.FC<{ className?: string }>;
  highlight?: boolean;
  subFeatures?: string[];
}

interface PricingCardProps {
  title: string;
  subtitle?: string;
  price: number;
  features: (string | PricingFeature)[];
  isPopular?: boolean;
  badge?: string;
  className?: string;
}

export function PricingCard({
  title,
  subtitle,
  price,
  features,
  badge,
  className = '',
}: PricingCardProps) {
  const isSpeedPlan = title === 'バリはやプラン';
  const isPremium = title === 'プレミアムプラン';

  const cardStyle = isSpeedPlan
    ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white transform hover:scale-105'
    : 'bg-gradient-to-br from-amber-600 to-amber-700 text-white transform hover:scale-105';

  const buttonStyle = `
    ${
      isSpeedPlan
        ? 'bg-white text-blue-600 hover:bg-gray-100'
        : 'bg-white text-amber-600 hover:bg-gray-100'
    }
    w-full py-3 rounded-md 
    transition-all duration-300
    transform hover:scale-105
    hover:shadow-lg
    relative overflow-hidden
    group
    font-bold
    flex items-center justify-center
  `;

  return (
    <div
      className={`${cardStyle} p-8 rounded-2xl shadow-xl transition-all duration-500 ${className}`}
    >
      {badge && (
        <div className="relative">
          <div className="absolute -top-2 -right-2">
            {isSpeedPlan ? (
              <Sparkles className="w-5 h-5 text-blue-300 animate-pulse" />
            ) : (
              <Bot className="w-5 h-5 text-amber-300 animate-pulse" />
            )}
          </div>
          <div
            className={`
            ${isSpeedPlan ? 'bg-blue-500' : 'bg-amber-500'} text-white text-sm px-3 py-1 
            rounded-full inline-block mb-4
            animate-fade-in
            hover:bg-opacity-90 transition-colors
            flex items-center gap-2
          `}
          >
            {isSpeedPlan ? <Sparkles className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            {badge}
          </div>
        </div>
      )}

      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      {subtitle && <p className="text-sm text-white/80 mb-4">{subtitle}</p>}

      <div className="transform transition-all duration-300 hover:scale-105 mb-6">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-white">¥{price.toLocaleString()}</span>
          <span className="text-sm text-white/80">（税込）</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => {
          if (typeof feature === 'string') {
            return (
              <li
                key={feature}
                className="flex items-center text-white/90 transform transition-all duration-300 hover:translate-x-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Check
                  className={`
                  w-5 h-5 mr-2
                  ${isSpeedPlan ? 'text-blue-300' : 'text-amber-300'}
                  transition-transform duration-300 group-hover:rotate-12
                `}
                />
                {feature}
              </li>
            );
          }
          return null;
        })}
      </ul>

      <PaymentButton
        className={buttonStyle}
        productType={isSpeedPlan ? 'speedPlan' : 'premiumPlan'} // productType を設定
      >
        プランを選択
      </PaymentButton>
    </div>
  );
}
