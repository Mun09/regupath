'use client';

import { useLanguage } from './LanguageProvider';

export default function Footer() {
    const { t, language } = useLanguage();

    return (
        <footer className="py-12 px-4 border-t border-white/10">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col items-center gap-4">
                    {/* Logo & Tagline */}
                    <div className="text-center">
                        <span className="text-xl font-bold text-white">{language === 'ko' ? '미리' : 'MIRI'}</span>
                        <p className="text-sm text-slate-400 mt-2">{t('footer.tagline')}</p>
                    </div>

                    {/* Copyright */}
                    <p className="text-sm text-slate-500">{t('footer.copyright')}</p>
                </div>
            </div>
        </footer>
    );
}
