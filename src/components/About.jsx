import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Globe, Heart } from 'lucide-react';

const AboutFeature = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
    >
        <div className="mb-4 inline-block p-3 rounded-xl bg-gradient-to-br from-neon-purple/20 to-blue-500/20">
            <Icon size={32} className="text-white" />
        </div>
        <h3 className="text-xl font-bold mb-2 font-display">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
);

const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-1/4 left-0 w-64 h-64 bg-neon-purple/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-neon-green/20 rounded-full blur-[100px]" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-4 font-display">사이트 <span className="text-neon-gold">소개</span></h2>
                    <div className="w-24 h-1 bg-neon-gold mx-auto rounded-full mb-8" />
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        웹 게임의 미래를 만들어갑니다. 빠르고, 몰입감 넘치며, 브라우저에서 바로 즐길 수 있습니다.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <AboutFeature
                        icon={Zap}
                        title="즉시 실행"
                        description="다운로드나 설치가 필요 없습니다. 최적화된 웹 엔진으로 바로 액션에 뛰어드세요."
                        delay={0.1}
                    />
                    <AboutFeature
                        icon={Cpu}
                        title="최첨단 기술"
                        description="React, WebGL, 최신 CSS 등 최신 웹 기술로 구동되는 부드러운 성능."
                        delay={0.2}
                    />
                    <AboutFeature
                        icon={Globe}
                        title="어디서나 접속"
                        description="모든 기기에서 끊김 없이 플레이하세요. 데스크탑 배틀스테이션부터 이동 중인 모바일 게임까지."
                        delay={0.3}
                    />
                    <AboutFeature
                        icon={Heart}
                        title="열정 중심"
                        description="게이머가 게이머를 위해 만든 경험. 수익화보다 재미에 집중합니다."
                        delay={0.4}
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
