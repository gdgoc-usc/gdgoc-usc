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
        className='p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200'
        aria-label={
          animationsEnabled ? 'Disable animations' : 'Enable animations'
        }
      >
        {animationsEnabled ? (
          <Zap className='w-5 h-5 text-gdgoc-primary-blue' />
        ) : (
          <ZapOff className='w-5 h-5 text-gray-500' />
        )}
      </button>

      {showTooltip && (
        <div className='absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-3 py-2 text-sm text-white bg-gray-900 dark:bg-gray-700 rounded-lg shadow-lg whitespace-nowrap z-[60] hidden sm:block'>
          {animationsEnabled ? 'Disable animations' : 'Enable animations'}
          <div className='absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-gray-900 dark:border-r-gray-700'></div>
        </div>
      )}
    </div>
  );
}
