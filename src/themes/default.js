const lightTheme = {
  mode: 'light',
  fonts: {
    title: "'Hanken Grotesk', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
    main: "'Hanken Grotesk', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
  },
  colors: {
    primary1: "#14201E",
    background1: "#F6F4EE",
    accent1: "#0F5E57",
    accentForeground: "#F6F4EE",
    button: "#0F5E57",
    background2: "#FCFBF8",
    muted: "#4A5753",
    teal: "#1B7D4C",
    border: "rgba(20, 32, 30, 0.14)",
    softSurface: "#EEEBE2",
    controlBackground: "#FCFBF8",
  },
  breakpoints: {
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)'
  },
};

export const darkTheme = {
  ...lightTheme,
  mode: 'dark',
  colors: {
    ...lightTheme.colors,
    primary1: '#ECEFEA',
    background1: '#0D1514',
    background2: '#131E1C',
    muted: '#A7B3AE',
    teal: '#52C88C',
    accent1: '#5FC4B3',
    accentForeground: '#06201D',
    button: '#5FC4B3',
    border: 'rgba(236, 239, 234, 0.14)',
    softSurface: '#192725',
    controlBackground: '#131E1C',
  },
};

export default lightTheme;
