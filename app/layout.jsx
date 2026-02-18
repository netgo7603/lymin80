import './globals.css';
import Script from 'next/script';
import Header from './components/Header';
import Footer from './components/Footer';

const SITE_URL = 'https://www.lymin80.shop';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Lymin80 Shop | 무료 웹 게임 & 운세 포털',
    template: '%s | Lymin80 Shop',
  },
  description: '무료 웹 게임, 타로 운세, 미니게임을 한곳에서! 설치 없이 즐기는 몰입감 넘치는 아케이드와 힐링 타임.',
  keywords: ['무료게임', '웹게임', '타로', '운세', '미니게임', '아케이드', '스네이크게임', '심심풀이', '킬링타임', '온라인게임', '리셋플로우', '명언', '힐링서비스', '박테리아워', '지그재그'],
  authors: [{ name: 'Lymin80 Shop' }],
  creator: 'Lymin80 Shop',
  publisher: 'Lymin80 Shop',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: SITE_URL,
    siteName: 'Lymin80 Shop',
    title: 'Lymin80 Shop | 무료 웹 게임 & 운세 포털',
    description: '설치 없는 무료 웹 게임과 신비로운 타로 운세. 매일 새로운 즐거움을 발견하세요.',
    images: [
      {
        url: '/og_image.png',
        width: 1200,
        height: 630,
        alt: 'Lymin80 Shop - 무료 웹 게임 & 운세 포털',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lymin80 Shop | 무료 웹 게임 & 운세 포털',
    description: '설치 없는 무료 웹 게임과 신비로운 타로 운세. 매일 새로운 즐거움을 발견하세요.',
    images: ['/og_image.png'],
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      'ko': SITE_URL,
    },
  },
  verification: {
    google: 'googlea1415cf513e46e3e',
  },
  other: {
    'google-adsense-account': 'ca-pub-1032715451644664',
    'geo.region': 'KR',
    'geo.placename': 'South Korea',
    'content-language': 'ko',
  },
};

import { LanguageProvider } from './context/LanguageContext';

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" type="image/svg+xml" href="/snake.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/og_image.png" />
        <link rel="apple-touch-icon" href="/og_image.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#050510" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />

        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1032715451644664"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/* MS Clarity */}
        <Script
          id="microsoft-clarity-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "vj1ke06omw");
            `,
          }}
        />


        {/* Structured Data: WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Lymin80 Shop",
              "alternateName": "라이민80 샵",
              "url": SITE_URL,
              "description": "무료 웹 게임, 타로 운세, 미니게임을 한곳에서! 설치 없이 즐기는 몰입감 넘치는 아케이드와 힐링 타임.",
              "inLanguage": "ko",
              "potentialAction": {
                "@type": "SearchAction",
                "target": `${SITE_URL}/?q={search_term_string}`,
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />

        {/* Structured Data: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Lymin80 Shop",
              "url": SITE_URL,
              "logo": `${SITE_URL}/og_image.png`,
              "sameAs": []
            }),
          }}
        />

        {/* Structured Data: ItemList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Lymin80 Shop 추천 게임",
              "description": "무료 웹 게임 및 운세 서비스 목록",
              "numberOfItems": 4,
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "WebApplication",
                    "name": "지그재그 (Zigzag)",
                    "description": "네온 빛 가득한 세상에서 펼쳐지는 초고속 스네이크 게임!",
                    "url": "https://zigzag.lymin80.shop/",
                    "image": `${SITE_URL}/zigzag.png`,
                    "applicationCategory": "Game",
                    "operatingSystem": "Web Browser",
                    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "KRW" }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "WebApplication",
                    "name": "신비한 타로 (Tarot Mystique)",
                    "description": "고대 아르카나로 당신의 운명을 확인하세요.",
                    "url": "https://tarot.lymin80.shop/",
                    "image": `${SITE_URL}/tarot.png`,
                    "applicationCategory": "Entertainment",
                    "operatingSystem": "Web Browser",
                    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "KRW" }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "WebApplication",
                    "name": "박테리아 워 (Bacteria War)",
                    "description": "현미경 속 거대한 전쟁! 바이러스 군단을 지휘하세요.",
                    "url": "https://bacteria.lymin80.shop/",
                    "image": `${SITE_URL}/bacteria.png`,
                    "applicationCategory": "Game",
                    "operatingSystem": "Web Browser",
                    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "KRW" }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "item": {
                    "@type": "WebApplication",
                    "name": "리셋 플로우 (Reset Flow)",
                    "description": "지친 마음을 씻어내고 새로운 에너지를 채우는 공간.",
                    "url": "https://resetflow.lymin80.shop/",
                    "image": `${SITE_URL}/resetflow.png`,
                    "applicationCategory": "Lifestyle",
                    "operatingSystem": "Web Browser",
                    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "KRW" }
                  }
                }
              ]
            }),
          }}
        />
      </head>
      <body>
        <LanguageProvider>
          <div className="min-h-screen bg-dark-bg text-white font-sans selection:bg-neon-green selection:text-black">
            <Header />
            <main className="pt-20">
              {children}
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
