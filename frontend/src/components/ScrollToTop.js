import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Resets window scroll to top on every route (pathname) change so each page
 * always opens from the top.
 *
 * Important: if the URL has a hash (e.g. `/contact#ai-discovery-call`), we
 * intentionally do nothing here so the destination page's own anchor-scrolling
 * logic (like `useScrollToFormOnHash` on Contact) can take over.
 *
 * Place this component once, just inside `<BrowserRouter>` and above the routes.
 */
export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return; // Let anchor-aware logic handle it.
    // Use 'auto' (not 'smooth') so navigation feels like a clean page load.
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
};
