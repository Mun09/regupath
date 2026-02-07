'use client';

import { ChevronDown, Sparkles } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

export default function Hero() {
    const { t, language } = useLanguage();

    const scrollToEarlyAccess = () => {
        const element = document.getElementById('early-access');
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
            {/* Background effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />

                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                         linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}
                />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-8">
                    <Sparkles className="w-4 h-4 text-teal-400" />
                    <span className="text-sm text-slate-300">AI-Powered Regulatory Navigation</span>
                </div>

                {/* Headline */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                    {language === 'ko' ? (
                        <>
                            <span className="text-white">복잡한 규제,</span>
                            <br />
                            <span className="gradient-text">AI가 길을 찾아드립니다.</span>
                        </>
                    ) : (
                        <>
                            <span className="text-white">Navigate the Regulatory Maze</span>{' '}
                            <span className="gradient-text">with AI Intelligence.</span>
                        </>
                    )}
                </h1>

                {/* Subheadline */}
                <p className="text-lg sm:text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                    {t('hero.subheadline')}
                </p>

                {/* CTA Button */}
                <button
                    onClick={scrollToEarlyAccess}
                    className="btn-glow px-8 py-4 rounded-full text-lg font-semibold text-white cursor-pointer"
                >
                    {t('hero.cta')}
                </button>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                    <ChevronDown className="w-8 h-8 text-slate-500" />
                </div>
            </div>
        </section>
    );
}
