import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Reveal } from '../components/Reveal';
import { NeuralBackground } from '../components/NeuralBackground';
import { useSEO } from '../hooks/useSEO';
import { ArrowRight, Target, Users, Award, TrendingUp, Globe } from 'lucide-react';

export default function About() {
  useSEO({
    title: 'About',
    description: 'Learn about Drag AI, our engineering-first approach to AI consulting, and meet our founders. We build production-ready AI systems, not demos.',
    canonical: '/about',
  });

  const founders = [
    {
      name: 'Deepesh Agrawal',
      role: 'Technical Founder',
      bio: 'AI Architect specializing in production-ready GenAI systems, RAG architectures, and agentic workflows. Builds scalable, reliable AI infrastructure.',
      expertise: ['LLM Systems', 'RAG Architecture', 'Agentic AI', 'MLOps'],
      responsibilities: [
        'Technical architecture & system design',
        'AI implementation & optimization',
      ],
    },
    {
      name: 'Nishit Gupta',
      role: 'Business Founder',
      bio: 'Leads strategy, partnerships, and client success. Translates business challenges into AI solutions with measurable ROI.',
      expertise: ['Business Strategy', 'AI Consulting', 'Client Success'],
      responsibilities: [
        'Client partnerships & engagement',
        'Business strategy & growth',
      ],
    },
  ];

  const principles = [
    {
      icon: <Target className="h-5 w-5" />,
      title: 'Engineering Excellence',
      description: 'Robust architecture, clean code, and maintainable systems built for long-term success.',
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: 'Production-First',
      description: 'Every solution is designed to handle edge cases, scale effectively, and evolve with your business.',
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: 'Transparent Partnership',
      description: 'Honest communication about feasibility, timelines, and what will truly deliver business value.',
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      title: 'Deep Expertise',
      description: 'Hands-on experience with LLMs, RAG, agentic workflows, and enterprise AI deployment.',
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: 'Business Outcomes',
      description: 'Technology serves business goals. We align AI capabilities with measurable objectives and ROI.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
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
                  We're an AI consulting company focused on building production-grade systems that deliver real business value—from RAG pipelines to multi-agent workflows.
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
                        Est. 2024
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-gradient-to-br from-[hsl(var(--accent-purple))]/10 to-[hsl(var(--accent-pink))]/5">
                        <div className="text-2xl font-bold text-[hsl(var(--accent-purple))] mb-1">
                          5+
                        </div>
                        <div className="text-xs text-muted-foreground">
                          AI Services
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-gradient-to-br from-[hsl(var(--accent-purple))]/10 to-[hsl(var(--accent-pink))]/5">
                        <div className="text-2xl font-bold text-[hsl(var(--accent-purple))] mb-1">
                          7+
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Industries
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-gradient-to-br from-[hsl(var(--accent-purple))]/10 to-[hsl(var(--accent-pink))]/5">
                        <div className="text-2xl font-bold text-[hsl(var(--accent-purple))] mb-1">
                          100%
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Production-Ready
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-gradient-to-br from-[hsl(var(--accent-purple))]/10 to-[hsl(var(--accent-pink))]/5">
                        <div className="text-2xl font-bold text-[hsl(var(--accent-purple))] mb-1">
                          Global
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Reach
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-[hsl(var(--accent-purple))] animate-pulse" />
                        <span className="text-xs text-muted-foreground">
                          Based in Bengaluru, India
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

      {/* Mission */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/30">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6">
                Our Mission
              </h2>
              <div className="space-y-4 text-base text-foreground/90 leading-relaxed">
                <p>
                  We bridge the gap between AI capabilities and real-world business applications. Organizations need production-ready systems, not just promising demos.
                </p>
                <p>
                  Our approach: understand your problem, design the right architecture, and build systems your team can maintain and evolve. No vendor lock-in, no black boxes—just clean, documented AI infrastructure.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
                Our Principles
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                The values that guide how we work with clients and build systems
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle, idx) => (
              <Reveal key={idx} delay={0.1 * (idx % 3)}>
                <Card className="p-6 card-hover group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-pink))]/10 flex items-center justify-center mb-4 text-[hsl(var(--accent-purple))] group-hover:scale-110 transition-transform">
                    {principle.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-3 group-hover:text-[hsl(var(--accent-purple))] transition-colors">{principle.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/30">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
                Meet the Founders
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Technical depth meets business strategy
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {founders.map((founder, idx) => (
              <Reveal key={idx} delay={0.1 * idx}>
                <Card className="p-8 card-hover group border-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[hsl(var(--accent-purple))]/20 to-[hsl(var(--accent-pink))]/15 flex items-center justify-center">
                      <span className="text-xl font-semibold text-[hsl(var(--accent-purple))]">
                        {founder.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl group-hover:text-[hsl(var(--accent-purple))] transition-colors">{founder.name}</h3>
                      <p className="text-sm text-[hsl(var(--accent-purple))]">
                        {founder.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {founder.bio}
                  </p>
                  
                  <div className="mb-4">
                    <p className="font-semibold text-sm mb-2">Focus Areas:</p>
                    <ul className="space-y-1">
                      {founder.responsibilities.map((resp, respIdx) => (
                        <li key={respIdx} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-[hsl(var(--accent-purple))] mr-2">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {founder.expertise.map((skill, skillIdx) => (
                      <Badge key={skillIdx} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Model */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
                How We Engage
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: 'Consulting', desc: 'Strategy and architecture for AI transformation. Identify use cases, design roadmaps, build internal capabilities.', duration: 'Ongoing' },
              { title: 'Development', desc: 'End-to-end implementation of AI systems. Iterative sprints with regular demos and clear deliverables.', duration: '2-6 months' },
              { title: 'Proof of Concept', desc: 'Rapid prototyping to validate use cases. Technical feasibility, cost analysis, and production pathway.', duration: '2-4 weeks' },
            ].map((item, idx) => (
              <Reveal key={idx} delay={0.1 * idx}>
                <Card className="p-6 card-hover group">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-lg group-hover:text-[hsl(var(--accent-purple))] transition-colors">{item.title}</h3>
                    <Badge variant="outline" className="text-xs">{item.duration}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[hsl(var(--accent-purple))]/5 to-[hsl(var(--accent-pink))]/5">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
              Let's Work Together
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8">
              Explore how Drag AI can accelerate your AI initiatives
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-[hsl(var(--accent-purple))] text-[hsl(var(--accent-purple-foreground))] hover:brightness-110 shadow-lg hover:shadow-xl transition-all"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
