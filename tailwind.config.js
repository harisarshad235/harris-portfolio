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
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
      },
      fontSize: {
        '2xs': ['1.1rem', { lineHeight: '1.5rem' }],
        xs: ['1.2rem', { lineHeight: '1.6rem' }],
        sm: ['1.4rem', { lineHeight: '2.0rem' }],
        base: ['1.6rem', { lineHeight: '2.5rem' }],
        lg: ['1.8rem', { lineHeight: '2.8rem' }],
        xl: ['2.0rem', { lineHeight: '3.0rem' }],
        '2xl': ['2.4rem', { lineHeight: '3.2rem' }],
        '3xl': ['3.0rem', { lineHeight: '3.8rem' }],
        '4xl': ['3.6rem', { lineHeight: '4.4rem' }],
        '5xl': ['4.4rem', { lineHeight: '5.2rem' }],
        '6xl': ['5.2rem', { lineHeight: '6.0rem' }],
      },
    },
  },
  plugins: [],
};
