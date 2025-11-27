import React, { createContext, useContext, useState, type ReactNode } from 'react';

export type ThemeChoice = 'light' | 'dark' | 'system';

type ThemeContextType = {
  theme: ThemeChoice;
  setTheme: (t: ThemeChoice) => void;
  toggleDark: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeChoice>('system');

  const toggleDark = () => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleDark }}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
