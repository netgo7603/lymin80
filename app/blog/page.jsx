import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { FadeIn, FadeInView } from '../components/AnimatedSection';

export const metadata = {
  title: '블로그 - 웹 게임 가이드 & 팁',
  description: '웹 게임 가이드, 공략, 팁을 제공하는 블로그입니다. 초보자를 위한 완벽 가이드부터 고급 전략까지 다양한 게임 관련 콘텐츠를 확인하세요.',
  alternates: {
    canonical: 'https://www.lymin80.shop/blog',
  },
  openGraph: {
    title: '블로그 - 웹 게임 가이드 & 팁',
    description: '웹 게임 가이드, 공략, 팁을 제공하는 블로그입니다. 초보자를 위한 완벽 가이드부터 고급 전략까지 다양한 게임 관련 콘텐츠를 확인하세요.',
    url: 'https://www.lymin80.shop/blog',
    type: 'website',
  },
};

const blogPosts = [
  {
    slug: 'web-game-guide',
    title: '웹 게임의 모든 것: 초보자를 위한 완벽 가이드',
    description: '웹 게임이란 무엇인지, 장점은 무엇인지, 어떻게 시작하는지 초보자를 위해 상세하게 안내합니다.',
    date: '2026-02-15',
    readTime: '8분',
    category: '가이드',
  },
  {
    slug: 'tarot-guide',
    title: '타로 카드 입문: 아르카나의 세계로',
    description: '타로 카드의 역사부터 덱 구성, 리딩 방법까지. 타로의 신비로운 세계로 안내합니다.',
    date: '2026-02-12',
    readTime: '10분',
    category: '가이드',
  },
  {
    slug: 'casual-games-stress-relief',
    title: '스트레스 해소를 위한 캐주얼 게임 활용법',
    description: '과학적으로 검증된 게임의 스트레스 해소 효과와 건강한 게임 습관을 알아봅니다.',
    date: '2026-02-10',
    readTime: '6분',
    category: '라이프스타일',
  },
  {
    slug: 'browser-game-history',
    title: '브라우저 게임의 역사: Flash에서 HTML5까지',
    description: '1990년대 초기 웹 게임부터 현대 HTML5 게임까지, 브라우저 게임의 발전 역사를 돌아봅니다.',
    date: '2026-02-08',
    readTime: '7분',
    category: '테크',
  },
  {
    slug: 'snake-game-strategy',
    title: '스네이크 게임 고득점 전략: 프로처럼 플레이하기',
    description: '스네이크 게임에서 고득점을 달성하기 위한 핵심 전략과 실전 팁을 공개합니다.',
    date: '2026-02-05',
    readTime: '5분',
    category: '게임 팁',
  },
];

const categoryColors = {
  '가이드': 'text-blue-400 bg-blue-400/10',
  '라이프스타일': 'text-green-400 bg-green-400/10',
  '테크': 'text-purple-400 bg-purple-400/10',
  '게임 팁': 'text-yellow-400 bg-yellow-400/10',
};

export default function BlogPage() {
  return (
    <section className="py-32 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        {/* Breadcrumb */}
        <FadeIn>
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-12">
            <Link href="/" className="hover:text-white transition-colors">홈</Link>
            <span>/</span>
            <span className="text-white">블로그</span>
          </nav>
        </FadeIn>

        {/* Heading */}
        <FadeInView className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-black mb-6 font-display">
            게임 <span className="text-blue-400">블로그</span>
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            웹 게임과 관련된 유용한 가이드, 팁, 그리고 흥미로운 이야기들을 만나보세요.
          </p>
        </FadeInView>

        {/* Blog Posts */}
        <div className="space-y-6">
          {blogPosts.map((post, i) => (
            <FadeInView key={post.slug} delay={i * 0.08}>
              <Link
                href={`/blog/${post.slug}`}
                className="block bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                  <div className="flex-1">
                    <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3 ${categoryColors[post.category] || 'text-gray-400 bg-gray-400/10'}`}>
                      {post.category}
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors font-display">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed mb-3">
                      {post.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {post.readTime} 읽기
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center gap-1 text-sm text-gray-500 group-hover:text-white transition-colors">
                      읽기 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
