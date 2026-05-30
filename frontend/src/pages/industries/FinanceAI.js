import IndustryDetailLayout from '../../components/industries/IndustryDetailLayout';

const industry = {
  slug: 'finance-ai',
  name: 'Finance & Operations AI',
  hero: {
    eyebrow: 'AI for Finance Teams',
    title: 'AI Automation for Finance Teams',
    subtitle:
      'Drag AI helps finance teams automate document review, reporting, internal policy search, client support, and back-office workflows — with strong audit trails, human approvals on consequential actions, and integrations into the systems you already run.',
  },
  intro:
    'Finance teams sit on top of huge amounts of document work — invoices, statements, contracts, reports, policies — and a long tail of repetitive queries from clients and internal stakeholders. Drag AI builds AI systems that handle the repetitive, structured parts of that work, while keeping humans firmly in control of approvals, exceptions, and anything that affects money.',
  useCases: [
    { title: 'Report summarisation', desc: 'Turn long monthly, quarterly, and management reports into structured summaries with traceable evidence back to the source.' },
    { title: 'Document extraction', desc: 'Structured extraction from invoices, statements, contracts, and forms into your finance systems.' },
    { title: 'Internal policy search', desc: 'A private RAG assistant grounded in your finance policies, SOPs, and audit documents.' },
    { title: 'Client support assistant', desc: 'Tier-1 assistant for routine client and stakeholder questions, with clean handoff for anything sensitive.' },
    { title: 'Compliance workflow support', desc: 'Help reviewers find, summarise, and structure relevant evidence faster, never replacing the reviewer.' },
    { title: 'Approval workflows', desc: 'Route documents and decisions through structured human approval steps with full audit trails.' },
  ],
  workflows: [
    'Invoice and statement extraction',
    'Report and document summarisation with citations',
    'Internal finance policy and SOP search',
    'Client and stakeholder Q&A (non-advisory)',
    'Compliance-style review queues with reviewer dashboards',
    'Structured approval flows for irreversible actions',
  ],
  outcomes: [
    'Less manual effort on document handling and report prep',
    'Faster turnaround on routine client and internal queries',
    'Cleaner audit trails of who reviewed and approved what',
    'Better structured data flowing into ERPs and reporting tools',
    'More time for analysts and controllers to focus on judgement work',
  ],
  faqs: [
    { q: 'Will the AI make financial decisions or give advice?', a: 'No. Drag AI systems support workflow and document tasks. Consequential decisions, regulated advice, and approvals remain with qualified humans.' },
    { q: 'How do you handle audit and traceability?', a: 'We design audit logs of inputs, retrieved sources, outputs, and approvals. Reviewers can always trace an answer or a record back to the source documents.' },
    { q: 'Can it integrate with our ERP / accounting tools?', a: 'Yes. We integrate with common ERPs and accounting tools — NetSuite, QuickBooks, Xero, Sage — plus custom systems via API.' },
    { q: 'What about compliance and regulated workflows?', a: 'AI is used to support reviewers, not replace them. We do not claim regulatory certifications we have not delivered — we design around your specific compliance constraints.' },
    { q: 'How do we start?', a: 'Book a free AI strategy call. We will look at one document-heavy or query-heavy workflow that matters and scope a focused first build.' },
  ],
  relatedLinks: [
    { to: '/services/document-ai', label: 'Document AI' },
    { to: '/services/rag-systems', label: 'RAG Systems' },
    { to: '/services/ai-agents', label: 'AI Agents' },
    { to: '/services/ai-chatbots', label: 'AI Chatbots' },
  ],
  seo: {
    title: 'AI Automation for Finance Teams | Drag AI',
    description:
      'Drag AI helps finance teams automate document review, reporting, knowledge search, client support, and back-office workflows using AI.',
  },
};

export default function FinanceAI() {
  return <IndustryDetailLayout industry={industry} />;
}
