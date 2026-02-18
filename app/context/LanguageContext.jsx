'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { dictionaries } from '../data/dictionaries';

const LanguageContext = createContext({
    language: 'ko',
    setLanguage: () => { },
    dict: dictionaries.ko,
});

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('ko');

    useEffect(() => {
        // 저장된 언어 불러오기
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage && (savedLanguage === 'ko' || savedLanguage === 'en')) {
            setLanguage(savedLanguage);
        } else {
            // 브라우저 언어 감지
            const browserLang = navigator.language.split('-')[0];
            if (browserLang === 'en') {
                setLanguage('en');
            }
        }
    }, []);

    const handleSetLanguage = (lang) => {
        setLanguage(lang);
        localStorage.setItem('language', lang);
        // document.documentElement.lang 속성 업데이트
        document.documentElement.lang = lang;
    };

    return (
        <LanguageContext.Provider
            value={{
                language,
                setLanguage: handleSetLanguage,
                dict: dictionaries[language]
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguage = () => useContext(LanguageContext);
