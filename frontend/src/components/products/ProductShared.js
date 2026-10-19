import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '../ui/button';

export const productDetails = {
  voice: {
    id: 'voice',
    name: 'Drag Voice',
    descriptor: 'AI calling for everyday business workflows',
    description: 'Make useful, carefully guided calls for follow-up, support, reminders, and other repeatable conversations. Your team chooses the purpose, supplies approved information, and launches each call.',
    monthly: '$99',
    annual: '$990',
    custom: 'Custom quote',
    offer: [
      'One configured calling workflow',
      'Reusable call templates and approved business context',
      'Team-controlled call launch, call status, and activity history',
    ],
    useCases: ['Sales follow-up', 'Customer support follow-up', 'Appointment requests', 'Feedback and reminders'],
  },
  chat: {
    id: 'chat',
    name: 'Drag Chat',
    descriptor: 'A website assistant for questions and next steps',
    description: 'Help website visitors get clear answers from your approved business information, then offer a human handoff when a person should take over.',
    monthly: '$29',
    annual: '$290',
    custom: 'Custom quote',
    offer: [
      'One configured website assistant',
      'Reusable templates for common business conversations',
      'Initial setup using your approved business information',
      'AI usage limits agreed before the assistant goes live',
    ],
    useCases: ['Sales inquiries', 'Customer support', 'Product and service FAQs', 'Appointment requests and feedback'],
  },
};

export function ProductPricing({ product }) {
  const plans = [
    {
      key: 'monthly', title: 'Monthly', price: product.monthly, cadence: 'per month',
      detail: 'Platform fee, billed monthly.',
      href: `/contact?product=${product.id}&plan=monthly#ai-discovery-call`,
      label: 'Request monthly pilot',
    },
    {
      key: 'annual', title: 'Annual', price: product.annual, cadence: 'per year',
      detail: `Billed annually. Equivalent to ${product.id === 'voice' ? '$82.50' : '$24.17'} per month (two months free compared with monthly billing).`,
      href: `/contact?product=${product.id}&plan=annual#ai-discovery-call`,
      label: 'Request annual pilot',
    },
    {
      key: 'custom', title: 'Custom', price: product.custom, cadence: '',
      detail: product.id === 'voice'
        ? 'For different call volumes, destinations, workflows, or integrations.'
        : 'For different message volumes, websites, workflows, or integrations.',
      href: `/contact?product=${product.id}&plan=custom#ai-discovery-call`,
      label: 'Discuss custom scope',
    },
  ];

  return (
    <section className="bg-muted/40 py-14 sm:py-20" id="pricing">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-wider text-foreground/60">{product.name} pricing</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">One product. Three ways to scope it.</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Pilot platform fees are in USD and include the product scope listed below. AI usage is metered separately; voice calls also have phone carrier charges. Custom onboarding or integration work is scoped with you before launch.</p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <article key={plan.key} className={`flex flex-col rounded-2xl border bg-card p-5 shadow-sm sm:p-6 ${plan.key === 'annual' ? 'border-[hsl(var(--accent-purple))]/60 ring-1 ring-[hsl(var(--accent-purple))]/20' : ''}`}>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{plan.title}</p>
              <p className="mt-3 text-3xl font-semibold tracking-tight">{plan.price}{plan.cadence && <span className="ml-2 text-sm font-normal text-muted-foreground">{plan.cadence}</span>}</p>
              <p className="mt-2 min-h-12 text-sm leading-relaxed text-muted-foreground">{plan.detail}</p>
              <div className="my-5 border-t" />
              <p className="text-sm font-medium">Included in the platform fee</p>
              <ul className="mt-3 flex-1 space-y-2 text-sm leading-relaxed text-foreground/80">
                {product.offer.map((item) => <li key={item} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--accent-purple))]" />{item}</li>)}
              </ul>
              <Button asChild className="mt-6 w-full bg-[hsl(var(--accent-purple))] text-[hsl(var(--accent-purple-foreground))] hover:brightness-95"><Link to={plan.href}>{plan.label}<ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-5 max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">Your pilot quote confirms usage limits, any custom onboarding or integration work, taxes, and third-party charges. The public chat demo is limited to six messages per conversation; this demo limit is not the production plan allowance.</p>
      </div>
    </section>
  );
}

export function ChatDemo() {
  const demoUrl = process.env.NODE_ENV === 'development'
    ? (process.env.REACT_APP_CHAT_DEMO_URL || '/chat-demo/')
    : '/chat-demo/';
  const url = new URL(demoUrl, window.location.origin);
  url.searchParams.set('mode', 'chat');
  url.searchParams.set('templateId', 'general');
  const src = url.origin === window.location.origin ? `${url.pathname}${url.search}${url.hash}` : url.toString();

  return (
    <div className="overflow-hidden rounded-2xl border bg-card shadow-sm" data-testid="chat-demo">
      <iframe title="Try the Drag Chat interactive demo" src={src} className="block h-[760px] w-full bg-background" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
    </div>
  );
}

export function ProductPageLinks({ current }) {
  const other = current === 'voice' ? productDetails.chat : productDetails.voice;
  return (
    <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-8 text-sm sm:px-6 lg:px-8">
      <Link to="/products" className="text-muted-foreground hover:text-foreground">← All products</Link>
      <Link to={`/products/${other.id}`} className="inline-flex items-center font-medium text-[hsl(var(--accent-purple))] hover:underline">Explore {other.name}<ArrowRight className="ml-2 h-4 w-4" /></Link>
    </div>
  );
}

export function DemoCallout({ title, text, to, label, icon: Icon }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border bg-card p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
      <div className="flex gap-3">
        {Icon && <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[hsl(var(--accent-purple))]/10 text-[hsl(var(--accent-purple))]"><Icon className="h-5 w-5" /></div>}
        <div><h3 className="font-semibold">{title}</h3><p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground">{text}</p></div>
      </div>
      <Button asChild className="shrink-0 bg-[hsl(var(--accent-purple))] text-[hsl(var(--accent-purple-foreground))] hover:brightness-95"><Link to={to}>{label}<ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
    </div>
  );
}

export function ProductFooterNote() {
  return <p className="mx-auto max-w-3xl px-4 pb-10 text-center text-xs leading-relaxed text-muted-foreground">Drag AI products are designed for general business workflows. You provide the approved information and choose when a person should take over.</p>;
}
