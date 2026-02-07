'use client';

import { XCircle, CheckCircle, Clock, AlertTriangle, DollarSign, HelpCircle, Zap, Shield, Compass, ThumbsUp } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

export default function ProblemSolution() {
    const { t } = useLanguage();

    const beforeItems = [
        { icon: Clock, text: t('problem.before.item1') },
        { icon: AlertTriangle, text: t('problem.before.item2') },
        { icon: DollarSign, text: t('problem.before.item3') },
        { icon: HelpCircle, text: t('problem.before.item4') },
    ];

    const afterItems = [
        { icon: Zap, text: t('problem.after.item1') },
        { icon: Shield, text: t('problem.after.item2') },
        { icon: Compass, text: t('problem.after.item3') },
        { icon: ThumbsUp, text: t('problem.after.item4') },
    ];

    return (
        <section id="problem-solution" className="py-24 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        {t('problem.title')}
                    </h2>
                </div>

                {/* Comparison Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Before - Problems */}
                    <div className="glass rounded-2xl p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/20 rounded-full blur-3xl" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-lg bg-red-500/20">
                                    <XCircle className="w-6 h-6 text-red-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-white">{t('problem.before.title')}</h3>
                            </div>

                            <ul className="space-y-4">
                                {beforeItems.map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 text-slate-300">
                                        <item.icon className="w-5 h-5 text-red-400 flex-shrink-0" />
                                        <span>{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* After - Solutions */}
                    <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/30 rounded-full blur-3xl" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-lg bg-teal-500/20">
                                    <CheckCircle className="w-6 h-6 text-teal-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-white">{t('problem.after.title')}</h3>
                            </div>

                            <ul className="space-y-4">
                                {afterItems.map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 text-slate-200">
                                        <item.icon className="w-5 h-5 text-teal-400 flex-shrink-0" />
                                        <span>{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
