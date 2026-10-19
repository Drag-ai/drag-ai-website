import { Link } from 'react-router-dom';
import { ArrowRight, Check, LockKeyhole, PhoneCall, ShieldCheck } from 'lucide-react';
import { Button } from '../components/ui/button';
import { NeuralBackground } from '../components/NeuralBackground';
import { Reveal } from '../components/Reveal';
import { useSEO } from '../hooks/useSEO';
import { DemoCallout, ProductFooterNote, ProductPageLinks, ProductPricing, productDetails } from '../components/products/ProductShared';

const product = productDetails.voice;

export default function VoiceProduct() {
  useSEO({
    title: 'Drag Voice AI Calling: Features, Demo Access & Pricing',
    description: 'Explore Drag Voice for general business calls. See what is included in monthly, annual, and custom plans, and learn how to access the protected live call demo.',
    canonical: '/products/voice',
    jsonLd: { '@context': 'https://schema.org', '@type': 'Product', name: 'Drag Voice', description: product.description, brand: { '@type': 'Brand', name: 'Drag AI' } },
    breadcrumbs: [{ name: 'Products', path: '/products' }, { name: 'Drag Voice', path: '/products/voice' }],
  });

  return (
    <div>
      <section className="relative overflow-hidden pb-12 pt-16 sm:pb-16 sm:pt-20 lg:pt-24">
        <NeuralBackground />
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8" style={{ zIndex: 10 }}>
          <Reveal>
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-[hsl(var(--accent-purple))]">Drag AI · Voice</p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">{product.descriptor}.</h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">{product.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="bg-[hsl(var(--accent-purple))] text-[hsl(var(--accent-purple-foreground))] hover:brightness-95"><Link to="/voice-demo">Enter protected voice demo<LockKeyhole className="ml-2 h-4 w-4" /></Link></Button>
              <Button asChild variant="outline"><a href="#pricing">See Drag Voice pricing</a></Button>
            </div>
            <p className="mt-4 max-w-2xl text-xs leading-relaxed text-muted-foreground">Live phone calls require a temporary demo access code supplied by the Drag AI team. The code unlocks the workspace; you do not enter Twilio or AI provider secrets in the browser.</p>
          </Reveal>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:px-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-foreground/60">Made for repeatable work</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Useful conversations, with a person in control.</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Use a predefined template as a starting point, add the facts the assistant may share, and review what happened. Calls are launched by a team member and placed one at a time in the current demo workspace.</p>
            <ul className="mt-6 space-y-3 text-sm text-foreground/80">{product.useCases.map((item) => <li key={item} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--accent-purple))]" />{item}</li>)}</ul>
          </div>
          <div className="rounded-2xl border bg-card p-6 sm:p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[hsl(var(--accent-purple))]/10 text-[hsl(var(--accent-purple))]"><PhoneCall className="h-5 w-5" /></div>
            <h3 className="mt-5 text-xl font-semibold">How a pilot works</h3>
            <ol className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <li><span className="font-semibold text-foreground">1. Pick a template.</span> Start with sales follow-up, support, appointment request, feedback, reminder, or general inquiry.</li>
              <li><span className="font-semibold text-foreground">2. Add approved context.</span> Tell the assistant what it can share and when it should offer a human follow-up.</li>
              <li><span className="font-semibold text-foreground">3. Launch and review.</span> A team member starts the call and can end it. Review the call status and saved activity afterward.</li>
            </ol>
            <div className="mt-6 flex gap-2 border-t pt-5 text-xs leading-relaxed text-muted-foreground"><ShieldCheck className="h-4 w-4 shrink-0 text-[hsl(var(--accent-purple))]" />The assistant should identify itself, respect the recipient's choice to stop, and avoid claiming that a requested action is complete until a person confirms it.</div>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <DemoCallout title="Live phone-call demo access is protected" text="Open the private calling workspace and enter the temporary access code shared with you by Drag AI. You can then use its call setup, start and end controls, and activity history." to="/voice-demo" label="Open voice workspace" icon={LockKeyhole} />
        </div>
      </section>

      <ProductPricing product={product} />
      <section className="py-14 sm:py-20"><div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"><h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Want to scope your first call workflow?</h2><p className="mt-3 text-sm text-muted-foreground">We will agree on call destinations, expected volume, setup, and usage costs before the pilot starts.</p><Button asChild variant="outline" className="mt-6"><Link to="/contact?product=voice&plan=custom#ai-discovery-call">Discuss a Drag Voice pilot<ArrowRight className="ml-2 h-4 w-4" /></Link></Button></div></section>
      <ProductFooterNote />
      <ProductPageLinks current="voice" />
    </div>
  );
}
