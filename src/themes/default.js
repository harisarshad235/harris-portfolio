const lightTheme = {
  mode: 'light',
  fonts: {
    title: "'Archivo', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
    main: "'Archivo', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
  },
  colors: {
    primary1: "#0E1116",
    background1: "#F7F7F4",
    accent1: "#1F4FE0",
    accentForeground: "#FFFFFF",
    button: "#0E1116",
    background2: "#FFFFFF",
    muted: "#4A4F59",
    teal: "#0E9F5B",
    border: "rgba(14, 17, 22, 0.14)",
    softSurface: "#ECECE6",
    controlBackground: "#FFFFFF",
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
    primary1: '#F2F2EE',
    background1: '#0B0D12',
    background2: '#151922',
    muted: '#A9AEB8',
    teal: '#2FD283',
    accent1: '#5B85FF',
    accentForeground: '#0B0D12',
    button: '#F2F2EE',
    border: 'rgba(242, 242, 238, 0.14)',
    softSurface: '#1E2330',
    controlBackground: '#151922',
  },
};

export default lightTheme;
