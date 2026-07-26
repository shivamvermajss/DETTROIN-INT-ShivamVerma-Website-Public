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
        success: "#16A34A",
        warning: "#F59E0B",
        danger: "#DC2626",
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
      boxShadow: {
        'apple-soft': '0 10px 30px -10px rgba(18, 52, 88, 0.08)',
        'apple-hover': '0 20px 40px -12px rgba(18, 52, 88, 0.16)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      }
    },
  },
  plugins: [],
};
