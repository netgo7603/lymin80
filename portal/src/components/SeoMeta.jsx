import React from 'react';
import { Helmet } from 'react-helmet-async';

const SeoMeta = () => {
    return (
        <Helmet>
            <title>Neo Gamer | Premium Web Games Portal</title>
            <meta name="description" content="Explore a universe of immersive web games. From mystical tarot readings to neon-soaked arcade challenges." />
            <meta name="keywords" content="web games, arcade, tarot, snake game, bacteria war, free games, online games" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://portal.lymin80.shop/" />
            <meta property="og:title" content="Neo Gamer | Premium Web Games Portal" />
            <meta property="og:description" content="Explore a universe of immersive web games." />
            <meta property="og:image" content="/zigzag_banner.png" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://portal.lymin80.shop/" />
            <meta property="twitter:title" content="Neo Gamer | Premium Web Games Portal" />
            <meta property="twitter:description" content="Explore a universe of immersive web games." />
            <meta property="twitter:image" content="/zigzag_banner.png" />
        </Helmet>
    );
};

export default SeoMeta;
