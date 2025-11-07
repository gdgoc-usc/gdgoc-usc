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
      className='relative rounded-lg p-2 transition-colors duration-200 hover:cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-800'
      aria-label='Toggle theme'
    >
      <div className='relative h-5 w-5'>
        <Sun
          className={`absolute inset-0 h-5 w-5 transition-opacity duration-200 ${
            theme === 'light' ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <Moon
          className={`absolute inset-0 h-5 w-5 transition-opacity duration-200 ${
            theme === 'dark' ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
    </button>
  );
}
