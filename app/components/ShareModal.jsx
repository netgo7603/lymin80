'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Link as LinkIcon, Twitter, Facebook, Sparkles } from 'lucide-react';

export default function ShareModal({ isOpen, onClose, title, url, color }) {
  const neonColor = color === 'purple' ? 'rgb(176, 38, 255)' :
    color === 'green' ? 'rgb(57, 255, 20)' :
      color === 'gold' ? 'rgb(255, 215, 0)' : 'white';

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
  };

  const shareFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" />
          <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
            <div className="bg-[#0a0a1a] border border-white/10 rounded-2xl p-6 w-full max-w-md shadow-2xl pointer-events-auto relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-50" style={{ backgroundColor: neonColor }} />
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold font-display flex items-center gap-2">
                  <Sparkles size={20} style={{ color: neonColor }} /> 공유하기
                </h3>
                <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors"><X size={20} /></button>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <button onClick={handleCopy} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group relative overflow-hidden">
                  <div className={`p-3 rounded-full transition-all duration-300 ${copied ? 'bg-green-500 text-black' : 'bg-gray-800 text-white group-hover:scale-110'}`}>
                    {copied ? <Sparkles size={24} /> : <LinkIcon size={24} />}
                  </div>
                  <span className={`text-xs font-bold uppercase tracking-wider transition-colors ${copied ? 'text-green-400' : 'text-gray-400'}`}>
                    {copied ? '복사됨!' : '복사'}
                  </span>
                </button>
                <button onClick={shareTwitter} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group">
                  <div className="p-3 rounded-full bg-[#1DA1F2]/20 group-hover:scale-110 transition-transform"><Twitter size={24} className="text-[#1DA1F2]" /></div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">트위터</span>
                </button>
                <button onClick={shareFacebook} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group">
                  <div className="p-3 rounded-full bg-[#4267B2]/20 group-hover:scale-110 transition-transform"><Facebook size={24} className="text-[#4267B2]" /></div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">페이스북</span>
                </button>
              </div>
              <div className="p-3 rounded-lg bg-black/50 border border-white/5 flex items-center gap-3">
                <div className="flex-1 truncate text-sm text-gray-500 font-mono">{url}</div>
                <button onClick={handleCopy} className="text-xs font-bold px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 transition-colors">복사</button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
