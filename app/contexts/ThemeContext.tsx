'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type ColorTheme = 'teal-blue' | 'green-blue' | 'blue-purple' | 'green-teal';
type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  colorTheme: ColorTheme;
  toggleTheme: () => void;
  setColorTheme: (theme: ColorTheme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [colorTheme, setColorThemeState] = useState<ColorTheme>('teal-blue');
  const [mounted, setMounted] = useState(false);

  // Only run on client side after mount to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const savedColorTheme = localStorage.getItem('colorTheme') as ColorTheme | null;
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Default to light mode instead of system preference
      setTheme('light');
    }

    if (savedColorTheme) {
      setColorThemeState(savedColorTheme);
    } else {
      setColorThemeState('teal-blue');
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      // Save theme preference
      localStorage.setItem('theme', theme);
      // Update CSS custom properties
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme, mounted]);

  useEffect(() => {
    if (mounted) {
      // Save color theme preference
      localStorage.setItem('colorTheme', colorTheme);
      // Apply color theme class
      applyColorTheme(colorTheme);
    }
  }, [colorTheme, mounted]);

  const applyColorTheme = (theme: ColorTheme) => {
    const root = document.documentElement;
    
    // Remove existing theme classes
    root.classList.remove('theme-teal-blue', 'theme-green-blue', 'theme-blue-purple', 'theme-green-teal');
    
    // Add new theme class
    root.classList.add(`theme-${theme}`);
  };

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const setColorTheme = (newColorTheme: ColorTheme) => {
    setColorThemeState(newColorTheme);
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, colorTheme, toggleTheme, setColorTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // Fallback for SSR or when context is not available
    return { 
      theme: 'light' as Theme, 
      colorTheme: 'teal-blue' as ColorTheme,
      toggleTheme: () => {},
      setColorTheme: () => {}
    };
  }
  return context;
}