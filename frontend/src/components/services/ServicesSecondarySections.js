import { Card } from '../ui/card';
import { Reveal } from '../Reveal';

const deliverySteps = [
  {
    id: 'discovery',
    title: 'Discovery & Design',
    desc: 'We start by understanding your use case, data landscape, and success criteria. Then we design an architecture that addresses your requirements.',
  },
  {
    id: 'iterative',
    title: 'Iterative Development',
    desc: 'We build in sprints with regular demos and feedback loops. You see progress weekly, not at the end of a months-long black box.',
  },
  {
    id: 'rollout',
    title: 'Production Rollout',
    desc: 'Deployment, monitoring setup, documentation, and knowledge transfer. We ensure your team can maintain and evolve the system.',
  },
];

const faqs = [
  {
    id: 'what-are-agents',
    q: 'What exactly are AI agents?',
    a: 'AI agents are autonomous software systems that can perceive their environment, make decisions, and take actions to achieve specific goals. Unlike traditional automation, they can handle ambiguous situations, use tools, and adapt their behavior based on context—making them ideal for complex business workflows.',
  },
  {
    id: 'how-long',
    q: 'How long does it take to build an agentic AI system?',
    a: 'A proof-of-concept agent typically takes 2-4 weeks to validate feasibility. Full production deployment ranges from 2-6 months depending on complexity, integration requirements, and the number of workflows being automated. We deliver working prototypes early and iterate based on real feedback.',
  },
  {
    id: 'inhouse-expertise',
    q: 'Do we need AI expertise in-house to adopt agentic systems?',
    a: 'No. We build systems your existing team can operate and maintain. Agents come with intuitive interfaces, monitoring dashboards, and human-in-the-loop controls. We provide training and documentation so your team is empowered, not dependent on us.',
  },
  {
    id: 'difference',
    q: 'What is the difference between AI automation and agentic AI?',
    a: 'Traditional AI automation follows fixed rules and handles predictable patterns. Agentic AI can reason, plan multi-step workflows, use tools dynamically, and handle exceptions—essentially acting like a skilled employee rather than a script. This makes agentic systems suitable for complex, judgment-intensive work.',
  },
  {
    id: 'value',
    q: 'How do you ensure value from agentic AI projects?',
    a: 'We start with clear success metrics: time saved, cost reduced, accuracy improved, or throughput increased. Our pilot-first approach helps validate potential value before full deployment. We focus on measurable business outcomes and transparent project scoping.',
  },
];

export const HowWeDeliverSection = () => (
  <section className="py-14 sm:py-18 lg:py-24">
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <Reveal>
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">How We Deliver</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            A structured approach from discovery to deployment
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {deliverySteps.map((s, idx) => (
          <Reveal key={s.id} delay={0.1 * (idx + 1)}>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export const ServicesFAQSection = () => (
  <section className="py-14 sm:py-18 lg:py-24">
    <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
      <Reveal>
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
        </div>
      </Reveal>

      <div className="space-y-6">
        {faqs.map((faq, idx) => (
          <Reveal key={faq.id} delay={0.1 * (idx + 1)}>
            <Card className="p-6">
              <h3 className="font-semibold mb-2 text-lg">{faq.q}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
