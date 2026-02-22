import Link from 'next/link';
import GameCard from '../components/GameCard';
import { FadeInView, FadeIn } from '../components/AnimatedSection';
import { games } from '../data/games';
import AdUnit from '../components/AdUnit';


export const metadata = {
  title: '무료 웹 게임 모음 - 설치 없이 바로 플레이',
  description: '설치 없이 브라우저에서 바로 즐길 수 있는 무료 웹 게임 모음. 지그재그, 신비한 타로, 박테리아 워, 리셋 플로우 등 다양한 장르의 게임을 무료로 플레이하세요.',
  alternates: {
    canonical: 'https://www.lymin80.shop/games',
  },
  openGraph: {
    title: '무료 웹 게임 모음 - 설치 없이 바로 플레이',
    description: '설치 없이 브라우저에서 바로 즐길 수 있는 무료 웹 게임 모음. 다양한 장르의 게임을 무료로 플레이하세요.',
    url: 'https://www.lymin80.shop/games',
    type: 'website',
  },
};

const faqs = [
  {
    question: '게임을 플레이하려면 별도의 설치가 필요한가요?',
    answer: '아니요, 모든 게임은 웹 브라우저에서 바로 플레이할 수 있습니다. 별도의 다운로드나 설치 과정이 전혀 필요하지 않습니다.',
  },
  {
    question: '모바일에서도 게임을 할 수 있나요?',
    answer: '네, 모든 게임은 반응형으로 설계되어 데스크탑, 태블릿, 모바일 등 어떤 기기에서든 최적화된 환경으로 플레이할 수 있습니다.',
  },
  {
    question: '게임 이용 요금이 있나요?',
    answer: '모든 게임은 완전 무료입니다. 숨겨진 비용이나 인앱 결제 없이 모든 콘텐츠를 자유롭게 즐길 수 있습니다.',
  },
  {
    question: '새로운 게임은 언제 추가되나요?',
    answer: '새로운 게임은 지속적으로 개발 및 추가되고 있습니다. 다양한 장르의 새로운 웹 게임을 계속해서 만나보실 수 있습니다.',
  },
];

export default function GamesPage() {
  return (
    <section className="py-32 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-50" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Breadcrumb */}
        <FadeIn>
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-12">
            <Link href="/" className="hover:text-white transition-colors">홈</Link>
            <span>/</span>
            <span className="text-white">게임</span>
          </nav>
        </FadeIn>

        {/* Heading */}
        <FadeInView className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-black mb-6 font-display">
            무료 웹 <span className="text-neon-purple">게임</span>
          </h1>
          <div className="w-24 h-1 bg-neon-purple mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            모든 게임은 무료이며, 설치 없이 브라우저에서 바로 플레이할 수 있습니다.
          </p>
        </FadeInView>

        {/* AdSense Unit */}
        <div className="mb-12">
          <AdUnit
            slotId="5712499147"
            className="w-full text-center"
            style={{ minHeight: '100px' }}
          />
        </div>

        {/* Games Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
          {games.map((game) => (
            <GameCard key={game.id} {...game} />
          ))}
        </div>

        {/* AdSense Unit */}
        <div className="mb-20">
          <AdUnit
            slotId="5712499147"
            className="w-full text-center"
            style={{ minHeight: '100px' }}
          />
        </div>

        {/* FAQ Section */}

        <FadeInView className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-12 font-display text-center">
            자주 묻는 <span className="text-neon-purple">질문</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, i) => (
              <FadeInView key={i} delay={i * 0.1} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 className="text-lg font-bold mb-3 text-white font-display">{faq.question}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
              </FadeInView>
            ))}
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
