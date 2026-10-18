import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarClock, Check, Headphones, MessageSquare, PhoneCall, ShieldCheck, Sparkles, Volume2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Reveal } from '../components/Reveal';
import { NeuralBackground } from '../components/NeuralBackground';
import { useSEO } from '../hooks/useSEO';

const CHAT_DEMO_URL = process.env.NODE_ENV === 'development'
  ? (process.env.REACT_APP_CHAT_DEMO_URL || '/chat-demo/')
  : '/chat-demo/';

const getDemoUrl = (mode) => {
  const url = new URL(CHAT_DEMO_URL, window.location.origin);
  url.searchParams.set('mode', mode);
  url.searchParams.set('templateId', mode === 'voice' ? 'lead_qualification' : 'general');
  return url.origin === window.location.origin
    ? `${url.pathname}${url.search}${url.hash}`
    : url.toString();
};

const voiceSamples = {
  sales: {
    label: 'Sales follow-up',
    lines: [
      { speaker: 'AI assistant', text: 'Hello, I’m an AI assistant calling on behalf of your company. Is now a good time for a short conversation?' },
      { speaker: 'Customer', text: 'Sure. I’m looking for help with a repetitive process.' },
      { speaker: 'AI assistant', text: 'I can share the information the team has approved. What part of the process takes the most time today?' },
      { speaker: 'Customer', text: 'I’d like someone to explain the options.' },
      { speaker: 'AI assistant', text: 'Of course. I can pass along your request so a team member can follow up.' },
    ],
  },
  support: {
    label: 'Customer support',
    lines: [
      { speaker: 'AI assistant', text: 'Hi, I’m calling on behalf of your company. I’m an AI assistant. Is it okay to continue?' },
      { speaker: 'Customer', text: 'I have a question about my service.' },
      { speaker: 'AI assistant', text: 'I can help route that. Could you briefly describe what you need help with?' },
      { speaker: 'Customer', text: 'I need a person to look at my account.' },
      { speaker: 'AI assistant', text: 'I can note that a team member should follow up. I can’t access or change your account on this call.' },
    ],
  },
  appointment: {
    label: 'Appointment request',
    lines: [
      { speaker: 'AI assistant', text: 'Hello, I’m an AI assistant calling on behalf of your company. Would you like to arrange a time to speak with the team?' },
      { speaker: 'Customer', text: 'Could someone call me next week?' },
      { speaker: 'AI assistant', text: 'I can note your preferred time for the team to confirm. Which day and time window usually works for you?' },
      { speaker: 'Customer', text: 'Tuesday afternoon.' },
      { speaker: 'AI assistant', text: 'Thank you. I’ll pass along Tuesday afternoon as your preference. The team will confirm the time.' },
    ],
  },
};

const billingOptions = {
  monthly: {
    label: 'Monthly',
    title: 'Monthly pilot',
    detail: 'Monthly platform fee; variable AI and calling usage is scoped separately.',
    action: 'Request monthly pilot',
  },
  annual: {
    label: 'Annual',
    title: 'Annual pilot',
    detail: 'Annual platform fee is billed up front at the equivalent of 10 monthly payments. Usage is separate.',
    action: 'Request annual pilot',
  },
  custom: {
    label: 'Custom',
    title: 'Custom scope',
    detail: 'A custom quote is scoped to volumes, destinations, deployment, and integrations.',
    action: 'Discuss a custom plan',
  },
};

