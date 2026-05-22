import { useSEO } from '../hooks/useSEO';
import { HomeHero } from '../components/home/HomeHero';
import {
  WhatWeDoSection,
  CapabilitiesSection,
  ProcessSection,
  IndustriesSection,
  WhyDragAISection,
  FoundersSection,
  HomeFinalCTA,
} from '../components/home/HomeSections';

const HOME_JSON_LD = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Drag AI — Production-Grade Agentic AI Systems',
    url: 'https://drag-ai.com/',
    isPartOf: { '@type': 'WebSite', name: 'Drag AI', url: 'https://drag-ai.com' },
    about: 'Agentic AI, RAG, document intelligence, voice AI, predictive analytics, AI consulting',
    inLanguage: 'en-GB',
  },
];

export default function Home() {
  useSEO({
    title: 'Agentic AI Systems for Business | Production-Grade AI Agents',
    description:
      'Build production-grade agentic AI systems with Drag AI. Custom AI agents, autonomous workflows, RAG, document intelligence, voice AI, and predictive analytics for modern businesses.',
    canonical: '/',
    jsonLd: HOME_JSON_LD,
  });

  return (
    <div className="flex flex-col">
      <HomeHero />
      <WhatWeDoSection />
      <CapabilitiesSection />
      <ProcessSection />
      <IndustriesSection />
      <WhyDragAISection />
      <FoundersSection />
      <HomeFinalCTA />
    </div>
  );
}
