import { useState, useEffect, useRef } from 'react';
import { Settings, Sun, Moon, Zap, ZapOff, ChevronDown } from 'lucide-react';

export default function SettingsDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    const animationsDisabled =
      localStorage.getItem('animations-enabled') === 'false';
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    setAnimationsEnabled(!animationsDisabled && !prefersReducedMotion);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const toggleAnimations = () => {
    const newState = !animationsEnabled;
    setAnimationsEnabled(newState);

    localStorage.setItem('animations-enabled', newState.toString());
    localStorage.setItem('animation-preferences-set', 'true');

    if (newState) {
      document.documentElement.classList.remove('reduced-motion');
    } else {
      document.documentElement.classList.add('reduced-motion');
    }
  };

  return (
    <div className='relative' ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center gap-1 p-2 rounded-lg hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 group'
        aria-label='Settings'
        aria-expanded={isOpen}
        suppressHydrationWarning
      >
        <Settings className='w-5 h-5 group-hover:rotate-90 duration-300' />
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          suppressHydrationWarning
        />
      </button>

      {isOpen && (
        <div className='absolute right-0 top-full mt-2 w-48 bg-white dark:bg-black rounded-lg border-2 border-black dark:border-gray-700 z-[100]'>
          <div>
            <button
              onClick={toggleTheme}
              className='flex items-center justify-between rounded-t-md hover:rounded-t-md w-full p-4 text-left hover:cursor-pointer hover:bg-gdgoc-primary-blue hover:text-white dark:hover:bg-gray-700 transition-colors duration-200'
            >
              <span className='flex items-center gap-3'>
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
                <span className='text-sm'>
                  {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
                </span>
              </span>
            </button>

            <div className='border-t border-gray-200 dark:border-gray-600'></div>

            <button
              onClick={toggleAnimations}
              className='flex items-center justify-between rounded-b-md hover:rounded-b-md w-full p-4 text-left hover:cursor-pointer hover:bg-gdgoc-primary-blue hover:text-white dark:hover:bg-gray-700 transition-colors duration-200 group'
            >
              <span className='flex items-center gap-3'>
                {animationsEnabled ? (
                  <Zap className='w-5 h-5 text-black dark:text-white group-hover:text-white' />
                ) : (
                  <ZapOff className='w-5 h-5 text-black dark:text-white group-hover:text-white' />
                )}
                <span className='text-sm'>
                  {animationsEnabled ? 'Animations On' : 'Animations Off'}
                </span>
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
