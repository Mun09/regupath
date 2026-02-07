'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Language = 'en' | 'ko';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
    en: {
        // Nav
        'nav.features': 'Features',
        'nav.scenario': 'Use Cases',
        'nav.earlyAccess': 'Early Access',

        // Hero
        'hero.headline': 'Navigate the Regulatory Maze with AI Intelligence.',
        'hero.subheadline': 'Simulate your business strategy against complex regulations. Identify risks, get legal references, and find your safe path instantly.',
        'hero.cta': 'Request Early Access',

        // Problem & Solution
        'problem.title': 'Why MIRI?',
        'problem.before.title': 'Without MIRI',
        'problem.before.item1': 'Hours spent deciphering legal jargon',
        'problem.before.item2': 'Missed compliance deadlines',
        'problem.before.item3': 'Expensive legal consultations',
        'problem.before.item4': 'Uncertainty about regulatory requirements',
        'problem.after.title': 'With MIRI',
        'problem.after.item1': 'Instant AI-powered regulatory analysis',
        'problem.after.item2': 'Proactive risk identification',
        'problem.after.item3': 'Clear, actionable guidance',
        'problem.after.item4': 'Confidence in every business decision',

        // Features
        'features.title': 'Your AI-Powered Regulatory Journey',
        'features.subtitle': 'Experience a new way to navigate complex regulations with intelligent guidance at every step.',
        'features.journey.title': 'Journey Point Analysis',
        'features.journey.desc': 'The AI agent breaks down your business plan into clear execution steps, mapping each phase of your journey through the regulatory landscape.',
        'features.risk.title': 'Risk Flagging',
        'features.risk.desc': 'Instantly identify potential regulatory blockers at each step. Get early warnings before they become costly problems.',
        'features.legal.title': 'Legal References',
        'features.legal.desc': 'Access exact citations from relevant laws and precedents. Our reliable RAG system ensures accuracy you can trust.',

        // Scenarios
        'scenario.title': 'Use Cases',
        'scenario.subtitle': 'See how MIRI helps businesses navigate regulations',
        'scenario.1.title': 'Startup Launch',
        'scenario.1.user': 'I want to launch a fintech payment service in Korea.',
        'scenario.1.response': 'Based on your business plan, here are the key regulatory checkpoints:\n\n1. Electronic Financial Transactions Act registration required\n2. Personal Information Protection Act compliance needed\n3. Anti-Money Laundering (AML) requirements apply\n\n⚠️ Risk: Operating without registration carries penalties up to 50M KRW.',
        'scenario.2.title': 'Market Expansion',
        'scenario.2.user': 'We want to expand our food delivery service to Japan.',
        'scenario.2.response': 'Cross-border expansion analysis:\n\n1. Food Sanitation Act compliance required\n2. Local business registration in Japan needed\n3. Consumer protection regulations apply\n\n✓ Your current Korean licenses can expedite the process.',
        'scenario.3.title': 'New Product Launch',
        'scenario.3.user': 'Planning to sell health supplements online.',
        'scenario.3.response': 'E-commerce health product requirements:\n\n1. Health Functional Foods Act registration\n2. Advertising review by KFDA required\n3. Product liability insurance recommended\n\n⚠️ Warning: Health claims require pre-approval.',

        // Early Access
        'early.title': 'Be Among the First',
        'early.subtitle': 'Join our exclusive early access program and shape the future of regulatory navigation.',
        'early.badge': 'Limited Beta Access',
        'early.cta': 'Apply for Early Access',
        'early.promise': 'We will send the product to this email address FIRST as soon as it is ready.',
        'early.benefit1': 'Priority access',
        'early.benefit2': 'Direct feedback channel',
        'early.benefit3': 'Exclusive features',

        // Footer
        'footer.copyright': '© 2024 MIRI. All rights reserved.',
        'footer.tagline': 'Navigating regulations, powered by AI.',
    },
    ko: {
        // Nav
        'nav.features': '주요 기능',
        'nav.scenario': '사용 사례',
        'nav.earlyAccess': '얼리 액세스',

        // Hero
        'hero.headline': '복잡한 규제, AI가 길을 찾아드립니다.',
        'hero.subheadline': '사업 계획을 입력하면 AI가 관련 규제를 분석하고, 리스크를 사전에 알려드리며, 법적 근거까지 제시합니다.',
        'hero.cta': '얼리 액세스 신청하기',

        // Problem & Solution
        'problem.title': '왜 미리인가요?',
        'problem.before.title': '미리 없이는',
        'problem.before.item1': '법률 용어 해석에만 수시간 소요',
        'problem.before.item2': '놓치기 쉬운 컴플라이언스 일정',
        'problem.before.item3': '부담되는 법률 자문 비용',
        'problem.before.item4': '어떤 규제가 적용되는지 막막함',
        'problem.after.title': '미리와 함께라면',
        'problem.after.item1': 'AI가 즉시 관련 규제를 분석',
        'problem.after.item2': '리스크를 미리 파악하고 대비',
        'problem.after.item3': '구체적인 조치 방법 안내',
        'problem.after.item4': '확신을 가지고 사업 결정',

        // Features
        'features.title': 'AI 규제 네비게이션',
        'features.subtitle': '사업의 각 단계에서 필요한 규제 정보를 정확하게 안내받으세요.',
        'features.journey.title': '사업 단계 분석',
        'features.journey.desc': 'AI가 사업 계획을 단계별로 분석하여 각 시점에 필요한 규제 사항을 매핑합니다.',
        'features.risk.title': '리스크 사전 감지',
        'features.risk.desc': '각 단계에서 발생할 수 있는 규제 리스크를 미리 알려드립니다. 문제가 커지기 전에 대응하세요.',
        'features.legal.title': '법적 근거 제시',
        'features.legal.desc': '관련 법률과 판례의 정확한 조항을 제시합니다. 신뢰할 수 있는 RAG 시스템이 정확성을 보장합니다.',

        // Scenarios
        'scenario.title': '이런 상황에서 사용하세요',
        'scenario.subtitle': '미리가 실제로 어떻게 도움을 주는지 확인해보세요',
        'scenario.1.title': '스타트업 창업',
        'scenario.1.user': '한국에서 핀테크 결제 서비스를 시작하려고 합니다.',
        'scenario.1.response': '사업 계획을 분석한 결과, 다음 규제 사항들이 해당됩니다:\n\n1. 전자금융거래법에 따른 등록 필요\n2. 개인정보보호법 준수 사항 확인\n3. 자금세탁방지(AML) 의무 적용\n\n⚠️ 주의: 미등록 영업 시 최대 5천만원 과태료 부과',
        'scenario.2.title': '해외 시장 진출',
        'scenario.2.user': '음식 배달 서비스를 일본으로 확장하려고 합니다.',
        'scenario.2.response': '해외 진출 규제 분석 결과:\n\n1. 일본 식품위생법 준수 필요\n2. 현지 사업자 등록 절차 필요\n3. 소비자보호 관련 규정 적용\n\n✓ 현재 보유한 한국 인허가가 절차 간소화에 도움됩니다.',
        'scenario.3.title': '신제품 출시',
        'scenario.3.user': '건강기능식품을 온라인으로 판매하려고 합니다.',
        'scenario.3.response': '온라인 건강기능식품 판매 요건:\n\n1. 건강기능식품법에 따른 영업 등록\n2. 식약처 광고 사전심의 필요\n3. 제조물책임보험 가입 권장\n\n⚠️ 주의: 건강 관련 표현은 사전 승인 필요',

        // Early Access
        'early.title': '가장 먼저 사용해보세요',
        'early.subtitle': '클로즈드 베타에 참여하시면, 제품 출시 시 가장 먼저 연락드립니다.',
        'early.badge': '클로즈드 베타 모집 중',
        'early.cta': '얼리 액세스 신청',
        'early.promise': '제품이 준비되는 대로 신청하신 이메일로 가장 먼저 안내드리겠습니다.',
        'early.benefit1': '우선 사용권',
        'early.benefit2': '개발팀 직접 소통',
        'early.benefit3': '베타 전용 기능',

        // Footer
        'footer.copyright': '© 2024 미리(MIRI). All rights reserved.',
        'footer.tagline': 'AI로 규제의 길을 찾다',
    },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>('en');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const savedLang = localStorage.getItem('regupath-lang') as Language;
        if (savedLang) {
            setLanguageState(savedLang);
            return;
        }

        const browserLang = navigator.language.toLowerCase();
        if (browserLang.startsWith('ko')) {
            setLanguageState('ko');
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('regupath-lang', lang);
    };

    const t = (key: string): string => {
        return translations[language][key] || key;
    };

    if (!mounted) {
        return (
            <LanguageContext.Provider value={{ language: 'en', setLanguage, t: (key) => translations.en[key] || key }}>
                {children}
            </LanguageContext.Provider>
        );
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
