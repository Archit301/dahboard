import React, { useState, useEffect } from 'react';
import themes from '../theme.jsx';

const ThemeSwitcher = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const currentTheme = themes[theme];
    Object.keys(currentTheme).forEach(key => {
      document.documentElement.style.setProperty(`--${key}`, currentTheme[key]);
    });
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    console.log(toggleTheme)
  };
  

  return (
    <div>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'} mode
      </button>
      {children}
    </div>
  );
};


export default ThemeSwitcher;

