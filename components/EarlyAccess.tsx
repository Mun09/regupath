'use client';

import { Mail, Star, MessageSquare, Sparkles } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

// Google Form URL - replace with actual form link
const GOOGLE_FORM_URL = 'https://forms.gle/H11h42wndAteWL4z7';

export default function EarlyAccess() {
    const { t } = useLanguage();

    const benefits = [
        { icon: Star, text: t('early.benefit1') },
        { icon: MessageSquare, text: t('early.benefit2') },
        { icon: Sparkles, text: t('early.benefit3') },
    ];

    return (
        <section id="early-access" className="py-24 px-4 min-h-screen md:h-screen snap-start snap-always flex items-center">
            <div className="max-w-4xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        {t('early.title')}
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        {t('early.subtitle')}
                    </p>
                </div>

                {/* Early Access Card */}
                <div className="relative">
                    <div className="glass-card rounded-3xl p-6 md:p-12 relative overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-teal-500/20 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-blue-500/20 rounded-full blur-3xl" />

                        <div className="relative z-10">
                            {/* Badge */}
                            <div className="flex justify-center mb-8">
                                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-400 text-sm font-medium">
                                    <Sparkles className="w-4 h-4" />
                                    {t('early.badge')}
                                </span>
                            </div>

                            {/* Benefits */}
                            <div className="flex flex-wrap justify-center gap-6 mb-10">
                                {benefits.map((benefit, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-2 text-slate-300"
                                    >
                                        <benefit.icon className="w-5 h-5 text-teal-400" />
                                        <span>{benefit.text}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Button - Google Form Link */}
                            <div className="flex justify-center mb-8">
                                <a
                                    href={GOOGLE_FORM_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 btn-glow px-10 py-5 rounded-full text-xl font-semibold text-white"
                                >
                                    <Mail className="w-6 h-6" />
                                    {t('early.cta')}
                                </a>
                            </div>

                            {/* Promise Message */}
                            <div className="text-center">
                                <p className="text-slate-400 text-sm md:text-base flex items-center justify-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-teal-400" />
                                    {t('early.promise')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
