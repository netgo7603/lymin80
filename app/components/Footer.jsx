'use client';

import Link from 'next/link';
import { Github, Twitter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { dict } = useLanguage();

  return (
    <footer className="bg-black py-16 border-t border-white/10 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neon-purple/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-black tracking-widest font-display text-white inline-block mb-4">
              LYMIN80<span className="text-neon-green">.</span>SHOP
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              {dict.footer.slogan}
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4 text-sm">{dict.footer.sections.games}</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="https://zigzag.lymin80.shop/" target="_blank" rel="noopener noreferrer" className="hover:text-neon-green transition-colors">{dict.games.items.zigzag.name}</a></li>
              <li><a href="https://tarot.lymin80.shop/" target="_blank" rel="noopener noreferrer" className="hover:text-neon-purple transition-colors">{dict.games.items.tarot.name}</a></li>
              <li><a href="https://bacteria.lymin80.shop/" target="_blank" rel="noopener noreferrer" className="hover:text-neon-gold transition-colors">{dict.games.items.bacteria.name}</a></li>
              <li><a href="https://resetflow.lymin80.shop/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">{dict.games.items.resetflow.name}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4 text-sm">{dict.footer.sections.resources}</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="/blog" className="hover:text-white transition-colors">{dict.footer.links.blog}</Link></li>
              <li><Link href="/blog/web-game-guide" className="hover:text-white transition-colors">{dict.footer.links.webGameGuide}</Link></li>
              <li><Link href="/blog/tarot-guide" className="hover:text-white transition-colors">{dict.footer.links.tarotGuide}</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">{dict.footer.links.about}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4 text-sm">{dict.footer.sections.legal}</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="/privacy" className="hover:text-white transition-colors">{dict.footer.links.privacy}</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">{dict.footer.links.terms}</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">{dict.footer.links.contact}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              {dict.footer.copyright}
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-neon-purple transition-all duration-300 border border-white/5 text-gray-400">
                <Github size={20} />
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-blue-400 transition-all duration-300 border border-white/5 text-gray-400">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
