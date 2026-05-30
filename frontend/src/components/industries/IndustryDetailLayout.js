import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Alert, AlertDescription } from '../ui/alert';
import { Reveal } from '../Reveal';
import { NeuralBackground } from '../NeuralBackground';
import { useSEO } from '../../hooks/useSEO';
import { ArrowRight, AlertTriangle, CheckCircle2 } from 'lucide-react';

/**
 * Shared layout for /industries/* deep-dive pages (Real Estate AI, Healthcare AI, Finance AI).
 *
 * `industry` shape:
 * {
 *   slug, name, hero: { eyebrow, title, subtitle },
 *   intro: string,
 *   disclaimer?: string,
 *   useCases: [{ title, desc }],
 *   workflows: [string],
 *   outcomes: [string],
 *   faqs: [{ q, a }],
 *   relatedLinks: [{ to, label }],
 *   seo: { title, description },
 * }
 */
export default function IndustryDetailLayout({ industry }) {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Industries', path: '/industries' },
    { name: industry.name, path: `/industries/${industry.slug}` },
  ];

  const jsonLd = [];
  if (Array.isArray(industry.faqs) && industry.faqs.length > 0) {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: industry.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }

  useSEO({
    title: industry.seo.title,
    description: industry.seo.description,
    canonical: `/industries/${industry.slug}`,
    ogImage: industry.seo.ogImage || `/og-images/industry-${industry.slug}.png`,
    ogType: 'article',
    breadcrumbs,
    jsonLd,
  });

  return (
    <div className="flex flex-col" data-testid={`industry-page-${industry.slug}`}>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="border-b bg-secondary/20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-3 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/industries" className="hover:text-foreground">Industries</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{industry.name}</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-14">
        <NeuralBackground />
        <div
          className="relative mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8"
          style={{ zIndex: 10 }}
        >
          <Reveal>
            <div className="max-w-3xl">
              <Badge variant="outline" className="mb-4 border-[hsl(var(--accent-purple))]/30">
                {industry.hero.eyebrow}
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
                {industry.hero.title}
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                {industry.hero.subtitle}
              </p>
              <Link to="/contact#ai-discovery-call">
                <Button
                  size="lg"
                  className="bg-[hsl(var(--accent-purple))] text-[hsl(var(--accent-purple-foreground))] hover:brightness-95 shadow-sm"
                  data-testid={`industry-${industry.slug}-cta-hero`}
                >
                  Book Free AI Strategy Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Disclaimer (e.g. Healthcare) */}
      {industry.disclaimer && (
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-4xl">
            <Alert
              variant="default"
              className="border-amber-500/30 bg-amber-500/5"
              data-testid={`industry-${industry.slug}-disclaimer`}
            >
              <AlertTriangle className="h-4 w-4 text-amber-600" />
              <AlertDescription className="text-sm text-foreground/90">
                {industry.disclaimer}
              </AlertDescription>
            </Alert>
          </div>
        </section>
      )}

      {/* Intro */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
              How Drag AI helps
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">{industry.intro}</p>
          </Reveal>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-12 sm:py-16 bg-secondary/40">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8 text-center">
              Common Use Cases
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {industry.useCases.map((uc) => (
              <Reveal key={uc.title}>
                <Card className="p-5 card-hover h-full">
                  <h3 className="font-semibold mb-2 text-base">{uc.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{uc.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Workflows + outcomes */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal>
              <Card className="p-6 h-full">
                <h3 className="text-lg font-semibold mb-4">Workflows we automate</h3>
                <ul className="space-y-2">
                  {industry.workflows.map((w) => (
                    <li key={w} className="text-sm text-muted-foreground flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-[hsl(var(--accent-purple))] mt-0.5 mr-2 flex-shrink-0" />
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>

            <Reveal delay={0.1}>
              <Card className="p-6 h-full">
                <h3 className="text-lg font-semibold mb-4">Outcomes our clients look for</h3>
                <ul className="space-y-2">
                  {industry.outcomes.map((o) => (
                    <li key={o} className="text-sm text-muted-foreground flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-[hsl(var(--accent-purple))] mt-0.5 mr-2 flex-shrink-0" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 bg-secondary/40">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8 text-center">
              Frequently Asked Questions
            </h2>
          </Reveal>
          <div className="space-y-4">
            {industry.faqs.map((faq) => (
              <Reveal key={faq.q}>
                <Card className="p-5">
                  <h3 className="font-semibold mb-2 text-base">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      {industry.relatedLinks && industry.relatedLinks.length > 0 && (
        <section className="py-10 sm:py-14">
          <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <p className="text-sm font-mono uppercase tracking-wider text-foreground/60 mb-3">
                Explore Related
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                {industry.relatedLinks.map((rel) => (
                  <Link
                    key={rel.to}
                    to={rel.to}
                    className="text-sm text-[hsl(var(--accent-purple))] hover:brightness-110 underline underline-offset-4"
                  >
                    {rel.label}
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-14 sm:py-18 lg:py-24 bg-gradient-to-br from-[hsl(var(--accent-purple))]/5 to-[hsl(var(--accent-pink))]/5">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
              Ready to automate your business workflow with AI?
            </h2>
            <p className="text-base text-muted-foreground mb-8">
              Tell us about your workflow and we&apos;ll come prepared with the right questions.
            </p>
            <Link to="/contact#ai-discovery-call">
              <Button
                size="lg"
                className="bg-[hsl(var(--accent-purple))] text-[hsl(var(--accent-purple-foreground))] hover:brightness-95 shadow-sm"
                data-testid={`industry-${industry.slug}-cta-final`}
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
