import { Link } from 'react-router-dom';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Reveal } from '../components/Reveal';
import { NeuralBackground } from '../components/NeuralBackground';
import { useSEO } from '../hooks/useSEO';
import {
  ArrowRight,
  Bot,
  Database,
  FileText,
  Mic,
  LineChart,
  ShieldCheck,
  Sparkles,
  Clock,
} from 'lucide-react';

// Placeholder insights / articles. These are intentionally non-dated and
// framed as Drag AI's editorial point of view, NOT case studies or client
// outcomes. Replace `coming-soon` slug links with real articles when published.
const articles = [
  {
    id: 'agents-automate-workflows',
    category: 'Agentic AI',
    Icon: Bot,
    title: 'How AI Agents Can Automate Repetitive Business Workflows',
    excerpt:
      'Where classic automation stops and where agentic systems start \u2014 combining reasoning, tools, and guardrails to handle the parts of work that need judgement.',
    readingTime: '6 min read',
    status: 'Coming soon',
  },
  {
    id: 'rag-vs-chatbot',
    category: 'RAG',
    Icon: Database,
    title: 'RAG vs. Chatbot: What Businesses Should Actually Build',
    excerpt:
      'Most teams ask for a "chatbot" when they really need a retrieval system. A practical guide to choosing between RAG, conversational AI, and agentic workflows.',
    readingTime: '7 min read',
    status: 'Coming soon',
  },
  {
    id: 'document-ai-operations',
    category: 'Document AI',
    Icon: FileText,
    title: 'How Document AI Reduces Manual Operations Work',
    excerpt:
      'Identifying the document workflows where AI moves the needle, how to evaluate accuracy honestly, and how to design exception handling that protects the business.',
    readingTime: '6 min read',
    status: 'Coming soon',
  },
  {
    id: 'poc-to-production',
    category: 'Delivery',
    Icon: ShieldCheck,
    title: 'From AI PoC to Production: What Companies Often Miss',
    excerpt:
      'Observability, evaluation, security, fallback logic, and stakeholder design \u2014 the unglamorous work that turns an impressive demo into a system your business depends on.',
    readingTime: '8 min read',
    status: 'Coming soon',
  },
  {
    id: 'human-in-the-loop',
    category: 'AI Governance',
    Icon: Mic,
    title: 'Why Human-in-the-Loop Matters in Enterprise AI',
    excerpt:
      'Approval points, audit trails, and graceful fallbacks are not afterthoughts. How to design AI systems that augment human judgement instead of replacing it.',
    readingTime: '5 min read',
    status: 'Coming soon',
  },
  {
    id: 'sme-ai-use-cases',
    category: 'Strategy',
    Icon: LineChart,
    title: 'Practical AI Use Cases for Small and Mid-Sized Businesses',
    excerpt:
      'A pragmatic shortlist of AI use cases that work well at SME scale &mdash; with realistic effort, data requirements, and expected outcomes.',
    readingTime: '6 min read',
    status: 'Coming soon',
  },
];

const POVs = [
  {
    title: 'Production over demos',
    body:
      'We are interested in systems your teams use on a Monday morning \u2014 not screenshots that impress on stage. That mindset drives our architecture choices and how we scope every engagement.',
  },
  {
    title: 'Outcomes before models',
    body:
      'We start with the business outcome, the workflow, and the data. Model and vendor selection follow that, not the other way around. This keeps spend honest and timelines realistic.',
  },
  {
    title: 'Human-in-the-loop by default',
    body:
      'AI systems should make people better at their jobs, not replace judgement. Approval points, audit trails, and graceful fallbacks are first-class design constraints for us.',
  },
];

export default function Insights() {
  useSEO({
    title: 'Insights | Drag AI — Articles on Agentic AI, RAG, Doc AI, and Voice',
    description:
      'Practical articles and points of view from Drag AI Limited on agentic AI, RAG, document intelligence, voice AI, predictive analytics, and AI governance for modern businesses.',
    canonical: '/insights',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Insights', path: '/insights' },
    ],
  });

  return (
    <div className="flex flex-col" data-testid="insights-page">
      {/* Hero */}
      <section className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-14">
        <NeuralBackground />
        <div
          className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
          style={{ zIndex: 10 }}
        >
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <Badge variant="outline" className="mb-4 border-[hsl(var(--accent-purple))]/30">
                Insights &amp; Points of View
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
                Field Notes on <span className="text-[hsl(var(--accent-purple))]">Practical AI</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Honest, opinionated writing about agentic AI, RAG, document intelligence, voice AI,
                and predictive analytics &mdash; what works in production, what does not, and how to
                tell the difference before you spend.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* POVs */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {POVs.map((pov, idx) => (
              <Reveal key={`pov-${idx}`} delay={0.05 * idx}>
                <Card className="p-5 card-hover h-full" data-testid={`insights-pov-${idx}`}>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-pink))]/10 text-[hsl(var(--accent-purple))]">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">{pov.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{pov.body}</p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-10 sm:py-14 bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Latest Articles</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  New essays drop regularly. Subscribe by sending us a note &mdash; we&apos;ll keep you in the loop.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, idx) => {
              const Icon = article.Icon;
              return (
                <Reveal key={article.id} delay={(idx % 3) * 0.08}>
                  <Card
                    className="p-6 card-hover group h-full flex flex-col"
                    data-testid={`insights-article-${article.id}`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-pink))]/10 text-[hsl(var(--accent-purple))]">
                        <Icon className="h-4 w-4" />
                      </div>
                      <Badge variant="outline" className="text-[10px] uppercase tracking-wider border-[hsl(var(--accent-purple))]/30">
                        {article.category}
                      </Badge>
                    </div>

                    <h3 className="font-semibold text-lg mb-2 group-hover:text-[hsl(var(--accent-purple))] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {article.readingTime}
                      </span>
                      <span className="text-[hsl(var(--accent-purple))] font-medium">
                        {article.status}
                      </span>
                    </div>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-18 lg:py-24 bg-gradient-to-br from-[hsl(var(--accent-purple))]/5 to-[hsl(var(--accent-pink))]/5">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
              Have a Question We Should Write About?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8">
              Tell us where you are stuck and we will turn the best questions into deep, practical articles.
            </p>
            <Link to="/contact#ai-discovery-call">
              <Button
                size="lg"
                className="bg-[hsl(var(--accent-purple))] text-[hsl(var(--accent-purple-foreground))] shadow-sm hover:brightness-95"
                data-testid="insights-cta-button"
              >
                Book Free AI Strategy Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
