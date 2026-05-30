import ArticleLayout from '../../components/resources/ArticleLayout';

const article = {
  slug: 'voice-ai-agents-customer-support',
  category: 'Voice AI',
  title: 'Voice AI Agents for Customer Support — Draft',
  readingTime: '3 min read',
  lastUpdated: '2026-05-22',
  noindex: true,
  tldr: 'Draft article. Not yet published.',
  sections: [
    {
      id: 'placeholder',
      heading: 'Article in progress',
      body:
        'This article is being drafted. It will cover where voice AI agents fit into customer support, what to automate first, how to design escalation, and how to measure success. Until it is ready, see our Voice AI service page.',
    },
  ],
  faqs: [],
  internalLinks: [
    { to: '/services/voice-ai', label: 'Voice AI Service' },
    { to: '/resources', label: 'Back to Resources' },
  ],
  seo: {
    title: 'Voice AI Agents for Customer Support — Draft | Drag AI',
    description: 'Draft article on voice AI agents for customer support. Not yet published.',
  },
};

export default function VoiceAISupportArticle() {
  return <ArticleLayout article={article} />;
}
