import ServiceDetailLayout from '../../components/services/ServiceDetailLayout';

const service = {
  slug: 'ai-agents',
  name: 'AI Agent Development',
  hero: {
    eyebrow: 'Custom AI Agents',
    title: 'Custom AI Agent Development for Business Workflows',
    subtitle:
      'Drag AI builds production-grade AI agents that reason over your data, use the tools your team already uses, follow approval workflows, and assist with real operational tasks — not just demos.',
  },
  whatIs: {
    title: 'What is an AI agent?',
    body:
      'An AI agent is a software system that takes a goal, reasons through the steps required to achieve it, and uses tools, APIs, and your business data to actually get the work done. Unlike a static script, an agent can handle exceptions, ask for human approval, and adapt to changing context — which is what makes it useful for real business workflows instead of one-off demos.',
  },
  whatWeBuild: [
    'Custom AI agents trained on your business rules, data, and workflows',
    'Tool-calling agents that integrate with CRMs, helpdesks, databases, and APIs',
    'Multi-step agents that handle intake, processing, decisioning, and follow-up',
    'Agents with human-in-the-loop approvals for high-risk actions',
    'Audit trails, observability, and evaluation built in from day one',
    'Production deployment with monitoring, fallback handling, and ongoing improvement',
  ],
  useCases: [
    { title: 'Customer support automation', desc: 'Agents that answer tier-1 questions, gather context, and escalate cleanly to humans when needed.' },
    { title: 'Internal operations assistant', desc: 'Agents that help operations teams with status lookups, status updates, and routine task execution.' },
    { title: 'Lead qualification & intake', desc: 'Agents that qualify leads, capture structured details, and hand off enriched records to sales.' },
    { title: 'CRM updates & data routing', desc: 'Agents that move data between systems with validation and approval steps.' },
    { title: 'Reporting automation', desc: 'Agents that draft recurring reports, summaries, and updates from your operational data.' },
    { title: 'Internal knowledge assistants', desc: 'Agents grounded in company documents that answer with source links, not hallucinations.' },
  ],
  integrations: [
    'CRMs: HubSpot, Salesforce, Pipedrive, Zoho',
    'Helpdesks: Zendesk, Intercom, Freshdesk',
    'Productivity: Slack, Microsoft Teams, Gmail, Outlook',
    'Data: Postgres, MySQL, BigQuery, Snowflake, Airtable, Google Sheets',
    'File & document stores: SharePoint, Google Drive, Dropbox, S3',
    'Custom APIs and internal systems via REST / GraphQL / webhooks',
  ],
  security: [
    'Role-based access control on data and tools the agent can touch',
    'Human approval checkpoints for irreversible actions (sends, payments, status changes)',
    'Structured logging and audit trail of agent actions',
    'Guardrails on tool use: allowed tools, allowed inputs, allowed actions',
    'Graceful fallback to humans on low confidence or out-of-scope queries',
    'Privacy-aware design: data residency, minimisation, and access review',
  ],
  process: [
    { step: '01', title: 'Workflow discovery', desc: 'Map the real workflow, decisions, data, and integration points before any model selection.' },
    { step: '02', title: 'Agent design', desc: 'Define the tools, prompts, memory, evaluation, and approval points for each step.' },
    { step: '03', title: 'Prototype', desc: 'Build a focused prototype on real data and run it against representative scenarios.' },
    { step: '04', title: 'Evaluate', desc: 'Measure accuracy, latency, cost, reviewer effort, and edge-case behaviour.' },
    { step: '05', title: 'Deploy securely', desc: 'Move to production with monitoring, access controls, and fallback paths.' },
    { step: '06', title: 'Improve continuously', desc: 'Track usage, errors, and feedback; refine prompts, tools, and guardrails over time.' },
  ],
  faqs: [
    { q: 'What is the difference between an AI agent and an AI chatbot?', a: 'A chatbot mainly answers questions. An AI agent goes further — it can use tools, take actions, follow multi-step workflows, and update systems with appropriate guardrails and human approvals.' },
    { q: 'How long does an agent project typically take?', a: 'A focused prototype usually takes 2–4 weeks. Full production rollout typically takes 2–6 months depending on integration complexity, data readiness, and the number of workflows.' },
    { q: 'Will the agent have access to all our data?', a: 'No. Agents are designed with least-privilege access. They only see the data and tools needed for the workflow, behind role-based access controls and audit logging.' },
    { q: 'Do we need ML expertise in-house to use this?', a: 'No. Drag AI builds agents your team can operate through familiar interfaces, with documentation, monitoring dashboards, and human-in-the-loop controls.' },
    { q: 'How do you prevent hallucinations and wrong actions?', a: 'We combine retrieval grounding for facts, structured evaluation against your real data, conservative tool permissions, and approval checkpoints for sensitive actions.' },
    { q: 'How do we get started?', a: 'Book a free AI strategy call and share the workflow you want to automate. We will tell you honestly whether an agent is the right shape of solution for it.' },
  ],
  relatedLinks: [
    { to: '/services/rag-systems', label: 'RAG Systems' },
    { to: '/services/ai-chatbots', label: 'AI Chatbots' },
    { to: '/services/voice-ai', label: 'Voice AI' },
    { to: '/case-studies', label: 'Case Studies' },
  ],
  seo: {
    title: 'Custom AI Agent Development Company | Drag AI',
    description:
      'Drag AI builds custom AI agents that automate workflows, connect with business tools, reason over company data, and support real business operations.',
  },
};

export default function AIAgentsService() {
  return <ServiceDetailLayout service={service} />;
}
