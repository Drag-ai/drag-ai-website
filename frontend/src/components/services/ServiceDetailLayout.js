import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Reveal } from '../Reveal';
import { NeuralBackground } from '../NeuralBackground';
import { useSEO } from '../../hooks/useSEO';
import { ArrowRight, CheckCircle2, ShieldCheck, Workflow, Plug } from 'lucide-react';

/**
 * Shared layout for /services/* detail pages.
 *
 * `service` shape:
 * {
 *   slug, name, hero: { eyebrow, title, subtitle },
 *   whatIs: { title, body },
 *   whatWeBuild: [string],
 *   useCases: [{ title, desc }],
 *   integrations: [string],
 *   security: [string],
 *   process: [{ step, title, desc }],
 *   faqs: [{ q, a }],
 *   relatedLinks: [{ to, label }],
 *   seo: { title, description, canonical, keywords },
 * }
 */
export default function ServiceDetailLayout({ service }) {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: service.name, path: `/services/${service.slug}` },
  ];

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.name,
      serviceType: service.name,
      provider: {
        '@type': 'Organization',
        name: 'DRAG AI LIMITED',
        url: 'https://drag-ai.com',
      },
      areaServed: ['GB', 'EU', 'US', 'IN', 'AE'],
      description: service.seo.description,
      url: `https://drag-ai.com/services/${service.slug}`,
    },
  ];

  if (Array.isArray(service.faqs) && service.faqs.length > 0) {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: service.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }

  useSEO({
    title: service.seo.title,
    description: service.seo.description,
    canonical: `/services/${service.slug}`,
    ogImage: service.seo.ogImage || `/og-images/service-${service.slug}.png`,
    ogType: 'article',
    breadcrumbs,
    jsonLd,
  });

  return (
    <div className="flex flex-col" data-testid={`service-page-${service.slug}`}>
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="border-b bg-secondary/20"
        data-testid="service-breadcrumb"
      >
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-3 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/services" className="hover:text-foreground">Services</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{service.name}</span>
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
                {service.hero.eyebrow}
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
                {service.hero.title}
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                {service.hero.subtitle}
              </p>
              <Link to="/contact#ai-discovery-call">
                <Button
                  size="lg"
                  className="bg-[hsl(var(--accent-purple))] text-[hsl(var(--accent-purple-foreground))] hover:brightness-95 shadow-sm"
                  data-testid={`service-${service.slug}-cta-hero`}
                >
                  Book Free AI Strategy Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What is it? */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
              {service.whatIs.title}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              {service.whatIs.body}
            </p>
          </Reveal>
        </div>
      </section>

      {/* What Drag AI builds */}
      <section className="py-12 sm:py-16 bg-secondary/40">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8 text-center">
              What Drag AI Builds
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.whatWeBuild.map((item) => (
              <Reveal key={item}>
                <Card className="p-5 flex items-start gap-3 card-hover h-full">
                  <CheckCircle2 className="h-5 w-5 text-[hsl(var(--accent-purple))] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground/90 leading-relaxed">{item}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8 text-center">
              Common Use Cases
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.useCases.map((uc) => (
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

      {/* Integrations + Security side-by-side */}
      <section className="py-12 sm:py-16 bg-secondary/40">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal>
              <Card className="p-6 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 rounded-lg bg-[hsl(var(--accent-purple))]/10 text-[hsl(var(--accent-purple))]">
                    <Plug className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">Tools &amp; Integrations</h3>
                </div>
                <ul className="space-y-2">
                  {service.integrations.map((tool) => (
                    <li
                      key={tool}
                      className="text-sm text-muted-foreground flex items-start"
                    >
                      <span className="mr-2 text-[hsl(var(--accent-purple))]">&bull;</span>
                      <span>{tool}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>

            <Reveal delay={0.1}>
              <Card className="p-6 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 rounded-lg bg-[hsl(var(--accent-purple))]/10 text-[hsl(var(--accent-purple))]">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">Security &amp; Human Approvals</h3>
                </div>
                <ul className="space-y-2">
                  {service.security.map((sec) => (
                    <li
                      key={sec}
                      className="text-sm text-muted-foreground flex items-start"
                    >
                      <span className="mr-2 text-[hsl(var(--accent-purple))]">&bull;</span>
                      <span>{sec}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex items-center gap-2 justify-center mb-8">
              <Workflow className="h-5 w-5 text-[hsl(var(--accent-purple))]" />
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center">
                How We Build It
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.process.map((step) => (
              <Reveal key={step.title}>
                <Card className="p-5 relative overflow-hidden h-full">
                  <div className="absolute top-0 right-0 text-6xl font-bold text-[hsl(var(--accent-purple))]/5 leading-none">
                    {step.step}
                  </div>
                  <p className="font-mono text-base font-semibold text-[hsl(var(--accent-purple))] mb-1">
                    {step.step}
                  </p>
                  <h3 className="font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </Card>
              </Reveal>
            ))}
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
            {service.faqs.map((faq) => (
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
      {service.relatedLinks && service.relatedLinks.length > 0 && (
        <section className="py-10 sm:py-14">
          <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <p className="text-sm font-mono uppercase tracking-wider text-foreground/60 mb-3">
                Explore Related
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                {service.relatedLinks.map((rel) => (
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
              Tell us what you want to automate and we&apos;ll come prepared with the right
              questions.
            </p>
            <Link to="/contact#ai-discovery-call">
              <Button
                size="lg"
                className="bg-[hsl(var(--accent-purple))] text-[hsl(var(--accent-purple-foreground))] hover:brightness-95 shadow-sm"
                data-testid={`service-${service.slug}-cta-final`}
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
