import ArticleLayout from '../../components/resources/ArticleLayout';

const article = {
  slug: 'how-to-choose-ai-automation-agency',
  category: 'Buyer Guide',
  title: 'How to Choose an AI Automation Agency — Draft',
  readingTime: '3 min read',
  lastUpdated: '2026-05-22',
  noindex: true,
  tldr: 'Draft article. Not yet published.',
  sections: [
    {
      id: 'placeholder',
      heading: 'Article in progress',
      body:
        'This article is being drafted. It will cover what to look for in an AI automation agency — honesty about scope, evaluation discipline, security thinking, production focus, and references — and which red flags to avoid. Until it is ready, please book a strategy call.',
    },
  ],
  faqs: [],
  internalLinks: [
    { to: '/case-studies', label: 'Case Studies' },
    { to: '/services', label: 'Services Overview' },
    { to: '/resources', label: 'Back to Resources' },
  ],
  seo: {
    title: 'How to Choose an AI Automation Agency — Draft | Drag AI',
    description: 'Draft article on choosing an AI automation agency. Not yet published.',
  },
};

export default function ChooseAgencyArticle() {
  return <ArticleLayout article={article} />;
}
