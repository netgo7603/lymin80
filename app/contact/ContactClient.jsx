'use client';

import Link from 'next/link';
import { Mail, MessageCircle, Clock, MapPin } from 'lucide-react';
import { FadeInView, FadeIn } from '../components/AnimatedSection';
import AdUnit from '../components/AdUnit';
import { useLanguage } from '../context/LanguageContext';

export default function ContactClient() {
    const { dict } = useLanguage();

    return (
        <section className="py-24 min-h-screen">
            <div className="container mx-auto px-6 max-w-4xl">
                <FadeIn>
                    <nav className="text-sm text-gray-500 mb-8">
                        <Link href="/" className="hover:text-white transition-colors">{dict.nav.home}</Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-300">{dict.nav.contact}</span>
                    </nav>
                </FadeIn>

                <FadeInView>
                    <h1 className="text-4xl md:text-5xl font-black mb-6 font-display">
                        {dict.contact.title}<span className="text-blue-400">{dict.contact.subtitle}</span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl">
                        {dict.contact.desc}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                            <div className="inline-block p-3 rounded-xl bg-blue-500/20 mb-4">
                                <Mail size={28} className="text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{dict.contact.email.title}</h3>
                            <p className="text-gray-400 mb-4">{dict.contact.email.desc}</p>
                            <a href="mailto:lymin80@gmail.com" className="text-blue-400 hover:underline font-bold">
                                lymin80@gmail.com
                            </a>
                        </div>

                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                            <div className="inline-block p-3 rounded-xl bg-neon-purple/20 mb-4">
                                <MessageCircle size={28} className="text-neon-purple" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{dict.contact.bug.title}</h3>
                            <p className="text-gray-400 mb-4">{dict.contact.bug.desc}</p>
                            <a href="mailto:lymin80@gmail.com" className="text-neon-purple hover:underline font-bold">
                                lymin80@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex items-start gap-4">
                            <div className="p-2 rounded-lg bg-neon-green/20">
                                <Clock size={20} className="text-neon-green" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-1">{dict.contact.response.title}</h4>
                                <p className="text-gray-400 text-sm">{dict.contact.response.desc}</p>
                            </div>
                        </div>

                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex items-start gap-4">
                            <div className="p-2 rounded-lg bg-neon-gold/20">
                                <MapPin size={20} className="text-neon-gold" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-1">{dict.contact.region.title}</h4>
                                <p className="text-gray-400 text-sm">{dict.contact.region.desc}</p>
                            </div>
                        </div>
                    </div>
                </FadeInView>

                {/* AdSense Unit */}
                <div className="mb-16">
                    <AdUnit
                        slotId="5712499147"
                        className="w-full text-center"
                        style={{ minHeight: '100px' }}
                    />
                </div>

                {/* FAQ - wrapped in FadeInView for animation */}
                <FadeInView className="mt-16">
                    <h2 className="text-3xl font-black mb-8 font-display text-center">{dict.contact.faq.title} <span className="text-neon-gold">{dict.contact.faq.subtitle}</span></h2>
                    <div className="space-y-6">
                        {dict.contact.faq.items.map((faq, i) => (
                            <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <h3 className="text-lg font-bold mb-3 text-white">{faq.q}</h3>
                                <p className="text-gray-400 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </FadeInView>
            </div>
        </section>
    );
}
