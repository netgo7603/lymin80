'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Share2 } from 'lucide-react';
import ShareModal from './ShareModal';

export default function HeroSection() {
  const [isShareOpen, setIsShareOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-20">
      <div className="absolute inset-0 bg-[url('/zigzag.png')] bg-cover bg-center opacity-10 blur-sm mask-gradient animate-pulse-slow" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/90 to-dark-bg" />

      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px] pointer-events-none hidden md:block"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-green/20 rounded-full blur-[120px] pointer-events-none hidden md:block"
      />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 inline-block p-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_50px_rgba(255,255,255,0.1)]"
        >
          <Gamepad2 size={64} className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-6xl md:text-9xl font-black mb-8 tracking-tighter"
        >
          LYMIN80 <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green via-white to-neon-purple drop-shadow-[0_0_30px_rgba(57,255,20,0.6)]">SHOP</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-3xl text-gray-300 max-w-4xl mx-auto font-light mb-12 px-4 leading-relaxed"
        >
          <span className="md:block">매일매일 새로운 즐거움이 가득한 곳.</span>
          <span className="md:block mt-2">신비로운 타로 운세부터 네온 빛 가득한 아케이드 게임까지.</span>
        </motion.p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <motion.a
            href="#games"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="group relative inline-flex items-center justify-center py-5 px-12 rounded-full bg-white text-dark-bg font-bold text-xl uppercase tracking-widest overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(57,255,20,0.6)]"
          >
            <span className="relative z-10 group-hover:text-black transition-colors">지금 시작하기</span>
            <div className="absolute inset-0 bg-neon-green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>

          <motion.button
            onClick={() => setIsShareOpen(true)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="inline-flex items-center justify-center py-5 px-8 rounded-full bg-white/5 text-white font-bold text-lg uppercase tracking-widest border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
          >
            <Share2 size={24} />
          </motion.button>
        </div>
      </div>

      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        title="Lymin80 Shop | Premium Web Games Portal"
        url="https://www.lymin80.shop"
        color="purple"
      />
    </section>
  );
}
