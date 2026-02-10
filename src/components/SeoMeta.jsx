import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://www.lymin80.shop';

const SeoMeta = () => {
    return (
        <Helmet>
            <title>Lymin80 Shop | 무료 웹 게임 & 운세 포털 - 타로, 미니게임, 힐링</title>
            <meta name="description" content="무료 웹 게임, 타로 운세, 미니게임을 한곳에서! 설치 없이 즐기는 몰입감 넘치는 아케이드와 힐링 타임. 지그재그, 박테리아워, 리셋플로우를 지금 바로 플레이하세요." />
            <meta name="keywords" content="무료게임, 웹게임, 타로, 운세, 미니게임, 아케이드, 스네이크게임, 심심풀이, 킬링타임, 온라인게임, 리셋플로우, 명언, 힐링서비스, 박테리아워, 지그재그, 무료타로, 오늘의운세" />
            <meta name="author" content="Lymin80 Shop" />
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

            {/* Canonical */}
            <link rel="canonical" href={`${SITE_URL}/`} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${SITE_URL}/`} />
            <meta property="og:title" content="Lymin80 Shop | 무료 웹 게임 & 운세 포털" />
            <meta property="og:description" content="설치 없는 무료 웹 게임과 신비로운 타로 운세. 매일 새로운 즐거움을 발견하세요." />
            <meta property="og:image" content={`${SITE_URL}/og_image.png`} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="Lymin80 Shop - 무료 웹 게임 & 운세 포털" />
            <meta property="og:locale" content="ko_KR" />
            <meta property="og:site_name" content="Lymin80 Shop" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={`${SITE_URL}/`} />
            <meta name="twitter:title" content="Lymin80 Shop | 무료 웹 게임 & 운세 포털" />
            <meta name="twitter:description" content="설치 없는 무료 웹 게임과 신비로운 타로 운세. 매일 새로운 즐거움을 발견하세요." />
            <meta name="twitter:image" content={`${SITE_URL}/og_image.png`} />
        </Helmet>
    );
};

export default SeoMeta;
