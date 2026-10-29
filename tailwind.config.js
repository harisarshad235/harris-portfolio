/** @type {import('tailwindcss').Config} */
const line = (name) => `rgb(var(--${name}-rgb) / <alpha-value>)`;

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
        paper: line('paper'),
        surface: { DEFAULT: line('surface'), 2: line('surface-2') },
        ink: { DEFAULT: line('ink'), 2: line('ink-2') },
        rule: line('rule'),
        line: {
          cobalt: line('cobalt'),
          vermilion: line('vermilion'),
          sunflower: line('sunflower'),
          green: line('green'),
          violet: line('violet'),
          magenta: line('magenta'),
        },
        on: {
          cobalt: line('on-cobalt'),
          vermilion: line('on-vermilion'),
          sunflower: line('on-sunflower'),
          green: line('on-green'),
          violet: line('on-violet'),
          magenta: line('on-magenta'),
        },
        drench: { DEFAULT: line('drench'), ink: line('on-drench') },
        terminus: { DEFAULT: line('terminus'), ink: line('on-terminus') },

        /* Legacy semantic aliases */
        background: line('background'),
        foreground: line('foreground'),
        card: { DEFAULT: line('card'), foreground: line('card-foreground') },
        popover: { DEFAULT: line('popover'), foreground: line('popover-foreground') },
        primary: { DEFAULT: line('primary'), foreground: line('primary-foreground') },
        secondary: { DEFAULT: line('secondary'), foreground: line('secondary-foreground') },
        muted: { DEFAULT: line('muted'), foreground: line('muted-foreground') },
        accent: { DEFAULT: line('accent'), foreground: line('accent-foreground') },
        destructive: { DEFAULT: line('destructive'), foreground: line('destructive-foreground') },
        border: 'rgb(var(--border-rgb) / 0.14)',
        input: 'rgb(var(--input-rgb) / 0.22)',
        ring: line('ring'),
      },
      fontFamily: {
        sans: ['Archivo', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.23, 1, 0.32, 1)',
        'in-out-strong': 'cubic-bezier(0.77, 0, 0.175, 1)',
      },
    },
  },
  plugins: [],
};
