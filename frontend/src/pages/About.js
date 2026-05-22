import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Reveal } from '../components/Reveal';
import { NeuralBackground } from '../components/NeuralBackground';
import { useSEO } from '../hooks/useSEO';
import { ArrowRight } from 'lucide-react';
import {
  MissionSection,
  PrinciplesSection,
  FoundersSection,
  EngagementSection,
} from '../components/about/AboutSections';

const snapshotStats = [
  { id: 'services', value: '5+', label: 'AI Services' },
  { id: 'industries', value: '7+', label: 'Industries' },
  { id: 'production', value: '100%', label: 'Production-Ready' },
  { id: 'reach', value: 'Global', label: 'Reach' },
];

const AboutHero = () => (
  <section className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16">
    <NeuralBackground />
    <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8" style={{ zIndex: 10 }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <Reveal>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
              About <span className="text-[hsl(var(--accent-purple))]">Drag AI</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              We are an AI consulting company focused on building production-grade systems that
              deliver real business value—from RAG pipelines to multi-agent workflows. DRAG AI
              LIMITED is registered in England &amp; Wales (Company No. 17222197).
            </p>
          </Reveal>
        </div>

        <div className="hidden lg:block">
          <Reveal delay={0.2}>
            <Card className="p-8 card-hover border-2">
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/60">
                    COMPANY SNAPSHOT
                  </span>
                  <span className="text-xs font-semibold text-[hsl(var(--accent-purple))]">
                    UK Incorporated
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {snapshotStats.map((stat) => (
                    <div
                      key={stat.id}
                      className="p-4 rounded-xl bg-gradient-to-br from-[hsl(var(--accent-purple))]/10 to-[hsl(var(--accent-pink))]/5"
                    >
                      <div className="text-2xl font-bold text-[hsl(var(--accent-purple))] mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[hsl(var(--accent-purple))] animate-pulse" />
                    <span className="text-xs text-muted-foreground">
                      Registered in England &amp; Wales &middot; Company No. 17222197
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

const AboutCTA = () => (
  <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[hsl(var(--accent-purple))]/5 to-[hsl(var(--accent-pink))]/5">
    <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
      <Reveal>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
          Let&apos;s Work Together
        </h2>
        <p className="text-base md:text-lg text-muted-foreground mb-8">
          Explore how Drag AI can accelerate your AI initiatives
        </p>
        <Link to="/contact#ai-discovery-call">
          <Button
            size="lg"
            className="bg-[hsl(var(--accent-purple))] text-[hsl(var(--accent-purple-foreground))] hover:brightness-110 shadow-lg hover:shadow-xl transition-all"
            data-testid="about-cta-button"
          >
            Book a 30-Minute AI Discovery Call
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </Reveal>
    </div>
  </section>
);

export default function About() {
  useSEO({
    title: 'About Drag AI | UK AI Consulting Company Building Production Systems',
    description:
      'Drag AI Limited (Company No. 17222197) builds production-grade agentic AI, RAG, document intelligence, voice AI, and predictive analytics for businesses. Registered in England and Wales.',
    canonical: '/about',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
    ],
  });

  return (
    <div className="flex flex-col">
      <AboutHero />
      <MissionSection />
      <PrinciplesSection />
      <FoundersSection />
      <EngagementSection />
      <AboutCTA />
    </div>
  );
}
