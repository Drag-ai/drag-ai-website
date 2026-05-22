import { useEffect, useCallback } from 'react';

export const useSEO = ({ title, description, canonical, ogImage }) => {
  // Move setMetaTag outside useEffect and memoize it
  const setMetaTag = useCallback((name, content, isProperty = false) => {
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
    // Set page title
    document.title = title ? `${title} | Drag AI` : 'Drag AI - Production-Grade Agentic AI Systems';

    // Description
    setMetaTag('description', description);

    // Open Graph
    setMetaTag('og:title', title || 'Drag AI', true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:type', 'website', true);
    if (canonical) {
      setMetaTag('og:url', `https://drag-ai.com${canonical}`, true);
    }
    if (ogImage) {
      setMetaTag('og:image', ogImage, true);
    }

    // Twitter Card
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title || 'Drag AI');
    setMetaTag('twitter:description', description);
    if (ogImage) {
      setMetaTag('twitter:image', ogImage);
    }

    // Canonical URL
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', `https://drag-ai.com${canonical}`);
    }
  }, [title, description, canonical, ogImage, setMetaTag]);
};
