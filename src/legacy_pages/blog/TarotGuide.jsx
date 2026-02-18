import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

const SITE_URL = 'https://www.lymin80.shop';

const TarotGuide = () => {
  return (
    <>
      <Helmet>
        <title>타로 카드 입문: 아르카나의 세계로 | Lymin80 Shop</title>
        <meta name="description" content="타로 카드의 역사, 메이저 아르카나와 마이너 아르카나의 의미, 그리고 올바른 리딩 방법까지. 타로 초보자를 위한 입문 가이드." />
        <link rel="canonical" href={`${SITE_URL}/blog/tarot-guide`} />
        <meta property="og:title" content="타로 카드 입문: 아르카나의 세계로" />
        <meta property="og:description" content="타로 카드의 역사부터 각 카드의 의미, 리딩 방법까지 체계적으로 알아봅니다." />
        <meta property="og:url" content={`${SITE_URL}/blog/tarot-guide`} />
        <meta property="og:type" content="article" />
      </Helmet>

      <article className="py-16 min-h-screen">
        <div className="container mx-auto px-6 max-w-4xl">
          <nav className="text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-white transition-colors">홈</Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="hover:text-white transition-colors">블로그</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-300">타로 가이드</span>
          </nav>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link to="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-6">
              <ArrowLeft size={16} /> 블로그로 돌아가기
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-neon-purple text-xs font-bold uppercase tracking-wider bg-neon-purple/10 px-3 py-1 rounded-full">가이드</span>
              <span className="flex items-center gap-1 text-gray-500 text-sm"><Calendar size={14} /> 2026-02-12</span>
              <span className="flex items-center gap-1 text-gray-500 text-sm"><Clock size={14} /> 10분</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black mb-8 font-display leading-tight">
              타로 카드 입문: <span className="text-neon-purple">아르카나의 세계로</span>
            </h1>

            <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-8">
              <p className="text-xl">
                타로 카드는 수백 년의 역사를 가진 신비로운 점술 도구입니다.
                오늘날에는 자기 성찰, 명상, 그리고 재미있는 오락 수단으로 전 세계적으로 사랑받고 있습니다.
                이 가이드에서는 타로의 기본부터 차근차근 알아보겠습니다.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-4">타로 카드의 역사</h2>
              <p>
                타로 카드의 기원은 15세기 이탈리아로 거슬러 올라갑니다.
                처음에는 귀족들 사이에서 카드 게임으로 사용되었으나,
                18세기 이후 점술과 자기 성찰의 도구로 변화하기 시작했습니다.
              </p>
              <p>
                프랑스의 오컬티스트 앙투안 쿠르 드 제블랭(Antoine Court de Gébelin)이
                타로에 이집트 신비주의적 의미를 부여하면서 본격적으로 점술 도구로 자리잡게 되었습니다.
                이후 영국의 골든 던(Golden Dawn) 비밀 결사를 거쳐 현대의 라이더-웨이트 타로 덱이 탄생했습니다.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-4">타로 덱의 구성</h2>
              <p>
                표준 타로 덱은 총 78장의 카드로 구성됩니다.
                크게 메이저 아르카나(Major Arcana)와 마이너 아르카나(Minor Arcana)로 나뉩니다.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-3">메이저 아르카나 (22장)</h3>
              <p>
                메이저 아르카나는 "큰 비밀"이라는 뜻으로, 인생의 중요한 전환점이나 큰 주제를 나타냅니다.
                0번 "바보(The Fool)"에서 시작하여 21번 "세계(The World)"까지,
                인간의 영적 여정을 상징하는 "바보의 여정(Fool's Journey)"을 담고 있습니다.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
                {[
                  '0. 바보', '1. 마법사', '2. 여사제', '3. 여황제',
                  '4. 황제', '5. 교황', '6. 연인', '7. 전차',
                  '8. 힘', '9. 은둔자', '10. 운명의 수레바퀴', '11. 정의',
                  '12. 매달린 사람', '13. 죽음', '14. 절제', '15. 악마',
                  '16. 탑', '17. 별', '18. 달', '19. 태양',
                  '20. 심판', '21. 세계'
                ].map((card, i) => (
                  <div key={i} className="bg-white/5 px-3 py-2 rounded-lg text-sm text-gray-400 border border-white/5">
                    {card}
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-white mt-8 mb-3">마이너 아르카나 (56장)</h3>
              <p>
                마이너 아르카나는 "작은 비밀"이라는 뜻으로, 일상생활의 구체적인 상황과 감정을 나타냅니다.
                4개의 수트(Suit)로 나뉘며, 각 수트는 에이스(Ace)부터 10까지의 숫자 카드와
                4장의 궁정 카드(시종, 기사, 여왕, 왕)로 구성됩니다.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                {[
                  { suit: '완드(Wands)', element: '불', meaning: '열정, 창의성, 행동, 에너지', color: 'text-orange-400' },
                  { suit: '컵(Cups)', element: '물', meaning: '감정, 관계, 직관, 사랑', color: 'text-blue-400' },
                  { suit: '소드(Swords)', element: '바람', meaning: '사고, 갈등, 진실, 결단', color: 'text-gray-200' },
                  { suit: '펜타클(Pentacles)', element: '흙', meaning: '물질, 재물, 건강, 안정', color: 'text-neon-gold' }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <h4 className={`font-bold ${item.color} mb-1`}>{item.suit}</h4>
                    <p className="text-sm text-gray-500 mb-1">원소: {item.element}</p>
                    <p className="text-sm text-gray-400">{item.meaning}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-4">기본적인 타로 리딩 방법</h2>

              <h3 className="text-xl font-bold text-white mt-8 mb-3">원 카드 리딩 (1장)</h3>
              <p>
                가장 간단한 리딩 방법으로, 하루의 운세나 간단한 질문에 적합합니다.
                마음을 가다듬고 질문을 떠올린 후 한 장의 카드를 뽑아 그 의미를 해석합니다.
                타로 입문자에게 가장 추천하는 방법입니다.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-3">쓰리 카드 스프레드 (3장)</h3>
              <p>
                가장 대중적인 스프레드로, 세 장의 카드를 뽑아 해석합니다.
                일반적으로 "과거 - 현재 - 미래" 또는 "상황 - 행동 - 결과"로 해석합니다.
                간단하면서도 깊이 있는 인사이트를 얻을 수 있어 초보자에게 적합합니다.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-3">켈트 십자가 스프레드 (10장)</h3>
              <p>
                가장 전통적이고 상세한 스프레드입니다. 10장의 카드를 사용하여
                현재 상황, 도전, 과거의 영향, 가까운 미래, 의식적/무의식적 영향,
                그리고 최종 결과까지 폭넓게 분석합니다. 복잡한 질문에 적합하지만
                해석에 경험이 필요합니다.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-4">타로 리딩 시 주의사항</h2>
              <ul className="list-disc list-inside space-y-3 pl-4">
                <li>타로는 확정된 미래를 예측하는 것이 아닌, 현재의 에너지와 가능성을 보여주는 도구입니다.</li>
                <li>건강, 법률, 재정에 관한 중요한 결정은 반드시 전문가와 상담하세요.</li>
                <li>같은 질문을 반복해서 카드를 뽑는 것은 좋지 않습니다. 첫 번째 리딩을 존중하세요.</li>
                <li>타로는 자기 성찰과 명상의 도구로 활용할 때 가장 큰 가치를 발휘합니다.</li>
                <li>타로 리딩은 오락 목적으로 즐기시는 것을 권장합니다.</li>
              </ul>

              <h2 className="text-3xl font-bold text-white mt-12 mb-4">디지털 시대의 타로</h2>
              <p>
                현대에는 실물 카드 없이도 디지털 환경에서 타로를 체험할 수 있습니다.
                온라인 타로 서비스는 아름다운 카드 애니메이션과 상세한 해석을 제공하며,
                언제 어디서든 간편하게 타로 리딩을 받을 수 있다는 장점이 있습니다.
              </p>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 my-6">
                <p className="text-white font-bold mb-3">지금 바로 타로 체험하기</p>
                <p className="text-gray-400 mb-4">
                  Lymin80 Shop의 "신비한 타로"에서 무료로 타로 리딩을 체험해 보세요.
                  아름다운 비주얼과 상세한 해석으로 타로의 세계를 경험할 수 있습니다.
                </p>
                <a href="https://tarot.lymin80.shop/" target="_blank" rel="noopener noreferrer" className="inline-flex px-6 py-3 bg-neon-purple text-white rounded-lg font-bold hover:opacity-90 transition-opacity">
                  신비한 타로 체험하기
                </a>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-4">마치며</h2>
              <p>
                타로는 수백 년의 역사와 깊은 상징 체계를 가진 매력적인 분야입니다.
                처음에는 복잡해 보일 수 있지만, 기본 개념만 이해하면 누구나 타로의 세계를 즐길 수 있습니다.
                자기 성찰의 도구로, 명상의 수단으로, 또는 순수한 오락으로 타로를 활용해 보세요.
              </p>
            </div>
          </motion.div>
        </div>
      </article>
    </>
  );
};

export default TarotGuide;
