import Link from 'next/link';
import { FadeInView, FadeIn } from '../components/AnimatedSection';
import { Cpu, Zap, Globe, Heart, Shield, Sparkles, Code } from 'lucide-react';
import AdUnit from '../components/AdUnit';


export const metadata = {
  title: '소개 - Lymin80 Shop | 무료 웹 게임 포털 운영 철학',
  description: 'Lymin80 Shop은 누구나 설치 없이 즐길 수 있는 무료 웹 게임 포털입니다. 접근성, 안전성, 최신 기술을 바탕으로 최고의 웹 게임 경험을 제공합니다.',
  alternates: {
    canonical: 'https://www.lymin80.shop/about',
  },
  openGraph: {
    title: '소개 - Lymin80 Shop | 무료 웹 게임 포털 운영 철학',
    description: 'Lymin80 Shop은 누구나 설치 없이 즐길 수 있는 무료 웹 게임 포털입니다.',
    url: 'https://www.lymin80.shop/about',
    type: 'website',
  },
};

const coreValues = [
  { icon: Zap, title: '즉각적인 접근성', desc: '다운로드나 설치 없이 브라우저를 열고 바로 플레이. 누구나 쉽게 접근할 수 있는 게임 환경을 제공합니다.' },
  { icon: Shield, title: '안전한 환경', desc: '개인정보 수집 없이 안전하게 즐길 수 있습니다. 광고 최소화와 쾌적한 플레이 환경을 보장합니다.' },
  { icon: Cpu, title: '최신 기술', desc: 'React 19, WebGL, Framer Motion 등 최첨단 웹 기술을 활용하여 네이티브 앱에 버금가는 성능을 구현합니다.' },
  { icon: Heart, title: '사용자 중심', desc: '게이머의 피드백을 반영하고, 재미와 몰입감을 최우선으로 생각합니다. 수익보다 경험을 중시합니다.' },
  { icon: Globe, title: '크로스 플랫폼', desc: 'PC, 태블릿, 스마트폰 등 어떤 기기에서든 동일한 품질의 게임 경험을 제공합니다.' },
  { icon: Sparkles, title: '지속적인 혁신', desc: '새로운 게임과 기능을 꾸준히 업데이트하며, 더 나은 웹 게임 경험을 위해 끊임없이 발전합니다.' },
];

const techStack = [
  'React 19',
  'Vite',
  'Tailwind CSS',
  'Framer Motion',
  'WebGL',
  'PWA',
  'SEO 최적화',
  '반응형 디자인',
];

export default function AboutPage() {
  return (
    <section className="py-32 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neon-gold to-transparent opacity-50" />
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-neon-purple/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-neon-green/20 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Breadcrumb */}
        <FadeIn>
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-12">
            <Link href="/" className="hover:text-white transition-colors">홈</Link>
            <span>/</span>
            <span className="text-white">소개</span>
          </nav>
        </FadeIn>

        {/* Mission Section */}
        <FadeInView className="text-center mb-24">
          <h1 className="text-5xl md:text-6xl font-black mb-6 font-display">
            누구나 언제 어디서든<br />
            <span className="text-neon-gold">즐길 수 있는 게임</span>
          </h1>
          <div className="w-24 h-1 bg-neon-gold mx-auto rounded-full mb-8" />
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-xl text-gray-300 leading-relaxed">
              Lymin80 Shop은 설치 없이 브라우저에서 바로 즐길 수 있는 무료 웹 게임 포털입니다.
              누구나 쉽고 빠르게 접근할 수 있는 게임 환경을 만들어, 디지털 엔터테인먼트의 장벽을 낮추고자 합니다.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              우리는 게임이 단순한 시간 소비가 아닌, 창의적인 영감과 즐거움을 주는 경험이라고 믿습니다.
              최신 웹 기술을 활용하여 높은 품질의 게임을 무료로 제공하며, 모든 사용자에게 열린 엔터테인먼트 공간을 지향합니다.
            </p>
          </div>
        </FadeInView>

        {/* Core Values */}
        <FadeInView className="mb-24">
          <h2 className="text-3xl md:text-4xl font-black mb-12 font-display text-center">
            핵심 <span className="text-neon-purple">가치</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreValues.map(({ icon: Icon, title, desc }, i) => (
              <FadeInView key={i} delay={i * 0.1} className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="mb-4 inline-block p-3 rounded-xl bg-gradient-to-br from-neon-purple/20 to-blue-500/20">
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 font-display">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </FadeInView>
            ))}
          </div>
        </FadeInView>

        {/* Services Section */}
        <FadeInView className="mb-24">
          <h2 className="text-3xl md:text-4xl font-black mb-12 font-display text-center">
            제공 <span className="text-neon-green">서비스</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeInView delay={0} className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold mb-3 font-display text-neon-green">지그재그 (Zigzag)</h3>
              <p className="text-gray-300 leading-relaxed">
                네온 빛 가득한 사이버 세계에서 펼쳐지는 초고속 스네이크 게임입니다.
                직관적인 조작과 중독성 있는 게임플레이로 짧은 시간에도 강렬한 재미를 느낄 수 있습니다.
                실시간 랭킹 시스템으로 전 세계 플레이어와 경쟁하세요.
              </p>
            </FadeInView>

            <FadeInView delay={0.1} className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold mb-3 font-display text-neon-purple">신비한 타로 (Tarot Mystique)</h3>
              <p className="text-gray-300 leading-relaxed">
                고대 아르카나의 지혜를 현대적인 디지털 감성으로 재해석한 타로 리딩 서비스입니다.
                아름다운 카드 애니메이션과 섬세한 해석으로 당신의 운명을 탐구하는 영적인 여정을 경험하세요.
              </p>
            </FadeInView>

            <FadeInView delay={0.2} className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold mb-3 font-display text-neon-gold">박테리아 워 (Bacteria War)</h3>
              <p className="text-gray-300 leading-relaxed">
                현미경 속 미시 세계에서 벌어지는 거대한 전략 전쟁! 바이러스 군단을 지휘하여 페트리 접시를 정복하세요.
                독특한 세계관과 깊이 있는 전략 시스템으로 몰입감 넘치는 생존 전략 게임을 즐길 수 있습니다.
              </p>
            </FadeInView>

            <FadeInView delay={0.3} className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold mb-3 font-display text-blue-400">리셋 플로우 (Reset Flow)</h3>
              <p className="text-gray-300 leading-relaxed">
                지친 마음을 씻어내고 새로운 에너지를 채우는 힐링 공간입니다.
                매일 전달되는 위로와 공감의 메시지로 일상을 리셋하고, 마음의 평화를 찾아보세요.
                부드러운 인터랙션과 감성적인 디자인이 당신의 하루를 따뜻하게 감싸줍니다.
              </p>
            </FadeInView>
          </div>
        </FadeInView>

        {/* Tech Stack Section */}
        <FadeInView>
          <h2 className="text-3xl md:text-4xl font-black mb-12 font-display text-center">
            기술 <span className="text-blue-400">스택</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techStack.map((tech, i) => (
              <FadeInView key={i} delay={i * 0.05} className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center hover:bg-white/10 transition-colors">
                <div className="mb-2 inline-block p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-neon-purple/20">
                  <Code size={20} className="text-white" />
                </div>
                <p className="text-white font-bold font-display text-sm">{tech}</p>
              </FadeInView>
            ))}
          </div>
        </FadeInView>

        {/* AdSense Unit */}
        <div className="mt-24">
          <AdUnit
            slotId="5712499147"
            className="w-full text-center"
            style={{ minHeight: '100px' }}
          />
        </div>
      </div>

    </section>
  );
}
