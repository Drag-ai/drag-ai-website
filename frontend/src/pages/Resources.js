import { Link } from 'react-router-dom';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Reveal } from '../components/Reveal';
import { NeuralBackground } from '../components/NeuralBackground';
import { useSEO } from '../hooks/useSEO';
import { ArrowRight, Bot, Database, MessageSquare, Clock } from 'lucide-react';

// Only published, indexable articles are shown here. Skeleton (noindex) drafts
// are intentionally NOT listed in the hub to avoid thin-content SEO issues.
const articles = [
  {
    slug: 'what-is-an-ai-agent-for-business',
    category: 'Agentic AI',
    Icon: Bot,
    title: 'What is an AI Agent for Business? A Practical Guide',
    excerpt:
      'How AI agents differ from chatbots and RPA, where they earn their keep, what a production-grade agent looks like, and how to start without overcommitting.',
    readingTime: '8 min read',
  },
  {
    slug: 'rag-vs-fine-tuning',
    category: 'Architecture',
    Icon: Database,
    title: 'RAG vs Fine-Tuning: Which One Should You Actually Use?',
    excerpt:
      'A practical comparison of RAG and fine-tuning for business AI \u2014 when each one is the right call, common mistakes, and a short decision checklist.',
    readingTime: '7 min read',
  },
  {
    slug: 'private-ai-chatbot-company-documents',
    category: 'RAG',
    Icon: MessageSquare,
    title: 'Private AI Chatbot Trained on Your Company Documents',
    excerpt:
      'How a private chatbot grounded in your company documents actually works \u2014 architecture, access control, supported formats, accuracy, and rollout.',
    readingTime: '8 min read',
  },
];

export default function Resources() {
  useSEO({
    title: 'AI Resources & Insights | Drag AI',
    description:
      'Practical articles from Drag AI on agentic AI, RAG, document intelligence, voice AI, and AI automation \u2014 written for operations and engineering leaders.',
    canonical: '/resources',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Resources', path: '/resources' },
    ],
  });

  return (
    <div className="flex flex-col" data-testid="resources-page">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="border-b bg-secondary/20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-3 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Resources</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-14">
        <NeuralBackground />
        <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8" style={{ zIndex: 10 }}>
          <Reveal>
            <Badge variant="outline" className="mb-4 border-[hsl(var(--accent-purple))]/30">
              Resources &amp; Insights
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 max-w-3xl">
              Practical Articles on AI Automation
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Honest, opinionated writing about agentic AI, RAG, document intelligence, and voice
              AI \u2014 what works in production, what does not, and how to tell the difference
              before you spend.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Article grid */}
      <section className="py-10 sm:py-14 bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => {
              const { Icon } = article;
              return (
                <Reveal key={article.slug}>
                  <Link to={`/resources/${article.slug}`} className="block h-full group">
                    <Card
                      className="p-6 card-hover h-full flex flex-col"
                      data-testid={`article-card-${article.slug}`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-pink))]/10 text-[hsl(var(--accent-purple))]">
                          <Icon className="h-4 w-4" />
                        </div>
                        <Badge variant="outline" className="text-[10px] uppercase tracking-wider border-[hsl(var(--accent-purple))]/30">
                          {article.category}
                        </Badge>
                      </div>

                      <h2 className="font-semibold text-lg mb-2 group-hover:text-[hsl(var(--accent-purple))] transition-colors">
                        {article.title}
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" />
                          {article.readingTime}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[hsl(var(--accent-purple))]">
                          Read article
                          <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </Card>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-18 lg:py-24 bg-gradient-to-br from-[hsl(var(--accent-purple))]/5 to-[hsl(var(--accent-pink))]/5">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
              Want to apply this to your business?
            </h2>
            <p className="text-base text-muted-foreground mb-8">
              Book a free AI strategy call and we will scope something concrete with you.
            </p>
            <Link to="/contact#ai-discovery-call">
              <Button
                size="lg"
                className="bg-[hsl(var(--accent-purple))] text-[hsl(var(--accent-purple-foreground))] hover:brightness-95 shadow-sm"
                data-testid="resources-cta-button"
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
