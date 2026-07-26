import { clsx } from 'clsx';

/**
 * Utility function to merge class names conditionally
 * @param  {...any} inputs
 * @returns {string}
 */
export function cn(...inputs) {
  return clsx(inputs);
}
