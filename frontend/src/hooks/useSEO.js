import { useEffect } from 'react';

// Stable module-level constants — safe to reference from inside the effect
// because they never change at runtime.
const SITE_URL = 'https://drag-ai.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/favicon.svg`;
const DEFAULT_TITLE = 'Drag AI — Production-Grade Agentic AI Systems';

// ---------- Pure DOM helpers (module-scope; intentionally not memoized) ----------

const upsertMeta = (selector, attribute, name, content) => {
  if (!content) return;
  let meta = document.querySelector(selector);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, name);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
};

const setNamedMeta = (name, content) =>
  upsertMeta(`meta[name="${name}"]`, 'name', name, content);

const setPropertyMeta = (property, content) =>
  upsertMeta(`meta[property="${property}"]`, 'property', property, content);

const setCanonical = (href) => {
  if (!href) return;
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
};

const buildFinalTitle = (title) => {
  if (!title) return DEFAULT_TITLE;
  return title.includes('Drag AI') ? title : `${title} | Drag AI`;
};

const applyOpenGraph = ({ finalTitle, description, ogType, ogImage, canonical }) => {
  setPropertyMeta('og:site_name', 'Drag AI');
  setPropertyMeta('og:title', finalTitle);
  setPropertyMeta('og:description', description);
  setPropertyMeta('og:type', ogType || 'website');
  setPropertyMeta('og:image', ogImage || DEFAULT_OG_IMAGE);
  if (canonical) setPropertyMeta('og:url', `${SITE_URL}${canonical}`);
};

const applyTwitter = ({ finalTitle, description, ogImage }) => {
  setNamedMeta('twitter:card', 'summary_large_image');
  setNamedMeta('twitter:title', finalTitle);
  setNamedMeta('twitter:description', description);
  setNamedMeta('twitter:image', ogImage || DEFAULT_OG_IMAGE);
};

const buildBreadcrumbsBlock = (breadcrumbs) => {
  if (!Array.isArray(breadcrumbs) || breadcrumbs.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: b.name,
      item: `${SITE_URL}${b.path}`,
    })),
  };
};

const normalizeJsonLd = (jsonLd) => {
  if (!jsonLd) return [];
  return Array.isArray(jsonLd) ? jsonLd : [jsonLd];
};

const injectStructuredData = (blocks) => {
  const nodes = [];
  blocks.forEach((block, idx) => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.dataset.useseo = `page-${idx}`;
    script.text = JSON.stringify(block);
    document.head.appendChild(script);
    nodes.push(script);
  });
  return nodes;
};

// ---------- Hook ----------

export const useSEO = ({
  title,
  description,
  canonical,
  ogImage,
  ogType,
  noindex,
  jsonLd,
  breadcrumbs,
}) => {
  useEffect(() => {
    const finalTitle = buildFinalTitle(title);
    document.title = finalTitle;

    setNamedMeta('description', description);
    setNamedMeta('robots', noindex ? 'noindex,nofollow' : 'index,follow');

    applyOpenGraph({ finalTitle, description, ogType, ogImage, canonical });
    applyTwitter({ finalTitle, description, ogImage });

    if (canonical) setCanonical(`${SITE_URL}${canonical}`);

    const blocks = [];
    const breadcrumbBlock = buildBreadcrumbsBlock(breadcrumbs);
    if (breadcrumbBlock) blocks.push(breadcrumbBlock);
    blocks.push(...normalizeJsonLd(jsonLd));

    const injectedNodes = injectStructuredData(blocks);

    return () => {
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
  ]);
};
