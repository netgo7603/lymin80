import Link from 'next/link';
import { Mail, MessageCircle, Clock, MapPin } from 'lucide-react';
import { FadeInView, FadeIn } from '../components/AnimatedSection';
import AdUnit from '../components/AdUnit';

export const metadata = {
    title: '문의하기 | Lymin80 Shop - 게임 포털',
    description: 'Lymin80 Shop에 문의하세요. 서비스 이용, 버그 신고, 제안 사항 등 어떤 문의든 환영합니다.',
    alternates: {
        canonical: 'https://www.lymin80.shop/contact',
    },
    openGraph: {
        title: '문의하기 | Lymin80 Shop',
        url: 'https://www.lymin80.shop/contact',
        type: 'website',
    },
};

export default function ContactPage() {
    return (
        <section className="py-24 min-h-screen">
            <div className="container mx-auto px-6 max-w-4xl">
                <FadeIn>
                    <nav className="text-sm text-gray-500 mb-8">
                        <Link href="/" className="hover:text-white transition-colors">홈</Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-300">문의하기</span>
                    </nav>
                </FadeIn>

                <FadeInView>
                    <h1 className="text-4xl md:text-5xl font-black mb-6 font-display">
                        문의<span className="text-blue-400">하기</span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl">
                        Lymin80 Shop에 대한 질문이나 제안이 있으시면 언제든지 연락해 주세요.
                        최대한 빠르게 답변 드리겠습니다.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                            <div className="inline-block p-3 rounded-xl bg-blue-500/20 mb-4">
                                <Mail size={28} className="text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">이메일 문의</h3>
                            <p className="text-gray-400 mb-4">일반적인 문의, 제안, 협업 요청</p>
                            <a href="mailto:contact@lymin80.shop" className="text-blue-400 hover:underline font-bold">
                                contact@lymin80.shop
                            </a>
                        </div>

                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                            <div className="inline-block p-3 rounded-xl bg-neon-purple/20 mb-4">
                                <MessageCircle size={28} className="text-neon-purple" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">버그 신고</h3>
                            <p className="text-gray-400 mb-4">게임 오류, 사이트 문제 등 기술적 이슈</p>
                            <a href="mailto:contact@lymin80.shop" className="text-neon-purple hover:underline font-bold">
                                contact@lymin80.shop
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex items-start gap-4">
                            <div className="p-2 rounded-lg bg-neon-green/20">
                                <Clock size={20} className="text-neon-green" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-1">응답 시간</h4>
                                <p className="text-gray-400 text-sm">일반적으로 1~3 영업일 이내에 답변 드립니다.</p>
                            </div>
                        </div>

                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex items-start gap-4">
                            <div className="p-2 rounded-lg bg-neon-gold/20">
                                <MapPin size={20} className="text-neon-gold" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-1">운영 지역</h4>
                                <p className="text-gray-400 text-sm">대한민국에서 운영되는 서비스입니다.</p>
                            </div>
                        </div>
                    </div>
                </FadeInView>

                {/* AdSense Unit */}
                <div className="mb-16">
                    <AdUnit
                        slotId="5712499147"
                        className="w-full text-center"
                        style={{ minHeight: '100px' }}
                    />
                </div>

                {/* FAQ - wrapped in FadeInView for animation */}
                <FadeInView className="mt-16">
                    <h2 className="text-3xl font-black mb-8 font-display text-center">자주 묻는 <span className="text-neon-gold">질문</span></h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: '게임에서 버그를 발견했어요. 어떻게 신고하나요?',
                                a: '위의 이메일로 게임 이름, 사용 기기/브라우저, 발생 상황을 상세히 적어 보내주시면 확인 후 빠르게 수정하겠습니다.'
                            },
                            {
                                q: '새로운 게임 아이디어를 제안하고 싶어요.',
                                a: '훌륭합니다! 어떤 장르의 게임이든 아이디어를 보내주시면 검토 후 반영을 고려하겠습니다. 이메일로 자유롭게 보내주세요.'
                            },
                            {
                                q: '광고 관련 문의는 어디로 하나요?',
                                a: '광고 제휴, 스폰서십 등의 문의는 동일한 이메일 주소로 "광고 문의"라는 제목으로 보내주시면 됩니다.'
                            },
                            {
                                q: '개인정보 관련 요청은 어떻게 하나요?',
                                a: '개인정보 열람, 정정, 삭제 요청은 이메일로 보내주시면 관련 법률에 따라 처리해 드립니다. 자세한 내용은 개인정보처리방침을 참고해 주세요.'
                            }
                        ].map((faq, i) => (
                            <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <h3 className="text-lg font-bold mb-3 text-white">{faq.q}</h3>
                                <p className="text-gray-400 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </FadeInView>
            </div>
        </section>
    );
}
