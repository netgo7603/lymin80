import Link from 'next/link';
import { FadeIn } from '../components/AnimatedSection';
import AdUnit from '../components/AdUnit';


export const metadata = {
  title: '개인정보처리방침',
  description: 'Lymin80 Shop의 개인정보처리방침입니다. 사용자의 개인정보를 어떻게 수집, 이용, 보호하는지 안내합니다.',
  alternates: {
    canonical: 'https://www.lymin80.shop/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Breadcrumb */}
        <FadeIn>
          <nav className="text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">홈</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-white">개인정보처리방침</span>
          </nav>
        </FadeIn>

        {/* Title */}
        <FadeIn delay={0.1}>
          <h1 className="text-4xl md:text-5xl font-black mb-4 font-display">
            개인정보<span className="text-neon-purple">처리방침</span>
          </h1>
          <p className="text-gray-400 mb-12">최종 수정일: 2026년 2월 18일</p>
        </FadeIn>

        <div className="space-y-12">
          {/* 1. 개인정보의 수집 및 이용 목적 */}
          <FadeIn delay={0.2}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. 개인정보의 수집 및 이용 목적</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Lymin80 Shop(이하 &quot;사이트&quot;)은 다음과 같은 목적으로 개인정보를 수집 및 이용합니다.
              </p>
              <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2">
                <li>웹사이트 방문 통계 분석 및 서비스 개선</li>
                <li>Google AdSense를 통한 맞춤형 광고 제공</li>
                <li>사용자 문의 응대 및 처리</li>
              </ul>
            </section>
          </FadeIn>

          {/* 2. 수집하는 개인정보 항목 */}
          <FadeIn delay={0.2}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. 수집하는 개인정보 항목</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                본 사이트는 별도의 회원가입 절차가 없으며, 서비스 이용 과정에서 다음 정보가 자동으로 수집될 수 있습니다.
              </p>
              <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2">
                <li>IP 주소</li>
                <li>브라우저 종류 및 버전</li>
                <li>접속 일시</li>
                <li>기기 정보 (운영체제, 화면 해상도 등)</li>
                <li>쿠키(Cookie) 정보</li>
              </ul>
            </section>
          </FadeIn>

          {/* 3. 쿠키 사용 */}
          <FadeIn delay={0.2}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. 쿠키(Cookie) 사용</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                본 사이트는 다음과 같은 목적으로 쿠키를 사용합니다.
              </p>
              <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2">
                <li><strong className="text-white">필수 쿠키:</strong> 사이트의 기본 기능 제공을 위해 필요한 쿠키</li>
                <li><strong className="text-white">분석 쿠키 (Google Analytics):</strong> 방문자 통계 분석 및 서비스 개선을 위한 쿠키</li>
                <li><strong className="text-white">광고 쿠키 (Google AdSense):</strong> 맞춤형 광고 제공을 위한 쿠키</li>
              </ul>
            </section>
          </FadeIn>

          {/* 4. 보유 및 이용 기간 */}
          <FadeIn delay={0.2}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. 개인정보의 보유 및 이용 기간</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                수집된 개인정보는 다음과 같은 기간 동안 보유 후 파기합니다.
              </p>
              <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2">
                <li>웹사이트 방문 기록: 수집일로부터 1년간 보관 후 파기</li>
                <li>문의 내역: 처리 완료 후 6개월간 보관 후 파기</li>
              </ul>
            </section>
          </FadeIn>

          {/* 5. 제3자 제공 */}
          <FadeIn delay={0.2}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. 개인정보의 제3자 제공</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                본 사이트는 원칙적으로 사용자의 개인정보를 제3자에게 제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다.
              </p>
              <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2">
                <li>법률에 의해 요구되는 경우</li>
                <li>Google AdSense 광고 서비스 운영을 위해 Google에 제공되는 경우</li>
              </ul>
            </section>
          </FadeIn>

          {/* 6. 광고 서비스 */}
          <FadeIn delay={0.2}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. 광고 서비스</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                본 사이트는 Google AdSense를 통해 광고를 게재하고 있습니다. Google은 사용자의 관심사에 기반한 광고를 제공하기 위해 쿠키를 사용할 수 있습니다.
              </p>
              <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2">
                <li>
                  Google의 광고 정책에 대한 자세한 내용은{' '}
                  <a
                    href="https://policies.google.com/technologies/ads"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neon-purple hover:underline"
                  >
                    Google 광고 정책
                  </a>
                  에서 확인하실 수 있습니다.
                </li>
                <li>
                  맞춤형 광고를 원하지 않는 경우{' '}
                  <a
                    href="https://adssettings.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neon-purple hover:underline"
                  >
                    Google 광고 설정
                  </a>
                  에서 비활성화할 수 있습니다.
                </li>
              </ul>
            </section>
          </FadeIn>

          {/* 7. 파기 절차 및 방법 */}
          <FadeIn delay={0.2}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. 개인정보의 파기 절차 및 방법</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                개인정보의 보유 기간이 경과하거나 처리 목적이 달성된 경우, 해당 개인정보를 지체 없이 파기합니다.
              </p>
              <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2">
                <li><strong className="text-white">파기 절차:</strong> 보유 기간 만료 시 자동으로 파기 절차를 진행합니다.</li>
                <li><strong className="text-white">파기 방법:</strong> 전자적 파일 형태의 정보는 복구 불가능한 방법으로 삭제합니다.</li>
              </ul>
            </section>
          </FadeIn>

          {/* 8. 사용자의 권리 */}
          <FadeIn delay={0.2}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. 사용자의 권리</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                사용자는 언제든지 다음과 같은 권리를 행사할 수 있습니다.
              </p>
              <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2">
                <li>개인정보 수집 및 이용에 대한 동의 철회</li>
                <li>개인정보 열람 요구</li>
                <li>개인정보 정정 요구</li>
                <li>개인정보 삭제 요구</li>
                <li>개인정보 처리 정지 요구</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                위 권리 행사는{' '}
                <Link href="/contact" className="text-neon-purple hover:underline">
                  문의하기
                </Link>
                를 통해 요청하실 수 있습니다.
              </p>
            </section>
          </FadeIn>

          {/* 9. 개인정보 보호 책임자 */}
          <FadeIn delay={0.2}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. 개인정보 보호 책임자</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                개인정보 처리에 관한 업무를 총괄하는 책임자는 다음과 같습니다.
              </p>
              <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2">
                <li><strong className="text-white">소속:</strong> Lymin80 Shop</li>
                <li><strong className="text-white">이메일:</strong> contact@lymin80.shop</li>
              </ul>
            </section>
          </FadeIn>

          {/* 10. 처리방침 변경 */}
          <FadeIn delay={0.2}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. 개인정보처리방침 변경</h2>
              <p className="text-gray-300 leading-relaxed">
                본 개인정보처리방침이 변경되는 경우, 변경 사항을 시행일 최소 7일 전에 사이트 공지를 통해 안내합니다.
              </p>
            </section>
          </FadeIn>
        </div>

        {/* AdSense Unit */}
        <div className="mt-24">
          <AdUnit
            slotId="REPLACE_WITH_SLOT_ID_6"
            className="w-full text-center"
            style={{ minHeight: '100px' }}
          />
        </div>
      </div>

    </div>
  );
}
