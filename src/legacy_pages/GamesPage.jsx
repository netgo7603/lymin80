import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import GameCard from '../components/GameCard';
import { games } from '../data/games';

const SITE_URL = 'https://www.lymin80.shop';

const GamesPage = () => {
  return (
    <>
      <Helmet>
        <title>무료 웹 게임 모음 | Lymin80 Shop - 설치 없이 바로 플레이</title>
        <meta name="description" content="설치 없이 브라우저에서 바로 즐기는 무료 웹 게임 모음. 지그재그 스네이크 게임, 신비한 타로 운세, 박테리아 워 전략 게임, 리셋 플로우 힐링 서비스를 지금 플레이하세요." />
        <link rel="canonical" href={`${SITE_URL}/games`} />
        <meta property="og:title" content="무료 웹 게임 모음 | Lymin80 Shop" />
        <meta property="og:description" content="설치 없이 브라우저에서 바로 즐기는 무료 웹 게임 모음" />
        <meta property="og:url" content={`${SITE_URL}/games`} />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="py-16 relative min-h-screen">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-white transition-colors">홈</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-300">게임</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6 font-display">무료 웹 <span className="text-neon-purple">게임</span></h1>
            <div className="w-24 h-1 bg-neon-purple mx-auto rounded-full mb-6" />
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Lymin80 Shop에서 제공하는 모든 게임은 무료이며 설치가 필요 없습니다.
              브라우저만 있으면 PC, 모바일, 태블릿 어디서든 즐길 수 있습니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
            {games.map((game) => (
              <GameCard key={game.id} {...game} />
            ))}
          </div>

          {/* Game FAQ */}
          <div className="max-w-3xl mx-auto mt-20">
            <h2 className="text-3xl font-black mb-8 font-display text-center">자주 묻는 <span className="text-neon-gold">질문</span></h2>

            <div className="space-y-6">
              {[
                {
                  q: '게임을 플레이하려면 설치가 필요한가요?',
                  a: '아니요! Lymin80 Shop의 모든 게임은 웹 기반으로 제작되어 별도의 설치 없이 브라우저에서 바로 즐길 수 있습니다. Chrome, Safari, Firefox, Edge 등 모든 최신 브라우저를 지원합니다.'
                },
                {
                  q: '모바일에서도 플레이할 수 있나요?',
                  a: '네! 모든 게임은 반응형으로 설계되어 스마트폰, 태블릿, PC 등 어떤 기기에서든 최적화된 환경으로 플레이할 수 있습니다.'
                },
                {
                  q: '게임은 정말 무료인가요?',
                  a: '네, Lymin80 Shop의 모든 게임과 서비스는 완전 무료입니다. 숨겨진 결제나 인앱 구매가 없습니다.'
                },
                {
                  q: '새로운 게임은 언제 추가되나요?',
                  a: '새로운 게임과 콘텐츠는 지속적으로 개발 및 추가되고 있습니다. 블로그를 통해 업데이트 소식을 확인하실 수 있습니다.'
                }
              ].map((faq, i) => (
                <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-lg font-bold mb-3 text-white">{faq.q}</h3>
                  <p className="text-gray-400 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GamesPage;
