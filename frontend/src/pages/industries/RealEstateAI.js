import IndustryDetailLayout from '../../components/industries/IndustryDetailLayout';

const industry = {
  slug: 'real-estate-ai',
  name: 'Real Estate & Property Management AI',
  hero: {
    eyebrow: 'AI for Real Estate',
    title: 'AI Automation for Real Estate Businesses',
    subtitle:
      'Drag AI helps real estate companies and property management teams automate lead qualification, property search, document workflows, tenant communication, and follow-ups — with AI agents that fit your CRM, your portals, and your team’s real working process.',
  },
  intro:
    'Real estate teams spend a large part of every week on repetitive work: qualifying inbound leads, answering similar property and tenancy questions, chasing documents, abstracting leases, scheduling viewings, and following up on slow conversations. Drag AI builds AI systems that take the load off those workflows so agents, brokers, and property managers can focus on the deals and relationships that matter.',
  useCases: [
    { title: 'Lead qualification agent', desc: 'Capture intent, budget, location, and timeline from inbound leads; route the qualified ones to the right agent with a clean handoff.' },
    { title: 'Property recommendation assistant', desc: 'Help prospects narrow down options based on requirements, with citations back to your real listings.' },
    { title: 'Follow-up automation', desc: 'Structured, on-brand follow-ups for cold leads, scheduled viewings, and post-viewing nudges.' },
    { title: 'Document collection automation', desc: 'Chase ID, payslips, references, and signed forms with reminders and structured tracking.' },
    { title: 'Client / tenant FAQ chatbot', desc: 'A 24/7 assistant for repetitive listing, tenancy, and maintenance questions, grounded in your real content.' },
    { title: 'Appointment scheduling', desc: 'Voice or chat agents that book viewings on the right agent’s calendar with your real availability rules.' },
    { title: 'Property management triage', desc: 'Classify and route maintenance requests; capture structured details from tenants automatically.' },
    { title: 'Lease abstraction', desc: 'Extract rent, term, escalation, options, and key clauses across leases at portfolio scale.' },
  ],
  workflows: [
    'Inbound lead intake and qualification',
    'Property and tenancy Q&A on website and messaging channels',
    'Document collection, reminders, and status tracking',
    'Viewing booking and rescheduling',
    'Maintenance request intake and triage',
    'Lease abstraction and renewal tracking',
  ],
  outcomes: [
    'Faster response to inbound leads, including outside business hours',
    'Cleaner handoffs between marketing, sales, and property management',
    'Less time lost to chasing documents and repetitive emails',
    'Better structured data in the CRM for reporting and forecasting',
    'More time for agents to focus on viewings, negotiations, and relationships',
  ],
  faqs: [
    { q: 'Can the AI work with our existing CRM and listing portals?', a: 'Yes. Drag AI integrates with common real estate CRMs, helpdesks, and custom internal systems via APIs. We do not require ripping out what already works.' },
    { q: 'Will the AI replace our agents?', a: 'No. The goal is to remove the most repetitive and after-hours work so agents can focus on viewings, negotiations, and judgement-heavy conversations.' },
    { q: 'How do you handle private tenant or client data?', a: 'We design with role-based access, audit logs, and the data residency requirements you operate under. Tenant and client data stays under your existing controls.' },
    { q: 'Can it handle lease abstraction at portfolio scale?', a: 'Yes. We build Document AI pipelines specifically for leases — extracting rent, term, escalation, options, and key clauses with reviewer queues for exceptions.' },
    { q: 'How do we start?', a: 'Book a free AI strategy call and share the workflow you most want to automate — lead intake, document collection, FAQs, or lease abstraction.' },
  ],
  relatedLinks: [
    { to: '/services/ai-agents', label: 'AI Agent Development' },
    { to: '/services/ai-chatbots', label: 'AI Chatbots' },
    { to: '/services/voice-ai', label: 'Voice AI Agents' },
    { to: '/services/document-ai', label: 'Document AI' },
  ],
  seo: {
    title: 'AI Automation for Real Estate Companies | Drag AI',
    description:
      'Drag AI helps real estate businesses automate lead qualification, property search, document workflows, client communication, and follow-ups.',
  },
};

export default function RealEstateAI() {
  return <IndustryDetailLayout industry={industry} />;
}
