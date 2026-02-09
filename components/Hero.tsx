'use client';


import { useLanguage } from './LanguageProvider';

export default function Hero() {
    const { t, language } = useLanguage();

    const scrollToEarlyAccess = () => {
        const element = document.getElementById('early-access');
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden px-4 py-20 snap-start snap-always">
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


                {/* Headline */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                    {language === 'ko' ? (
                        <>
                            <span className="text-white">규제 복잡하시죠?</span>
                            <br />
                            <span className="gradient-text">미리미리 준비하세요</span>
                        </>
                    ) : (
                        <>
                            <span className="text-white">Struggling with Regulatory Complexity?</span>
                            <br />
                            <span className="gradient-text">MIRI Provides Instant Legal Clarity.</span>
                        </>
                    )}
                </h1>

                {/* Subheadline */}
                <p className="text-lg sm:text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                    {language === 'ko'
                        ? "사업 시나리오만 입력하면, AI가 복잡한 법령 검색 없이 위법 여부와 규제 샌드박스 가능성을 즉시 진단합니다."
                        : "Input your business scenario. AI diagnoses legality and regulatory sandbox possibilities in seconds without complex legal searches."}
                </p>

                {/* CTA Button */}
                <button
                    onClick={scrollToEarlyAccess}
                    className="btn-glow px-8 py-4 rounded-full text-lg font-semibold text-white cursor-pointer"
                >
                    {language === 'ko' ? '지금 바로 진단하기' : 'Diagnose Now'}
                </button>


            </div>
        </section>
    );
}
