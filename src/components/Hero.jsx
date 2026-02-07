import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Share2 } from 'lucide-react';
import { useState } from 'react';
import ShareModal from './ShareModal';

const Hero = () => {
    const [isShareOpen, setIsShareOpen] = useState(false);
    return (
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[url('/zigzag_banner.png')] bg-cover bg-center opacity-20 blur-sm mask-gradient" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/80 to-dark-bg" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-6 inline-block p-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
                >
                    <Gamepad2 size={48} className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-5xl md:text-8xl font-black mb-6 tracking-tighter"
                >
                    LYMIN80 <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green via-white to-neon-purple drop-shadow-[0_0_15px_rgba(57,255,20,0.5)]">SHOP</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto font-light mb-10 px-4"
                >
                    매일매일 새로운 즐거움이 가득한 곳. 신비로운 타로 운세부터 네온 빛 가득한 아케이드 게임까지.
                </motion.p>

                <motion.a
                    href="#games"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="inline-block py-4 px-10 rounded-full bg-white text-dark-bg font-bold text-lg uppercase tracking-widest hover:bg-neon-green hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(57,255,20,0.6)]"
                >
                    지금 시작하기
                </motion.a>

                <motion.button
                    onClick={() => setIsShareOpen(true)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="ml-4 inline-block py-4 px-6 rounded-full bg-white/10 text-white font-bold text-lg uppercase tracking-widest hover:bg-white/20 hover:scale-105 transition-all duration-300"
                >
                    <Share2 size={24} />
                </motion.button>
            </div>

            <ShareModal
                isOpen={isShareOpen}
                onClose={() => setIsShareOpen(false)}
                title="Lymin80 Shop | Premium Web Games Portal"
                url={window.location.href}
                color="purple"
            />
        </section>
    );
};

export default Hero;
