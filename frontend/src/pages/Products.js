import { Link } from 'react-router-dom';
import { ArrowRight, Check, MessageSquare, PhoneCall } from 'lucide-react';
import { Button } from '../components/ui/button';
import { NeuralBackground } from '../components/NeuralBackground';
import { Reveal } from '../components/Reveal';
import { useSEO } from '../hooks/useSEO';
import { productDetails } from '../components/products/ProductShared';

const productCards = [
  { product: productDetails.voice, Icon: PhoneCall, route: '/products/voice', monthlyPrice: '$99/month', annualPrice: '$990/year', demo: 'Live phone demo requires a temporary access code.' },
  { product: productDetails.chat, Icon: MessageSquare, route: '/products/chat', monthlyPrice: '$29/month', annualPrice: '$290/year', demo: 'Try six messages per conversation in the public demo.' },
];

export default function Products() {
  useSEO({
    title: 'Drag AI Products: Drag Voice and Drag Chat',
    description: 'Explore general purpose AI calling and website chat products. Each product has its own demo, monthly and annual pricing, and custom scope.',
    canonical: '/products',
    jsonLd: {
      '@context': 'https://schema.org', '@type': 'ItemList', name: 'Drag AI products',
      itemListElement: productCards.map(({ product, route }, index) => ({ '@type': 'ListItem', position: index + 1, name: product.name, description: product.description, url: `https://drag-ai.com${route}` })),
    },
  });

  return (
    <div>
      <section className="relative overflow-hidden pb-12 pt-16 sm:pb-16 sm:pt-20 lg:pt-24">
        <NeuralBackground />
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8" style={{ zIndex: 10 }}>
          <Reveal>
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-[hsl(var(--accent-purple))]">Drag AI products</p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Practical AI for conversations that keep work moving.</h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">Choose the product for the work you want to improve. Drag Voice supports outbound calls. Drag Chat answers website questions. Both start with reusable templates and your approved business information.</p>
          </Reveal>
        </div>
      </section>

      <section className="pb-14 sm:pb-20">
        <div className="mx-auto grid w-full max-w-6xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          {productCards.map(({ product, Icon, route, monthlyPrice, annualPrice, demo }) => (
            <article key={product.id} className="flex flex-col rounded-2xl border bg-card p-6 shadow-sm sm:p-8" data-testid={`product-${product.id}`}>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[hsl(var(--accent-purple))]/10 text-[hsl(var(--accent-purple))]"><Icon className="h-5 w-5" /></div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-[hsl(var(--accent-purple))]">{product.descriptor}</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">{product.name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">{product.useCases.map((item) => <li key={item} className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 shrink-0 text-[hsl(var(--accent-purple))]" />{item}</li>)}</ul>
              <div className="mt-6 rounded-xl bg-muted/50 p-4">
                <p className="text-sm font-semibold">{monthlyPrice} <span className="px-1 text-muted-foreground">·</span> {annualPrice}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">Platform fee. Variable AI usage is separate; phone charges also apply to Drag Voice.</p>
                <p className="mt-2 text-xs font-medium text-foreground/75">{demo}</p>
              </div>
              <div className="mt-auto flex flex-wrap gap-3 pt-6">
                <Button asChild className="bg-[hsl(var(--accent-purple))] text-[hsl(var(--accent-purple-foreground))] hover:brightness-95"><Link to={route}>Explore {product.name}<ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
                {product.id === 'voice'
                  ? <Button asChild variant="outline"><Link to="/voice-demo">Enter access code</Link></Button>
                  : <Button asChild variant="outline"><Link to={`${route}#try-chat`}>Try chat demo</Link></Button>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-muted/40 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Clear scope before launch.</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Each product page explains its monthly and annual platform fee, what the fee covers, and what gets scoped separately. Choose custom pricing when you need a different volume, workflow, destination, or integration.</p>
          <Button asChild variant="outline" className="mt-6"><Link to="/contact#ai-discovery-call">Talk through your workflow<ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
        </div>
      </section>
    </div>
  );
}
