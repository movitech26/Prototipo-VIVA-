import { createContext, useState, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

export const ThemeContext = createContext({
  isDark: true,
  toggleTheme: () => {},
});

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    return document.documentElement.classList.contains('dark');
  });

  useEffect(() => {
    const root = document.documentElement;

    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  );
}