const products = [
  {
    id: 'voice',
    name: 'Drag Voice',
    descriptor: 'Outbound AI calling',
    Icon: PhoneCall,
    description: 'Make thoughtful follow-up calls that qualify interest, answer approved questions, and capture a useful next step.',
    examples: ['Lead qualification', 'Customer support follow-up', 'Appointment requests', 'Feedback and reminders'],
    note: 'Calls are placed one at a time. A human team stays in control of the call purpose and approved information.',
    pricing: {
      monthly: { amount: '$99', period: '/ month', detail: 'Platform fee for one configured calling workflow.' },
      annual: { amount: '$990', period: '/ year', detail: 'Billed annually; the platform fee is equal to 10 monthly payments.' },
      custom: { amount: 'Custom', period: 'quote', detail: 'Scoped around destinations, call volumes, workflows, and integrations.' },
    },
    included: ['Reusable call templates and an approved business profile', 'Team-controlled call launches and activity review', 'Phone and AI usage scoped separately by destination'],
  },
  {
    id: 'chat',
    name: 'Drag Chat',
    descriptor: 'Website conversation assistant',
    Icon: MessageSquare,
    description: 'Respond to incoming website questions using your approved business details, with clear handoff when a person is needed.',
    examples: ['Sales inquiries', 'Customer support', 'Product and service FAQs', 'Appointment requests and feedback'],
    note: 'Choose a conversation template and supply the facts the assistant may use. It should not guess missing policies or promises.',
    pricing: {
      monthly: { amount: '$29', period: '/ month', detail: 'Platform fee for one configured website assistant.' },
      annual: { amount: '$290', period: '/ year', detail: 'Billed annually; the platform fee is equal to 10 monthly payments.' },
      custom: { amount: 'Custom', period: 'quote', detail: 'Scoped around response volume, websites, workflows, and integrations.' },
    },
    included: ['Reusable business conversation templates', 'Setup around your approved business details', 'AI usage limits agreed before the pilot starts'],
  },
];

const PricingCard = ({ product, term }) => {
  const option = billingOptions[term];
  const price = product.pricing[term];
  return (
    <div className="rounded-xl border bg-card p-5 sm:p-6" data-testid={`pricing-${product.id}-${term}`}>
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{option.title}</p>
      <p className="mt-3 text-3xl font-semibold tracking-tight">{price.amount}<span className="ml-2 text-sm font-normal text-muted-foreground">{price.period}</span></p>
      <p className="mt-2 min-h-12 text-sm leading-relaxed text-muted-foreground">{price.detail}</p>
      <ul className="mt-5 space-y-2 text-sm text-foreground/80">
        {product.included.map((item) => <li key={item} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--accent-purple))]" />{item}</li>)}
      </ul>
      <Link to={`/contact?product=${product.id}&plan=${term}#ai-discovery-call`} className="mt-6 inline-flex w-full">
        <Button className="w-full bg-[hsl(var(--accent-purple))] text-[hsl(var(--accent-purple-foreground))] hover:brightness-95">
          {option.action}<ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </div>
  );
};

const VoicePreview = () => {
  const [scenario, setScenario] = useState('sales');
  const [speaking, setSpeaking] = useState(false);
  const sample = voiceSamples[scenario];

  useEffect(() => () => window.speechSynthesis?.cancel(), []);

  const toggleSampleAudio = () => {
    if (!('speechSynthesis' in window)) return;
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }
    const transcript = sample.lines.map((line) => `${line.speaker}: ${line.text}`).join('. ');
    const utterance = new SpeechSynthesisUtterance(transcript);
    utterance.lang = 'en-US';
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    setSpeaking(true);
  };

  return (
    <div className="rounded-2xl border bg-card p-5 shadow-sm sm:p-7" data-testid="voice-demo-preview">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold">Explore a sample call</p>
          <p className="mt-1 text-xs text-muted-foreground">A scripted preview of the conversation flow; it does not place a phone call.</p>
        </div>
        <label className="sr-only" htmlFor="voice-scenario">Call template</label>
        <select
          id="voice-scenario"
          className="h-10 rounded-md border bg-background px-3 text-sm"
          value={scenario}
          onChange={(event) => {
            window.speechSynthesis?.cancel();
            setSpeaking(false);
            setScenario(event.target.value);
          }}
        >
          {Object.entries(voiceSamples).map(([key, item]) => <option key={key} value={key}>{item.label}</option>)}
        </select>
        <Button type="button" variant="outline" onClick={toggleSampleAudio} disabled={!('speechSynthesis' in window)} aria-pressed={speaking}>
          <Volume2 className="mr-2 h-4 w-4" />{speaking ? 'Stop sample' : 'Play sample'}
        </Button>
      </div>
      <div className="mt-5 space-y-3" aria-live="polite">
        {sample.lines.map((line, index) => (
          <div key={`${scenario}-${index}`} className={`max-w-[90%] rounded-xl p-3 text-sm leading-relaxed ${line.speaker === 'Customer' ? 'ml-auto bg-[hsl(var(--accent-purple))] text-white' : 'bg-muted'}`}>
            <span className={`mb-1 block text-[10px] font-semibold uppercase tracking-wide ${line.speaker === 'Customer' ? 'text-white' : 'text-muted-foreground'}`}>{line.speaker}</span>
            {line.text}
          </div>
        ))}
      </div>
      <div className="mt-5 border-t pt-4">
        <VoiceCallDemo />
      </div>
    </div>
  );
};

