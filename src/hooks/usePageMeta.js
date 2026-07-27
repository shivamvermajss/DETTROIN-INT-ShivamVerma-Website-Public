import { useEffect } from 'react';
import { SEO_CONSTANTS } from '../seo/constants';

/**
 * usePageMeta Hook
 * Programmatically updates browser title and meta description.
 */
export const usePageMeta = (title, description) => {
  useEffect(() => {
    if (title) {
      document.title = `${title} | ${SEO_CONSTANTS.siteName}`;
    }

    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    }
  }, [title, description]);
};

export default usePageMeta;
