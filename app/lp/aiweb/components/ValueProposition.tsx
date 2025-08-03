import React from 'react';
import { Bot, Zap, LineChart, Clock, Users, Code2, AlertTriangle, CheckCircle, Ticket, Tag, Sparkles, Gift } from 'lucide-react';

const usageExamples = [
  {
    task: "テキストの修正",
    tickets: 0.5,
    time: "約30分",
    category: "軽微な修正"
  },
  {
    task: "レイアウトの微調整",
    tickets: 1,
    time: "約1時間",
    category: "デザイン調整"
  },
  {
    task: "セクションの追加",
    tickets: 2,
    time: "約2時間",
    category: "機能追加"
  }
];

export default function ValueProposition() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] -top-20 -right-20 bg-emerald-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute w-[300px] h-[300px] top-40 -left-20 bg-blue-500/5 rounded-full blur-3xl animate-float animation-delay-200" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-emerald-50 text-emerald-500 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm mb-4 sm:mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            安心のサポート体制
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">チケット制サポート</span>で<br />
            柔軟な保守運用を実現
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            納品後もしっかりサポート。必要な時に必要なだけ使える<br className="hidden sm:block" />
            効率的なチケット制サポートをご用意しています。
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Gift className="w-6 h-6" />
                <h3 className="text-2xl font-bold">お得な5枚セット</h3>
              </div>
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-5xl font-bold">¥19,800</span>
              <span className="text-white/80">（税込）</span>
            </div>
            <p className="text-white/90">1チケットあたり ¥3,960 / 通常価格より20%お得</p>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Usage Examples */}
              <div>
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Ticket className="w-5 h-5 text-emerald-500" />
                  チケットの使用例
                </h4>
                <div className="space-y-4">
                  {usageExamples.map(({ task, tickets, time, category }) => (
                    <div key={task} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex-1">
                        <div className="font-medium">{task}</div>
                        <div className="text-sm text-gray-500">{category}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-emerald-500">{tickets}枚</div>
                        <div className="text-sm text-gray-500">{time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Gift className="w-5 h-5 text-emerald-500" />
                  チケット特典
                </h4>
                <div className="bg-emerald-50 p-6 rounded-xl">
                  <ul className="space-y-4">
                    {[
                      { text: "24時間以内の初期回答", sub: "スピーディーな対応" },
                      { text: "最短当日対応", sub: "緊急の修正にも対応" },
                      { text: "有効期限12ヶ月", sub: "余裕を持って利用可能" }
                    ].map(({ text, sub }) => (
                      <li key={text} className="flex items-start gap-3">
                        <div className="bg-white p-2 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-emerald-500" />
                        </div>
                        <div>
                          <div className="font-medium">{text}</div>
                          <div className="text-sm text-gray-600">{sub}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* <div className="mt-8 text-center">
              <a 
                href="https://livekone.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl inline-flex items-center gap-2 hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 hover:scale-105"
              >
                <span className="font-bold">チケットを購入する</span>
                <Zap className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
