import ServiceDetailLayout from '../../components/services/ServiceDetailLayout';

const service = {
  slug: 'ai-chatbots',
  name: 'AI Chatbot Development',
  hero: {
    eyebrow: 'AI Chatbots',
    title: 'AI Chatbots That Answer, Qualify, and Automate',
    subtitle:
      'Drag AI builds AI chatbots for websites, customer support, lead qualification, internal teams, and company knowledge bases — grounded in your real content, not generic web data.',
  },
  whatIs: {
    title: 'What we mean by “AI chatbot”',
    body:
      'A modern AI chatbot is more than scripted Q&A. It can understand the question, retrieve the right information from your knowledge base, take simple actions in your tools, qualify leads, and escalate cleanly to a human when needed — across web, mobile, and messaging channels.',
  },
  whatWeBuild: [
    'Website chatbots that answer real product, pricing, and support questions',
    'Customer support assistants grounded in your KB, helpdesk, and product docs',
    'Lead qualification bots that capture structured details and hand off to sales',
    'Internal team chatbots over policies, runbooks, SOPs, and internal docs',
    'RAG-powered chatbots with cited sources for verifiable answers',
    'Multi-channel deployment: web widget, in-app, WhatsApp, Slack, Microsoft Teams',
  ],
  useCases: [
    { title: 'Website / pre-sales chatbot', desc: 'Answer product, pricing, and feature questions; book demos; route qualified leads to sales.' },
    { title: 'Customer support assistant', desc: 'Handle tier-1 questions, gather context, and escalate cleanly with full conversation history.' },
    { title: 'Lead qualification bot', desc: 'Ask the right qualifying questions, capture firmographics, and create CRM records.' },
    { title: 'Internal HR / IT assistant', desc: 'Answer policy, benefits, and IT questions for employees without paging the team.' },
    { title: 'Onboarding assistant', desc: 'Help new joiners or new customers get to first value without 1:1 hand-holding.' },
    { title: 'Knowledge base chatbot', desc: 'A conversational front door to your existing knowledge base with citations.' },
  ],
  integrations: [
    'CRMs: HubSpot, Salesforce, Pipedrive, Zoho',
    'Helpdesks: Zendesk, Intercom, Freshdesk, Help Scout',
    'Messaging: WhatsApp Business, Slack, Microsoft Teams, web widgets',
    'Identity: SSO, Azure AD, Okta, Google Workspace',
    'Knowledge sources: SharePoint, Google Drive, Confluence, Notion, custom KB',
    'Calendar / booking: Google Calendar, Microsoft 365, scheduling tools',
  ],
  security: [
    'Per-user authentication and access control where applicable',
    'Conversation logging and audit trail for compliance review',
    'Configurable data retention and PII-handling policies',
    'Human escalation paths whenever confidence is low or topic is sensitive',
    'Rate limits, abuse protection, and prompt-injection mitigation',
    'Brand-safe guardrails on tone, refusals, and out-of-scope topics',
  ],
  process: [
    { step: '01', title: 'Use case scoping', desc: 'Pick the one or two conversations that actually matter to the business.' },
    { step: '02', title: 'Knowledge & data review', desc: 'Audit what the bot needs to know and how often it changes.' },
    { step: '03', title: 'Prototype', desc: 'Stand up the bot on real conversations from logs or sample interviews.' },
    { step: '04', title: 'Evaluation', desc: 'Score answers against your team, not against vibes. Catch failure modes early.' },
    { step: '05', title: 'Deploy', desc: 'Launch on the right channels with handoff, monitoring, and feedback collection.' },
    { step: '06', title: 'Improve', desc: 'Use real conversations to refine knowledge, prompts, and escalation rules.' },
  ],
  faqs: [
    { q: 'Can the chatbot be trained on our company documents?', a: 'Yes. Drag AI can build private RAG-powered assistants that search and answer from your company documents, websites, knowledge bases, and internal data sources.' },
    { q: 'Can it integrate with our existing CRM or helpdesk?', a: 'Yes. We integrate with HubSpot, Salesforce, Zendesk, Intercom, Freshdesk, and other common tools — plus custom systems via API.' },
    { q: 'How does it know when to escalate to a human?', a: 'We design explicit escalation rules: low confidence, sensitive topics, regulated requests, or explicit user intent. Escalation includes full conversation context.' },
    { q: 'Will it hallucinate?', a: 'We minimise this by grounding answers in your real content and citing sources. We also evaluate hallucination rate continuously and refuse to answer outside scope.' },
    { q: 'How long does it take to launch?', a: 'A focused prototype usually takes 2–4 weeks. Full production rollout depends on integrations and content readiness.' },
    { q: 'How do we get started?', a: 'Book a free AI strategy call and share the conversation type you want to automate. We will tell you honestly whether a chatbot is the right shape of solution.' },
  ],
  relatedLinks: [
    { to: '/services/rag-systems', label: 'RAG Systems' },
    { to: '/services/ai-agents', label: 'AI Agents' },
    { to: '/services/voice-ai', label: 'Voice AI' },
    { to: '/resources/private-ai-chatbot-company-documents', label: 'Private AI Chatbot Guide' },
  ],
  seo: {
    title: 'AI Chatbot Development for Websites & Business Support | Drag AI',
    description:
      'Drag AI builds AI chatbots for websites, customer support, lead qualification, internal teams, and company knowledge bases.',
  },
};

export default function AIChatbotsService() {
  return <ServiceDetailLayout service={service} />;
}
