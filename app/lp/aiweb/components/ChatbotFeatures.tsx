import React from 'react';
import { MessageSquare, Bot, Globe, Settings, Send, Trophy, Brain } from 'lucide-react';

const awards = [
  {
    title: "COZE-AIMハッカソン 受賞",
    date: "2024年6月",
    description: "最新のAI技術と使いやすさが評価され、数百のプロジェクトの中から入賞しました。"
  }
];

const features = [
  {
    icon: Bot,
    title: "24時間対応の自動応答",
    description: "お客様の質問に24時間365日、即座に対応。夜間や休日でも商談機会を逃しません。"
  },
  {
    icon: Brain,
    title: "AIによる賢い会話",
    description: "自然な日本語での会話が可能。商品説明から見積もり提示まで、スムーズな対応を実現します。"
  },
  {
    icon: Settings,
    title: "データ分析と改善",
    description: "会話ログを分析し、よくある質問や顧客ニーズを可視化。マーケティング施策に活用できます。"
  }
];

const chatMessages = [
  {
    type: 'bot',
    message: 'こんにちは！AI Web制作に関するご質問がありましたら、お気軽にお申し付けください。'
  },
  {
    type: 'user',
    message: 'バリはやプランについて教えてください。'
  },
  {
    type: 'bot',
    message: 'バリはやプランは、最短3日でのスピード納品が特徴のプランです。\n現在、期間限定で特別価格¥49,800（税込）でご提供中です。\n\n主な特徴：\n・フルカスタマイズデザイン\n・AI活用による高速開発\n・アクセス解析設定\n・SEO対策の実装\n・最短3日納品\n・サポートチケット3枚付き\n\nご興味ありますか？'
  }
];

export default function ChatbotFeatures() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-blue-50 text-blue-500 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm mb-4 sm:mb-6">
            <MessageSquare className="w-4 h-4 mr-2" />
            AIチャットボット搭載
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">AIチャットボット</span>で<br />
            商談機会を逃さない
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            24時間365日、お客様の質問に即座に対応。<br className="hidden sm:block" />
            リアルタイムな商談対応で成約率を最大化します。
          </p>
        </div>

        {/* Chatbot Demo */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className="bg-blue-500 p-4 flex items-center gap-3">
              <Bot className="w-6 h-6 text-white" />
              <div className="text-white font-medium">AIアシスタント</div>
            </div>

            {/* Chat Messages */}
            <div className="p-6 space-y-4">
              {chatMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl ${
                      msg.type === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {msg.message.split('\n').map((line, i) => (
                      <p key={i} className="mb-1 last:mb-0">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-gray-100 bg-gray-50">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="メッセージを入力..."
                  disabled
                  className="flex-1 px-4 py-2 border border-gray-200 rounded-lg bg-gray-100 text-gray-400 cursor-not-allowed"
                />
                <button 
                  disabled
                  className="p-2 bg-gray-300 text-white rounded-lg cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="relative max-w-5xl mx-auto">
          {/* Center Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-50 rounded-full opacity-50" />
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map(({ icon: Icon, title, description }, index) => (
              <div
                key={title}
                className="relative group"
              >
                <div className="bg-white rounded-full aspect-square shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center justify-center text-center">
                  <div className="bg-blue-50 p-4 rounded-full text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {description}
                  </p>
                  <div className="flex items-end gap-2 text-blue-500">
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-4 sm:p-8 text-white">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <div className="bg-white/10 p-3 sm:p-4 rounded-xl backdrop-blur-sm flex-shrink-0 mx-auto sm:mx-0">
                <Trophy className="w-8 sm:w-12 h-8 sm:h-12 text-yellow-300" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                {awards.map((award) => (
                  <div key={award.title}>
                    <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 mb-2">
                      <h3 className="text-lg sm:text-xl font-bold">{award.title}</h3>
                      <span className="text-xs sm:text-sm bg-white/20 px-2 py-1 rounded-full">
                        {award.date}
                      </span>
                    </div>
                    <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
