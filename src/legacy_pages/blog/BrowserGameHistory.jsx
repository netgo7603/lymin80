import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

const SITE_URL = 'https://www.lymin80.shop';

const BrowserGameHistory = () => {
  return (
    <>
      <Helmet>
        <title>브라우저 게임의 역사: Flash에서 HTML5까지 | Lymin80 Shop</title>
        <meta name="description" content="Flash 기반 게임부터 현재의 HTML5, WebGL, WebAssembly까지. 브라우저 게임 기술의 발전 과정과 미래를 살펴봅니다." />
        <link rel="canonical" href={`${SITE_URL}/blog/browser-game-history`} />
        <meta property="og:title" content="브라우저 게임의 역사: Flash에서 HTML5까지" />
        <meta property="og:url" content={`${SITE_URL}/blog/browser-game-history`} />
        <meta property="og:type" content="article" />
      </Helmet>

      <article className="py-16 min-h-screen">
        <div className="container mx-auto px-6 max-w-4xl">
          <nav className="text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-white transition-colors">홈</Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="hover:text-white transition-colors">블로그</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-300">브라우저 게임의 역사</span>
          </nav>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link to="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-6">
              <ArrowLeft size={16} /> 블로그로 돌아가기
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-blue-400 text-xs font-bold uppercase tracking-wider bg-blue-400/10 px-3 py-1 rounded-full">테크</span>
              <span className="flex items-center gap-1 text-gray-500 text-sm"><Calendar size={14} /> 2026-02-08</span>
              <span className="flex items-center gap-1 text-gray-500 text-sm"><Clock size={14} /> 7분</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black mb-8 font-display leading-tight">
              브라우저 게임의 역사: <span className="text-blue-400">Flash에서 HTML5까지</span>
            </h1>

            <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-8">
              <p className="text-xl">
                브라우저 게임은 인터넷의 발전과 함께 성장해 왔습니다.
                초기의 단순한 텍스트 기반 게임에서 오늘날의 화려한 3D 게임까지,
                그 발전 과정은 웹 기술의 역사 그 자체라고 할 수 있습니다.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-4">1990년대: 인터넷의 태동과 웹 게임의 시작</h2>
              <p>
                1990년대 중반, 월드 와이드 웹(WWW)이 대중화되면서 최초의 웹 게임들이 등장했습니다.
                이 시기의 게임들은 대부분 Java 애플릿이나 단순한 HTML/JavaScript로 제작되었습니다.
                텍스트 기반 어드벤처 게임이나 간단한 퍼즐 게임이 주류를 이루었으며,
                그래픽은 매우 제한적이었지만 "브라우저에서 게임을 할 수 있다"는 사실 자체가 혁신이었습니다.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-4">2000년대: Flash의 황금기</h2>
              <p>
                2000년대는 Adobe Flash(당시 Macromedia Flash)의 전성기였습니다.
                Flash는 브라우저에서 풍부한 멀티미디어 콘텐츠를 구현할 수 있게 해주는 플러그인으로,
                웹 게임의 가능성을 크게 확장시켰습니다.
              </p>
              <p>
                Newgrounds, Miniclip, Kongregate 같은 Flash 게임 포털들이 등장하여
                수만 개의 게임을 호스팅했습니다. 이 시기에 탄생한 게임들 중에는
                이후 독립 게임으로 발전한 것들도 많습니다.
              </p>

              <div className="bg-white/5 p-6 rounded-xl border border-white/10 my-6">
                <h3 className="text-lg font-bold text-white mb-3">Flash 시대의 특징</h3>
                <ul className="list-disc list-inside space-y-2 pl-4 text-gray-400">
                  <li>벡터 그래픽 기반의 부드러운 애니메이션</li>
                  <li>ActionScript를 통한 복잡한 게임 로직 구현</li>
                  <li>SWF 파일 형태로 쉬운 배포와 공유</li>
                  <li>개인 개발자도 쉽게 게임을 제작하고 공유할 수 있는 생태계</li>
                  <li>그러나 높은 CPU 사용량과 보안 취약점이 문제</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-4">2010년대: HTML5의 부상과 Flash의 몰락</h2>
              <p>
                2010년, 스티브 잡스의 "Flash에 대한 생각(Thoughts on Flash)" 공개 서한은
                웹 게임 역사의 전환점이 되었습니다. Apple이 iOS에서 Flash를 지원하지 않겠다고 선언하면서,
                HTML5가 Flash의 대안으로 급부상했습니다.
              </p>
              <p>
                HTML5는 Canvas 요소를 통한 2D 그래픽, WebGL을 통한 3D 그래픽,
                Web Audio API를 통한 사운드 처리 등 게임 개발에 필요한 핵심 기능들을 표준으로 제공했습니다.
                별도의 플러그인 설치 없이 브라우저 자체만으로 게임을 구동할 수 있게 된 것입니다.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-4">2020년대: 현대 웹 게임의 시대</h2>
              <p>
                2020년 12월, Adobe는 공식적으로 Flash Player 지원을 종료했습니다.
                이로써 Flash의 시대는 완전히 막을 내렸고, HTML5 기반 웹 게임이 유일한 표준이 되었습니다.
              </p>
              <p>현재의 웹 게임 기술은 다음과 같은 혁신을 이루었습니다.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                {[
                  { name: 'WebGL / WebGL2', desc: 'GPU 가속을 활용한 고성능 2D/3D 렌더링. 콘솔 수준의 그래픽 구현 가능.' },
                  { name: 'WebAssembly', desc: 'C/C++/Rust 등의 언어로 작성된 코드를 브라우저에서 네이티브에 가까운 속도로 실행.' },
                  { name: 'Web Audio API', desc: '공간 음향, 실시간 오디오 처리 등 고급 사운드 기능 지원.' },
                  { name: 'WebRTC', desc: '실시간 멀티플레이어 게임을 위한 P2P 통신 기술.' },
                  { name: 'Service Workers', desc: '오프라인 게임 플레이와 PWA(Progressive Web App) 지원.' },
                  { name: 'Gamepad API', desc: '게임 컨트롤러를 브라우저에서 직접 사용할 수 있는 인터페이스.' }
                ].map((tech, i) => (
                  <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <h4 className="font-bold text-white mb-1">{tech.name}</h4>
                    <p className="text-sm text-gray-400">{tech.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-4">웹 게임의 미래</h2>
              <p>
                웹 게임의 미래는 매우 밝습니다. 클라우드 게이밍 기술의 발전으로
                고사양 게임도 브라우저에서 스트리밍 방식으로 즐길 수 있는 시대가 오고 있으며,
                WebGPU와 같은 차세대 그래픽 API는 웹에서의 그래픽 처리 능력을 한층 더 끌어올릴 것입니다.
              </p>
              <p>
                또한 WebXR API를 통한 VR/AR 게임, 머신 러닝을 활용한 적응형 AI 등
                최신 기술들이 웹 게임에 적용되면서 그 가능성은 무한히 확장되고 있습니다.
              </p>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 my-6">
                <p className="text-white font-bold mb-3">최신 웹 기술로 만든 게임 체험하기</p>
                <p className="text-gray-400 mb-4">
                  Lymin80 Shop의 모든 게임은 최신 웹 기술(React, WebGL, 최신 CSS)로 제작되었습니다.
                  현대 웹 게임의 가능성을 직접 체험해 보세요.
                </p>
                <Link to="/games" className="inline-flex px-6 py-3 bg-blue-500 text-white rounded-lg font-bold hover:opacity-90 transition-opacity">
                  게임 둘러보기
                </Link>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-4">마치며</h2>
              <p>
                브라우저 게임은 Flash의 영광과 몰락을 거쳐 HTML5라는 새로운 전성기를 맞이했습니다.
                과거에는 단순한 시간 때우기용이었던 웹 게임이
                이제는 네이티브 앱에 필적하는 품질과 경험을 제공하는 수준으로 성장했습니다.
                기술의 발전과 함께 웹 게임의 미래는 더욱 흥미진진해질 것입니다.
              </p>
            </div>
          </motion.div>
        </div>
      </article>
    </>
  );
};

export default BrowserGameHistory;
