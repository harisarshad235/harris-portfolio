import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import lightTheme, { darkTheme } from '../themes/default';
import GlobalStyles from './globals';

const ThemeModeContext = createContext({ mode: 'light', toggleTheme: () => {} });

export const useThemeMode = () => useContext(ThemeModeContext);

const Theme = ({ children }) => {
  const [mode, setMode] = useState('light');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const savedMode = window.localStorage.getItem('portfolio-theme');
    if (savedMode === 'dark' || savedMode === 'light') setMode(savedMode);
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!isReady) return;
    document.documentElement.dataset.theme = mode;
    window.localStorage.setItem('portfolio-theme', mode);
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.setAttribute('content', mode === 'dark' ? '#151D1F' : '#F4F0EA');
  }, [mode, isReady]);

  const toggleTheme = () => setMode((currentMode) => currentMode === 'dark' ? 'light' : 'dark');

  return (
    <ThemeModeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={mode === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export default Theme;