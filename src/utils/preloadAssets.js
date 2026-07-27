/**
 * Preloads critical image assets and fonts into browser cache.
 * @param {Array<string>} urls - Array of asset URLs to preload
 */
export const preloadAssets = (urls = []) => {
  if (typeof window === 'undefined' || !Array.isArray(urls)) return;

  urls.forEach((url) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
  });
};

export default preloadAssets;
