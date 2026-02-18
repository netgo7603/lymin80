import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-16 border-t border-white/10 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neon-purple/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-black tracking-widest font-display text-white inline-block mb-4">
              LYMIN80<span className="text-neon-green">.</span>SHOP
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              설치 없이 브라우저에서 바로 즐기는 무료 웹 게임 포털. 매일 새로운 즐거움을 발견하세요.
            </p>
          </div>

          {/* Games */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4 text-sm">Games</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="https://zigzag.lymin80.shop/" target="_blank" rel="noopener noreferrer" className="hover:text-neon-green transition-colors">지그재그</a></li>
              <li><a href="https://tarot.lymin80.shop/" target="_blank" rel="noopener noreferrer" className="hover:text-neon-purple transition-colors">신비한 타로</a></li>
              <li><a href="https://bacteria.lymin80.shop/" target="_blank" rel="noopener noreferrer" className="hover:text-neon-gold transition-colors">박테리아 워</a></li>
              <li><a href="https://resetflow.lymin80.shop/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">리셋 플로우</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4 text-sm">Resources</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="/blog" className="hover:text-white transition-colors">블로그</Link></li>
              <li><Link to="/blog/web-game-guide" className="hover:text-white transition-colors">웹 게임 가이드</Link></li>
              <li><Link to="/blog/tarot-guide" className="hover:text-white transition-colors">타로 입문 가이드</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">사이트 소개</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4 text-sm">Legal</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="/privacy" className="hover:text-white transition-colors">개인정보처리방침</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">이용약관</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">문의하기</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              &copy; 2026 Lymin80 Shop. All rights reserved.
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
};

export default Footer;
