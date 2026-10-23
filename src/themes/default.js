const lightTheme = {
  mode: 'light',
  fonts: {
    title: "DM Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    main: "DM Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
  },
  colors: {
    primary1: "#0A1812",
    background1: "#F7FAF8",
    accent1: "#059669",
    accentForeground: "#FFFFFF",
    button: "#059669",
    background2: "#FFFFFF",
    muted: "#475B51",
    teal: "#0D9488",
    border: "rgba(10, 24, 18, 0.08)",
    softSurface: "#ECFDF5",
    controlBackground: "#FFFFFF",
  },
  // Breakpoints for responsive design
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
    primary1: '#F1F7F4',
    background1: '#070B09',
    background2: '#0D1410',
    muted: '#95A99E',
    teal: '#34D399',
    accent1: '#10B981',
    accentForeground: '#02140D',
    button: '#10B981',
    border: 'rgba(255, 255, 255, 0.08)',
    softSurface: '#121C16',
    controlBackground: '#0D1410',
  },
};

export default lightTheme;
