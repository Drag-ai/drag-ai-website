import ServiceDetailLayout from '../../components/services/ServiceDetailLayout';

const service = {
  slug: 'rag-systems',
  name: 'RAG System Development',
  hero: {
    eyebrow: 'Private Knowledge AI',
    title: 'RAG Systems for Private Business Knowledge Search',
    subtitle:
      'Drag AI builds Retrieval-Augmented Generation (RAG) systems that help your teams search documents, knowledge bases, PDFs, websites, and internal data using secure AI assistants — with source-linked answers, not guesses.',
  },
  whatIs: {
    title: 'What is RAG?',
    body:
      'RAG — Retrieval-Augmented Generation — is an architecture where an AI assistant retrieves the most relevant pieces of your company’s content first, then generates an answer grounded in that content. The result: answers tied to real source documents, with citations, freshness controls, and access rules — instead of opaque, hallucination-prone outputs.',
  },
  whatWeBuild: [
    'Private RAG assistants trained on your company’s documents, websites, and internal data',
    'Source-grounded responses with inline citations users can verify',
    'Multi-format ingestion: PDFs, DOCX, PPTX, XLSX, HTML, Markdown',
    'Metadata filtering, freshness control, and content lifecycle handling',
    'Access-control-ready architecture: users only see what they are allowed to see',
    'Evaluation harness: accuracy testing, regression tests, and reviewer dashboards',
  ],
  useCases: [
    { title: 'Internal knowledge assistant', desc: 'A private assistant grounded in your SOPs, policies, training materials, and handbooks.' },
    { title: 'Customer support knowledge bot', desc: 'A support assistant grounded in your KB articles, help center content, and product docs.' },
    { title: 'Sales / pre-sales assistant', desc: 'Surface verified product facts, pricing notes, and proposal language for sales conversations.' },
    { title: 'Compliance & policy Q&A', desc: 'Answer policy questions with audit-friendly citations to the source documents.' },
    { title: 'Engineering / IT runbook assistant', desc: 'Search through runbooks, postmortems, and architecture documents conversationally.' },
    { title: 'Onboarding assistant', desc: 'Help new joiners get unstuck without pinging senior teammates for every question.' },
  ],
  integrations: [
    'Document sources: SharePoint, Google Drive, Dropbox, Confluence, Notion',
    'Knowledge bases: Zendesk, Intercom, custom CMS, internal wikis',
    'Websites and public docs via crawled ingestion with freshness rules',
    'Databases: Postgres, MySQL, BigQuery, Snowflake (for structured grounding)',
    'Vector stores: pgvector, Pinecone, Qdrant, Weaviate, Milvus',
    'Identity: SSO and group-based access control (Azure AD, Okta, Google Workspace)',
  ],
  security: [
    'Per-user access control: users see only the documents they are allowed to access',
    'Sensitive content redaction and PII-aware ingestion options',
    'Data residency and tenant isolation considered in architecture choices',
    'Audit logs of queries, retrieved sources, and responses',
    'Evaluation pipeline to catch drift, regressions, and hallucination rates over time',
    'Clear handoff when the assistant has low confidence or no grounding',
  ],
  process: [
    { step: '01', title: 'Content & access mapping', desc: 'Identify high-value sources and who can see what, before any model work.' },
    { step: '02', title: 'Ingestion design', desc: 'Define chunking, metadata, refresh rules, and quality checks for each source.' },
    { step: '03', title: 'Retrieval prototype', desc: 'Build retrieval first and tune it against real queries before plugging in generation.' },
    { step: '04', title: 'Answer + citations', desc: 'Add the answer layer with strict source-grounding and citation rendering.' },
    { step: '05', title: 'Evaluation', desc: 'Stand up an evaluation set: precision, recall, hallucination rate, reviewer feedback.' },
    { step: '06', title: 'Deploy & maintain', desc: 'Production rollout with monitoring, freshness jobs, and feedback-driven improvement.' },
  ],
  faqs: [
    { q: 'How is RAG different from fine-tuning a model?', a: 'Fine-tuning changes how a model writes. RAG changes what it knows. For most enterprise use cases — search, support, compliance — RAG is faster, cheaper, easier to update, and easier to audit.' },
    { q: 'Can a RAG system be trained on our private company data?', a: 'Yes. The system is grounded in your private content. Your documents are not used to train a public model.' },
    { q: 'Will users see content they are not supposed to see?', a: 'No. We enforce per-user access control at retrieval time, mirroring your existing permissions wherever possible.' },
    { q: 'How accurate is RAG?', a: 'Accuracy depends on content quality, retrieval design, and evaluation discipline. We measure precision, recall, and hallucination rate against real queries from day one.' },
    { q: 'What file types can it handle?', a: 'PDF, DOCX, PPTX, XLSX, HTML, Markdown, and structured data. We design ingestion around the formats your team actually uses.' },
    { q: 'How do we get started?', a: 'Book a free AI strategy call. We will look at your content sources, security needs, and the actual questions your team needs answered.' },
  ],
  relatedLinks: [
    { to: '/services/ai-agents', label: 'AI Agents' },
    { to: '/services/ai-chatbots', label: 'AI Chatbots' },
    { to: '/services/document-ai', label: 'Document AI' },
    { to: '/resources/rag-vs-fine-tuning', label: 'RAG vs Fine-Tuning' },
  ],
  seo: {
    title: 'RAG System Development for Enterprise Knowledge Search | Drag AI',
    description:
      'Drag AI builds RAG systems that help companies search documents, knowledge bases, PDFs, websites, and internal data using secure AI assistants.',
  },
};

export default function RAGSystemsService() {
  return <ServiceDetailLayout service={service} />;
}
