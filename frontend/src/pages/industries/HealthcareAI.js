import IndustryDetailLayout from '../../components/industries/IndustryDetailLayout';

const industry = {
  slug: 'healthcare-ai',
  name: 'Healthcare Operations AI',
  hero: {
    eyebrow: 'AI for Healthcare Operations',
    title: 'AI Automation for Healthcare Operations',
    subtitle:
      'Drag AI helps healthcare teams automate patient FAQs, document workflows, internal knowledge search, scheduling support, and admin tasks — so clinical and operations teams can spend more time on care, less time on repetitive paperwork.',
  },
  disclaimer:
    'Drag AI systems are designed to support operations and administrative workflows. They are not a replacement for licensed medical advice, diagnosis, or treatment.',
  intro:
    'Healthcare operations teams handle huge volumes of repetitive admin work — inbound patient questions, scheduling, document intake, billing queries, internal knowledge lookups, and clinic communications. Drag AI builds AI systems that support these workflows safely, with human-in-the-loop controls, clear scope, and respect for the boundary between admin support and clinical decision-making.',
  useCases: [
    { title: 'Patient FAQ assistant', desc: 'Answer common admin and policy questions (hours, location, insurance, prep instructions) grounded in your real content, with explicit refusal for clinical questions.' },
    { title: 'Scheduling support', desc: 'Help patients find, confirm, or reschedule appointments based on your real availability rules, with clean escalation to staff.' },
    { title: 'Internal knowledge search', desc: 'Help admin staff search policies, SOPs, and reference documents conversationally with citations back to the source.' },
    { title: 'Document intake & extraction', desc: 'Structure intake forms, referrals, and documents into clean records for downstream systems, with reviewer queues for exceptions.' },
    { title: 'Billing & coverage FAQ', desc: 'Answer routine billing and coverage questions; route anything sensitive to the right human team.' },
    { title: 'Clinic communications support', desc: 'Drafts and reminders for non-clinical communications, always reviewable by a human before sending.' },
  ],
  workflows: [
    'Admin and patient FAQ answering (non-clinical)',
    'Appointment scheduling support and reminders',
    'Document and referral intake',
    'Internal policy and SOP search',
    'Routine billing and coverage queries',
    'Reviewer queues for anything sensitive',
  ],
  outcomes: [
    'Less time spent on repetitive admin questions',
    'Faster, more consistent responses outside business hours',
    'Better structured data flowing into your systems of record',
    'Clearer separation between admin support and clinical care',
    'More headspace for clinical and front-desk teams',
  ],
  faqs: [
    { q: 'Does this replace clinical staff or give medical advice?', a: 'No. Drag AI systems for healthcare are designed strictly for operations and admin support. They explicitly refuse to give clinical advice and route those questions to qualified staff.' },
    { q: 'How do you handle patient data?', a: 'We design with data minimisation, role-based access, audit logging, and your existing data residency / compliance requirements. We do not assume HIPAA / DPA certification unless explicitly delivered and audited under contract.' },
    { q: 'Can it integrate with our PMS / EHR?', a: 'Yes, where APIs are available. We design the integration with you and your IT / compliance teams to fit your existing access and audit model.' },
    { q: 'Will staff still review sensitive responses?', a: 'Yes. We design explicit escalation rules and reviewer steps for anything sensitive. Humans stay in the loop for any consequential action.' },
    { q: 'How do we start?', a: 'Book a free AI strategy call. We will scope a non-clinical workflow first — patient FAQs, document intake, or internal knowledge search — and discuss your compliance constraints up front.' },
  ],
  relatedLinks: [
    { to: '/services/ai-chatbots', label: 'AI Chatbots' },
    { to: '/services/rag-systems', label: 'RAG Systems' },
    { to: '/services/document-ai', label: 'Document AI' },
    { to: '/services/voice-ai', label: 'Voice AI' },
  ],
  seo: {
    title: 'AI Automation for Healthcare Operations | Drag AI',
    description:
      'Drag AI helps healthcare teams automate patient FAQs, document workflows, internal knowledge search, scheduling support, and admin tasks.',
  },
};

export default function HealthcareAI() {
  return <IndustryDetailLayout industry={industry} />;
}
