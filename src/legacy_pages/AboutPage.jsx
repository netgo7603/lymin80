import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cpu, Zap, Globe, Heart, Shield, Sparkles, Users, Code } from 'lucide-react';

const SITE_URL = 'https://www.lymin80.shop';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>소개 - Lymin80 Shop | 무료 웹 게임 포털 운영 철학</title>
        <meta name="description" content="Lymin80 Shop은 누구나 쉽게 접근할 수 있는 무료 웹 게임 포털입니다. 최신 웹 기술을 활용해 설치 없이 브라우저에서 바로 즐길 수 있는 고품질 게임을 제공합니다." />
        <link rel="canonical" href={`${SITE_URL}/about`} />
        <meta property="og:title" content="소개 - Lymin80 Shop" />
        <meta property="og:description" content="Lymin80 Shop의 운영 철학과 미션을 소개합니다." />
        <meta property="og:url" content={`${SITE_URL}/about`} />
      </Helmet>

      <section className="py-16 relative min-h-screen">
        <div className="container mx-auto px-6 max-w-5xl">
          <nav className="text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-white transition-colors">홈</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-300">소개</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6 font-display">About <span className="text-neon-gold">Us</span></h1>
            <div className="w-24 h-1 bg-neon-gold mx-auto rounded-full mb-8" />
          </motion.div>

          {/* Mission */}
          <article className="prose prose-invert max-w-none">
            <div className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 mb-12">
              <h2 className="text-3xl font-black mb-6 font-display text-white">우리의 미션</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Lymin80 Shop은 <strong className="text-white">"누구나 언제 어디서든 즐길 수 있는 게임"</strong>이라는 비전 아래 시작되었습니다.
                앱 스토어에서 게임을 다운로드하고, 업데이트를 기다리고, 저장 공간을 확보하는 번거로움 없이,
                브라우저만 열면 바로 시작할 수 있는 게임 경험을 제공합니다.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                우리는 게임이 모든 사람에게 열린 즐거움이어야 한다고 믿습니다. 고사양 PC나 최신 스마트폰이 없어도,
                인터넷 연결만 있다면 누구나 동일한 게임 경험을 누릴 수 있어야 합니다.
                이것이 바로 Lymin80 Shop이 웹 기반 게임에 집중하는 이유입니다.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                또한 우리는 게임뿐만 아니라 타로 운세나 힐링 콘텐츠 등 다양한 엔터테인먼트 서비스를 통해
                사용자들의 일상에 작은 즐거움과 위로를 더하고자 합니다.
              </p>
            </div>

            {/* Core Values */}
            <h2 className="text-3xl font-black mb-8 font-display text-center">핵심 <span className="text-neon-purple">가치</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {[
                { icon: Zap, title: '즉각적인 접근성', desc: '설치, 회원가입, 결제 없이 즉시 시작. 링크 하나로 게임을 시작할 수 있는 가장 간단한 경험을 추구합니다.' },
                { icon: Shield, title: '안전한 환경', desc: '개인정보를 수집하지 않으며, 악성 광고나 팝업 없는 깨끗한 게임 환경을 유지합니다.' },
                { icon: Code, title: '최신 기술', desc: 'React, WebGL, 최신 CSS 등 현대적인 웹 기술을 활용하여 네이티브 앱에 뒤지지 않는 성능을 구현합니다.' },
                { icon: Heart, title: '사용자 중심', desc: '수익화보다 사용자 경험을 최우선으로 합니다. 광고는 게임 플레이를 방해하지 않는 선에서만 노출됩니다.' },
                { icon: Globe, title: '크로스 플랫폼', desc: 'PC, 모바일, 태블릿 등 모든 기기에서 동일한 품질의 게임 경험을 보장합니다.' },
                { icon: Sparkles, title: '지속적인 혁신', desc: '새로운 게임과 기능을 꾸준히 개발하여 사용자에게 항상 신선한 경험을 제공합니다.' }
              ].map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="mb-4 inline-block p-3 rounded-xl bg-gradient-to-br from-neon-purple/20 to-blue-500/20">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Our Games */}
            <div className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 mb-12">
              <h2 className="text-3xl font-black mb-6 font-display text-white">제공 서비스</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-neon-green mb-3">지그재그 (Zigzag)</h3>
                  <p className="text-gray-300 leading-relaxed">
                    클래식 스네이크 게임을 현대적인 네온 비주얼로 재해석했습니다.
                    빠른 반응 속도와 전략적 사고가 요구되는 아케이드 게임으로,
                    간단한 조작법으로 누구나 쉽게 시작할 수 있지만 높은 점수를 달성하기 위해서는 숙련된 컨트롤이 필요합니다.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-neon-purple mb-3">신비한 타로 (Tarot Mystique)</h3>
                  <p className="text-gray-300 leading-relaxed">
                    전통적인 타로 카드 리딩을 디지털 환경에서 체험할 수 있는 서비스입니다.
                    메이저 아르카나와 마이너 아르카나의 의미를 현대적으로 해석하여 제공하며,
                    직관적인 인터페이스로 타로에 처음 입문하는 분들도 쉽게 이용할 수 있습니다.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-neon-gold mb-3">박테리아 워 (Bacteria War)</h3>
                  <p className="text-gray-300 leading-relaxed">
                    미시 세계를 배경으로 한 전략 생존 게임입니다.
                    플레이어는 박테리아 군단을 이끌고 페트리 접시 위에서 영역을 확장하며,
                    다양한 전략을 구사하여 상대를 제압해야 합니다.
                    간단하면서도 깊이 있는 전략 요소가 특징입니다.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-400 mb-3">리셋 플로우 (Reset Flow)</h3>
                  <p className="text-gray-300 leading-relaxed">
                    바쁜 일상 속 지친 마음을 위한 힐링 서비스입니다.
                    매일 엄선된 명언과 위로의 메시지를 제공하며,
                    차분한 비주얼과 함께 마음을 리셋하고 새로운 에너지를 충전할 수 있는 공간입니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10">
              <h2 className="text-3xl font-black mb-6 font-display text-white">기술 스택</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Lymin80 Shop은 최신 웹 기술을 적극적으로 활용하여 최고의 사용자 경험을 제공합니다.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['React 19', 'Vite', 'Tailwind CSS', 'Framer Motion', 'WebGL', 'PWA', 'SEO 최적화', '반응형 디자인'].map((tech, i) => (
                  <div key={i} className="bg-white/5 p-4 rounded-xl text-center border border-white/5">
                    <span className="text-sm font-bold text-gray-300">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
