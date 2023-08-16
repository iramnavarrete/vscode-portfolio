/* eslint-disable react/jsx-no-constructed-context-values */
import {
  createContext, useContext, ReactNode, useState,
} from 'react';
import {
  ThemeContextType, ThemeName,
} from 'types';

const ThemeContext = createContext<ThemeContextType | null>(null);

export const useActiveThemeContext = () => useContext(ThemeContext) as ThemeContextType;

function ThemeProvider({ children }: { children: ReactNode }) {
  const [activeTheme, setActiveTheme] = useState<ThemeName>('dark-modern');

  const value: ThemeContextType = {
    activeTheme,
    setActiveTheme,
  };
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider };
