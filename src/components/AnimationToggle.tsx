import { useState, useEffect } from 'react';
import { Zap, ZapOff } from 'lucide-react';

export default function AnimationToggle() {
  const [animationsEnabled, setAnimationsEnabled] = useState(true);

  useEffect(() => {
    const animationsDisabled = localStorage.getItem('animations-enabled') === 'false';
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
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
    <button
      onClick={toggleAnimations}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
      aria-label={animationsEnabled ? "Disable animations" : "Enable animations"}
      title={animationsEnabled ? "Disable animations" : "Enable animations"}
    >
      {animationsEnabled ? (
        <Zap className="w-5 h-5 text-gdgoc-primary-blue" />
      ) : (
        <ZapOff className="w-5 h-5 text-gray-500" />
      )}
    </button>
  );
} 