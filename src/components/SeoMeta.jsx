import React from 'react';
import { Helmet } from 'react-helmet-async';

const SeoMeta = () => {
    return (
        <Helmet>
            <title>Lymin80 Shop | 프리미엄 웹 게임 포털 (운세, 타로, 미니게임)</title>
            <meta name="description" content="무료 웹 게임, 타로 운세, 미니게임을 한곳에서! 설치 없이 즐기는 몰입감 넘치는 아케이드와 힐링 타임. 지금 바로 플레이하세요." />
            <meta name="keywords" content="무료게임, 웹게임, 타로, 운세, 미니게임, 아케이드, 스네이크게임, 심심풀이, 킬링타임, 온라인게임, 리셋플로우, 명언, 힐링서비스" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.lymin80.shop/" />
            <meta property="og:title" content="Lymin80 Shop | 프리미엄 웹 게임 & 운세 포털" />
            <meta property="og:description" content="설치 없는 무료 웹 게임과 신비로운 타로 운세. 매일 새로운 즐거움을 발견하세요." />
            <meta property="og:image" content="/resetflow.png" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://www.lymin80.shop/" />
            <meta property="twitter:title" content="Lymin80 Shop | 프리미엄 웹 게임 & 운세 포털" />
            <meta property="twitter:description" content="설치 없는 무료 웹 게임과 신비로운 타로 운세." />
            <meta property="twitter:image" content="/zigzag.png" />
        </Helmet>
    );
};

export default SeoMeta;
