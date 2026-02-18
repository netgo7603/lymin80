'use client';

import { useEffect, useRef } from 'react';

export default function AdUnit({
    slotId,
    format = 'auto',
    layout,
    className = '',
    style = {}
}) {
    const adRef = useRef(null);

    useEffect(() => {
        try {
            if (typeof window !== 'undefined') {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            }
        } catch (e) {
            console.error('AdSense error:', e);
        }
    }, []);

    // 개발 환경에서는 광고가 표시되지 않을 수 있으므로 자리만 잡아둠
    if (process.env.NODE_ENV === 'development') {
        return (
            <div
                className={`bg-gray-800/50 border border-gray-700/50 rounded-lg flex items-center justify-center text-gray-500 text-sm ${className}`}
                style={{ minHeight: '100px', ...style }}
            >
                <div className="text-center p-4">
                    <p className="font-bold text-gray-400">Google AdSense</p>
                    <p className="text-xs mt-1">Slot ID: {slotId || 'Not Set'}</p>
                    <p className="text-xs">Format: {format}</p>
                </div>
            </div>
        );
    }

    return (
        <div className={`ad-container ${className}`} style={style}>
            <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-1032715451644664"
                data-ad-slot={slotId}
                data-ad-format={format}
                data-full-width-responsive="true"
                data-ad-layout={layout}
            />
        </div>
    );
}
