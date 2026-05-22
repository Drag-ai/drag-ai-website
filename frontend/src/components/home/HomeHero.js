import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Reveal } from '../Reveal';
import { NeuralBackground } from '../NeuralBackground';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const focusItems = [
  { id: 'agentic-automation', title: 'Agentic AI Workflow Automation', desc: 'Autonomous, tool-using agents that execute multi-step business workflows safely.' },
  { id: 'rag-knowledge', title: 'Enterprise RAG Systems', desc: 'Source-grounded knowledge assistants over your internal documents and data.' },
  { id: 'doc-intelligence', title: 'Document Intelligence', desc: 'Invoice, contract, lease, and report extraction with validation and human review.' },
  { id: 'chatbots-voice', title: 'AI Chatbots & Voice Assistants', desc: 'Customer and internal assistants across chat, voice, and multilingual channels.' },
];

const techBadges = ['Agentic AI', 'RAG', 'Doc AI', 'Voice AI'];

export const HomeHero = () => (
  <section
    className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16"
    data-testid="home-hero"
  >
    <div className="hero-gradient-purple absolute inset-0" style={{ zIndex: 0 }} />
    <div className="hero-gradient-pink absolute inset-0" style={{ zIndex: 0 }} />
    <NeuralBackground />

    <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8" style={{ zIndex: 10 }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <Reveal>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
              Production-Grade{' '}
              <span className="text-[hsl(var(--accent-purple))]">AI Agents &amp; Automation</span>{' '}
              Systems for Modern Businesses
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-prose leading-relaxed">
              Drag AI helps businesses design, build, and deploy practical AI solutions &mdash;
              from intelligent agents and RAG systems to document automation, chatbots, voice
              workflows, and predictive analytics.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-sm text-foreground/70 mb-8 max-w-prose">
              <span className="inline-block px-2 py-0.5 mr-2 rounded text-[10px] font-mono uppercase tracking-wider bg-[hsl(var(--accent-purple))]/10 text-[hsl(var(--accent-purple))] align-middle">
                UK Registered
              </span>
              AI consulting company focused on practical, secure, and measurable AI adoption.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact#ai-discovery-call">
                <Button
                  size="lg"
                  className="bg-[hsl(var(--accent-purple))] text-[hsl(var(--accent-purple-foreground))] hover:brightness-110 transition-all shadow-lg hover:shadow-xl"
                  data-testid="home-hero-book-call"
                >
                  Book a 30-Minute AI Discovery Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/solutions">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 hover:bg-secondary/70"
                  data-testid="home-hero-explore-solutions"
                >
                  Explore Solutions
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Right: What We Focus On */}
        <div className="hidden lg:block">
          <Reveal delay={0.3}>
            <Card className="p-8 card-hover border-2">
              <div className="space-y-6">
                <div className="mb-4">
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/60">
                    WHAT WE BUILD
                  </span>
                </div>

                <div className="space-y-4">
                  {focusItems.map((item) => (
                    <div key={item.id} className="flex items-start gap-3">
                      <div className="mt-1">
                        <CheckCircle2 className="h-4 w-4 text-[hsl(var(--accent-purple))]" />
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-1">{item.title}</p>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/60 block mb-3">
                    TECHNICAL FOCUS
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {techBadges.map((label) => (
                      <Badge
                        key={label}
                        variant="outline"
                        className="text-xs border-[hsl(var(--accent-purple))]/30 bg-[hsl(var(--accent-purple))]/5"
                      >
                        {label}
                      </Badge>
                    ))}
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
