import ArticleLayout from '../../components/resources/ArticleLayout';

const article = {
  slug: 'ai-automation-use-cases-real-estate',
  category: 'Industry',
  title: 'AI Automation Use Cases for Real Estate — Draft',
  readingTime: '3 min read',
  lastUpdated: '2026-05-22',
  noindex: true,
  tldr: 'Draft article. Not yet published.',
  sections: [
    {
      id: 'placeholder',
      heading: 'Article in progress',
      body:
        'This article is being drafted. It will cover lead qualification, property recommendation, document collection, FAQ chatbots, and lease abstraction for real estate teams. Until it is ready, see our Real Estate AI industry page.',
    },
  ],
  faqs: [],
  internalLinks: [
    { to: '/industries/real-estate-ai', label: 'AI for Real Estate' },
    { to: '/resources', label: 'Back to Resources' },
  ],
  seo: {
    title: 'AI Automation Use Cases for Real Estate — Draft | Drag AI',
    description: 'Draft article on AI automation use cases for real estate. Not yet published.',
  },
};

export default function RealEstateUseCasesArticle() {
  return <ArticleLayout article={article} />;
}
