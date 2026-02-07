'use client';

import { Route, AlertTriangle, BookOpen } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

export default function AgentJourney() {
    const { t } = useLanguage();

    const features = [
        {
            icon: Route,
            title: t('features.journey.title'),
            desc: t('features.journey.desc'),
            step: 1,
        },
        {
            icon: AlertTriangle,
            title: t('features.risk.title'),
            desc: t('features.risk.desc'),
            step: 2,
        },
        {
            icon: BookOpen,
            title: t('features.legal.title'),
            desc: t('features.legal.desc'),
            step: 3,
        },
    ];

    return (
        <section id="features" className="py-24 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        {t('features.title')}
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        {t('features.subtitle')}
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="relative">
                            {/* Journey Node */}
                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-white">{feature.step}</span>
                                </div>
                            </div>

                            {/* Card */}
                            <div className="glass-card rounded-2xl p-6 h-full">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-teal-500/20">
                                        <feature.icon className="w-6 h-6 text-teal-400" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                                </div>
                                <p className="text-slate-400 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
