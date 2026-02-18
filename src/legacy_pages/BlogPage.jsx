import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const SITE_URL = 'https://www.lymin80.shop';

export const blogPosts = [
  {
    slug: 'web-game-guide',
    title: '웹 게임의 모든 것: 초보자를 위한 완벽 가이드',
    description: '웹 게임이란 무엇인지, 어떻게 시작하는지, 그리고 왜 점점 더 인기를 끌고 있는지 상세히 알아봅니다.',
    date: '2026-02-15',
    readTime: '8분',
    category: '가이드',
    color: 'neon-green'
  },
  {
    slug: 'tarot-guide',
    title: '타로 카드 입문: 아르카나의 세계로',
    description: '타로 카드의 역사부터 각 카드의 의미, 그리고 올바른 리딩 방법까지 체계적으로 알아봅니다.',
    date: '2026-02-12',
    readTime: '10분',
    category: '가이드',
    color: 'neon-purple'
  },
  {
    slug: 'casual-games-stress-relief',
    title: '스트레스 해소를 위한 캐주얼 게임 활용법',
    description: '바쁜 일상 속 짧은 시간에 즐기기 좋은 캐주얼 웹 게임의 스트레스 해소 효과와 추천 게임을 소개합니다.',
    date: '2026-02-10',
    readTime: '6분',
    category: '라이프스타일',
    color: 'neon-gold'
  },
  {
    slug: 'browser-game-history',
    title: '브라우저 게임의 역사: Flash에서 HTML5까지',
    description: 'Flash 시대부터 현재의 HTML5, WebGL까지 브라우저 게임 기술의 발전 과정을 되돌아봅니다.',
    date: '2026-02-08',
    readTime: '7분',
    category: '테크',
    color: 'blue-400'
  },
  {
    slug: 'snake-game-strategy',
    title: '스네이크 게임 고득점 전략: 프로처럼 플레이하기',
    description: '스네이크 게임에서 높은 점수를 달성하기 위한 핵심 전략과 팁을 공개합니다.',
    date: '2026-02-05',
    readTime: '5분',
    category: '게임 팁',
    color: 'neon-green'
  }
];

const BlogPage = () => {
  return (
    <>
      <Helmet>
        <title>블로그 - 웹 게임 가이드 & 팁 | Lymin80 Shop</title>
        <meta name="description" content="웹 게임, 타로, 캐주얼 게임에 대한 가이드, 팁, 리뷰를 제공하는 Lymin80 Shop 블로그. 게임 초보자부터 고수까지 유용한 정보를 만나보세요." />
        <link rel="canonical" href={`${SITE_URL}/blog`} />
        <meta property="og:title" content="블로그 - 웹 게임 가이드 & 팁 | Lymin80 Shop" />
        <meta property="og:description" content="웹 게임과 타로에 대한 유용한 가이드와 팁" />
        <meta property="og:url" content={`${SITE_URL}/blog`} />
      </Helmet>

      <section className="py-16 min-h-screen">
        <div className="container mx-auto px-6 max-w-5xl">
          <nav className="text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-white transition-colors">홈</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-300">블로그</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6 font-display">게임 <span className="text-blue-400">블로그</span></h1>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6" />
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              웹 게임, 타로, 힐링에 대한 유용한 가이드와 팁을 만나보세요.
            </p>
          </motion.div>

          <div className="space-y-8">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="block bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`text-${post.color} text-xs font-bold uppercase tracking-wider bg-white/5 px-3 py-1 rounded-full`}>
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-gray-500 text-sm">
                      <Calendar size={14} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1 text-gray-500 text-sm">
                      <Clock size={14} /> {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors font-display">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-4">{post.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm text-gray-500 group-hover:text-white transition-colors font-bold uppercase tracking-wider">
                    자세히 보기 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
