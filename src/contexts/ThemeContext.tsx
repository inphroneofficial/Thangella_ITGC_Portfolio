
import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeType = 'light' | 'dark';

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light', 
  toggleTheme: () => {}
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>('light');
  const [transitioning, setTransitioning] = useState<boolean>(false);

  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme') as ThemeType | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else if (prefersDark) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
    
    // Add the theme transition styles
    const style = document.createElement('style');
    style.textContent = `
      .theme-transition-to-dark {
        animation: dimming 0.8s forwards;
      }
      
      .theme-transition-to-light {
        animation: brightening 0.8s forwards;
      }
      
      @keyframes dimming {
        0% { filter: brightness(1); }
        40% { filter: brightness(0.7); }
        100% { filter: brightness(1); }
      }
      
      @keyframes brightening {
        0% { filter: brightness(1); }
        40% { filter: brightness(1.3); }
        100% { filter: brightness(1); }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const toggleTheme = () => {
    setTransitioning(true);
    
    // Apply transition effect class
    const body = document.querySelector('body');
    const newTheme: ThemeType = theme === 'light' ? 'dark' : 'light';
    
    if (body) {
      if (newTheme === 'dark') {
        body.classList.add('theme-transition-to-dark');
      } else {
        body.classList.add('theme-transition-to-light');
      }
      
      // Remove transition class after animation completes
      setTimeout(() => {
        body.classList.remove('theme-transition-to-dark', 'theme-transition-to-light');
        setTransitioning(false);
      }, 800);
    }
    
    // Update theme state and localStorage
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
