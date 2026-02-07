import type { Metadata } from "next";
import "./globals.css";

import { headers } from 'next/headers';

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const acceptLanguage = headersList.get('accept-language');
  // Check if user is connecting from Korea or prefers Korean language
  // Note: This detection depends on the request headers sent by the crawler/bot
  const isKorean = acceptLanguage?.includes('ko') || headersList.get('x-vercel-ip-country') === 'KR';

  if (isKorean) {
    return {
      title: "미리 - AI로 규제의 길을 찾다",
      description: "사업 계획을 입력하면 AI가 관련 규제를 분석하고, 리스크를 사전에 알려드리며, 법적 근거까지 제시합니다. 복잡한 규제를 스마트하게 해결하세요.",
      keywords: ["규제", "AI", "리걸테크", "사업 전략", "리스크 관리", "창업", "스타트업"],
      openGraph: {
        title: "미리 - AI로 규제의 길을 찾다",
        description: "사업 계획을 입력하면 AI가 관련 규제를 분석하고, 리스크를 사전에 알려드리며, 법적 근거까지 제시합니다.",
        type: "website",
        locale: "ko_KR",
      },
    };
  }

  // Default English Metadata
  return {
    title: "MIRI - Navigate Regulations with AI Intelligence",
    description: "Simulate your business strategy against complex regulations. Identify risks, get legal references, and find your safe path instantly with AI-powered regulatory guidance.",
    keywords: ["regulatory compliance", "AI", "legal tech", "business strategy", "risk assessment"],
    openGraph: {
      title: "MIRI - Navigate Regulations with AI Intelligence",
      description: "Simulate your business strategy against complex regulations. Identify risks, get legal references, and find your safe path instantly.",
      type: "website",
      locale: "en_US",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
