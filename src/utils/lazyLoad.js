import React, { lazy, Suspense } from 'react';
import Loader from '../components/ui/loader/Loader';

/**
 * Lazy loads a component with default Suspense fallback skeleton UI.
 * @param {Function} importFunc - Component import function e.g. () => import('./MyComponent')
 * @param {React.ReactNode} fallback - Optional custom fallback component
 */
export const lazyLoad = (importFunc, fallback = <Loader fullScreen={false} size="lg" text="Loading content..." />) => {
  const LazyComponent = lazy(importFunc);

  return (props) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default lazyLoad;
