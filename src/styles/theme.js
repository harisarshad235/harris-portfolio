import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import lightTheme, { darkTheme } from '../themes/default';
import GlobalStyles from './globals';

const ThemeModeContext = createContext({ mode: 'light', toggleTheme: () => {} });

export const useThemeMode = () => useContext(ThemeModeContext);

const Theme = ({ children }) => {
  const [mode, setMode] = useState('light');
  const [isReady, setIsReady] = useState(false);

  // Theme contract: 'portfolio-theme' holds 'dark' or 'light' and is shared with
  // the static case-study pages in public/case-studies/, which read and write the
  // same key directly. Changing the key or its values means changing them too.
  useEffect(() => {
    let savedMode = null;
    try {
      savedMode = window.localStorage.getItem('portfolio-theme');
    } catch (e) {
      // Storage unavailable (private mode, blocked cookies) - fall back to light.
    }
    if (savedMode === 'dark' || savedMode === 'light') setMode(savedMode);
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!isReady) return;
    document.documentElement.dataset.theme = mode;
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.setAttribute('content', mode === 'dark' ? '#0B0D12' : '#F7F7F4');
    // Persist last: a blocked write must not stop the theme being applied.
    try {
      window.localStorage.setItem('portfolio-theme', mode);
    } catch (e) {
      // Theme still applies for this session; only persistence is lost.
    }
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
