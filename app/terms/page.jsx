import Link from 'next/link';
import { FadeIn } from '../components/AnimatedSection';
import AdUnit from '../components/AdUnit';


export const metadata = {
  title: '이용약관',
  description: 'Lymin80 Shop의 이용약관입니다. 서비스 이용에 관한 기본적인 사항을 규정합니다.',
  alternates: {
    canonical: 'https://www.lymin80.shop/terms',
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Breadcrumb */}
        <FadeIn>
          <nav className="text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">홈</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-white">이용약관</span>
          </nav>
        </FadeIn>

        {/* Title */}
        <FadeIn delay={0.1}>
          <h1 className="text-4xl md:text-5xl font-black mb-4 font-display">
            이용<span className="text-neon-green">약관</span>
          </h1>
          <p className="text-gray-400 mb-12">최종 수정일: 2026년 2월 18일</p>
        </FadeIn>

        <div className="space-y-12">
          {/* 제1조 목적 */}
          <FadeIn delay={0.2}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">제1조 (목적)</h2>
              <p className="text-gray-300 leading-relaxed">
                본 약관은 Lymin80 Shop(이하 &quot;사이트&quot;)이 제공하는 모든 서비스의 이용 조건 및 절차, 사용자와 사이트의 권리·의무 및 책임 사항을 규정함을 목적으로 합니다.
              </p>
            </section>
          </FadeIn>

          {/* 제2조 용어의 정의 */}
          <FadeIn delay={0.2}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">제2조 (용어의 정의)</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                본 약관에서 사용하는 용어의 정의는 다음과 같습니다.
              </p>
              <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2">
                <li><strong className="text-white">서비스:</strong> 사이트가 제공하는 웹 게임, 타로 운세, 힐링 콘텐츠, 블로그 등 일체의 서비스를 의미합니다.</li>
                <li><strong className="text-white">사용자:</strong> 사이트에 접속하여 서비스를 이용하는 모든 방문자를 의미합니다.</li>
                <li><strong className="text-white">콘텐츠:</strong> 사이트에서 제공하는 게임, 글, 이미지, 영상 등 모든 형태의 정보를 의미합니다.</li>
              </ul>
            </section>
          </FadeIn>

          {/* 제3조 약관의 효력 및 변경 */}
          <FadeIn delay={0.2}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">제3조 (약관의 효력 및 변경)</h2>
              <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2">
                <li>본 약관은 사이트에 게시함으로써 효력을 발생합니다.</li>
                <li>사이트는 필요한 경우 관련 법령을 위반하지 않는 범위 내에서 약관을 변경할 수 있습니다.</li>
                <li>약관이 변경되는 경우, 변경 사항을 시행일 최소 7일 전에 공지합니다.</li>
                <li>변경된 약관에 동의하지 않는 경우, 사용자는 서비스 이용을 중단할 수 있습니다.</li>
              </ul>
            </section>
          </FadeIn>

          {/* 제4조 서비스의 제공 */}
          <FadeIn delay={0.2}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">제4조 (서비스의 제공)</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                사이트는 다음과 같은 서비스를 무료로 제공합니다.
              </p>
              <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2">
                <li>웹 게임 (아케이드, 퍼즐, 미니게임 등)</li>
                <li>타로 운세 서비스</li>
                <li>힐링 콘텐츠 (명언, 리셋플로우 등)</li>
                <li>블로그 및 정보 콘텐츠</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                서비스는 연중무휴 24시간 제공을 원칙으로 하며, 시스템 점검 등의 사유로 일시 중단될 수 있습니다.
              </p>
            </section>
          </FadeIn>

          {/* 제5조 사용자의 의무 */}
          <FadeIn delay={0.2}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">제5조 (사용자의 의무)</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                사용자는 다음 행위를 하여서는 안 됩니다.
              </p>
              <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2">
                <li>사이트의 서비스를 이용하여 법령 또는 공서양속에 반하는 행위</li>
                <li>사이트의 운영을 방해하는 행위</li>
                <li>타인의 개인정보를 부정하게 수집·이용하는 행위</li>
                <li>사이트의 콘텐츠를 무단으로 복제·배포·전송하는 행위</li>
                <li>사이트에 악성 코드나 바이러스를 유포하는 행위</li>
                <li>기타 관련 법령에 위반되는 행위</li>
              </ul>
            </section>
          </FadeIn>

          {/* 제6조 지적재산권 */}
          <FadeIn delay={0.2}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">제6조 (지적재산권)</h2>
              <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2">
                <li>사이트에서 제공하는 모든 콘텐츠에 대한 저작권 및 지적재산권은 사이트에 귀속됩니다.</li>
                <li>사용자는 사이트의 콘텐츠를 개인적·비상업적 용도로만 이용할 수 있습니다.</li>
                <li>사전 서면 동의 없이 콘텐츠를 복제·배포·전송·게시하는 것은 금지됩니다.</li>
              </ul>
            </section>
          </FadeIn>

          {/* 제7조 광고 */}
          <FadeIn delay={0.2}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">제7조 (광고)</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                본 사이트는 Google AdSense를 통해 광고를 게재하고 있습니다.
              </p>
              <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2">
                <li>사이트 내 표시되는 광고는 Google AdSense를 통해 제공되며, 사용자의 관심사에 기반한 맞춤형 광고가 포함될 수 있습니다.</li>
                <li>광고로 인해 발생하는 거래에 대해 사이트는 책임을 지지 않습니다.</li>
                <li>광고 관련 설정은 Google 광고 설정에서 변경할 수 있습니다.</li>
              </ul>
            </section>
          </FadeIn>

          {/* 제8조 면책 조항 */}
          <FadeIn delay={0.2}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">제8조 (면책 조항)</h2>
              <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2">
                <li>사이트는 천재지변, 시스템 장애 등 불가항력적 사유로 인한 서비스 중단에 대해 책임을 지지 않습니다.</li>
                <li>사이트는 사용자가 서비스를 이용하여 얻은 정보에 대한 정확성, 신뢰성을 보증하지 않습니다.</li>
                <li>타로 운세 서비스는 오락 목적으로만 제공되며, 실제 의사결정의 근거로 사용되어서는 안 됩니다. 이로 인한 결과에 대해 사이트는 책임을 지지 않습니다.</li>
                <li>사이트에 게재된 외부 링크 및 광고를 통해 발생한 손해에 대해 사이트는 책임을 지지 않습니다.</li>
              </ul>
            </section>
          </FadeIn>

          {/* 제9조 준거법 및 재판 관할 */}
          <FadeIn delay={0.2}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">제9조 (준거법 및 재판 관할)</h2>
              <p className="text-gray-300 leading-relaxed">
                본 약관의 해석 및 적용에 관하여는 대한민국 법률을 준거법으로 합니다. 서비스 이용과 관련하여 발생한 분쟁에 대해서는 민사소송법상의 관할 법원을 전속적 관할 법원으로 합니다.
              </p>
            </section>
          </FadeIn>

          {/* 제10조 기타 */}
          <FadeIn delay={0.2}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">제10조 (기타)</h2>
              <p className="text-gray-300 leading-relaxed">
                본 약관에 명시되지 않은 사항은 관련 법령 및 상관례에 따릅니다. 서비스 이용에 관한 문의 사항은{' '}
                <Link href="/contact" className="text-neon-green hover:underline">
                  문의하기
                </Link>
                를 통해 연락해 주시기 바랍니다.
              </p>
            </section>
          </FadeIn>
        </div>

        {/* AdSense Unit */}
        <div className="mt-24">
          <AdUnit
            slotId="5712499147"
            className="w-full text-center"
            style={{ minHeight: '100px' }}
          />
        </div>
      </div>

    </div>
  );
}
