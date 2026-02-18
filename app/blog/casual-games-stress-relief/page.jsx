import Link from 'next/link';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { FadeIn, FadeInView } from '../../components/AnimatedSection';

export const metadata = {
  title: '스트레스 해소를 위한 캐주얼 게임 활용법',
  description: '과학적으로 검증된 게임의 스트레스 해소 효과와 몰입(플로우) 상태의 원리, 효과적인 게임 유형 4가지, 건강한 게임 습관 5가지를 소개합니다.',
  alternates: {
    canonical: 'https://www.lymin80.shop/blog/casual-games-stress-relief',
  },
  openGraph: {
    title: '스트레스 해소를 위한 캐주얼 게임 활용법',
    description: '과학적으로 검증된 게임의 스트레스 해소 효과와 건강한 게임 습관을 알아봅니다.',
    url: 'https://www.lymin80.shop/blog/casual-games-stress-relief',
    type: 'article',
  },
};

export default function CasualGamesStressReliefPage() {
  return (
    <section className="py-32 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50" />

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        {/* Breadcrumb */}
        <FadeIn>
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">홈</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">블로그</Link>
            <span>/</span>
            <span className="text-white">캐주얼 게임과 스트레스 해소</span>
          </nav>
        </FadeIn>

        {/* Article */}
        <FadeIn>
          <article>
            <div className="mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full text-green-400 bg-green-400/10 mb-4">
                라이프스타일
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-6 font-display leading-tight">
                스트레스 해소를 위한 캐주얼 게임 활용법
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar size={16} />
                  2026-02-10
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={16} />
                  6분 읽기
                </span>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                현대인의 스트레스는 점점 더 심각해지고 있습니다. 흥미롭게도 최근 연구들은 적절한 캐주얼 게임 플레이가 효과적인 스트레스 해소 방법이 될 수 있음을 보여주고 있습니다. 이 글에서는 게임이 스트레스를 줄여주는 과학적 원리와 건강한 게임 습관을 알아봅니다.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-4">게임과 스트레스 해소의 과학</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                게임이 스트레스를 줄여주는 데에는 과학적 근거가 있습니다. 여러 심리학적 메커니즘이 복합적으로 작용합니다.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mt-0 mb-3">몰입 상태 (Flow State)</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    적절한 난이도의 게임은 &quot;몰입&quot; 상태를 유발합니다. 이 상태에서 뇌는 걱정과 불안을 처리하는 영역의 활동이 감소하고, 현재에 완전히 집중하게 됩니다. 심리학자 미하이 칙센트미하이가 정의한 이 개념은 행복과 만족감의 핵심 요소입니다.
                  </p>
                </div>
                <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mt-0 mb-3">도파민 분비</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    게임에서 목표를 달성하거나 점수를 올릴 때 뇌에서 도파민이 분비됩니다. 이 &quot;보상 화학물질&quot;은 기분을 좋게 하고 동기부여를 제공합니다. 적절한 수준의 도파민 자극은 전반적인 정서적 안정에 기여합니다.
                  </p>
                </div>
                <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mt-0 mb-3">인지적 전환 (Cognitive Shift)</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    게임은 주의를 스트레스 요인에서 다른 곳으로 돌려줍니다. 이것은 단순한 회피가 아니라, 뇌에 &quot;재부팅&quot;할 시간을 제공하는 것입니다. 짧은 휴식 후 더 명확한 사고와 문제 해결이 가능해집니다.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-4">스트레스 해소에 효과적인 게임 유형</h2>

              <div className="space-y-4 mb-8">
                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mt-0 mb-3">1. 반복 패턴 게임</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-2">
                    규칙적인 패턴을 따라가는 게임은 명상과 유사한 효과를 줍니다. 반복적인 동작에 집중하면서 마음이 차분해지고, 잡념이 사라집니다. 지그재그와 같은 리듬 기반 게임이 이에 해당합니다.
                  </p>
                  <a href="https://zigzag.lymin80.shop" target="_blank" rel="noopener noreferrer" className="text-green-400 text-sm hover:text-green-300 transition-colors">
                    지그재그 플레이하기 →
                  </a>
                </div>

                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mt-0 mb-3">2. 전략 게임</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-2">
                    전략적 사고가 필요한 게임은 뇌를 적극적으로 활용하게 해, 걱정에서 주의를 완전히 돌립니다. 문제 해결의 성취감은 자기 효능감을 높여 스트레스에 대한 저항력을 키워줍니다.
                  </p>
                  <a href="https://bacteria.lymin80.shop" target="_blank" rel="noopener noreferrer" className="text-green-400 text-sm hover:text-green-300 transition-colors">
                    박테리아 워 플레이하기 →
                  </a>
                </div>

                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mt-0 mb-3">3. 힐링/명상 게임</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-2">
                    부드러운 비주얼과 잔잔한 음악이 특징인 힐링 게임은 부교감 신경계를 활성화시켜 심박수를 낮추고 근육 긴장을 풀어줍니다. 경쟁 요소 없이 순수한 이완을 제공합니다.
                  </p>
                  <a href="https://resetflow.lymin80.shop" target="_blank" rel="noopener noreferrer" className="text-green-400 text-sm hover:text-green-300 transition-colors">
                    리셋 플로우 체험하기 →
                  </a>
                </div>

                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mt-0 mb-3">4. 점술/자기 성찰 게임</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-2">
                    타로와 같은 점술 기반 게임은 자기 성찰의 기회를 제공합니다. 카드의 상징을 통해 자신의 감정과 상황을 객관적으로 바라볼 수 있으며, 이 과정 자체가 치유적 효과를 가집니다.
                  </p>
                  <a href="https://tarot.lymin80.shop" target="_blank" rel="noopener noreferrer" className="text-green-400 text-sm hover:text-green-300 transition-colors">
                    신비한 타로 체험하기 →
                  </a>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-4">건강한 게임 습관 5가지</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                게임이 스트레스 해소에 도움이 되려면 건강한 습관과 함께해야 합니다. 다음 5가지 원칙을 지켜보세요.
              </p>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-8">
                <ul className="space-y-4 text-gray-300 text-sm leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-green-400 font-bold flex-shrink-0 text-base">1.</span>
                    <div>
                      <strong className="text-white">시간 제한 설정하기</strong>
                      <p className="mt-1">하루 30분~1시간 정도의 게임 시간을 정해두세요. 타이머를 설정하면 시간 관리가 쉬워집니다. 적당한 시간은 이완을 주지만, 과도한 시간은 오히려 스트레스를 유발할 수 있습니다.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-400 font-bold flex-shrink-0 text-base">2.</span>
                    <div>
                      <strong className="text-white">휴식과 스트레칭</strong>
                      <p className="mt-1">20분마다 잠시 화면에서 눈을 떼고 가벼운 스트레칭을 하세요. 20-20-20 규칙(20분마다 20피트 거리의 물체를 20초간 바라보기)도 눈 건강에 도움됩니다.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-400 font-bold flex-shrink-0 text-base">3.</span>
                    <div>
                      <strong className="text-white">목적 있는 플레이</strong>
                      <p className="mt-1">&quot;스트레스를 풀기 위해&quot;, &quot;기분 전환을 위해&quot; 등 게임을 하는 목적을 명확히 하세요. 목적 없이 습관적으로 플레이하면 효과가 줄어듭니다.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-400 font-bold flex-shrink-0 text-base">4.</span>
                    <div>
                      <strong className="text-white">다양한 활동과 균형</strong>
                      <p className="mt-1">게임만으로 스트레스를 관리하지 마세요. 운동, 명상, 사회적 활동, 취미 등 다양한 스트레스 해소법과 병행하면 더 효과적입니다.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-400 font-bold flex-shrink-0 text-base">5.</span>
                    <div>
                      <strong className="text-white">취침 전 게임 피하기</strong>
                      <p className="mt-1">잠자리에 들기 최소 1시간 전에는 게임을 멈추세요. 화면의 블루라이트와 두뇌 자극이 수면의 질을 저하시킬 수 있습니다.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-4">추천 게임</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                스트레스 해소에 효과적인 웹 게임들을 소개합니다. 모두 브라우저에서 무료로 즐길 수 있습니다.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { title: '지그재그', desc: '리듬감 있는 반복 패턴으로 집중력을 높이고 잡념을 날려보세요.', url: 'https://zigzag.lymin80.shop' },
                  { title: '리셋 플로우', desc: '부드러운 비주얼과 함께 마음을 정리하는 힐링 경험.', url: 'https://resetflow.lymin80.shop' },
                  { title: '신비한 타로', desc: '타로 카드를 통한 자기 성찰과 마음의 안정.', url: 'https://tarot.lymin80.shop' },
                  { title: '박테리아 워', desc: '전략적 사고에 집중하며 걱정을 잊어보세요.', url: 'https://bacteria.lymin80.shop' },
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
                    <span className="text-green-400 text-sm mt-2 inline-block">플레이하기 →</span>
                  </a>
                ))}
              </div>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mt-12">
                <p className="text-gray-300 leading-relaxed">
                  게임은 올바르게 활용하면 효과적인 스트레스 관리 도구가 될 수 있습니다. 중요한 것은 균형입니다. 건강한 게임 습관을 유지하면서 다양한 웹 게임을 통해 일상의 스트레스를 해소해보세요.
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
