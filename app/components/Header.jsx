'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const MobileMenu = ({ isOpen, onClose }) => {
  const { dict } = useLanguage();

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
            <div className="flex justify-between items-center mb-8">
              <LanguageSwitcher />
              <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white">
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-6 text-lg font-bold uppercase tracking-wider text-gray-400">
              <Link href="/" onClick={onClose} className="hover:text-neon-green transition-colors">{dict.nav.home}</Link>
              <Link href="/games" onClick={onClose} className="hover:text-neon-purple transition-colors">{dict.nav.games}</Link>
              <Link href="/blog" onClick={onClose} className="hover:text-blue-400 transition-colors">{dict.nav.blog}</Link>
              <Link href="/about" onClick={onClose} className="hover:text-neon-gold transition-colors">{dict.nav.about}</Link>
              <Link href="/contact" onClick={onClose} className="hover:text-white transition-colors">{dict.nav.contact}</Link>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
};

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { dict } = useLanguage();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-white/5 shadow-lg transition-all duration-300">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center max-w-7xl">
          <Link href="/" className="text-2xl font-black tracking-widest font-display text-white">
            LYMIN80<span className="text-neon-green">.</span>SHOP
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-8 text-sm font-bold uppercase tracking-wider text-gray-400 items-center">
              <Link href="/" className="hover:text-neon-green transition-colors hover:scale-105 transform">{dict.nav.home}</Link>
              <Link href="/games" className="hover:text-neon-purple transition-colors hover:scale-105 transform">{dict.nav.games}</Link>
              <Link href="/blog" className="hover:text-blue-400 transition-colors hover:scale-105 transform">{dict.nav.blog}</Link>
              <Link href="/about" className="hover:text-neon-gold transition-colors hover:scale-105 transform">{dict.nav.about}</Link>
            </nav>

            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <Link href="/games" className="px-5 py-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-all duration-300 border border-white/20 text-sm font-bold uppercase">
                {dict.nav.playNow}
              </Link>
            </div>
          </div>

          <button
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