const VoiceCallDemo = () => {
  const [available, setAvailable] = useState(false);
  const [checkingAvailability, setCheckingAvailability] = useState(true);
  const [accessCode, setAccessCode] = useState('');
  const [calling, setCalling] = useState(false);
  const [activeCall, setActiveCall] = useState(null);
  const [endingCall, setEndingCall] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (typeof navigator !== 'undefined' && navigator.webdriver) return undefined;

    const controller = new AbortController();
    fetch('/api/voice-demo-call', { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : { available: false }))
      .then((result) => setAvailable(Boolean(result.available)))
      .catch(() => setAvailable(false))
      .finally(() => setCheckingAvailability(false));
    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!activeCall) return undefined;
    let cancelled = false;
    let timer;
    const checkStatus = async () => {
      try {
        const response = await fetch('/api/voice-demo-call-control', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'status', accessCode: activeCall.accessCode, callSid: activeCall.callSid }),
        });
        const result = await response.json().catch(() => ({}));
        if (cancelled) return;
        if (response.ok && !result.active) {
          const finishedMessages = {
            completed: 'The call has ended.',
            canceled: 'The call was canceled before it connected.',
            busy: 'The destination was busy; the call has ended.',
            failed: 'The call could not connect and has ended.',
            'no-answer': 'There was no answer; the call has ended.',
          };
          setActiveCall(null);
          setAccessCode('');
          setMessage(finishedMessages[result.status] || 'The call has ended.');
          return;
        }
        if (response.ok) {
          setMessage(result.status === 'in-progress'
            ? 'The call is connected. Use End call when you are finished.'
            : 'Twilio is placing the call. You can end it at any time.');
        }
      } catch {
        if (!cancelled) setMessage('Call status is temporarily unavailable. You can still try to end the call.');
      }
      if (!cancelled) timer = setTimeout(checkStatus, 4000);
    };
    checkStatus();
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [activeCall]);

  const startCall = async (event) => {
    event.preventDefault();
    if (!accessCode.trim() || calling) return;
    const submittedCode = accessCode.trim();
    setCalling(true);
    setMessage('');
    try {
      const response = await fetch('/api/voice-demo-call', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ accessCode: submittedCode }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.message || 'The call could not be started. Please try again.');
      if (!result.callSid) throw new Error('The call request was accepted, but the call control could not be opened. It will end automatically within five minutes.');
      setActiveCall({ callSid: result.callSid, accessCode: submittedCode });
      setMessage(result.message || 'Twilio accepted the request and is attempting to ring your configured showcase phone.');
      setAccessCode('');
    } catch (error) {
      setMessage(error.message || 'The call could not be started. Please try again.');
    } finally {
      setCalling(false);
    }
  };

  const endCall = async () => {
    if (!activeCall || endingCall) return;
    setEndingCall(true);
    try {
      const response = await fetch('/api/voice-demo-call-control', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'end', accessCode: activeCall.accessCode, callSid: activeCall.callSid }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.message || 'The call could not be ended. Please try again.');
      setActiveCall(null);
      setMessage(result.message || 'The call has ended.');
    } catch (error) {
      setMessage(error.message || 'The call could not be ended. Please try again.');
    } finally {
      setEndingCall(false);
    }
  };

  return (
    <div className="mt-5 rounded-xl border bg-background p-4 sm:p-5">
      <p className="text-sm font-semibold">Try a real phone call</p>
      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
        Enter your temporary access code to call the configured showcase phone. The assistant will identify itself as an AI demo. End the call here at any time; calls also end automatically after five minutes. This website does not enable call recording; AI and phone-provider usage may be charged.
      </p>
      {checkingAvailability ? (
        <p className="mt-4 text-xs text-muted-foreground" aria-live="polite">Checking live call availability…</p>
      ) : available && activeCall ? (
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-foreground" role="status" aria-live="polite">{message || 'Call started. You can end it at any time.'}</p>
          <Button type="button" variant="destructive" onClick={endCall} disabled={endingCall}>
            {endingCall ? 'Ending call…' : 'End call'}<PhoneCall className="ml-2 h-4 w-4" />
          </Button>
        </div>
      ) : available ? (
        <form className="mt-4 flex flex-col gap-3 sm:flex-row" onSubmit={startCall}>
          <label className="sr-only" htmlFor="voice-demo-access-code">Temporary demo access code</label>
          <input
            id="voice-demo-access-code"
            type="password"
            autoComplete="one-time-code"
            maxLength={128}
            value={accessCode}
            onChange={(event) => setAccessCode(event.target.value)}
            placeholder="Temporary access code"
            className="h-10 min-w-0 flex-1 rounded-md border bg-background px-3 text-sm"
            disabled={calling}
          />
          <Button type="submit" className="bg-[hsl(var(--accent-purple))] text-[hsl(var(--accent-purple-foreground))] hover:brightness-95" disabled={calling || !accessCode.trim()}>
            {calling ? 'Starting call…' : 'Call my demo phone'}<PhoneCall className="ml-2 h-4 w-4" />
          </Button>
        </form>
      ) : (
        <p className="mt-4 text-xs text-muted-foreground" aria-live="polite">Live phone calling will appear here when the secure call service is connected. You can use the scripted sample above now.</p>
      )}
      {message && !activeCall && <p className="mt-3 text-sm text-foreground" role="status" aria-live="polite">{message}</p>}
    </div>
  );
};

