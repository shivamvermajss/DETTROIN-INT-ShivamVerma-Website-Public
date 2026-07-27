/**
 * Performance Monitoring Utilities
 * Measures Web Vitals (LCP, FID, CLS) and user timing marks for production analytics.
 */

export const markPerformance = (markName) => {
  if (typeof window !== 'undefined' && 'performance' in window && performance.mark) {
    performance.mark(markName);
  }
};

export const measurePerformance = (name, startMark, endMark) => {
  if (typeof window !== 'undefined' && 'performance' in window && performance.measure) {
    try {
      performance.measure(name, startMark, endMark);
    } catch {
      // Ignore missing performance mark errors silently
    }
  }
};

/**
 * Log Web Vitals metrics in development mode
 */
export const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    }).catch(() => {
      // web-vitals package not loaded
    });
  }
};
