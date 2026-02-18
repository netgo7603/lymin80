'use client';

import Link from 'next/link';
import { ArrowRight, Cpu, Zap, Globe, Heart } from 'lucide-react';
import HeroSection from './components/HeroSection';
import GameCard from './components/GameCard';
import { FadeInView } from './components/AnimatedSection';
import { games } from './data/games';
import AdUnit from './components/AdUnit';
import { useLanguage } from './context/LanguageContext';


export default function HomePage() {
  const { dict, language } = useLanguage();

  // 게임 데이터에 다국어 설명 적용
  const translatedGames = games.map(game => {
    // game.id와 일치하는 키를 dict.games.items에서 찾음
    // 예: game.id가 'zigzag'이면 dict.games.items.zigzag 참조
    // 일치하는 키가 없으면 원래 데이터 사용
    const trans = dict.games.items[game.id] || {};
    return {
      ...game,
      title: trans.name || game.title,
      description: trans.desc || game.description
    };
  });

  return (
    <>
      <HeroSection />

      {/* Games Section */}
      <section id="games" className="py-32 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-50" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <FadeInView className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 font-display">{dict.games.title} <span className="text-neon-purple">{dict.games.subtitle}</span></h2>
            <div className="w-24 h-1 bg-neon-purple mx-auto rounded-full mb-6" />
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">{dict.games.desc}</p>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {translatedGames.map((game) => (
              <GameCard key={game.id} {...game} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/games" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-bold uppercase tracking-wider">
              {dict.games.viewAll} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* AdSense Unit */}
      <div className="container mx-auto px-6 max-w-7xl mb-24">
        <AdUnit
          slotId="5712499147"
          className="w-full text-center"
          style={{ minHeight: '100px' }}
        />
      </div>

      {/* About Section */}

      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-neon-purple/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-neon-green/20 rounded-full blur-[100px]" />

        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <FadeInView className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 font-display">{dict.about.title} <span className="text-neon-gold">{dict.about.subtitle}</span></h2>
            <div className="w-24 h-1 bg-neon-gold mx-auto rounded-full mb-8" />
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {dict.about.desc}
            </p>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: dict.about.features.instant.title, desc: dict.about.features.instant.desc },
              { icon: Cpu, title: dict.about.features.tech.title, desc: dict.about.features.tech.desc },
              { icon: Globe, title: dict.about.features.access.title, desc: dict.about.features.access.desc },
              { icon: Heart, title: dict.about.features.passion.title, desc: dict.about.features.passion.desc },
            ].map(({ icon: Icon, title, desc }, i) => (
              <FadeInView key={i} delay={i * 0.1} className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="mb-4 inline-block p-3 rounded-xl bg-gradient-to-br from-neon-purple/20 to-blue-500/20">
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 font-display">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* AdSense Unit */}
      <div className="container mx-auto px-6 max-w-7xl mb-24">
        <AdUnit
          slotId="5712499147"
          className="w-full text-center"
          style={{ minHeight: '100px' }}
        />
      </div>

      {/* Blog Preview */}
      <section className="py-24 relative">

        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <FadeInView className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 font-display">{dict.blog.title} <span className="text-blue-400">{dict.blog.subtitle}</span></h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6" />
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">{dict.blog.desc}</p>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: '웹 게임의 모든 것: 초보자를 위한 완벽 가이드', titleEn: 'Web Games 101: A Complete Guide for Beginners', desc: '웹 게임이란 무엇인지, 어떻게 시작하는지 알아봅니다.', descEn: 'Learn what web games are and how to get started.', slug: 'web-game-guide' },
              { title: '타로 카드 입문: 아르카나의 세계로', titleEn: 'Intro to Tarot: Into the World of Arcana', desc: '타로 카드의 역사부터 각 카드의 의미, 리딩 방법까지.', descEn: 'From the history of tarot to the meaning of each card and how to read them.', slug: 'tarot-guide' },
              { title: '스트레스 해소를 위한 캐주얼 게임 활용법', titleEn: 'How to Use Casual Games for Stress Relief', desc: '짧은 시간에 즐기기 좋은 캐주얼 웹 게임을 추천합니다.', descEn: 'We recommend casual web games that are great for short breaks.', slug: 'casual-games-stress-relief' },
            ].map((post, i) => (
              <FadeInView key={i} delay={i * 0.1}>
                <Link href={`/blog/${post.slug}`} className="block bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 h-full">
                  <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">Guide</span>
                  <h3 className="text-lg font-bold mt-2 mb-3 text-white font-display">
                    {language === 'ko' ? post.title : post.titleEn}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {language === 'ko' ? post.desc : post.descEn}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-4 text-sm text-gray-500 hover:text-white transition-colors">
                    {dict.blog.readMore} <ArrowRight size={14} />
                  </span>
                </Link>
              </FadeInView>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-bold uppercase tracking-wider">
              {dict.blog.viewAll} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
