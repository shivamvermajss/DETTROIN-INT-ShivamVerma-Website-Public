/**
 * Centralized Design System Constants
 * Never hardcode repeated design values across components.
 */

export const COLORS = {
  primary: {
    DEFAULT: '#123458',
    dark: '#0b223c',
    light: '#1d4b7c',
  },
  secondary: {
    DEFAULT: '#2563EB',
    hover: '#1d4ed8',
  },
  accent: {
    DEFAULT: '#F59E0B',
    hover: '#d97706',
  },
  success: '#16A34A',
  warning: '#F59E0B',
  danger: '#DC2626',
  white: '#FFFFFF',
  black: '#111827',
  gray: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
  }
};

export const SPACING_SCALE = {
  4: '4px',
  8: '8px',
  12: '12px',
  16: '16px',
  20: '20px',
  24: '24px',
  32: '32px',
  40: '40px',
  48: '48px',
  64: '64px',
  80: '80px',
  96: '96px',
  120: '120px',
};

export const BORDER_RADIUS = {
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  '2xl': '24px',
  full: '9999px',
};

export const CONTAINER_MAX_WIDTH = 'max-w-7xl';

export const SECTION_SPACING = {
  sm: 'py-12 lg:py-16',
  md: 'py-16 lg:py-24',
  lg: 'py-20 lg:py-32',
};

export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.35,
  slow: 0.5,
};

export const Z_INDEX = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  header: 50,
  modal: 100,
  tooltip: 110,
};

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export const SHADOWS = {
  soft: '0 10px 30px -10px rgba(18, 52, 88, 0.08)',
  hover: '0 20px 40px -12px rgba(18, 52, 88, 0.16)',
  glass: '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
};
