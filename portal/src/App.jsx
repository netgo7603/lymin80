import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Hero from './components/Hero';
import GameCard from './components/GameCard';
import { games } from './data/games';
import { motion } from 'framer-motion';
import { Github, Twitter } from 'lucide-react';
import SeoMeta from './components/SeoMeta';

function App() {
  return (
    <HelmetProvider>
      <SeoMeta />
      <div className="min-h-screen bg-dark-bg text-white font-sans selection:bg-neon-green selection:text-black">
        <header className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-white/5">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-black tracking-widest font-display text-white">
              NEO<span className="text-neon-green">.</span>GAMER
            </div>
            <nav className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-wider text-gray-400">
              <a href="#" className="hover:text-neon-green transition-colors">Home</a>
              <a href="#games" className="hover:text-neon-purple transition-colors">Games</a>
              <a href="#about" className="hover:text-neon-gold transition-colors">About</a>
            </nav>
          </div>
        </header>

        <main>
          <Hero />

          <section id="games" className="py-24 relative">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-50" />

            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-black mb-4 font-display">FEATURED <span className="text-neon-purple">TITLES</span></h2>
                <div className="w-24 h-1 bg-neon-purple mx-auto rounded-full" />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {games.map((game, index) => (
                  <GameCard key={game.id} {...game} />
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-black py-12 border-t border-white/10">
          <div className="container mx-auto px-6 text-center">
            <div className="flex justify-center gap-6 mb-8">
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                <Twitter size={24} />
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © 2026 Neo Gamer. All rights reserved. <br />
              <span className="opacity-50">Forged in the digital void.</span>
            </p>
          </div>
        </footer>
      </div>
    </HelmetProvider>
  );
}

export default App;
