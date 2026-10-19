import { Link } from 'react-router-dom';
import { ArrowRight, Check, MessageSquare, UserRound } from 'lucide-react';
import { Button } from '../components/ui/button';
import { NeuralBackground } from '../components/NeuralBackground';
import { Reveal } from '../components/Reveal';
import { useSEO } from '../hooks/useSEO';
import { ChatDemo, ProductFooterNote, ProductPageLinks, ProductPricing, productDetails } from '../components/products/ProductShared';

const product = productDetails.chat;

export default function ChatProduct() {
  useSEO({
    title: 'Drag Chat Website Assistant: Try the Demo & See Pricing',
    description: 'Try the six-message Drag Chat demo, explore general business templates, and see clear monthly, annual, and custom pricing.',
    canonical: '/products/chat',
    jsonLd: { '@context': 'https://schema.org', '@type': 'Product', name: 'Drag Chat', description: product.description, brand: { '@type': 'Brand', name: 'Drag AI' } },
    breadcrumbs: [{ name: 'Products', path: '/products' }, { name: 'Drag Chat', path: '/products/chat' }],
  });

  return (
    <div>
      <section className="relative overflow-hidden pb-12 pt-16 sm:pb-16 sm:pt-20 lg:pt-24">
        <NeuralBackground />
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8" style={{ zIndex: 10 }}>
          <Reveal>
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-[hsl(var(--accent-purple))]">Drag AI · Chat</p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">{product.descriptor}.</h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">{product.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="bg-[hsl(var(--accent-purple))] text-[hsl(var(--accent-purple-foreground))] hover:brightness-95"><a href="#try-chat">Try the chat demo<MessageSquare className="ml-2 h-4 w-4" /></a></Button>
              <Button asChild variant="outline"><a href="#pricing">See Drag Chat pricing</a></Button>
            </div>
            <p className="mt-4 max-w-2xl text-xs leading-relaxed text-muted-foreground">Try up to six messages per demo conversation and switch between example business templates. This public demo uses sample information.</p>
          </Reveal>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:px-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-foreground/60">General purpose templates</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Start with your common questions.</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Choose a template, provide the information visitors are allowed to rely on, and define when to offer a person. The assistant should say when it does not know instead of inventing a policy, price, or promise.</p>
            <ul className="mt-6 space-y-3 text-sm text-foreground/80">{product.useCases.map((item) => <li key={item} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--accent-purple))]" />{item}</li>)}</ul>
          </div>
          <div className="rounded-2xl border bg-card p-6 sm:p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[hsl(var(--accent-purple))]/10 text-[hsl(var(--accent-purple))]"><UserRound className="h-5 w-5" /></div>
            <h3 className="mt-5 text-xl font-semibold">What your team provides</h3>
            <ul className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <li><span className="font-semibold text-foreground">Business details.</span> Add accurate answers, service information, and any limits the assistant must follow.</li>
              <li><span className="font-semibold text-foreground">A conversation goal.</span> Pick a template such as lead qualification, support, FAQs, appointment request, feedback, or general inquiry.</li>
              <li><span className="font-semibold text-foreground">A handoff path.</span> Choose how a visitor can reach a person when the answer needs judgment or account access.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="scroll-mt-20 bg-muted/40 py-12 sm:py-16" id="try-chat">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-8 max-w-3xl text-center"><p className="font-mono text-xs uppercase tracking-wider text-foreground/60">Interactive sample</p><h2 className="mt-3 text-3xl font-semibold tracking-tight">Try Drag Chat</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Switch templates and ask a few questions using example business information. The demo stops after six messages per conversation.</p></div>
          <ChatDemo />
        </div>
      </section>

      <ProductPricing product={product} />
      <section className="py-14 sm:py-20"><div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"><h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Ready to shape your website assistant?</h2><p className="mt-3 text-sm text-muted-foreground">We will scope the website, supported workflows, handoff, and expected AI usage before launch.</p><Button asChild variant="outline" className="mt-6"><Link to="/contact?product=chat&plan=custom#ai-discovery-call">Discuss a Drag Chat pilot<ArrowRight className="ml-2 h-4 w-4" /></Link></Button></div></section>
      <ProductFooterNote />
      <ProductPageLinks current="chat" />
    </div>
  );
}
