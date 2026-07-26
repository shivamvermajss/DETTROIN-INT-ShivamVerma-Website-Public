import { BREAKPOINTS } from '../constants/themeConstants';

/**
 * Helper to check media queries programmatically
 */
export function isMobileScreen() {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < parseInt(BREAKPOINTS.md);
}

export function isTabletScreen() {
  if (typeof window === 'undefined') return false;
  return window.innerWidth >= parseInt(BREAKPOINTS.md) && window.innerWidth < parseInt(BREAKPOINTS.lg);
}

export function isDesktopScreen() {
  if (typeof window === 'undefined') return false;
  return window.innerWidth >= parseInt(BREAKPOINTS.lg);
}
