import Link from 'next/link';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { FadeIn, FadeInView } from '../../components/AnimatedSection';

export const metadata = {
  title: '웹 게임의 모든 것: 초보자를 위한 완벽 가이드',
  description: '웹 게임이란 무엇인지, 브라우저에서 즐길 수 있는 게임의 장점과 종류, 시작하는 방법까지 초보자를 위해 상세하게 안내하는 완벽 가이드입니다. 설치 없이 바로 플레이할 수 있는 다양한 웹 게임을 만나보세요.',
  alternates: {
    canonical: 'https://www.lymin80.shop/blog/web-game-guide',
  },
  openGraph: {
    title: '웹 게임의 모든 것: 초보자를 위한 완벽 가이드',
    description: '웹 게임이란 무엇인지, 브라우저에서 즐길 수 있는 게임의 장점과 종류, 시작하는 방법까지 초보자를 위해 상세하게 안내하는 완벽 가이드입니다.',
    url: 'https://www.lymin80.shop/blog/web-game-guide',
    type: 'article',
  },
};

export default function WebGameGuidePage() {
  return (
    <section className="py-32 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        {/* Breadcrumb */}
        <FadeIn>
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">홈</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">블로그</Link>
            <span>/</span>
            <span className="text-white">웹 게임 가이드</span>
          </nav>
        </FadeIn>

        {/* Article Header */}
        <FadeIn>
          <article>
            <div className="mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full text-blue-400 bg-blue-400/10 mb-4">
                가이드
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-6 font-display leading-tight">
                웹 게임의 모든 것: 초보자를 위한 완벽 가이드
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar size={16} />
                  2026-02-15
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={16} />
                  8분 읽기
                </span>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                웹 게임은 별도의 설치 없이 웹 브라우저에서 바로 즐길 수 있는 게임을 말합니다. 과거 Flash 기반 게임에서 시작해 현재는 HTML5, WebGL, WebAssembly 등 최신 웹 기술을 활용하여 고품질의 게임 경험을 제공하고 있습니다. 이 가이드에서는 웹 게임의 정의부터 장점, 종류, 시작 방법까지 모든 것을 안내합니다.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-4">웹 게임이란?</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                웹 게임(Web Game)은 웹 브라우저를 플랫폼으로 사용하는 비디오 게임입니다. 사용자는 별도의 프로그램을 다운로드하거나 설치할 필요 없이, URL에 접속하는 것만으로 게임을 즐길 수 있습니다. 최신 웹 기술의 발전으로 인해 과거에는 네이티브 앱에서만 가능했던 복잡한 그래픽과 게임플레이도 브라우저에서 구현할 수 있게 되었습니다.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-4">웹 게임의 5가지 장점</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  { title: '즉각적 접근성', desc: 'URL을 클릭하면 바로 게임이 시작됩니다. 다운로드 대기 시간이나 복잡한 설치 과정이 전혀 없습니다.' },
                  { title: '기기 제약 없음', desc: '데스크탑, 노트북, 태블릿, 스마트폰 등 브라우저가 있는 모든 기기에서 동일한 게임을 즐길 수 있습니다.' },
                  { title: '저장 공간 절약', desc: '게임이 서버에서 실행되므로 기기의 저장 공간을 차지하지 않습니다. 용량 걱정 없이 다양한 게임을 즐겨보세요.' },
                  { title: '항상 최신 버전', desc: '업데이트가 서버에서 자동으로 이루어지므로 항상 최신 버전의 게임을 플레이할 수 있습니다.' },
                  { title: '공유 용이성', desc: 'URL 하나만 공유하면 누구든지 바로 게임을 시작할 수 있습니다. 친구에게 추천하기가 매우 간편합니다.' },
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 p-5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-bold text-white mt-0 mb-3">{item.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-4">웹 게임의 주요 장르</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                웹 게임은 다양한 장르를 아우르며, 각 장르마다 고유한 매력과 재미를 제공합니다.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {[
                  { title: '퍼즐 게임', desc: '논리적 사고와 문제 해결 능력을 요구하는 게임. 두뇌 훈련에도 효과적입니다.' },
                  { title: '아케이드 게임', desc: '빠른 반사 신경과 정확한 조작이 필요한 클래식 장르. 간단하지만 중독성 있는 게임플레이가 특징입니다.' },
                  { title: '전략 게임', desc: '자원 관리, 전술 수립 등 전략적 사고를 요구하는 게임입니다.' },
                  { title: '카드 게임', desc: '타로, 솔리테어 등 카드를 활용한 다양한 게임을 포함합니다.' },
                  { title: '시뮬레이션', desc: '현실의 다양한 상황을 가상으로 체험할 수 있는 게임입니다.' },
                  { title: '캐주얼 게임', desc: '짧은 시간에 가볍게 즐길 수 있어 누구나 쉽게 접근할 수 있습니다.' },
                ].map((genre, i) => (
                  <div key={i} className="bg-white/5 p-5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-bold text-white mt-0 mb-3">{genre.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{genre.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-4">웹 게임 시작하기: 4단계 가이드</h2>
              <div className="space-y-4 mb-8">
                {[
                  { step: '1', title: '브라우저 확인', desc: '최신 버전의 Chrome, Firefox, Safari, Edge 등을 사용하세요. 최신 브라우저일수록 더 나은 게임 경험을 제공합니다.' },
                  { step: '2', title: '게임 사이트 방문', desc: '신뢰할 수 있는 웹 게임 사이트를 방문합니다. lymin80.shop에서 엄선된 고품질 웹 게임을 만나보세요.' },
                  { step: '3', title: '게임 선택', desc: '관심 있는 장르나 추천 게임 중에서 마음에 드는 게임을 선택합니다.' },
                  { step: '4', title: '바로 플레이', desc: '클릭 한 번으로 게임이 시작됩니다. 별도의 회원가입이나 설치 과정이 필요하지 않습니다.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 bg-white/5 p-5 rounded-xl border border-white/10">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mt-0 mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-4">추천 웹 게임</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                지금 바로 즐길 수 있는 인기 웹 게임들을 소개합니다. 각 게임은 브라우저에서 무료로 플레이할 수 있습니다.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { title: '지그재그', desc: '빠른 반사 신경이 필요한 중독성 있는 아케이드 게임', url: 'https://zigzag.lymin80.shop' },
                  { title: '신비한 타로', desc: '아름다운 카드 아트와 함께하는 타로 리딩 체험', url: 'https://tarot.lymin80.shop' },
                  { title: '박테리아 워', desc: '전략적 사고가 필요한 영역 확장 전략 게임', url: 'https://bacteria.lymin80.shop' },
                  { title: '리셋 플로우', desc: '마음을 정리하는 힐링 인터랙티브 경험', url: 'https://resetflow.lymin80.shop' },
                  { title: '익스플로디', desc: '화려한 이펙트와 함께 블록을 터뜨리는 짜릿한 퍼즐 게임', url: 'https://explodi.lymin80.shop' },
                ].map((game, i) => (
                  <a
                    key={i}
                    href={game.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white/5 p-5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold text-white mt-0 mb-2">{game.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{game.desc}</p>
                    <span className="text-blue-400 text-sm mt-2 inline-block">플레이하기 →</span>
                  </a>
                ))}
              </div>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mt-12">
                <p className="text-gray-300 leading-relaxed">
                  웹 게임은 누구나 쉽게 접근할 수 있는 최고의 엔터테인먼트입니다. 복잡한 설치 과정 없이, 브라우저만 있으면 언제 어디서든 다양한 게임을 즐길 수 있습니다. 지금 바로 <Link href="/games" className="text-blue-400 hover:text-blue-300 underline">게임 목록</Link>을 확인하고 새로운 웹 게임의 세계에 빠져보세요.
                </p>
              </div>
            </div>
          </article>
        </FadeIn>

        {/* Back to Blog */}
        <FadeInView className="mt-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-bold"
          >
            <ArrowLeft size={18} />
            블로그로 돌아가기
          </Link>
        </FadeInView>
      </div>
    </section>
  );
}
