import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className='relative p-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-800 transition-colors duration-200 hover:cursor-pointer'
      aria-label='Toggle theme'
    >
      <div className='w-5 h-5 relative'>
        <Sun
          className={`absolute inset-0 w-5 h-5 transition-opacity duration-200 ${
            theme === 'light' ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <Moon
          className={`absolute inset-0 w-5 h-5 transition-opacity duration-200 ${
            theme === 'dark' ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
    </button>
  );
}
