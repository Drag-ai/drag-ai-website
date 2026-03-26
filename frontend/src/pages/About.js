import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Reveal } from '../components/Reveal';
import { useSEO } from '../hooks/useSEO';
import { ArrowRight } from 'lucide-react';

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
      bio: 'AI Architect and ML Engineer with experience in building production-ready GenAI systems including long-context RAG, document intelligence pipelines, and agentic workflows. Focused on scalable, reliable AI systems.',
      expertise: ['LLM Systems', 'RAG Architecture', 'Agentic AI', 'MLOps', 'NLP'],
      responsibilities: [
        'Leads technical architecture',
        'Owns AI system design and implementation',
      ],
    },
    {
      name: 'Nishit Gupta',
      role: 'Marketing & Sales Founder',
      bio: 'Leads business strategy, client engagement, and go-to-market. Focused on aligning AI solutions with real business outcomes.',
      expertise: ['Business Strategy', 'AI Consulting', 'Market Positioning', 'Client Success'],
      responsibilities: [
        'Leads sales and partnerships',
        'Owns client engagement and positioning',
      ],
    },
  ];

  const principles = [
    {
      title: 'Engineering-First Approach',
      description:
        'We prioritize robust architecture, clean code, and maintainable systems. Every solution is built with production in mind from day one.',
    },
    {
      title: 'Production-Ready Systems',
      description:
        'No demos or prototypes marketed as products. We build systems designed to scale, handle edge cases, and evolve with your business.',
    },
    {
      title: 'Honest Communication',
      description:
        'Clear, transparent dialogue about what\'s possible, what\'s feasible, and what will deliver real value for your organization.',
    },
    {
      title: 'Deep Technical Expertise',
      description:
        'Hands-on experience with LLMs, RAG architectures, agentic workflows, and enterprise AI deployment at scale.',
    },
    {
      title: 'Business Outcome Focus',
      description:
        'Technology is a means, not an end. We align AI capabilities with measurable business objectives and ROI.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-14">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
                About Drag AI
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Drag AI is an Agentic AI consulting company focused on building
                production-grade AI systems, including RAG pipelines, multi-agent workflows,
                and enterprise automation solutions.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Company Summary */}
      <section className="py-14 sm:py-18 lg:py-24 bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-prose mx-auto">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
                Our Mission
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-foreground/90 leading-relaxed">
                <p>
                  We exist to bridge the gap between AI capabilities and real-world business
                  applications. Too often, organizations are sold on the promise of AI without
                  understanding the engineering rigor required to make it work reliably in
                  production.
                </p>
                <p>
                  Our approach is different: we start with your business problem, design
                  architectures that address it directly, and build systems that your team can
                  maintain and evolve. No vendor lock-in, no proprietary black boxes — just
                  clean, documented, production-grade AI systems.
                </p>
                <p>
                  We specialize in agentic AI systems that combine planning, reasoning, and
                  tool use; RAG architectures for knowledge-intensive applications; and
                  intelligent automation that streamlines enterprise workflows.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Principles */}
      <section className="py-14 sm:py-18 lg:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
                Our Principles
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                The values that guide how we work with clients and build systems
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle, idx) => (
              <Reveal key={idx} delay={0.1 * idx}>
                <Card className="p-6 card-hover">
                  <h3 className="font-semibold text-lg mb-3">{principle.title}</h3>
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
      <section className="py-14 sm:py-18 lg:py-24 bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
                Meet the Founders
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {founders.map((founder, idx) => (
              <Reveal key={idx} delay={0.1 * idx}>
                <Card className="p-8">
                  <h3 className="font-semibold text-xl mb-1">{founder.name}</h3>
                  <p className="text-sm text-[hsl(var(--accent-cyan))] mb-4">
                    {founder.role}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {founder.bio}
                  </p>
                  
                  <div className="mb-4">
                    <p className="font-semibold text-sm mb-2">Responsibilities:</p>
                    <ul className="space-y-1">
                      {founder.responsibilities.map((resp, respIdx) => (
                        <li key={respIdx} className="text-sm text-muted-foreground flex items-start">
                          <span className="mr-2">•</span>
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

      {/* Operating Model */}
      <section className="py-14 sm:py-18 lg:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-prose mx-auto">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
                How We Engage
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Consulting Engagements</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Strategy and architecture design for AI transformation initiatives. We help
                    you identify high-value use cases, design technical roadmaps, and establish
                    internal AI capabilities.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Custom Development</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    End-to-end implementation of agentic systems, RAG pipelines, and automation
                    workflows. We work in iterative sprints with regular check-ins and clear
                    deliverables.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Proof of Concept</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Rapid prototyping (2-4 weeks) to validate AI use cases before committing to
                    full deployment. Includes technical feasibility, cost analysis, and
                    production pathway recommendations.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-18 lg:py-24 bg-secondary/40">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
              Let's Work Together
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8">
              Explore how Drag AI can support your AI initiatives
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-[hsl(var(--accent-cyan))] text-[hsl(var(--accent-cyan-foreground))] shadow-sm hover:brightness-95"
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
