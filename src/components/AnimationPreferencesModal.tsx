import { useState, useEffect } from 'react';
import { X, Zap, ZapOff } from 'lucide-react';

interface AnimationPreferencesModalProps {
  className?: string;
}

export default function AnimationPreferencesModal({ className = "" }: AnimationPreferencesModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [preferencesSet, setPreferencesSet] = useState(false);

  useEffect(() => {
    const hasSetPreferences = localStorage.getItem('animation-preferences-set');
    if (!hasSetPreferences) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleEnableAnimations = () => {
    localStorage.setItem('animation-preferences-set', 'true');
    localStorage.setItem('animations-enabled', 'true');
    setPreferencesSet(true);
    setIsVisible(false);
    document.documentElement.classList.remove('reduced-motion');
  };

  const handleDisableAnimations = () => {
    localStorage.setItem('animation-preferences-set', 'true');
    localStorage.setItem('animations-enabled', 'false');
    setPreferencesSet(true);
    setIsVisible(false);
    document.documentElement.classList.add('reduced-motion');
  };

  const handleClose = () => {
    localStorage.setItem('animation-preferences-set', 'true');
    localStorage.setItem('animations-enabled', 'true');
    setPreferencesSet(true);
    setIsVisible(false);
  };

  if (!isVisible || preferencesSet) {
    return null;
  }

  return (
    <div className={`fixed bottom-4 left-4 z-50 max-w-sm ${className}`}>
      <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-2xl border border-neutral-200 dark:border-neutral-700 p-6 backdrop-blur-sm">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gdgoc-primary-blue rounded-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
              Animation Preferences
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4">
          Would you like to enable animations for a more engaging experience, or disable them for better performance?
        </p>
        
        <div className="flex gap-3">
          <button
            onClick={handleEnableAnimations}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gdgoc-primary-blue text-white rounded-lg hover:bg-gdgoc-secondary-blue transition-colors text-sm font-medium"
          >
            <Zap className="w-4 h-4" />
            Enable
          </button>
          <button
            onClick={handleDisableAnimations}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
          >
            <ZapOff className="w-4 h-4" />
            Disable
          </button>
        </div>
      </div>
    </div>
  );
} 