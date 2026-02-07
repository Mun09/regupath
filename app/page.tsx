'use client';

import { LanguageProvider } from '@/components/LanguageProvider';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemSolution from '@/components/ProblemSolution';
import AgentJourney from '@/components/AgentJourney';
import Scenarios from '@/components/Scenarios';
import EarlyAccess from '@/components/EarlyAccess';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen overflow-x-hidden">
        {/* Fixed Navigation */}
        <Navbar />

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <Hero />

          {/* Problem & Solution Section */}
          <ProblemSolution />

          {/* Core Feature: Agent Journey */}
          <AgentJourney />

          {/* Use Cases / Scenarios */}
          <Scenarios />

          {/* Early Access Section */}
          <EarlyAccess />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
}
