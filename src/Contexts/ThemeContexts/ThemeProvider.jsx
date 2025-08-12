import React, { useEffect, useState } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };
    useEffect(() => {
    const root = window.document.documentElement;
    // Set CSS variables for consistent theming
    root.style.setProperty('--main-bg-color', '#0A192F'); // Very Dark Blue
    root.style.setProperty('--accent-color', '#64FFDA'); // Bright Greenish Cyan
    root.style.setProperty('--text-color', '#8892B0');   // Light Gray-Blue
    root.style.setProperty('--card-bg-color', '#112240'); // Slightly Lighter Dark Blue
    root.style.setProperty('--border-glow-color', '#64FFDA'); // Same as accent for rotating borders
    root.style.setProperty('--secondary-glow-color', '#3CCF4E'); // Another shade of green for more depth
  }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;