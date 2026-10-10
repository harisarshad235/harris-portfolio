/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-bg, #F4F0EA)',
        foreground: 'var(--color-text, #1D2A2D)',
        primary: {
          DEFAULT: '#E5674F',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#E8DED5',
          foreground: '#1D2A2D',
        },
        muted: {
          DEFAULT: '#687372',
          foreground: '#687372',
        },
        accent: {
          DEFAULT: '#E5674F',
          foreground: '#FFFFFF',
        },
        border: 'rgba(29, 42, 45, 0.14)',
      },
    },
  },
  plugins: [],
};
