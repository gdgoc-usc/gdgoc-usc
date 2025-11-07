import { useState, useEffect } from 'react';
import { Zap, ZapOff } from 'lucide-react';

export default function AnimationToggle() {
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const animationsDisabled =
      localStorage.getItem('animations-enabled') === 'false';
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    setAnimationsEnabled(!animationsDisabled && !prefersReducedMotion);
  }, []);

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
    <div className='relative'>
      <button
        onClick={toggleAnimations}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className='rounded-lg p-2 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800'
        aria-label={
          animationsEnabled ? 'Disable animations' : 'Enable animations'
        }
      >
        {animationsEnabled ? (
          <Zap className='text-gdgoc-primary-blue h-5 w-5' />
        ) : (
          <ZapOff className='h-5 w-5 text-gray-500' />
        )}
      </button>

      {showTooltip && (
        <div className='absolute top-1/2 left-full z-[60] ml-2 hidden -translate-y-1/2 transform rounded-lg bg-gray-900 px-3 py-2 text-sm whitespace-nowrap text-white shadow-lg sm:block dark:bg-gray-700'>
          {animationsEnabled ? 'Disable animations' : 'Enable animations'}
          <div className='absolute top-1/2 right-full h-0 w-0 -translate-y-1/2 transform border-t-4 border-r-4 border-b-4 border-transparent border-r-gray-900 dark:border-r-gray-700'></div>
        </div>
      )}
    </div>
  );
}
