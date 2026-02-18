'use client';

import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-2 bg-white/5 rounded-full p-1 border border-white/10">
            <button
                onClick={() => setLanguage('ko')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${language === 'ko'
                        ? 'bg-neon-green text-black shadow-[0_0_10px_rgba(57,255,20,0.4)]'
                        : 'text-gray-400 hover:text-white'
                    }`}
            >
                KO
            </button>
            <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${language === 'en'
                        ? 'bg-neon-purple text-white shadow-[0_0_10px_rgba(188,19,254,0.4)]'
                        : 'text-gray-400 hover:text-white'
                    }`}
            >
                EN
            </button>
        </div>
    );
}
