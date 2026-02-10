'use client';

import { User, Bot, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageProvider';

interface Scene {
    text: string;
    status: 'pass' | 'risk' | 'critical';
}

interface Scenario {
    title: string;
    titleKo: string;
    user: string;
    userKo: string;
    scenes: Scene[];
    scenesKo: Scene[];
    riskTitle: string;
    riskTitleKo: string;
    riskLaw: string;
    riskLawKo: string;
    suggestion: string;
    suggestionKo: string;
}

const scenarios: Scenario[] = [
    {
        title: 'Local Delivery + Secondhand Trading Platform',
        titleKo: '동네 기반 중고거래 + 심부름 매칭 플랫폼',
        user: 'I want to make an app like Karrot Market but with an added feature where neighbors can deliver items for a small fee when buyers can\'t pick them up.',
        userKo: '당근마켓처럼 중고거래도 하고, 물건을 구매자가 직접 못 갈 때 동네 사람이 대신 배달해 주는 심부름 기능을 합친 앱을 만들고 싶어.',
        scenes: [
            { text: 'Scene 1: A sells secondhand item to B (regular trade)', status: 'pass' },
            { text: 'Scene 2: C delivers item for 3,000 won fee (paid transport)', status: 'risk' },
        ],
        scenesKo: [
            { text: 'Scene 1: A가 B에게 중고 물품 판매 (일반 거래)', status: 'pass' },
            { text: 'Scene 2: C가 배달비 3천 원을 받고 물건을 대신 배달함 (유상 운송)', status: 'risk' },
        ],
        riskTitle: 'Violation of prohibition on paid transport using private vehicles',
        riskTitleKo: '자가용 유상 운송 금지 조항 위반 가능성',
        riskLaw: 'Trucking Transport Business Act Article 56. Using private vehicles for paid goods transport may be illegal.',
        riskLawKo: '화물자동차 운수사업법 제56조 (유상운송의 금지). 자가용으로 돈을 받고 물건을 나르는 행위는 불법 소지가 높음.',
        suggestion: 'Limit delivery to licensed carriers or apply for regulatory sandbox exemption.',
        suggestionKo: '배달원을 전문 운송사업자로 한정하거나, 규제 샌드박스 실증 특례 확인 필요.',
    },
    {
        title: 'AI Legal Consultation Chatbot (B2C)',
        titleKo: 'AI 기반 법률 상담 챗봇 (B2C)',
        user: 'I want to create an AI that learns from case law and provides legal advice on divorce and inheritance, even drafting legal documents.',
        userKo: '판례 데이터를 학습해서 일반인이 이혼, 상속 질문을 하면 변호사처럼 답변해 주고 소장까지 작성해 주는 AI를 만들래.',
        scenes: [
            { text: 'Scene 1: User inputs situation and searches precedents', status: 'pass' },
            { text: 'Scene 2: AI gives specific judgment: "You can claim 30M won in consolation money"', status: 'risk' },
            { text: 'Scene 3: AI drafts legal documents and charges a fee', status: 'critical' },
        ],
        scenesKo: [
            { text: 'Scene 1: 사용자가 상황을 입력하고 판례를 검색함', status: 'pass' },
            { text: 'Scene 2: AI가 "이 경우에는 위자료 3천만 원 청구가 가능합니다"라고 구체적 판단을 내림', status: 'risk' },
            { text: 'Scene 3: AI가 소장을 대신 작성해주고 이용료 결제 받음', status: 'critical' },
        ],
        riskTitle: 'Attorney-at-Law Act violation (non-attorney handling legal matters)',
        riskTitleKo: '변호사법 위반 (비변호사의 법률 사무 취급)',
        riskLaw: 'Attorney-at-Law Act Article 109. Non-attorneys providing paid legal judgments or document drafting is subject to criminal punishment.',
        riskLawKo: '변호사법 제109조. AI가 변호사가 아니므로 유료로 법률적 판단이나 서류 작성을 대행하면 형사 처벌 대상.',
        suggestion: 'Limit scope to "legal information provision" or pivot to a lawyer referral platform model.',
        suggestionKo: '"법률 정보 제공"으로 범위를 축소하거나, 변호사 중개 플랫폼 모델로 변경 필요.',
    },
    {
        title: 'P2P Currency Exchange for Travelers',
        titleKo: '여행객 대상 환전 직거래 장터',
        user: 'An app where travelers can exchange leftover foreign currency directly with each other, bypassing banks, with no fees - just the standard rate.',
        userKo: '해외여행 남은 돈을 은행 안 거치고 여행객끼리 만나서 직거래하는 앱. 수수료 없이 기준율로만 거래.',
        scenes: [
            { text: 'Scene 1: Travelers arrange meetings via in-app bulletin board', status: 'pass' },
            { text: 'Scene 2: App provides KRW ↔ USD transfer function', status: 'risk' },
            { text: 'Scene 3: High-value transactions over $5,000 occur', status: 'risk' },
        ],
        scenesKo: [
            { text: 'Scene 1: 여행객끼리 앱 내 게시판에서 만남 약속', status: 'pass' },
            { text: 'Scene 2: 앱 내에서 원화 ↔ 달러 송금 기능 제공', status: 'risk' },
            { text: 'Scene 3: 5천 달러 이상의 고액 거래 발생', status: 'risk' },
        ],
        riskTitle: 'Foreign Exchange Transactions Act registration and AML obligations',
        riskTitleKo: '외국환거래법상 환전업 등록 의무 및 자금세탁방지(AML) 의무',
        riskLaw: 'Foreign Exchange Transactions Act Article 8. Repeated P2P exchange mediation may be considered unregistered foreign exchange business.',
        riskLawKo: '외국환거래법 제8조. 개인 간의 반복적인 환전 중개는 무등록 외국환 업무로 간주될 수 있음.',
        suggestion: 'Apply for small-amount exchange regulatory sandbox or limit to information-sharing community only.',
        suggestionKo: '소액 환전 규제 샌드박스 신청 또는 단순 정보 공유 커뮤니티로 제한.',
    },
];

export default function Scenarios() {
    const { language } = useLanguage();
    const isKo = language === 'ko';

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'pass':
                return <CheckCircle className="w-4 h-4 text-green-400" />;
            case 'risk':
                return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
            case 'critical':
                return <XCircle className="w-4 h-4 text-red-400" />;
            default:
                return null;
        }
    };

    const getStatusBg = (status: string) => {
        switch (status) {
            case 'pass':
                return 'bg-green-500/10 border-green-500/20';
            case 'risk':
                return 'bg-yellow-500/10 border-yellow-500/20';
            case 'critical':
                return 'bg-red-500/10 border-red-500/20';
            default:
                return '';
        }
    };

    const getStatusLabel = (status: string) => {
        switch (status) {
            case 'pass':
                return isKo ? '통과' : 'Pass';
            case 'risk':
                return isKo ? '위험 감지!' : 'Risk Found!';
            case 'critical':
                return isKo ? '심각한 위험!' : 'Critical Risk!';
            default:
                return '';
        }
    };

    return (
        <>
            {/* Title Section */}
            <section id="scenarios" className="min-h-screen md:h-screen w-full snap-start snap-always flex items-center justify-center px-4 relative py-20 md:py-0 overflow-hidden">
                <div className="text-center max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
                    >
                        {isKo ? '내 사업 아이디어,\n규제에 걸릴까?' : 'Will My Business\nFace Regulations?'}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg sm:text-xl md:text-2xl text-slate-400"
                    >
                        {isKo ? '다양한 사업 시나리오로 미리 확인해보세요.' : 'Check with real-world business scenarios.'}
                    </motion.p>
                </div>
            </section>

            {/* Individual Scenario Sections */}
            {scenarios.map((scenario, index) => (
                <section key={index} id={`scenario-${index}`} className="min-h-screen md:h-screen w-full snap-start snap-always flex items-center justify-center p-4 relative py-20 md:py-4 overflow-hidden">
                    {/* Background Number */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] md:text-[400px] font-bold text-white/[0.02] pointer-events-none select-none z-0">
                        {index + 1}
                    </div>

                    <div className="max-w-4xl w-full z-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="glass rounded-3xl p-5 md:p-8 lg:p-10"
                        >
                            {/* Scenario Title */}
                            <div className="mb-6 md:mb-8 text-center md:text-left">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/20 text-teal-400 text-sm font-semibold mb-2">
                                    CASE {index + 1}
                                </span>
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                                    {isKo ? scenario.titleKo : scenario.title}
                                </h3>
                            </div>

                            {/* Chat Style UI */}
                            <div className="space-y-6">
                                {/* User Message */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                    className="flex gap-3 md:gap-4"
                                >
                                    <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-700 flex items-center justify-center">
                                        <User className="w-4 h-4 md:w-5 md:h-5 text-slate-300" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-sm font-medium text-slate-400 mb-1 ml-1">{isKo ? '사업자' : 'Business Owner'}</div>
                                        <div className="inline-block bg-slate-800 rounded-3xl rounded-tl-none px-5 py-3 md:px-6 md:py-4 text-slate-200 text-base md:text-lg leading-relaxed shadow-lg">
                                            {isKo ? scenario.userKo : scenario.user}
                                        </div>
                                    </div>
                                </motion.div>

                                {/* AI Response */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6, duration: 0.5 }}
                                    className="flex gap-3 md:gap-4"
                                >
                                    <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center shadow-lg shadow-teal-500/20">
                                        <Bot className="w-4 h-4 md:w-5 md:h-5 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-sm font-medium text-slate-400 mb-1 ml-1">{isKo ? '미리 AI' : 'MIRI AI'}</div>
                                        <div className="glass-card rounded-3xl rounded-tl-none p-4 md:p-6 space-y-4 md:space-y-5">

                                            {/* Scenes */}
                                            <div className="space-y-2 md:space-y-3">
                                                {(isKo ? scenario.scenesKo : scenario.scenes).map((scene, sIndex) => (
                                                    <motion.div
                                                        key={sIndex}
                                                        initial={{ opacity: 0, y: 10 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: 1.0 + (sIndex * 0.2), duration: 0.4 }}
                                                        className={`flex items-start md:items-center gap-3 p-3 rounded-xl border ${getStatusBg(scene.status)}`}
                                                    >
                                                        <span className="flex-shrink-0 mt-0.5 md:mt-0">{getStatusIcon(scene.status)}</span>
                                                        <span className="text-sm md:text-base text-slate-200 flex-1 font-medium">{scene.text}</span>
                                                        <span className={`text-[10px] md:text-xs px-2 py-0.5 md:px-2.5 md:py-1 rounded-md font-bold uppercase tracking-wide whitespace-nowrap ${scene.status === 'pass' ? 'bg-green-500/20 text-green-400' :
                                                            scene.status === 'risk' ? 'bg-yellow-500/20 text-yellow-400' :
                                                                'bg-red-500/20 text-red-400'
                                                            }`}>
                                                            {getStatusLabel(scene.status)}
                                                        </span>
                                                    </motion.div>
                                                ))}
                                            </div>

                                            {/* Risk Report */}
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 1.6, duration: 0.5 }}
                                                className="border-t border-white/10 pt-4 md:pt-5 space-y-3 md:space-y-4"
                                            >
                                                <div className="flex flex-col gap-1">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className="text-xs md:text-sm font-bold text-red-400 uppercase tracking-widest">{isKo ? '위험 감지' : 'RISK DETECTED'}</span>
                                                        <div className="h-px bg-red-500/30 flex-1"></div>
                                                    </div>
                                                    <div className="text-base md:text-lg font-semibold text-white leading-snug">
                                                        {isKo ? scenario.riskTitleKo : scenario.riskTitle}
                                                    </div>
                                                </div>

                                                <div className="glass-light rounded-xl p-3 md:p-4 text-sm space-y-3">
                                                    <div>
                                                        <span className="text-slate-400 block text-xs uppercase tracking-wider mb-1">{isKo ? '법적 근거' : 'Legal Basis'}</span>
                                                        <span className="text-slate-200 leading-relaxed block">{isKo ? scenario.riskLawKo : scenario.riskLaw}</span>
                                                    </div>
                                                    <div>
                                                        <span className="text-teal-400 block text-xs uppercase tracking-wider mb-1">{isKo ? '미리의 제안' : 'Suggestion'}</span>
                                                        <span className="text-slate-200 leading-relaxed block">{isKo ? scenario.suggestionKo : scenario.suggestion}</span>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            ))}
        </>
    );
}
