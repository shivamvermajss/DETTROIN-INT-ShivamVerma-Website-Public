/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#123458",
          dark: "#0b223c",
          light: "#1d4b7c",
        },
        secondary: {
          DEFAULT: "#2563EB",
          hover: "#1d4ed8",
        },
        accent: {
          DEFAULT: "#F59E0B",
          hover: "#d97706",
        },
        surface: "#F8FAFC",
        darkText: "#111827",
        mutedText: "#6B7280",
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        heading: ['Manrope', 'sans-serif'],
      },
      borderRadius: {
        '16': '16px',
        '20': '20px',
        '24': '24px',
      },
      spacing: {
        '8': '8px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '64': '64px',
        '80': '80px',
        '120': '120px',
      }
    },
  },
  plugins: [],
};
