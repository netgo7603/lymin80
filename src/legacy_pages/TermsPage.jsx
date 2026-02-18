import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SITE_URL = 'https://www.lymin80.shop';

const TermsPage = () => {
  return (
    <>
      <Helmet>
        <title>이용약관 | Lymin80 Shop</title>
        <meta name="description" content="Lymin80 Shop 이용약관. 서비스 이용에 관한 권리, 의무, 책임 사항을 안내합니다." />
        <link rel="canonical" href={`${SITE_URL}/terms`} />
        <meta property="og:title" content="이용약관 | Lymin80 Shop" />
        <meta property="og:url" content={`${SITE_URL}/terms`} />
      </Helmet>

      <section className="py-16 min-h-screen">
        <div className="container mx-auto px-6 max-w-4xl">
          <nav className="text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-white transition-colors">홈</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-300">이용약관</span>
          </nav>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-black mb-8 font-display">이용<span className="text-neon-green">약관</span></h1>
            <p className="text-gray-400 mb-12">최종 수정일: 2026년 2월 18일</p>

            <div className="space-y-10 text-gray-300 leading-relaxed">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">제1조 (목적)</h2>
                <p>
                  이 약관은 Lymin80 Shop(이하 "사이트")이 제공하는 웹 게임 및 관련 서비스(이하 "서비스")의
                  이용 조건과 절차, 사이트와 사용자 간의 권리, 의무 및 책임 사항을 규정하는 것을 목적으로 합니다.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">제2조 (용어의 정의)</h2>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li><strong className="text-white">"서비스"</strong>란 사이트가 제공하는 무료 웹 게임, 타로 운세, 힐링 콘텐츠 등 일체의 서비스를 말합니다.</li>
                  <li><strong className="text-white">"사용자"</strong>란 사이트에 접속하여 서비스를 이용하는 모든 이용자를 말합니다.</li>
                  <li><strong className="text-white">"콘텐츠"</strong>란 사이트에 게시된 게임, 텍스트, 이미지, 영상 등 일체의 정보를 말합니다.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">제3조 (약관의 효력 및 변경)</h2>
                <ol className="list-decimal list-inside space-y-2 pl-4">
                  <li>이 약관은 사이트에 게시하여 공시함으로써 효력을 발생합니다.</li>
                  <li>사이트는 합리적인 사유가 발생할 경우 관련 법령에 위배되지 않는 범위 내에서 약관을 변경할 수 있습니다.</li>
                  <li>약관이 변경된 경우 시행일 최소 7일 전에 사이트를 통해 공지합니다.</li>
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">제4조 (서비스의 제공)</h2>
                <ol className="list-decimal list-inside space-y-2 pl-4">
                  <li>사이트는 다음과 같은 서비스를 무료로 제공합니다.
                    <ul className="list-disc list-inside space-y-1 pl-8 mt-2">
                      <li>웹 기반 게임 (지그재그, 박테리아 워 등)</li>
                      <li>타로 운세 서비스 (신비한 타로)</li>
                      <li>힐링 콘텐츠 (리셋 플로우)</li>
                      <li>게임 관련 블로그 및 가이드</li>
                    </ul>
                  </li>
                  <li>서비스는 연중무휴, 1일 24시간 제공을 원칙으로 합니다.</li>
                  <li>시스템 점검, 서버 장애, 천재지변 등 불가항력적인 사유로 서비스가 일시 중단될 수 있습니다.</li>
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">제5조 (사용자의 의무)</h2>
                <p className="mb-4">사용자는 서비스 이용 시 다음 행위를 해서는 안 됩니다.</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>사이트의 정상적인 운영을 방해하는 행위</li>
                  <li>사이트의 콘텐츠를 무단으로 복제, 배포, 수정하는 행위</li>
                  <li>사이트를 이용하여 법률에 위반되는 행위를 하는 것</li>
                  <li>타인의 명예를 훼손하거나 권리를 침해하는 행위</li>
                  <li>해킹, 바이러스 유포 등 사이트 보안을 위협하는 행위</li>
                  <li>자동화된 수단(봇 등)을 이용한 비정상적인 접근</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">제6조 (지적재산권)</h2>
                <ol className="list-decimal list-inside space-y-2 pl-4">
                  <li>사이트에서 제공하는 모든 콘텐츠(게임, 이미지, 텍스트, 디자인 등)에 대한 저작권 및 지적재산권은 사이트 운영자에게 귀속됩니다.</li>
                  <li>사용자는 사이트의 콘텐츠를 개인적인 용도로만 이용할 수 있으며, 상업적 용도로 사용할 수 없습니다.</li>
                  <li>사이트의 콘텐츠를 무단으로 복제, 전송, 출판, 배포, 방송 등에 이용할 수 없습니다.</li>
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">제7조 (광고)</h2>
                <ol className="list-decimal list-inside space-y-2 pl-4">
                  <li>사이트는 서비스 운영을 위해 Google AdSense 등 제3자 광고를 게재할 수 있습니다.</li>
                  <li>광고 게재로 인한 사용자의 손해에 대해 사이트는 책임을 지지 않습니다.</li>
                  <li>사용자가 광고를 통해 제3자와 거래하는 경우, 해당 거래는 사용자와 제3자 간의 문제이며 사이트는 이에 개입하지 않습니다.</li>
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">제8조 (면책 조항)</h2>
                <ol className="list-decimal list-inside space-y-2 pl-4">
                  <li>사이트는 무료로 제공되는 서비스의 이용과 관련하여 발생한 어떠한 손해에 대해서도 책임을 지지 않습니다.</li>
                  <li>사이트에서 제공하는 타로 운세 등의 콘텐츠는 오락 목적으로만 제공되며, 실제 운세나 예측을 보장하지 않습니다.</li>
                  <li>사이트는 사용자가 서비스를 이용하여 기대하는 수익이나 결과를 보장하지 않습니다.</li>
                  <li>천재지변, 전쟁 등 불가항력적 사유로 서비스를 제공할 수 없는 경우 면책됩니다.</li>
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">제9조 (준거법 및 재판 관할)</h2>
                <p>
                  이 약관에 관한 분쟁은 대한민국 법률에 따라 해석되며, 분쟁 발생 시 관할 법원은 사이트 운영자의 소재지를 관할하는 법원으로 합니다.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">제10조 (기타)</h2>
                <p>
                  이 약관에 명시되지 않은 사항은 관련 법령 및 사이트의 개별 운영 정책에 따릅니다.
                  서비스 이용에 관한 문의는 <Link to="/contact" className="text-neon-green hover:underline">문의하기</Link> 페이지를 이용해 주세요.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TermsPage;
