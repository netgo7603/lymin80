import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Gamepad2, Share2, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import GameCard from '../components/GameCard';
import About from '../components/About';
import ShareModal from '../components/ShareModal';
import { games } from '../data/games';

const SITE_URL = 'https://www.lymin80.shop';

const HomePage = () => {
  const [isShareOpen, setIsShareOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Lymin80 Shop | 무료 웹 게임 & 운세 포털 - 타로, 미니게임, 힐링</title>
        <meta name="description" content="무료 웹 게임, 타로 운세, 미니게임을 한곳에서! 설치 없이 즐기는 몰입감 넘치는 아케이드와 힐링 타임. 지그재그, 박테리아워, 리셋플로우를 지금 바로 플레이하세요." />
        <meta name="keywords" content="무료게임, 웹게임, 타로, 운세, 미니게임, 아케이드, 스네이크게임, 심심풀이, 킬링타임, 온라인게임, 리셋플로우, 명언, 힐링서비스, 박테리아워, 지그재그" />
        <link rel="canonical" href={`${SITE_URL}/`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:title" content="Lymin80 Shop | 무료 웹 게임 & 운세 포털" />
        <meta property="og:description" content="설치 없는 무료 웹 게임과 신비로운 타로 운세. 매일 새로운 즐거움을 발견하세요." />
        <meta property="og:image" content={`${SITE_URL}/og_image.png`} />
        <meta property="og:locale" content="ko_KR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lymin80 Shop | 무료 웹 게임 & 운세 포털" />
        <meta name="twitter:image" content={`${SITE_URL}/og_image.png`} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-20">
        <div className="absolute inset-0 bg-[url('/zigzag.png')] bg-cover bg-center opacity-10 blur-sm mask-gradient animate-pulse-slow" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/90 to-dark-bg" />

        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px] pointer-events-none hidden md:block"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-green/20 rounded-full blur-[120px] pointer-events-none hidden md:block"
        />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 inline-block p-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_50px_rgba(255,255,255,0.1)]"
          >
            <Gamepad2 size={64} className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-9xl font-black mb-8 tracking-tighter"
          >
            LYMIN80 <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green via-white to-neon-purple drop-shadow-[0_0_30px_rgba(57,255,20,0.6)]">SHOP</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-3xl text-gray-300 max-w-4xl mx-auto font-light mb-12 px-4 leading-relaxed"
          >
            <span className="md:block">매일매일 새로운 즐거움이 가득한 곳.</span>
            <span className="md:block mt-2">신비로운 타로 운세부터 네온 빛 가득한 아케이드 게임까지.</span>
          </motion.p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <motion.a
              href="#games"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="group relative inline-flex items-center justify-center py-5 px-12 rounded-full bg-white text-dark-bg font-bold text-xl uppercase tracking-widest overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(57,255,20,0.6)]"
            >
              <span className="relative z-10 group-hover:text-black transition-colors">지금 시작하기</span>
              <div className="absolute inset-0 bg-neon-green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>

            <motion.button
              onClick={() => setIsShareOpen(true)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="inline-flex items-center justify-center py-5 px-8 rounded-full bg-white/5 text-white font-bold text-lg uppercase tracking-widest border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
            >
              <Share2 size={24} />
            </motion.button>
          </div>
        </div>

        <ShareModal
          isOpen={isShareOpen}
          onClose={() => setIsShareOpen(false)}
          title="Lymin80 Shop | Premium Web Games Portal"
          url={typeof window !== 'undefined' ? window.location.href : SITE_URL}
          color="purple"
        />
      </section>

      {/* Games Section */}
      <section id="games" className="py-32 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-50" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 font-display">추천 <span className="text-neon-purple">게임</span></h2>
            <div className="w-24 h-1 bg-neon-purple mx-auto rounded-full mb-6" />
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              엄선된 최고의 웹 게임들을 만나보세요.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {games.map((game) => (
              <GameCard key={game.id} {...game} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/games" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-bold uppercase tracking-wider">
              모든 게임 보기 <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <About />

      {/* Blog Preview Section */}
      <section className="py-24 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4 font-display">게임 <span className="text-blue-400">가이드</span></h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6" />
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              웹 게임과 타로에 대한 유용한 가이드와 팁을 확인하세요.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '웹 게임의 모든 것: 초보자를 위한 완벽 가이드',
                desc: '웹 게임이란 무엇인지, 어떻게 시작하는지, 그리고 왜 점점 더 인기를 끌고 있는지 알아봅니다.',
                slug: 'web-game-guide',
                color: 'neon-green'
              },
              {
                title: '타로 카드 입문: 아르카나의 세계로',
                desc: '타로 카드의 역사부터 각 카드의 의미, 그리고 올바른 리딩 방법까지 알아봅니다.',
                slug: 'tarot-guide',
                color: 'neon-purple'
              },
              {
                title: '스트레스 해소를 위한 캐주얼 게임 TOP 5',
                desc: '바쁜 일상 속 짧은 시간에 즐기기 좋은 캐주얼 웹 게임을 추천합니다.',
                slug: 'casual-games-stress-relief',
                color: 'neon-gold'
              }
            ].map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="block bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 h-full"
                >
                  <span className={`text-${post.color} text-xs font-bold uppercase tracking-wider`}>Guide</span>
                  <h3 className="text-lg font-bold mt-2 mb-3 text-white font-display">{post.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{post.desc}</p>
                  <span className="inline-flex items-center gap-1 mt-4 text-sm text-gray-500 hover:text-white transition-colors">
                    자세히 보기 <ArrowRight size={14} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-bold uppercase tracking-wider">
              모든 글 보기 <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
