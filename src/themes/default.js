const lightTheme = {
  mode: 'light',
  fonts: {
    title: "DM Sans, sans-serif",
    main: "DM Sans, sans-serif"
  },
  colors: {
    primary1: "#1D2A2D",
    background1: "#F4F0EA",
    accent1: "#E5674F",
    accentForeground: "#FFFFFF",
    button: "#E5674F",
    background2: "#FFFFFF",
    muted: "#687372",
    teal: "#1A8781",
    border: "rgba(29, 42, 45, 0.14)",
    softSurface: "#E8DED5",
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
    primary1: '#F1F5F4',
    background1: '#151D1F',
    background2: '#202B2D',
    muted: '#B2C0BE',
    teal: '#72C9BE',
    accent1: '#F18A75',
    accentForeground: '#151D1F',
    button: '#F18A75',
    border: 'rgba(226, 238, 235, 0.16)',
    softSurface: '#293638',
    controlBackground: '#192426',
  },
};

export default lightTheme;
