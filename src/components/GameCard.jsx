import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Play, Share2 } from 'lucide-react';
import { useState } from 'react';
import ShareModal from './ShareModal';

const GameCard = ({ title, description, image, url, color }) => {
    const [isShareOpen, setIsShareOpen] = useState(false);

    const neonColor = color === 'purple' ? 'rgb(176, 38, 255)' :
        color === 'green' ? 'rgb(57, 255, 20)' :
            color === 'gold' ? 'rgb(255, 215, 0)' : 'white';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: `0 0 20px ${neonColor}40` }}
            className="glass-card overflow-hidden group relative"
        >
            <div className="aspect-square w-full overflow-hidden relative bg-white p-6">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <div className="p-6 relative z-10">
                <h3 className="text-2xl font-bold mb-2 text-white font-display uppercase tracking-wider" style={{ textShadow: `0 0 10px ${neonColor}80` }}>
                    {title}
                </h3>
                <p className="text-gray-300 mb-6 font-light line-clamp-2">
                    {description}
                </p>

                <div className="flex gap-4">
                    <motion.a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-[2] flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-bold uppercase tracking-wide text-black transition-colors"
                        style={{ backgroundColor: neonColor, boxShadow: `0 0 15px ${neonColor}60` }}
                    >
                        <Play size={18} fill="black" /> Play Now
                    </motion.a>

                    <motion.button
                        onClick={() => setIsShareOpen(true)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-bold uppercase tracking-wide text-white border border-white/20 hover:bg-white/10 transition-colors"
                    >
                        <Share2 size={18} />
                    </motion.button>
                </div>
            </div>

            {/* Decorative Border */}
            <div className="absolute inset-0 border-2 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderColor: neonColor }} />

            <ShareModal
                isOpen={isShareOpen}
                onClose={() => setIsShareOpen(false)}
                title={title}
                url={url}
                color={color}
            />
        </motion.div>
    );
};

export default GameCard;
