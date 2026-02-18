import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

const SITE_URL = 'https://www.lymin80.shop';

const WebGameGuide = () => {
  return (
    <>
      <Helmet>
        <title>웹 게임의 모든 것: 초보자를 위한 완벽 가이드 | Lymin80 Shop</title>
        <meta name="description" content="웹 게임이란 무엇인지, 어떻게 시작하는지, 장점과 종류, 그리고 왜 점점 더 인기를 끌고 있는지 상세히 알아봅니다. 웹 게임 초보자를 위한 완벽 가이드." />
        <link rel="canonical" href={`${SITE_URL}/blog/web-game-guide`} />
        <meta property="og:title" content="웹 게임의 모든 것: 초보자를 위한 완벽 가이드" />
        <meta property="og:description" content="웹 게임이란 무엇인지, 어떻게 시작하는지 상세히 알아봅니다." />
        <meta property="og:url" content={`${SITE_URL}/blog/web-game-guide`} />
        <meta property="og:type" content="article" />
      </Helmet>

      <article className="py-16 min-h-screen">
        <div className="container mx-auto px-6 max-w-4xl">
          <nav className="text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-white transition-colors">홈</Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="hover:text-white transition-colors">블로그</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-300">웹 게임 가이드</span>
          </nav>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link to="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-6">
              <ArrowLeft size={16} /> 블로그로 돌아가기
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-neon-green text-xs font-bold uppercase tracking-wider bg-neon-green/10 px-3 py-1 rounded-full">가이드</span>
              <span className="flex items-center gap-1 text-gray-500 text-sm"><Calendar size={14} /> 2026-02-15</span>
              <span className="flex items-center gap-1 text-gray-500 text-sm"><Clock size={14} /> 8분</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black mb-8 font-display leading-tight">
              웹 게임의 모든 것: <span className="text-neon-green">초보자를 위한 완벽 가이드</span>
            </h1>

            <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-8">
              <p className="text-xl text-gray-300">
                웹 게임은 별도의 설치 없이 인터넷 브라우저만으로 즐길 수 있는 게임을 말합니다.
                스마트폰이든 PC든 브라우저만 있으면 언제 어디서든 바로 시작할 수 있어
                현대인의 라이프스타일에 가장 잘 맞는 게임 형태로 주목받고 있습니다.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-4">웹 게임이란?</h2>
              <p>
                웹 게임(Web Game)은 웹 브라우저를 플랫폼으로 하여 작동하는 비디오 게임입니다.
                기존의 PC 게임이나 모바일 앱 게임과 달리, 별도의 설치 과정이 필요하지 않습니다.
                URL을 입력하거나 링크를 클릭하는 것만으로 즉시 게임을 시작할 수 있습니다.
              </p>
              <p>
                과거에는 Adobe Flash를 기반으로 한 웹 게임이 주류였지만,
                Flash의 지원 종료 이후 HTML5, WebGL, WebAssembly 등의 현대적인 웹 기술이 그 자리를 대체했습니다.
                오늘날의 웹 게임은 네이티브 앱에 필적하는 그래픽과 성능을 제공할 수 있게 되었습니다.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-4">웹 게임의 장점</h2>

              <h3 className="text-xl font-bold text-white mt-8 mb-3">1. 즉각적인 접근성</h3>
              <p>
                앱 스토어에서 게임을 검색하고, 다운로드하고, 설치를 기다리는 과정이 필요 없습니다.
                링크 하나만 있으면 바로 게임을 시작할 수 있습니다.
                이는 특히 잠깐의 여유 시간을 활용하고 싶을 때 큰 장점이 됩니다.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-3">2. 기기 제약 없음</h3>
              <p>
                웹 게임은 크로스 플랫폼의 진정한 실현입니다.
                Windows, macOS, Linux, iOS, Android 등 어떤 운영체제에서든,
                그리고 PC, 스마트폰, 태블릿 등 어떤 기기에서든 동일한 게임 경험을 제공합니다.
                최신 브라우저가 설치되어 있기만 하면 됩니다.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-3">3. 저장 공간 절약</h3>
              <p>
                모바일 기기의 저장 공간은 한정되어 있습니다.
                웹 게임은 기기에 데이터를 저장하지 않으므로 저장 공간에 대한 걱정 없이
                여러 게임을 자유롭게 즐길 수 있습니다.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-3">4. 항상 최신 버전</h3>
              <p>
                앱 게임처럼 업데이트를 기다리거나 수동으로 설치할 필요가 없습니다.
                웹 게임은 서버에서 항상 최신 버전이 제공되므로,
                접속할 때마다 새로운 기능과 개선된 경험을 누릴 수 있습니다.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-3">5. 공유의 용이성</h3>
              <p>
                친구에게 게임을 추천할 때 URL 하나만 보내면 됩니다.
                복잡한 앱 설치 과정 없이 링크를 클릭하는 것만으로 바로 같은 게임을 즐길 수 있어
                소셜 네트워크를 통한 확산이 매우 쉽습니다.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-4">웹 게임의 종류</h2>
              <p>웹 게임은 매우 다양한 장르를 아우릅니다.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                {[
                  { name: '아케이드', desc: '빠른 반응속도와 간단한 조작이 특징. 스네이크, 테트리스 등' },
                  { name: '퍼즐', desc: '논리적 사고와 문제 해결 능력이 요구되는 장르' },
                  { name: '전략', desc: '자원 관리와 전술적 사고가 필요한 심층적인 게임' },
                  { name: '시뮬레이션', desc: '현실의 활동이나 상황을 가상으로 체험하는 장르' },
                  { name: 'RPG', desc: '캐릭터 성장과 스토리 진행이 핵심인 역할극 게임' },
                  { name: '캐주얼', desc: '누구나 쉽게 접근할 수 있는 가벼운 게임' }
                ].map((genre, i) => (
                  <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <h4 className="font-bold text-white mb-1">{genre.name}</h4>
                    <p className="text-sm text-gray-400">{genre.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-4">웹 게임을 시작하는 방법</h2>
              <p>웹 게임을 시작하는 것은 매우 간단합니다. 다음 단계를 따라하세요.</p>

              <ol className="list-decimal list-inside space-y-4 pl-4">
                <li>
                  <strong className="text-white">최신 브라우저 확인:</strong> Chrome, Safari, Firefox, Edge 등
                  최신 버전의 브라우저를 사용하세요. 대부분의 기기에는 이미 설치되어 있습니다.
                </li>
                <li>
                  <strong className="text-white">게임 포털 방문:</strong> Lymin80 Shop과 같은 웹 게임 포털에
                  접속하여 다양한 게임을 둘러보세요.
                </li>
                <li>
                  <strong className="text-white">게임 선택:</strong> 관심 있는 장르나 게임을 선택하고
                  "Play Now" 버튼을 클릭하세요.
                </li>
                <li>
                  <strong className="text-white">바로 플레이:</strong> 별도의 설치나 회원가입 없이
                  즉시 게임이 시작됩니다!
                </li>
              </ol>

              <h2 className="text-3xl font-bold text-white mt-12 mb-4">Lymin80 Shop의 추천 웹 게임</h2>
              <p>
                Lymin80 Shop에서는 엄선된 고품질 웹 게임을 무료로 제공하고 있습니다.
                모든 게임은 최신 웹 기술로 제작되어 부드러운 성능과 아름다운 비주얼을 자랑합니다.
              </p>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 my-6">
                <p className="text-white font-bold mb-4">지금 바로 체험해 보세요!</p>
                <div className="flex flex-wrap gap-3">
                  <a href="https://zigzag.lymin80.shop/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-neon-green/20 text-neon-green rounded-lg text-sm font-bold hover:bg-neon-green/30 transition-colors">지그재그</a>
                  <a href="https://tarot.lymin80.shop/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-neon-purple/20 text-neon-purple rounded-lg text-sm font-bold hover:bg-neon-purple/30 transition-colors">신비한 타로</a>
                  <a href="https://bacteria.lymin80.shop/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-neon-gold/20 text-neon-gold rounded-lg text-sm font-bold hover:bg-neon-gold/30 transition-colors">박테리아 워</a>
                  <a href="https://resetflow.lymin80.shop/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-400/20 text-blue-400 rounded-lg text-sm font-bold hover:bg-blue-400/30 transition-colors">리셋 플로우</a>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-4">마치며</h2>
              <p>
                웹 게임은 접근성, 편의성, 다양성 면에서 현대인의 게임 문화를 이끌어가고 있습니다.
                복잡한 설치 과정이나 고사양 기기 없이도 누구나 즐길 수 있는 웹 게임의 세계로
                지금 바로 들어와 보세요!
              </p>
            </div>
          </motion.div>
        </div>
      </article>
    </>
  );
};

export default WebGameGuide;
