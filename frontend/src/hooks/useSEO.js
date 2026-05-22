import { useEffect, useCallback } from 'react';

const SITE_URL = 'https://drag-ai.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/favicon.svg`;

export const useSEO = ({
  title,
  description,
  canonical,
  ogImage,
  ogType,
  noindex,
  jsonLd, // optional: array of structured data objects to inject per-page
  breadcrumbs, // optional: [{ name, path }]
}) => {
  const setMetaTag = useCallback((name, content, isProperty = false) => {
    if (!content) return;
    const attribute = isProperty ? 'property' : 'name';
    let meta = document.querySelector(`meta[${attribute}="${name}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attribute, name);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  }, []);

  useEffect(() => {
    // Title: keep "| Drag AI" suffix unless the title already contains "Drag AI"
    const finalTitle = title
      ? title.includes('Drag AI')
        ? title
        : `${title} | Drag AI`
      : 'Drag AI \u2014 Production-Grade Agentic AI Systems';
    document.title = finalTitle;

    // Description
    setMetaTag('description', description);

    // Robots
    setMetaTag('robots', noindex ? 'noindex,nofollow' : 'index,follow');

    // Open Graph
    setMetaTag('og:site_name', 'Drag AI', true);
    setMetaTag('og:title', finalTitle, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:type', ogType || 'website', true);
    setMetaTag('og:image', ogImage || DEFAULT_OG_IMAGE, true);
    if (canonical) {
      setMetaTag('og:url', `${SITE_URL}${canonical}`, true);
    }

    // Twitter Card
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', finalTitle);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', ogImage || DEFAULT_OG_IMAGE);

    // Canonical URL
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', `${SITE_URL}${canonical}`);
    }

    // Page-level JSON-LD blocks (Breadcrumb, WebPage, Article, etc.)
    // Each block is injected with a stable id so we can clean it up on unmount.
    const injectedNodes = [];

    const blocks = [];
    if (Array.isArray(breadcrumbs) && breadcrumbs.length > 0) {
      blocks.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((b, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: b.name,
          item: `${SITE_URL}${b.path}`,
        })),
      });
    }
    if (Array.isArray(jsonLd)) {
      blocks.push(...jsonLd);
    } else if (jsonLd) {
      blocks.push(jsonLd);
    }

    blocks.forEach((block, idx) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.useseo = `page-${idx}`;
      script.text = JSON.stringify(block);
      document.head.appendChild(script);
      injectedNodes.push(script);
    });

    return () => {
      // Cleanup injected JSON-LD on unmount or dep change
      injectedNodes.forEach((node) => {
        if (node && node.parentNode) node.parentNode.removeChild(node);
      });
    };
  }, [
    title,
    description,
    canonical,
    ogImage,
    ogType,
    noindex,
    jsonLd,
    breadcrumbs,
    setMetaTag,
  ]);
};
