import ArticleLayout from '../../components/resources/ArticleLayout';

const article = {
  slug: 'document-ai-automation',
  category: 'Document AI',
  title: 'Document AI Automation — Draft',
  readingTime: '3 min read',
  lastUpdated: '2026-05-22',
  noindex: true,
  tldr: 'Draft article. Not yet published.',
  sections: [
    {
      id: 'placeholder',
      heading: 'Article in progress',
      body:
        'This article is being drafted. It will cover how Document AI automation works in practice, which use cases work well, common pitfalls, and how to measure ROI. Until it is ready, please see our service page for Document AI.',
    },
  ],
  faqs: [],
  internalLinks: [
    { to: '/services/document-ai', label: 'Document AI Service' },
    { to: '/resources', label: 'Back to Resources' },
  ],
  seo: {
    title: 'Document AI Automation — Draft | Drag AI',
    description: 'Draft article on Document AI automation. Not yet published.',
  },
};

export default function DocumentAIArticle() {
  return <ArticleLayout article={article} />;
}
