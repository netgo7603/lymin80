import React, { useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Twitter, Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import GameCard from './components/GameCard';
import About from './components/About';
import SeoMeta from './components/SeoMeta';
import { games } from './data/games';

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
          />
          <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-64 bg-dark-bg border-l border-white/10 z-50 md:hidden flex flex-col p-6 shadow-2xl"
          >
            <div className="flex justify-end mb-8">
              <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white">
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-6 text-lg font-bold uppercase tracking-wider text-gray-400">
              <a href="#" onClick={onClose} className="hover:text-neon-green transition-colors">Home</a>
              <a href="#games" onClick={onClose} className="hover:text-neon-purple transition-colors">Games</a>
              <a href="#about" onClick={onClose} className="hover:text-neon-gold transition-colors">About</a>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
};

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <HelmetProvider>
      <SeoMeta />
      <div className="min-h-screen bg-dark-bg text-white font-sans selection:bg-neon-green selection:text-black">
        {/* Desktop Enhanced Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-white/5 shadow-lg transition-all duration-300">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center max-w-7xl">
            <div className="text-2xl font-black tracking-widest font-display text-white">
              LYMIN80<span className="text-neon-green">.</span>SHOP
            </div>

            {/* Desktop Nav - Enhanced */}
            <nav className="hidden md:flex gap-10 text-sm font-bold uppercase tracking-wider text-gray-400 items-center">
              <a href="#" className="hover:text-neon-green transition-colors hover:scale-105 transform">Home</a>
              <a href="#games" className="hover:text-neon-purple transition-colors hover:scale-105 transform">Games</a>
              <a href="#about" className="hover:text-neon-gold transition-colors hover:scale-105 transform">About</a>
              <a href="#games" className="px-5 py-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-all duration-300 border border-white/20">
                Play Now
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </header>

        <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

        <main>
          <Hero />

          <section id="games" className="py-32 relative">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-50" />

            {/* Background Pattern for Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-20"
              >
                <h2 className="text-5xl md:text-6xl font-black mb-6 font-display">추천 <span className="text-neon-purple">게임</span></h2>
                <div className="w-24 h-1 bg-neon-purple mx-auto rounded-full mb-6" />
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  엄선된 최고의 웹 게임들을 만나보세요.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {games.map((game) => (
                  <GameCard key={game.id} {...game} />
                ))}
              </div>
            </div>
          </section>

          <About />
        </main>

        <footer className="bg-black py-16 border-t border-white/10 relative overflow-hidden">
          {/* Footer Gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neon-purple/10 to-transparent pointer-events-none" />

          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="flex justify-center gap-8 mb-10">
              <a href="#" className="p-4 bg-white/5 rounded-full hover:bg-white/10 hover:text-neon-purple transition-all duration-300 hover:scale-110 border border-white/5">
                <Github size={28} />
              </a>
              <a href="#" className="p-4 bg-white/5 rounded-full hover:bg-white/10 hover:text-blue-400 transition-all duration-300 hover:scale-110 border border-white/5">
                <Twitter size={28} />
              </a>
            </div>

            <div className="flex justify-center gap-8 mb-8 text-sm text-gray-400 font-bold uppercase tracking-widest">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>

            <p className="text-gray-600 text-sm">
              © 2026 Lymin80 Shop. All rights reserved. <br />
              <span className="opacity-50 mt-2 inline-block font-mono">Forged in the digital void.</span>
            </p>
          </div>
        </footer>
      </div>
    </HelmetProvider>
  );
}

export default App;
