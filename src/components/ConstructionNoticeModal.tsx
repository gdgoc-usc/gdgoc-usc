import { useState, useEffect } from 'react';
import { X, AlertTriangle } from 'lucide-react';

interface ConstructionNoticeModalProps {
  className?: string;
}

export default function ConstructionNoticeModal({
  className = '',
}: ConstructionNoticeModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [animationModalVisible, setAnimationModalVisible] = useState(false);

  // dev environment w/o env variables
  if (
    typeof window !== 'undefined' &&
    (window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1')
  ) {
    return null;
  }

  useEffect(() => {
    const checkForLoaderCompletion = () => {
      const loader = document.getElementById('suspense-loader');
      if (!loader || loader.style.opacity === '0') {
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 1000);
        return timer;
      } else {
        return setTimeout(checkForLoaderCompletion, 100);
      }
    };

    const timer = checkForLoaderCompletion();

    const checkAnimationModal = () => {
      const hasSetPreferences = localStorage.getItem(
        'animation-preferences-set'
      );
      setAnimationModalVisible(!hasSetPreferences);
    };

    checkAnimationModal();

    const pollInterval = setInterval(() => {
      checkAnimationModal();
    }, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(pollInterval);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  const bottomPosition = animationModalVisible ? 'bottom-60' : 'bottom-4';

  return (
    <div
      className={`fixed ${bottomPosition} left-4 z-[60] max-w-sm ${className}`}
    >
      <div className='bg-red-50 dark:bg-red-950 rounded-xl shadow-lg border-2 border-red-200 dark:border-red-800 p-4 backdrop-blur-sm'>
        <div className='flex items-start justify-between mb-3'>
          <div className='flex items-center gap-2'>
            <div className='w-6 h-6 bg-red-600 rounded-lg flex items-center justify-center'>
              <AlertTriangle className='w-3 h-3 text-white' />
            </div>
            <h3 className='text-base font-semibold text-red-800 dark:text-red-200'>
              Under Construction
            </h3>
          </div>
          <button
            onClick={handleClose}
            className='text-red-400 hover:text-red-600 dark:hover:text-red-300 transition-colors'
          >
            <X className='w-4 h-4' />
          </button>
        </div>

        <p className='text-sm text-red-700 dark:text-red-300 mb-3'>
          This site is currently under construction. Some features may not work
          as expected.
        </p>

        <button
          onClick={handleClose}
          className='w-full px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors text-sm font-medium'
        >
          I understand
        </button>
      </div>
    </div>
  );
}
