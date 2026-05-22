import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Reveal } from '../Reveal';
import { Target, Users, Award, TrendingUp, Globe } from 'lucide-react';
import { FounderCard } from '../shared/FounderCard';

const principles = [
  { id: 'engineering', Icon: Target, title: 'Engineering Excellence', description: 'Robust architecture, clean code, and maintainable systems built for long-term success.' },
  { id: 'production', Icon: Award, title: 'Production-First', description: 'Every solution is designed to handle edge cases, scale effectively, and evolve with your business.' },
  { id: 'partnership', Icon: Users, title: 'Transparent Partnership', description: 'Honest communication about feasibility, timelines, and what will truly deliver business value.' },
  { id: 'expertise', Icon: TrendingUp, title: 'Deep Expertise', description: 'Hands-on experience with LLMs, RAG, agentic workflows, and enterprise AI deployment.' },
  { id: 'outcomes', Icon: Globe, title: 'Business Outcomes', description: 'Technology serves business goals. We align AI capabilities with measurable objectives and ROI.' },
];

const founders = [
  {
    id: 'deepesh',
    name: 'Deepesh Agrawal',
    role: 'Founder & AI Architect',
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
    role: 'Co-Founder & Business Strategy',
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
              We bridge the gap between AI capabilities and real-world business applications.
              Organizations need production-ready systems, not just promising demos.
            </p>
            <p>
              Our approach: understand your problem, design the right architecture, and build systems
              your team can maintain and evolve. No vendor lock-in, no black boxes—just clean,
              documented AI infrastructure.
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
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">Our Principles</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            The values that guide how we work with clients and build systems
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
    </div>
  </section>
);
