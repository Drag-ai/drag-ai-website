import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Reveal } from '../Reveal';
import { Link } from 'react-router-dom';
import { Target, Users, Award, TrendingUp, Globe, Sparkles, ArrowRight } from 'lucide-react';
import { FounderCard } from '../shared/FounderCard';

const principles = [
  { id: 'business-first', Icon: Target, title: 'Business-first AI use-case discovery', description: 'We start with the workflow, the data, and the outcome — not the model or the demo.' },
  { id: 'engineering', Icon: Award, title: 'Strong technical implementation', description: 'Robust architecture, clean code, and systems built to be maintained beyond the first release.' },
  { id: 'production-thinking', Icon: TrendingUp, title: 'Production-grade architecture thinking', description: 'Observability, evaluation, fallback paths, and security designed in from day one.' },
  { id: 'roadmap', Icon: Globe, title: 'Clear PoC-to-production roadmap', description: 'A staged path from validated prototype to a deployed, monitored production system.' },
  { id: 'outcomes', Icon: Users, title: 'Focus on measurable outcomes', description: 'Cycle time, accuracy, reviewer effort, cost — defined up front and tracked in delivery.' },
];

const founders = [
  {
    id: 'deepesh',
    name: 'Deepesh Agrawal',
    role: 'Co-founder / AI Solutions Architect',
    bio: 'AI Architect with 10+ years building production-grade AI systems across Generative AI, Agentic AI, RAG, NLP, Computer Vision, and MLOps. Previously contributed to enterprise AI platforms at IBM Labs, Fujitsu Research, and AMD, and delivered AI/ML solutions for clients including Swiss Re and Capital Group at UST (Abzooba). Through Drag AI, helps businesses design and deploy custom AI agents, autonomous workflows, RAG pipelines, and scalable AI systems that move from prototype to production.',
    expertise: ['Agentic AI Systems', 'Multi-Agent Orchestration', 'RAG Pipelines', 'Production MLOps'],
    responsibilities: [
      'Technical architecture & AI system design',
      'Agent development & workflow automation',
      'Production deployment & scaling',
    ],
    experience: '10+ years | IBM Labs, Fujitsu Research, AMD, UST',
  },
  {
    id: 'nishit',
    name: 'Nishit Gupta',
    role: 'Co-founder / Business Development & Strategy',
    bio: 'Business strategist with 10+ years across technology, e-learning, market research, consulting, and client growth. Expertise in lead generation, market analysis, consultative selling, digital transformation, automation, and CRM-led campaigns. MBA in International Business from James Cook University, Australia. Brings a business-first, global perspective to AI adoption, connecting practical business needs with production-grade AI agents, autonomous workflows, and enterprise-ready systems.',
    expertise: ['Business Strategy', 'AI Transformation', 'Client Success', 'Digital Marketing'],
    responsibilities: [
      'Client partnerships & engagement',
      'Business strategy & growth',
      'Market development & lead generation',
    ],
    experience: 'MBA International Business | 10+ years Business Development',
  },
];

const engagementModels = [
  { id: 'consulting', title: 'Consulting', desc: 'Strategy and architecture for AI transformation. Identify use cases, design roadmaps, build internal capabilities.', duration: 'Ongoing' },
  { id: 'development', title: 'Development', desc: 'End-to-end implementation of AI systems. Iterative sprints with regular demos and clear deliverables.', duration: '2-6 months' },
  { id: 'poc', title: 'Proof of Concept', desc: 'Rapid prototyping to validate use cases. Technical feasibility, cost analysis, and production pathway.', duration: '2-4 weeks' },
];

export const MissionSection = () => (
  <section className="py-16 sm:py-20 lg:py-24 bg-secondary/30">
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <Reveal>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6">Our Mission</h2>
          <div className="space-y-4 text-base text-foreground/90 leading-relaxed">
            <p>
              Our mission is to help businesses move from AI curiosity to measurable AI implementation.
            </p>
            <p>
              We bridge the gap between AI capabilities and real-world business applications.
              Organisations need production-ready systems, not just promising demos. Our approach:
              understand your problem, design the right architecture, and build systems your team can
              maintain and evolve &mdash; no vendor lock-in, no black boxes, just clean, documented AI
              infrastructure.
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export const PrinciplesSection = () => (
  <section className="py-16 sm:py-20 lg:py-24">
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <Reveal>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            What Makes Us Different
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            How we think about practical, production-ready AI delivery.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {principles.map((principle, idx) => {
          const { Icon } = principle;
          return (
            <Reveal key={principle.id} delay={0.1 * (idx % 3)}>
              <Card className="p-6 card-hover group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-pink))]/10 flex items-center justify-center mb-4 text-[hsl(var(--accent-purple))] group-hover:scale-110 transition-transform">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-lg mb-3 group-hover:text-[hsl(var(--accent-purple))] transition-colors">
                  {principle.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{principle.description}</p>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

const FounderCardWithReveal = ({ founder, delay }) => (
  <Reveal delay={delay}>
    <FounderCard founder={founder} />
  </Reveal>
);

export const FoundersSection = () => (
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
          <FounderCardWithReveal key={founder.id} founder={founder} delay={0.1 * idx} />
        ))}
      </div>
    </div>
  </section>
);

export const EngagementSection = () => (
  <section className="py-16 sm:py-20 lg:py-24">
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <Reveal>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">How We Engage</h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {engagementModels.map((item, idx) => (
          <Reveal key={item.id} delay={0.1 * idx}>
            <Card className="p-6 card-hover group">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-lg group-hover:text-[hsl(var(--accent-purple))] transition-colors">
                  {item.title}
                </h3>
                <Badge variant="outline" className="text-xs">
                  {item.duration}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </Card>
          </Reveal>
        ))}
      </div>

      {/* We're hiring callout */}
      <Reveal delay={0.3}>
        <div
          className="mt-10 max-w-5xl mx-auto rounded-2xl border-2 border-[hsl(var(--accent-purple))]/20 bg-gradient-to-br from-[hsl(var(--accent-purple))]/5 to-[hsl(var(--accent-pink))]/5 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          data-testid="about-hiring-callout"
        >
          <div className="flex items-start sm:items-center gap-4">
            <div className="p-2 rounded-lg bg-[hsl(var(--accent-purple))]/10 text-[hsl(var(--accent-purple))] flex-shrink-0">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold text-base mb-1">We&apos;re growing &mdash; come build with us</p>
              <p className="text-sm text-muted-foreground">
                Open roles across engineering, design, and delivery. Remote-friendly, UK / EU preferred.
              </p>
            </div>
          </div>
          <Link to="/careers" className="w-full sm:w-auto">
            <Button
              variant="outline"
              className="w-full sm:w-auto border-2 border-[hsl(var(--accent-purple))]/40 hover:bg-[hsl(var(--accent-purple))]/10"
              data-testid="about-view-open-roles"
            >
              View Open Roles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Reveal>
    </div>
  </section>
);
