import React from 'react';
import { ArrowUpRight, Users, LineChart, Zap, Target, MousePointerClick, Gauge, Bot, Brain, Palette } from 'lucide-react';

const projects = [
  {
    title: "AIデザイン教室 YAMMY",
    category: "オンラインセミナーLP",
    image: "/yammyai.png",
    results: [
      { icon: Brain, value: "100%", label: "AI活用率" },
      { icon: LineChart, value: "1.2倍", label: "集客数増加" },
      { icon: Zap, value: "5日間", label: "制作期間" }
    ],
    tags: ["AI Web制作", "高速開発", "広告運用"]
  }
];

export default function Portfolio() {
  return (
    <section className="py-12 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-16">
          <div className="inline-flex items-center bg-rose-50 text-rose-500 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm mb-4 sm:mb-6">
            <Target className="w-4 h-4 mr-2" />
            LP特化型の制作実績
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-rose-500">成果にこだわる</span><br />
            ハイパフォーマンスLP制作
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            お客様の目標に合わせた最適なLPを制作。<br className="hidden sm:block" />
            問合せ数や申込数の大幅な増加を実現します。
          </p>
          <div className="mt-6 inline-flex items-center bg-blue-50 text-blue-500 px-6 py-3 rounded-xl">
            <Bot className="w-5 h-5 mr-2" />
            <span className="font-medium">このLPもAI Web制作で作成しています</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Project Image - 16:9 ratio */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.title === "AIデザイン教室 YAMMY" ? (
                    <a
                      href="https://yammyai.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 sm:px-6 py-2 sm:py-3 bg-white text-black rounded-lg font-medium flex items-center gap-2 text-sm sm:text-base"
                    >
                      サイトを見る
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <button className="px-4 sm:px-6 py-2 sm:py-3 bg-white text-black rounded-lg font-medium flex items-center gap-2 text-sm sm:text-base">
                      詳細を見る
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
                {project.category === "自社LP" && (
                  <div className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    <Brain className="w-4 h-4" />
                    AI活用事例
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="p-4 sm:p-6">
                <div className="text-xs sm:text-sm text-gray-500 mb-2">{project.category}</div>
                <h3 className="text-lg sm:text-xl font-bold mb-4">{project.title}</h3>

                {/* Results */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
                  {project.results.map(({ icon: Icon, value, label }) => (
                    <div key={label} className="text-center">
                      <Icon className="w-4 sm:w-5 h-4 sm:h-5 mx-auto mb-1 sm:mb-2 text-rose-500" />
                      <div className="font-bold text-sm sm:text-base">{value}</div>
                      <div className="text-xs text-gray-500">{label}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 sm:px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-xs sm:text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}