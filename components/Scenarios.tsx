'use client';

import { User, Bot, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
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
        <section id="scenarios" className="py-24 px-4">
            <div className="max-w-5xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        {isKo ? '이런 상황에서 사용하세요' : 'Use Cases'}
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        {isKo ? '미리가 실제로 어떻게 도움을 주는지 확인해보세요' : 'See how MIRI helps businesses navigate regulations'}
                    </p>
                </div>

                {/* Scenario Cards */}
                <div className="space-y-12">
                    {scenarios.map((scenario, index) => (
                        <div key={index} className="glass rounded-2xl p-6 md:p-8">
                            {/* Scenario Title */}
                            <div className="mb-6">
                                <span className="inline-block px-3 py-1 rounded-full bg-teal-500/20 text-teal-400 text-sm font-medium">
                                    {isKo ? scenario.titleKo : scenario.title}
                                </span>
                            </div>

                            {/* Chat Style UI */}
                            <div className="space-y-6">
                                {/* User Message */}
                                <div className="flex gap-3">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
                                        <User className="w-4 h-4 text-slate-300" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-xs text-slate-500 mb-1">{isKo ? '사용자' : 'User'}</div>
                                        <div className="inline-block bg-slate-800 rounded-2xl rounded-tl-none px-4 py-3 text-slate-200">
                                            {isKo ? scenario.userKo : scenario.user}
                                        </div>
                                    </div>
                                </div>

                                {/* AI Response */}
                                <div className="flex gap-3">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center">
                                        <Bot className="w-4 h-4 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-xs text-slate-500 mb-1">{isKo ? '미리 AI' : 'MIRI AI'}</div>
                                        <div className="glass-card rounded-2xl rounded-tl-none p-4 space-y-4">
                                            {/* Simulation Header */}
                                            <div className="text-sm text-teal-400 font-medium">
                                                {isKo ? '📋 시나리오 시뮬레이션 결과' : '📋 Scenario Simulation Results'}
                                            </div>

                                            {/* Scenes */}
                                            <div className="space-y-2">
                                                {(isKo ? scenario.scenesKo : scenario.scenes).map((scene, sIndex) => (
                                                    <div
                                                        key={sIndex}
                                                        className={`flex items-start gap-2 p-2 rounded-lg border ${getStatusBg(scene.status)}`}
                                                    >
                                                        <span className="mt-0.5">{getStatusIcon(scene.status)}</span>
                                                        <span className="text-sm text-slate-300 flex-1">{scene.text}</span>
                                                        <span className={`text-xs px-2 py-0.5 rounded ${scene.status === 'pass' ? 'bg-green-500/20 text-green-400' :
                                                            scene.status === 'risk' ? 'bg-yellow-500/20 text-yellow-400' :
                                                                'bg-red-500/20 text-red-400'
                                                            }`}>
                                                            {getStatusLabel(scene.status)}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Risk Report */}
                                            <div className="border-t border-white/10 pt-4 space-y-3">
                                                <div className="text-sm font-medium text-red-400 flex items-center gap-2">
                                                    <AlertTriangle className="w-4 h-4" />
                                                    {isKo ? '위험 보고서' : 'Risk Report'}
                                                </div>

                                                <div className="space-y-2 text-sm">
                                                    <div>
                                                        <span className="text-slate-500">{isKo ? '감지된 위험: ' : 'Detected Risk: '}</span>
                                                        <span className="text-yellow-400">{isKo ? scenario.riskTitleKo : scenario.riskTitle}</span>
                                                    </div>
                                                    <div>
                                                        <span className="text-slate-500">{isKo ? '법적 근거: ' : 'Legal Basis: '}</span>
                                                        <span className="text-slate-300">{isKo ? scenario.riskLawKo : scenario.riskLaw}</span>
                                                    </div>
                                                    <div className="flex items-start gap-1">
                                                        <span className="text-slate-500">{isKo ? '💡 제안: ' : '💡 Suggestion: '}</span>
                                                        <span className="text-teal-400">{isKo ? scenario.suggestionKo : scenario.suggestion}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
