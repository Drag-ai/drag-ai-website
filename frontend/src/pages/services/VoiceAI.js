import ServiceDetailLayout from '../../components/services/ServiceDetailLayout';

const service = {
  slug: 'voice-ai',
  name: 'Voice AI Agent Development',
  hero: {
    eyebrow: 'Voice AI',
    title: 'Voice AI Agents for Business Call Automation',
    subtitle:
      'Drag AI builds voice AI agents for lead qualification, appointment booking, customer support, reminders, and business call automation — with natural conversation, CRM integration, and clean human handoff.',
  },
  whatIs: {
    title: 'Where voice AI fits',
    body:
      'Voice AI is the right shape of solution when conversations are repetitive, structured, and frequent — inbound support, outbound qualification, reminders, scheduling. Done well, it answers faster, follows your business rules, and frees humans for the high-judgement conversations.',
  },
  whatWeBuild: [
    'Inbound voice agents that answer, qualify, route, and book',
    'Outbound voice agents for reminders, follow-ups, and structured outreach',
    'Appointment booking flows integrated with your real calendar',
    'Support agents that handle tier-1 questions with clean human escalation',
    'CRM-integrated agents that update records and capture structured outcomes',
    'Compliance-aware scripts, recording, and consent handling',
  ],
  useCases: [
    { title: 'Automated customer support', desc: 'Handle common questions and route the rest to the right human with full context.' },
    { title: 'Appointment booking', desc: 'Inbound and outbound booking with your real calendar and your real availability rules.' },
    { title: 'Lead qualification calls', desc: 'Outbound qualification with structured questions and CRM-ready outcomes.' },
    { title: 'Appointment reminders', desc: 'Reduce no-shows with reminders, reschedules, and confirmations.' },
    { title: 'After-hours coverage', desc: 'Catch inbound calls outside business hours with intelligent triage and callbacks.' },
    { title: 'Renewal & follow-up calls', desc: 'Structured outreach for renewals, surveys, and recurring follow-ups.' },
  ],
  integrations: [
    'Telephony: Twilio, Vonage, SIP-based providers',
    'CRMs: HubSpot, Salesforce, Pipedrive, Zoho',
    'Calendars: Google Calendar, Microsoft 365, scheduling tools',
    'Helpdesks and ticketing systems for escalations',
    'Notification channels: SMS, WhatsApp, email follow-up',
    'Custom APIs for booking systems, account lookup, and order status',
  ],
  security: [
    'Call recording and consent flows configurable per jurisdiction',
    'PII-aware handling and redaction in logs and transcripts',
    'Human handoff with full conversation context for sensitive cases',
    'Guardrails against off-script responses or out-of-scope topics',
    'Audit logs of outcomes, transfers, and structured data captured',
    'Rate limits, abuse protection, and clear refusal patterns',
  ],
  process: [
    { step: '01', title: 'Call flow audit', desc: 'Listen to real calls, map intents, decisions, and edge cases before any model work.' },
    { step: '02', title: 'Script & guardrails design', desc: 'Define what the agent must, may, and must never do; design escalation rules.' },
    { step: '03', title: 'Prototype', desc: 'Stand up the agent on test numbers; test latency, recognition, and naturalness.' },
    { step: '04', title: 'Evaluation', desc: 'Score against real call samples for accuracy, completion rate, and CSAT proxies.' },
    { step: '05', title: 'Deploy', desc: 'Roll out with monitoring, fallback to humans, and structured outcome capture.' },
    { step: '06', title: 'Improve', desc: 'Use call data to refine prompts, intents, and integration coverage over time.' },
  ],
  faqs: [
    { q: 'How natural does the voice agent sound?', a: 'Modern voice models sound very close to human in controlled scenarios. We design the conversational style to match your brand and the situation — calm and clear for support, brisk and structured for outbound.' },
    { q: 'Can it book directly into our calendar?', a: 'Yes. We integrate with your real calendar (Google, Microsoft 365, or scheduling tools) and your real availability rules.' },
    { q: 'When does it hand off to a human?', a: 'Whenever you tell it to: low confidence, sensitive topics, regulated requests, or explicit caller intent. Handoff includes full context so the human is not starting from zero.' },
    { q: 'Is it compliant with call-recording rules?', a: 'We design recording and consent flows per jurisdiction. You stay in control of what is recorded, retained, and shared.' },
    { q: 'How do we measure success?', a: 'Resolution rate, completion rate, average handle time, transfer rate, no-show reduction, and structured outcomes captured in the CRM.' },
    { q: 'How do we get started?', a: 'Book a free AI strategy call and share the call type you want to automate. We will tell you honestly whether voice AI is the right fit — and where it is not.' },
  ],
  relatedLinks: [
    { to: '/services/ai-chatbots', label: 'AI Chatbots' },
    { to: '/services/ai-agents', label: 'AI Agents' },
    { to: '/industries/real-estate-ai', label: 'AI for Real Estate' },
    { to: '/industries/healthcare-ai', label: 'AI for Healthcare Ops' },
  ],
  seo: {
    title: 'Voice AI Agent Development for Business Calls | Drag AI',
    description:
      'Drag AI builds voice AI agents for lead qualification, appointment booking, customer support, reminders, and business call automation.',
  },
};

export default function VoiceAIService() {
  return <ServiceDetailLayout service={service} />;
}
