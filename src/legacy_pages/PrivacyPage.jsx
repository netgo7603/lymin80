import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SITE_URL = 'https://www.lymin80.shop';

const PrivacyPage = () => {
  return (
    <>
      <Helmet>
        <title>개인정보처리방침 | Lymin80 Shop</title>
        <meta name="description" content="Lymin80 Shop 개인정보처리방침. 사용자의 개인정보를 어떻게 수집, 이용, 보호하는지에 대한 안내입니다." />
        <link rel="canonical" href={`${SITE_URL}/privacy`} />
        <meta property="og:title" content="개인정보처리방침 | Lymin80 Shop" />
        <meta property="og:url" content={`${SITE_URL}/privacy`} />
      </Helmet>

      <section className="py-16 min-h-screen">
        <div className="container mx-auto px-6 max-w-4xl">
          <nav className="text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-white transition-colors">홈</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-300">개인정보처리방침</span>
          </nav>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-black mb-8 font-display">개인정보<span className="text-neon-purple">처리방침</span></h1>
            <p className="text-gray-400 mb-12">최종 수정일: 2026년 2월 18일</p>

            <div className="space-y-10 text-gray-300 leading-relaxed">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">1. 개인정보의 수집 및 이용 목적</h2>
                <p className="mb-4">
                  Lymin80 Shop(이하 "사이트")은 사용자의 개인정보를 최소한으로 수집하며,
                  다음과 같은 목적으로만 이용합니다.
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>웹사이트 이용 통계 분석 및 서비스 개선</li>
                  <li>맞춤형 광고 제공 (Google AdSense)</li>
                  <li>사용자 문의 응대 및 서비스 안내</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">2. 수집하는 개인정보 항목</h2>
                <p className="mb-4">
                  사이트는 별도의 회원가입 절차가 없으며, 다음과 같은 정보가 자동으로 수집될 수 있습니다.
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>접속 IP 주소, 브라우저 종류 및 버전</li>
                  <li>접속 일시 및 이용 페이지</li>
                  <li>기기 정보 (운영체제, 화면 해상도)</li>
                  <li>쿠키(Cookie) 정보</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">3. 쿠키(Cookie) 사용</h2>
                <p className="mb-4">
                  사이트는 사용자 경험 개선과 맞춤형 서비스 제공을 위해 쿠키를 사용합니다.
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li><strong className="text-white">필수 쿠키:</strong> 사이트의 기본적인 기능 동작을 위해 필요한 쿠키</li>
                  <li><strong className="text-white">분석 쿠키:</strong> 사이트 이용 현황을 파악하기 위한 쿠키 (Google Analytics)</li>
                  <li><strong className="text-white">광고 쿠키:</strong> 사용자에게 관련성 있는 광고를 제공하기 위한 쿠키 (Google AdSense)</li>
                </ul>
                <p className="mt-4">
                  사용자는 브라우저 설정을 통해 쿠키 허용 여부를 선택할 수 있습니다.
                  다만, 쿠키를 차단할 경우 일부 서비스 이용에 제한이 있을 수 있습니다.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">4. 개인정보의 보유 및 이용 기간</h2>
                <p>
                  자동 수집되는 접속 로그 정보는 서비스 운영 및 분석 목적으로 수집 후 1년간 보유하며,
                  이후 즉시 파기합니다. 사용자 문의를 통해 제공된 이메일 등의 정보는 문의 처리 완료 후 6개월간 보유 후 파기합니다.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">5. 개인정보의 제3자 제공</h2>
                <p className="mb-4">
                  사이트는 원칙적으로 사용자의 개인정보를 외부에 제공하지 않습니다.
                  다만, 다음의 경우에는 예외로 합니다.
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>법령의 규정에 의거하거나, 수사 목적으로 관련 기관의 요구가 있는 경우</li>
                  <li>광고 서비스 제공을 위한 Google AdSense (Google의 개인정보 처리방침을 따름)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">6. 광고 서비스</h2>
                <p className="mb-4">
                  사이트는 Google AdSense를 통해 광고를 게재합니다.
                  Google은 사용자의 관심사에 기반한 광고를 제공하기 위해 쿠키를 사용할 수 있습니다.
                </p>
                <p>
                  Google의 광고 관련 개인정보 처리에 대한 자세한 내용은
                  {' '}<a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-neon-purple hover:underline">Google 광고 정책</a>을
                  참고하시기 바랍니다. 사용자는
                  {' '}<a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-neon-purple hover:underline">Google 광고 설정</a>에서
                  맞춤 광고를 비활성화할 수 있습니다.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">7. 개인정보의 파기 절차 및 방법</h2>
                <p>
                  보유 기간이 경과하거나 수집 목적이 달성된 개인정보는 지체 없이 파기합니다.
                  전자적 파일 형태로 저장된 개인정보는 기술적 방법을 사용하여 복원이 불가능한 방법으로 영구 삭제합니다.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">8. 사용자의 권리</h2>
                <p className="mb-4">사용자는 언제든지 다음의 권리를 행사할 수 있습니다.</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>개인정보 수집 및 이용 동의 철회</li>
                  <li>개인정보 열람 및 정정 요구</li>
                  <li>개인정보 삭제 요구</li>
                  <li>개인정보 처리 정지 요구</li>
                </ul>
                <p className="mt-4">
                  위 권리 행사는 <Link to="/contact" className="text-neon-purple hover:underline">문의하기</Link> 페이지를 통해 요청하실 수 있습니다.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">9. 개인정보 보호 책임자</h2>
                <p className="mb-4">
                  사이트의 개인정보 처리에 관한 업무를 총괄하는 개인정보 보호 책임자는 다음과 같습니다.
                </p>
                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <p><strong className="text-white">운영자:</strong> Lymin80 Shop</p>
                  <p><strong className="text-white">이메일:</strong> lymin80@gmail.com</p>
                  <p><strong className="text-white">웹사이트:</strong> https://www.lymin80.shop</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">10. 개인정보처리방침 변경</h2>
                <p>
                  이 개인정보처리방침은 법령, 정책 또는 보안 기술의 변경에 따라 내용이 추가, 삭제 및 수정될 수 있습니다.
                  변경 시에는 시행일 최소 7일 전에 사이트를 통해 공지합니다.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPage;
