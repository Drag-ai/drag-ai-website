import ServiceDetailLayout from '../../components/services/ServiceDetailLayout';

const service = {
  slug: 'document-ai',
  name: 'Document AI Automation',
  hero: {
    eyebrow: 'Document Intelligence',
    title: 'Document AI Automation for Faster Back-Office Work',
    subtitle:
      'Drag AI automates document processing, extraction, classification, summarisation, and approval workflows — turning hours of manual review into minutes of structured, reviewable work.',
  },
  whatIs: {
    title: 'Why Document AI?',
    body:
      'Back-office teams lose meaningful time to reading and re-typing the same kinds of documents — invoices, contracts, claims, leases, forms. Document AI uses modern AI to extract the right fields, classify the right things, summarise the right sections, and route the result through the right approvals — with humans firmly in the loop where it matters.',
  },
  whatWeBuild: [
    'Invoice processing pipelines with line-level extraction and validation',
    'Contract review support: clause extraction, risk flags, and structured summaries',
    'Form digitisation and structured extraction from inconsistent templates',
    'PDF and report summarisation with citation back to the source',
    'Compliance-style review workflows with reviewer queues and audit logs',
    'Outputs in clean JSON, CSV, or direct writes into your existing systems',
  ],
  useCases: [
    { title: 'Invoice processing', desc: 'Extract supplier, line items, totals, dates; route to approvers; write to your accounting system.' },
    { title: 'Contract review support', desc: 'Surface obligations, dates, parties, and risk-flagged clauses for legal/ops review.' },
    { title: 'Form & application extraction', desc: 'Turn paper / scanned forms into structured records with validation rules.' },
    { title: 'Lease abstraction', desc: 'Extract rent, term, escalation, options, and key clauses across portfolios.' },
    { title: 'Claims intake', desc: 'Structure claims documents, attachments, and notes into reviewable cases.' },
    { title: 'Report summarisation', desc: 'Convert long reports into structured exec summaries with traceable evidence.' },
  ],
  integrations: [
    'ERPs and accounting: NetSuite, QuickBooks, Xero, Sage',
    'CRMs and ticketing: HubSpot, Salesforce, Zendesk, Freshdesk',
    'Storage: SharePoint, Google Drive, Dropbox, S3, on-prem file shares',
    'Databases: Postgres, MySQL, SQL Server, Snowflake, BigQuery',
    'Workflow tools: Slack, Microsoft Teams, email triggers, internal portals',
    'Custom APIs / webhooks for downstream systems',
  ],
  security: [
    'Document-level access controls and audit logging',
    'Reviewer queues for low-confidence extractions instead of blind autofill',
    'PII-aware handling and redaction options',
    'Human approval steps before any irreversible action (payment, status change)',
    'Versioning of extracted records with original document references',
    'Per-tenant data isolation when serving multiple business units',
  ],
  process: [
    { step: '01', title: 'Document workflow audit', desc: 'Catalogue current documents, volumes, exceptions, and downstream systems.' },
    { step: '02', title: 'Schema design', desc: 'Define fields, validation rules, and reviewer queues with the team that does the work today.' },
    { step: '03', title: 'Prototype on real samples', desc: 'Run extraction on representative documents and measure accuracy honestly.' },
    { step: '04', title: 'Reviewer experience', desc: 'Design the reviewer UI so exceptions are fast, not painful.' },
    { step: '05', title: 'Production rollout', desc: 'Connect to downstream systems with retries, logging, and SLA monitoring.' },
    { step: '06', title: 'Continuous tuning', desc: 'Use reviewer corrections as labelled data to keep accuracy improving over time.' },
  ],
  faqs: [
    { q: 'How accurate is Document AI?', a: 'It depends on document quality and the field type. We measure precision, recall, and reviewer effort against your real documents — and design reviewer queues for anything below your accuracy threshold.' },
    { q: 'Can it handle scanned and low-quality PDFs?', a: 'Yes. We combine modern OCR with layout-aware models and validation rules. Truly bad scans still need human review — but the system flags them rather than guessing.' },
    { q: 'Will it replace our team?', a: 'No. It removes the most repetitive parts so your team can focus on judgement, exceptions, and customer-facing work.' },
    { q: 'Where does the data live?', a: 'Wherever you need it to. We design for data residency, tenant isolation, and your security review process.' },
    { q: 'How do we measure ROI?', a: 'Cycle time, cost per document, reviewer effort, and exception rate — measured before and after, against real volumes.' },
    { q: 'How do we get started?', a: 'Book a free AI strategy call and share a few sample documents. We will tell you honestly what is achievable and where the limits are.' },
  ],
  relatedLinks: [
    { to: '/services/ai-agents', label: 'AI Agents' },
    { to: '/services/rag-systems', label: 'RAG Systems' },
    { to: '/industries/finance-ai', label: 'AI for Finance Teams' },
    { to: '/industries/real-estate-ai', label: 'AI for Real Estate' },
  ],
  seo: {
    title: 'Document AI Automation Services | Drag AI',
    description:
      'Drag AI automates document processing, extraction, classification, summarisation, and approval workflows using AI.',
  },
};

export default function DocumentAIService() {
  return <ServiceDetailLayout service={service} />;
}
