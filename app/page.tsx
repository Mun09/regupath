'use client';

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Scenarios from '@/components/Scenarios';
import EarlyAccess from '@/components/EarlyAccess';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/components/LanguageProvider';

export default function Home() {
  return (
    <LanguageProvider>
      <LandingPage />
    </LanguageProvider>
  );
}

function LandingPage() {
  const { t, language } = useLanguage();
  const isKo = language === 'ko';
  const [activeSection, setActiveSection] = useState('hero');
  const containerRef = useRef<HTMLDivElement>(null);

  // Hardcoded scenario count is 3 for now, ideally this comes from data
  const sections = [
    { id: 'hero', label: isKo ? '홈' : 'Home' },
    { id: 'scenarios', label: isKo ? '시나리오 소개' : 'Scenarios Intro' },
    { id: 'scenario-0', label: isKo ? '시나리오 1' : 'Scenario 1' },
    { id: 'scenario-1', label: isKo ? '시나리오 2' : 'Scenario 2' },
    { id: 'scenario-2', label: isKo ? '시나리오 3' : 'Scenario 3' },
    { id: 'early-access', label: isKo ? '사전 신청' : 'Early Access' },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, {
      root: container,
      threshold: 0.5
    });

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef} className="relative h-screen overflow-y-scroll overflow-x-hidden md:snap-y md:snap-mandatory scrollbar-hide">
      <Navbar />

      {/* Right Side Navigation Dots */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-6 transform translate-x-1/2 md:translate-x-0">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className="group flex items-center justify-end gap-4 cursor-pointer relative py-2 pr-4 pl-8"
            aria-label={`Scroll to ${label}`}
          >
            {/* Tooltip Label (visible on hover) */}
            <span className="absolute right-12 text-sm text-teal-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap block">
              {label}
            </span>

            {/* Dot */}
            <div className={`rounded-full transition-all duration-300 border-2 ${activeSection === id
              ? 'w-4 h-4 bg-teal-400 border-teal-400 shadow-[0_0_15px_rgba(45,212,191,0.6)]'
              : 'w-3 h-3 bg-transparent border-slate-500 group-hover:border-slate-300 group-hover:bg-white/10'
              }`} />
          </button>
        ))}
      </div>

      <Hero />
      <Scenarios />
      <EarlyAccess />
      <Footer />
    </div>
  );
}
