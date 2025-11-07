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
        className='group flex items-center gap-1 rounded-lg p-2 transition-colors duration-200 hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800'
        aria-label='Settings'
        aria-expanded={isOpen}
        suppressHydrationWarning
      >
        <Settings className='h-5 w-5 duration-300 group-hover:rotate-90' />
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          suppressHydrationWarning
        />
      </button>

      {isOpen && (
        <div className='absolute top-full right-0 z-[100] mt-2 w-48 rounded-lg border-2 border-black bg-white dark:border-gray-700 dark:bg-black'>
          <div>
            <button
              onClick={toggleTheme}
              className='hover:bg-gdgoc-primary-blue flex w-full items-center justify-between rounded-t-md p-4 text-left transition-colors duration-200 hover:cursor-pointer hover:rounded-t-md hover:text-white dark:hover:bg-gray-700'
            >
              <span className='flex items-center gap-3'>
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
                <span className='text-sm'>
                  {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
                </span>
              </span>
            </button>

            <div className='border-t border-gray-200 dark:border-gray-600'></div>

            <button
              onClick={toggleAnimations}
              className='hover:bg-gdgoc-primary-blue group flex w-full items-center justify-between rounded-b-md p-4 text-left transition-colors duration-200 hover:cursor-pointer hover:rounded-b-md hover:text-white dark:hover:bg-gray-700'
            >
              <span className='flex items-center gap-3'>
                {animationsEnabled ? (
                  <Zap className='h-5 w-5 text-black group-hover:text-white dark:text-white' />
                ) : (
                  <ZapOff className='h-5 w-5 text-black group-hover:text-white dark:text-white' />
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
