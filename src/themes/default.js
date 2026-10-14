const lightTheme = {
  mode: 'light',
  fonts: {
    title: "DM Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    main: "DM Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
  },
  colors: {
    primary1: "#11181C",
    background1: "#F8F6F1",
    accent1: "#C84B31",
    accentForeground: "#FFFFFF",
    button: "#C84B31",
    background2: "#FFFFFF",
    muted: "#526063",
    teal: "#0E7670",
    border: "rgba(17, 24, 28, 0.09)",
    softSurface: "#EFECE5",
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
    primary1: '#F4F6F6',
    background1: '#0B0F12',
    background2: '#131A1E',
    muted: '#9AA7A9',
    teal: '#2DD4BF',
    accent1: '#E26D57',
    accentForeground: '#0B0F12',
    button: '#E26D57',
    border: 'rgba(244, 246, 246, 0.09)',
    softSurface: '#192329',
    controlBackground: '#131A1E',
  },
};

export default lightTheme;
