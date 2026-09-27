import { createContext, useState, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

// 1. Criamos o "Contexto Global" que guarda o estado do tema
export const ThemeContext = createContext({
  isDark: true,
  toggleTheme: () => {},
});

export default function App() {
  const [isDark, setIsDark] = useState(true);

  // 2. Lógica inicial de carregamento do tema
  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark') || 
                       window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(isDarkMode);
    if (isDarkMode) document.documentElement.classList.add('dark');
  }, []);

  // 3. Função global para trocar o tema
  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  };

  return (
    // 4. Envolvemos o RouterProvider com o ThemeContext
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  );
}