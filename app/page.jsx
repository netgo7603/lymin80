import Link from 'next/link';
import { ArrowRight, Cpu, Zap, Globe, Heart } from 'lucide-react';
import HeroSection from './components/HeroSection';
import GameCard from './components/GameCard';
import { FadeInView } from './components/AnimatedSection';
import { games } from './data/games';
import AdUnit from './components/AdUnit';


export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Games Section */}
      <section id="games" className="py-32 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-50" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <FadeInView className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 font-display">추천 <span className="text-neon-purple">게임</span></h2>
            <div className="w-24 h-1 bg-neon-purple mx-auto rounded-full mb-6" />
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">엄선된 최고의 웹 게임들을 만나보세요.</p>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {games.map((game) => (
              <GameCard key={game.id} {...game} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/games" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-bold uppercase tracking-wider">
              모든 게임 보기 <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* AdSense Unit */}
      <div className="container mx-auto px-6 max-w-7xl mb-24">
        <AdUnit
          slotId="REPLACE_WITH_SLOT_ID_1"
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
            <h2 className="text-4xl md:text-5xl font-black mb-4 font-display">사이트 <span className="text-neon-gold">소개</span></h2>
            <div className="w-24 h-1 bg-neon-gold mx-auto rounded-full mb-8" />
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              웹 게임의 미래를 만들어갑니다. 빠르고, 몰입감 넘치며, 브라우저에서 바로 즐길 수 있습니다.
            </p>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: '즉시 실행', desc: '다운로드나 설치가 필요 없습니다. 최적화된 웹 엔진으로 바로 액션에 뛰어드세요.' },
              { icon: Cpu, title: '최첨단 기술', desc: 'React, WebGL, 최신 CSS 등 최신 웹 기술로 구동되는 부드러운 성능.' },
              { icon: Globe, title: '어디서나 접속', desc: '모든 기기에서 끊김 없이 플레이하세요. 데스크탑부터 모바일까지.' },
              { icon: Heart, title: '열정 중심', desc: '게이머가 게이머를 위해 만든 경험. 수익화보다 재미에 집중합니다.' },
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
          slotId="REPLACE_WITH_SLOT_ID_2"
          className="w-full text-center"
          style={{ minHeight: '100px' }}
        />
      </div>

      {/* Blog Preview */}
      <section className="py-24 relative">

        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <FadeInView className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 font-display">게임 <span className="text-blue-400">가이드</span></h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6" />
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">웹 게임과 타로에 대한 유용한 가이드와 팁을 확인하세요.</p>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: '웹 게임의 모든 것: 초보자를 위한 완벽 가이드', desc: '웹 게임이란 무엇인지, 어떻게 시작하는지 알아봅니다.', slug: 'web-game-guide' },
              { title: '타로 카드 입문: 아르카나의 세계로', desc: '타로 카드의 역사부터 각 카드의 의미, 리딩 방법까지.', slug: 'tarot-guide' },
              { title: '스트레스 해소를 위한 캐주얼 게임 활용법', desc: '짧은 시간에 즐기기 좋은 캐주얼 웹 게임을 추천합니다.', slug: 'casual-games-stress-relief' },
            ].map((post, i) => (
              <FadeInView key={i} delay={i * 0.1}>
                <Link href={`/blog/${post.slug}`} className="block bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 h-full">
                  <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">Guide</span>
                  <h3 className="text-lg font-bold mt-2 mb-3 text-white font-display">{post.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{post.desc}</p>
                  <span className="inline-flex items-center gap-1 mt-4 text-sm text-gray-500 hover:text-white transition-colors">
                    자세히 보기 <ArrowRight size={14} />
                  </span>
                </Link>
              </FadeInView>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-bold uppercase tracking-wider">
              모든 글 보기 <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
