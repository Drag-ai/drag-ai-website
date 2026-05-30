import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Reveal } from '../Reveal';
import { useSEO } from '../../hooks/useSEO';
import { ArrowRight, Clock } from 'lucide-react';

/**
 * Shared layout for /resources/* article pages.
 *
 * article shape:
 * {
 *   slug, category, title, readingTime, lastUpdated,
 *   tldr: string,
 *   sections: [{ id, heading, body: ReactNode | string, list?: string[] }],
 *   faqs: [{ q, a }],
 *   internalLinks: [{ to, label }],
 *   seo: { title, description },
 *   noindex?: boolean,
 * }
 */
export default function ArticleLayout({ article }) {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Resources', path: '/resources' },
    { name: article.title, path: `/resources/${article.slug}` },
  ];

  const ogImagePath = article.seo.ogImage || (article.noindex ? undefined : `/og-images/article-${article.slug}.png`);

  const jsonLd = [];
  if (!article.noindex) {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      description: article.seo.description,
      image: ogImagePath ? `https://drag-ai.com${ogImagePath}` : undefined,
      author: { '@type': 'Organization', name: 'DRAG AI LIMITED' },
      publisher: {
        '@type': 'Organization',
        name: 'DRAG AI LIMITED',
        logo: {
          '@type': 'ImageObject',
          url: 'https://drag-ai.com/favicon.svg',
        },
      },
      mainEntityOfPage: `https://drag-ai.com/resources/${article.slug}`,
      datePublished: article.lastUpdated,
      dateModified: article.lastUpdated,
    });

    if (Array.isArray(article.faqs) && article.faqs.length > 0) {
      jsonLd.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: article.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      });
    }
  }

  useSEO({
    title: article.seo.title,
    description: article.seo.description,
    canonical: `/resources/${article.slug}`,
    ogImage: ogImagePath,
    ogType: article.noindex ? 'website' : 'article',
    noindex: !!article.noindex,
    breadcrumbs: article.noindex ? undefined : breadcrumbs,
    jsonLd: jsonLd.length > 0 ? jsonLd : undefined,
  });

  return (
    <article className="flex flex-col" data-testid={`article-${article.slug}`}>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="border-b bg-secondary/20">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-3 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/resources" className="hover:text-foreground">Resources</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{article.title}</span>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-10 sm:pt-14">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <Badge variant="outline" className="mb-4 border-[hsl(var(--accent-purple))]/30">
              {article.category}
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
              {article.title}
            </h1>
            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-6">
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {article.readingTime}
              </span>
              <span className="text-foreground/30">&middot;</span>
              <span>Last updated: {article.lastUpdated}</span>
            </div>

            {article.tldr && (
              <Card className="p-5 mb-8 border-[hsl(var(--accent-purple))]/30 bg-[hsl(var(--accent-purple))]/5">
                <p className="text-xs font-mono uppercase tracking-wider text-[hsl(var(--accent-purple))] mb-2">
                  TL;DR
                </p>
                <p className="text-sm text-foreground/90 leading-relaxed">{article.tldr}</p>
              </Card>
            )}
          </Reveal>
        </div>
      </section>

      {/* TOC */}
      {article.sections && article.sections.length > 0 && (
        <section className="pt-2 pb-6">
          <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <Card className="p-5">
                <p className="text-xs font-mono uppercase tracking-wider text-foreground/60 mb-3">
                  Table of contents
                </p>
                <ol className="space-y-1.5 text-sm">
                  {article.sections.map((s, idx) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="text-[hsl(var(--accent-purple))] hover:brightness-110"
                      >
                        {idx + 1}. {s.heading}
                      </a>
                    </li>
                  ))}
                  {article.faqs && article.faqs.length > 0 && (
                    <li>
                      <a
                        href="#faq"
                        className="text-[hsl(var(--accent-purple))] hover:brightness-110"
                      >
                        {article.sections.length + 1}. FAQ
                      </a>
                    </li>
                  )}
                </ol>
              </Card>
            </Reveal>
          </div>
        </section>
      )}

      {/* Body */}
      <section className="pb-12 sm:pb-16">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8 space-y-10">
          {article.sections.map((s) => (
            <Reveal key={s.id}>
              <div id={s.id} className="scroll-mt-20">
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
                  {s.heading}
                </h2>
                {typeof s.body === 'string' ? (
                  <p className="text-base text-foreground/85 leading-relaxed">{s.body}</p>
                ) : (
                  s.body
                )}
                {Array.isArray(s.list) && s.list.length > 0 && (
                  <ul className="list-disc list-outside pl-5 mt-4 space-y-2 text-base text-foreground/85">
                    {s.list.map((item) => (
                      <li key={item} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      {article.faqs && article.faqs.length > 0 && (
        <section id="faq" className="py-10 sm:py-14 bg-secondary/40 scroll-mt-20">
          <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8">FAQ</h2>
            </Reveal>
            <div className="space-y-4">
              {article.faqs.map((f) => (
                <Reveal key={f.q}>
                  <Card className="p-5">
                    <h3 className="font-semibold mb-2 text-base">{f.q}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related */}
      {article.internalLinks && article.internalLinks.length > 0 && (
        <section className="py-10 sm:py-14">
          <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <p className="text-sm font-mono uppercase tracking-wider text-foreground/60 mb-3">
                Related
              </p>
              <div className="flex flex-wrap gap-3">
                {article.internalLinks.map((rel) => (
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
              Want to build this for your business?
            </h2>
            <p className="text-base text-muted-foreground mb-8">
              Book a free AI strategy call with Drag AI.
            </p>
            <Link to="/contact#ai-discovery-call">
              <Button
                size="lg"
                className="bg-[hsl(var(--accent-purple))] text-[hsl(var(--accent-purple-foreground))] hover:brightness-95 shadow-sm"
                data-testid={`article-${article.slug}-cta`}
              >
                Book Free AI Strategy Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Reveal>
        </div>
      </section>
    </article>
  );
}
