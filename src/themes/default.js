const lightTheme = {
  mode: 'light',
  fonts: {
    title: "DM Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    main: "DM Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
  },
  colors: {
    primary1: "#0F172A",
    background1: "#F8FAFC",
    accent1: "#2563EB",
    accentForeground: "#FFFFFF",
    button: "#2563EB",
    background2: "#FFFFFF",
    muted: "#475569",
    teal: "#0284C7",
    border: "rgba(15, 23, 42, 0.08)",
    softSurface: "#F1F5F9",
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
    primary1: '#F8FAFC',
    background1: '#070A0F',
    background2: '#0D121D',
    muted: '#94A3B8',
    teal: '#38BDF8',
    accent1: '#3B82F6',
    accentForeground: '#FFFFFF',
    button: '#3B82F6',
    border: 'rgba(255, 255, 255, 0.08)',
    softSurface: '#131B2A',
    controlBackground: '#0D121D',
  },
};

export default lightTheme;