const ChatDemo = () => (
  <div className="overflow-hidden rounded-2xl border bg-card shadow-sm" data-testid="chat-demo">
    {CHAT_DEMO_URL ? (
      <iframe
        title="Try the Drag Chat interactive demo"
        src={getDemoUrl('chat')}
        className="block h-[760px] w-full bg-background"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        sandbox="allow-forms allow-scripts allow-same-origin"
      />
    ) : (
      <div className="flex min-h-[420px] flex-col items-center justify-center px-6 py-12 text-center sm:px-12">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[hsl(var(--accent-purple))]/10 text-[hsl(var(--accent-purple))]"><MessageSquare className="h-6 w-6" /></div>
        <h3 className="mt-4 text-lg font-semibold">Try the chat templates</h3>
        <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
          The interactive demo is available when the Drag Chat demo service is connected. The standalone demo supports six messages and lets you switch between business templates.
        </p>
        <Link to="/contact#ai-discovery-call" className="mt-5">
          <Button variant="outline">Request a guided demo<ArrowRight className="ml-2 h-4 w-4" /></Button>
        </Link>
      </div>
    )}
  </div>
);

export default function Products() {
  const [term, setTerm] = useState('monthly');
  const selectedTerm = billingOptions[term];

  useSEO({
    title: 'Drag AI Products | Voice and Website Chat Agents',
    description: 'Explore Drag Voice and Drag Chat: configurable AI conversation assistants for outbound calls and website inquiries, with reusable business templates.',
    canonical: '/products',
    breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Products', path: '/products' }],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Drag AI conversation products',
      itemListElement: products.map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: product.name,
        description: product.description,
        url: `https://drag-ai.com/products#${product.id}`,
      })),
    },
  });

  return (
    <div>
      <section className="relative overflow-hidden pb-12 pt-16 sm:pb-16 sm:pt-20 lg:pt-24">
        <NeuralBackground />
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8" style={{ zIndex: 10 }}>
          <Reveal>
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-[hsl(var(--accent-purple))]">Drag AI products</p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Automate the conversations that move work forward.</h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Give your team or independent practice helpful AI assistants for outbound calls and incoming website questions. Start with a ready-made workflow, then tailor it to your work and approved information.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="bg-[hsl(var(--accent-purple))] text-[hsl(var(--accent-purple-foreground))] hover:brightness-95">
                <a href="#voice-demo">Explore the demos<ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Link to="/contact#ai-discovery-call"><Button variant="outline">Discuss your workflow</Button></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="mx-auto grid w-full max-w-6xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          {products.map(({ id, name, descriptor, Icon, description, examples, note }) => (
            <article id={id} key={id} className="scroll-mt-24 rounded-2xl border bg-card p-6 shadow-sm sm:p-8" data-testid={`product-${id}`}>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[hsl(var(--accent-purple))]/10 text-[hsl(var(--accent-purple))]"><Icon className="h-5 w-5" /></div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-[hsl(var(--accent-purple))]">{descriptor}</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">{name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {examples.map((example) => <div key={example} className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 shrink-0 text-[hsl(var(--accent-purple))]" />{example}</div>)}
              </div>
              <p className="mt-5 border-t pt-4 text-xs leading-relaxed text-muted-foreground">{note}</p>
              <a href={id === 'voice' ? '#voice-demo' : '#chat-demo'} className="mt-5 inline-flex items-center text-sm font-medium text-[hsl(var(--accent-purple))] hover:underline">
                {id === 'voice' ? 'View sample call' : 'Try chat demo'}<ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="scroll-mt-24 bg-muted/40 py-14 sm:py-20" id="voice-demo">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:px-8">
          <Reveal>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[hsl(var(--accent-purple))]/10 text-[hsl(var(--accent-purple))]"><PhoneCall className="h-5 w-5" /></div>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight">Drag Voice</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Choose a call purpose, provide approved business facts, and guide a concise, respectful conversation. The current workspace places one call at a time and requires a team member to launch each call.</p>
            <ul className="mt-5 space-y-3 text-sm text-foreground/80">
              <li className="flex gap-2"><ShieldCheck className="h-4 w-4 shrink-0 text-[hsl(var(--accent-purple))]" />Call purpose and company context stay configurable.</li>
              <li className="flex gap-2"><Headphones className="h-4 w-4 shrink-0 text-[hsl(var(--accent-purple))]" />The assistant identifies itself and checks whether it is a good time to talk.</li>
              <li className="flex gap-2"><CalendarClock className="h-4 w-4 shrink-0 text-[hsl(var(--accent-purple))]" />Appointment times remain requests until a person or calendar confirms them.</li>
            </ul>
            <Link to="/contact?product=voice&plan=custom#ai-discovery-call" className="mt-6 inline-flex"><Button variant="outline">Request a guided phone-call pilot<ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
          </Reveal>
          <VoicePreview />
        </div>
      </section>

      <section className="scroll-mt-24 py-14 sm:py-20" id="chat-demo">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-[hsl(var(--accent-purple))]/10 text-[hsl(var(--accent-purple))]"><Sparkles className="h-5 w-5" /></div>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight">Try Drag Chat</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Explore a short conversation, switch templates, and see how the assistant responds using example business information. The live demo allows six messages per conversation.</p>
          </div>
          <ChatDemo />
        </div>
      </section>

      <section className="bg-muted/40 py-14 sm:py-20" id="pricing">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs uppercase tracking-wider text-foreground/60">Pricing options</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Choose how you want to pay</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Early access pilot pricing in USD. Each product has a clear monthly or annual platform fee; AI and phone usage are scoped separately so the price reflects the work and volume you need.</p>
          </div>
          <div className="mt-7 flex flex-wrap justify-center gap-2" role="group" aria-label="Choose billing term">
            {Object.entries(billingOptions).map(([key, option]) => (
              <button key={key} type="button" aria-pressed={term === key} onClick={() => setTerm(key)} className={`rounded-full border px-5 py-2 text-sm font-medium transition-colors ${term === key ? 'border-[hsl(var(--accent-purple))] bg-[hsl(var(--accent-purple))] text-white' : 'bg-background text-foreground/75 hover:bg-muted'}`}>
                {option.label}
              </button>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground" aria-live="polite">{selectedTerm.detail}</p>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {products.map((product) => <PricingCard key={product.id} product={product} term={term} />)}
          </div>
          <div className="mt-6 rounded-xl border bg-background p-5 text-center">
            <p className="text-sm font-medium">Need both channels or a tailored workflow?</p>
            <p className="mt-1 text-xs text-muted-foreground">Custom pricing is agreed before launch, based on expected replies or call minutes, destination countries, setup, and required integrations.</p>
            <Link to="/contact?product=both&plan=custom#ai-discovery-call" className="mt-4 inline-flex"><Button className="bg-[hsl(var(--accent-purple))] text-[hsl(var(--accent-purple-foreground))] hover:brightness-95">Request a combined quote<ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
          </div>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">Pilot prices cover the Drag AI platform and agreed setup. Variable AI and telephony usage is quoted separately before launch; calling rates depend on destination. Request a pilot to confirm final scope and terms.</p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto w-full max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Start with one repetitive conversation.</h2>
          <p className="mt-3 text-sm text-muted-foreground">We’ll help identify the workflow, the approved information it needs, and where a person should take over.</p>
          <Link to="/contact#ai-discovery-call" className="mt-6 inline-flex"><Button className="bg-[hsl(var(--accent-purple))] text-[hsl(var(--accent-purple-foreground))] hover:brightness-95">Book Free AI Strategy Call<ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
        </div>
      </section>
    </div>
  );
}
