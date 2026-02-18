import Link from 'next/link';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { FadeIn, FadeInView } from '../../components/AnimatedSection';

export const metadata = {
  title: '브라우저 게임의 역사: Flash에서 HTML5까지',
  description: '1990년대 초기 웹 게임부터 Flash 황금기, HTML5의 부상, 그리고 WebGL과 WebAssembly로 대표되는 현대 브라우저 게임까지. 브라우저 게임 30년의 발전 역사를 돌아봅니다.',
  alternates: {
    canonical: 'https://www.lymin80.shop/blog/browser-game-history',
  },
  openGraph: {
    title: '브라우저 게임의 역사: Flash에서 HTML5까지',
    description: '1990년대부터 현재까지, 브라우저 게임 30년의 발전 역사를 돌아봅니다.',
    url: 'https://www.lymin80.shop/blog/browser-game-history',
    type: 'article',
  },
};

export default function BrowserGameHistoryPage() {
  return (
    <section className="py-32 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        {/* Breadcrumb */}
        <FadeIn>
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">홈</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">블로그</Link>
            <span>/</span>
            <span className="text-white">브라우저 게임의 역사</span>
          </nav>
        </FadeIn>

        {/* Article */}
        <FadeIn>
          <article>
            <div className="mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full text-purple-400 bg-purple-400/10 mb-4">
                테크
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-6 font-display leading-tight">
                브라우저 게임의 역사: Flash에서 HTML5까지
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar size={16} />
                  2026-02-08
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={16} />
                  7분 읽기
                </span>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                브라우저 게임은 웹의 탄생과 함께 시작되어 30년이 넘는 역사를 가지고 있습니다. 단순한 텍스트 기반 게임에서 시작해, Flash의 황금기를 거쳐, 현재의 HTML5와 WebGL 시대에 이르기까지, 그 발전 과정은 웹 기술의 진화 그 자체입니다.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-4">1990년대: 웹 게임의 태동</h2>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-6">
                <p className="text-gray-300 leading-relaxed mb-4">
                  월드 와이드 웹이 대중화되기 시작한 1990년대 초반, 최초의 웹 게임들이 등장했습니다. 초기에는 HTML과 JavaScript만으로 만든 매우 간단한 게임이 전부였습니다. 텍스트 기반 어드벤처 게임이나 간단한 퍼즐이 주류를 이루었습니다.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  1995년 Sun Microsystems가 Java를 발표하면서 <strong className="text-white">Java 애플릿(Applet)</strong>이 등장했습니다. 이를 통해 브라우저에서 더 복잡한 그래픽과 인터랙션이 가능해졌습니다. Java 애플릿은 최초로 브라우저에서 실시간 멀티플레이어 게임을 가능하게 했으며, 체스, 포커 등의 온라인 게임이 인기를 끌었습니다.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-4">2000년대: Flash의 황금기</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                2000년대는 명실상부한 <strong className="text-white">Flash 게임의 황금기</strong>였습니다. Macromedia(이후 Adobe)의 Flash Player는 브라우저 게임의 판도를 완전히 바꿔놓았습니다. Flash는 벡터 그래픽, 애니메이션, 사운드를 손쉽게 다룰 수 있었으며, ActionScript를 통해 복잡한 게임 로직도 구현할 수 있었습니다.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mt-0 mb-3">Newgrounds</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    1999년에 설립된 Newgrounds는 Flash 게임과 애니메이션의 성지였습니다. 수많은 인디 개발자들이 이 플랫폼을 통해 데뷔했으며, Alien Hominid, Castle Crashers 등 상업적 성공을 거둔 게임들도 여기서 시작되었습니다.
                  </p>
                </div>
                <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mt-0 mb-3">Miniclip</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    2001년에 런칭한 Miniclip은 가장 성공적인 Flash 게임 포털 중 하나가 되었습니다. 8 Ball Pool, Agar.io 등 수많은 히트작을 보유했으며, 전성기에는 월간 수천만 명의 방문자를 기록했습니다.
                  </p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                이 시기에 등장한 유명 Flash 게임들은 하나의 문화 현상이었습니다. 라인 라이더(Line Rider), 인터랙티브 버디(Interactive Buddy), 타워 디펜스 게임들, 그리고 수많은 드레스업 게임과 탈출 게임이 전 세계 인터넷 사용자들의 시간을 사로잡았습니다.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-4">2010년대: HTML5의 부상</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                2010년, <strong className="text-white">스티브 잡스의 공개 서한 &quot;Thoughts on Flash&quot;</strong>는 웹 게임 역사의 분기점이 되었습니다. 잡스는 Flash가 보안 취약점이 많고, 배터리 소모가 심하며, 모바일에 적합하지 않다고 주장하며 iPhone과 iPad에서 Flash를 지원하지 않겠다고 선언했습니다.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                이 결정은 HTML5의 부상을 가속화했습니다. HTML5는 Canvas API를 통해 2D 그래픽을, WebGL을 통해 3D 그래픽을 지원했으며, Web Audio API로 풍부한 사운드도 구현할 수 있게 되었습니다. 플러그인 없이 브라우저 자체만으로 고품질 게임이 가능해진 것입니다.
              </p>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-6">
                <h3 className="text-xl font-bold text-white mt-0 mb-3">주요 이정표</h3>
                <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">
                  <li>2010년 - 스티브 잡스의 &quot;Thoughts on Flash&quot; 공개 서한</li>
                  <li>2012년 - HTML5 표준의 주요 기능 확정</li>
                  <li>2014년 - HTML5 공식 권고안(W3C Recommendation) 발표</li>
                  <li>2017년 - Adobe, 2020년 말 Flash Player 지원 종료 발표</li>
                  <li>2020년 12월 31일 - Flash Player 공식 지원 종료</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-4">2020년대: 현대 브라우저 게임</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                현재 브라우저 게임은 과거와는 비교할 수 없는 수준에 도달했습니다. 다양한 최신 웹 기술들이 이를 가능하게 하고 있습니다.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {[
                  { title: 'WebGL', desc: '하드웨어 가속 3D 그래픽을 브라우저에서 구현합니다. 콘솔 수준의 그래픽 품질도 가능합니다.' },
                  { title: 'WebAssembly', desc: 'C/C++, Rust 등으로 작성된 코드를 네이티브에 가까운 속도로 실행합니다. 복잡한 물리 연산도 원활하게 처리됩니다.' },
                  { title: 'Web Audio API', desc: '공간 오디오, 실시간 이펙트 등 고급 오디오 기능을 제공하여 몰입감 있는 사운드를 구현합니다.' },
                  { title: 'WebRTC', desc: '실시간 P2P 통신을 지원하여 서버 없이도 멀티플레이어 게임이 가능합니다.' },
                  { title: 'Service Workers', desc: '오프라인 캐싱을 통해 인터넷 연결 없이도 게임을 즐길 수 있게 합니다.' },
                  { title: 'Gamepad API', desc: '게임 컨트롤러를 브라우저에서 직접 사용할 수 있어, 콘솔과 유사한 게임 경험을 제공합니다.' },
                ].map((tech, i) => (
                  <div key={i} className="bg-white/5 p-5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-bold text-white mt-0 mb-3">{tech.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{tech.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-4">미래: 다음 세대의 웹 게임</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                브라우저 게임의 미래는 더욱 밝습니다. 현재 개발 중이거나 초기 단계에 있는 기술들이 새로운 가능성을 열고 있습니다.
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mt-0 mb-3">WebGPU</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    WebGL의 후속 기술로, Vulkan, Metal, Direct3D 12를 기반으로 한 차세대 그래픽 API입니다. 더 효율적인 GPU 활용과 컴퓨트 셰이더 지원으로 브라우저에서 AAA급 그래픽이 가능해질 전망입니다.
                  </p>
                </div>
                <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mt-0 mb-3">WebXR</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    VR(가상현실)과 AR(증강현실)을 브라우저에서 구현하는 표준입니다. 별도의 앱 설치 없이 URL만으로 몰입형 XR 경험을 제공할 수 있어, 게임의 새로운 패러다임을 열 것으로 기대됩니다.
                  </p>
                </div>
                <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mt-0 mb-3">클라우드 게이밍</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    서버에서 게임을 실행하고 영상을 스트리밍하는 클라우드 게이밍은 브라우저를 최종 게임 플랫폼으로 만들 수 있습니다. 기기 성능에 관계없이 고사양 게임을 브라우저에서 즐길 수 있는 시대가 다가오고 있습니다.
                  </p>
                </div>
              </div>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mt-12">
                <p className="text-gray-300 leading-relaxed">
                  Flash에서 HTML5로, 그리고 WebGL과 WebAssembly를 거쳐 WebGPU로. 브라우저 게임은 끊임없이 진화하고 있습니다. 과거의 제약들은 하나씩 사라지고 있으며, 브라우저는 점점 더 강력한 게임 플랫폼으로 성장하고 있습니다. <Link href="/games" className="text-purple-400 hover:text-purple-300 underline">최신 웹 게임들</Link>을 직접 체험해보며, 이 놀라운 발전을 느껴보세요.
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
