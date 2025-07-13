import { useEffect, useState } from 'react';

interface SuspenseLoaderProps {
  onLoadComplete?: () => void;
  timeout?: number; 
}

export default function SuspenseLoader({ onLoadComplete, timeout = 5000 }: SuspenseLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const updateProgress = (percent: number) => {
    setProgress(percent);
  };

  const preloadCriticalAssets = async (): Promise<void> => {
    const criticalAssets = [
      '/gdgoc_bg_1_compressed.svg',
      '/usc_logo.svg'
    ];
    
    let loadedCount = 0;
    
    return Promise.all(
      criticalAssets.map(asset => {
        return new Promise<void>((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            loadedCount++;
            updateProgress((loadedCount / criticalAssets.length) * 100);
            resolve();
          };
          img.onerror = () => {
            loadedCount++;
            updateProgress((loadedCount / criticalAssets.length) * 100);
            reject(new Error(`Failed to load ${asset}`));
          };
          img.src = asset;
        });
      })
    ).then(() => {});
  };

  const waitForComponents = (): Promise<void> => {
    return new Promise<void>((resolve) => {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
          const images = document.querySelectorAll('img');
          let loadedImages = 0;
          
          if (images.length === 0) {
            setTimeout(resolve, 100);
            return;
          }

          images.forEach(img => {
            if (img.complete) {
              loadedImages++;
              if (loadedImages === images.length) {
                setTimeout(resolve, 100);
              }
            } else {
              img.addEventListener('load', () => {
                loadedImages++;
                if (loadedImages === images.length) {
                  setTimeout(resolve, 100);
                }
              });
              img.addEventListener('error', () => {
                loadedImages++;
                if (loadedImages === images.length) {
                  setTimeout(resolve, 100);
                }
              });
            }
          });
        });
      } else {
        setTimeout(resolve, 100);
      }
    });
  };

  const hideLoader = () => {
    setIsVisible(false);
    document.body.classList.remove('loading');
    setTimeout(() => {
      onLoadComplete?.();
    }, 500);
  };

  const initializeTheme = () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    document.body.classList.add('loading');
    
    const initializeApp = async () => {
      initializeTheme();
      
      setTimeout(() => updateProgress(10), 100);
      
      timeoutId = setTimeout(() => {
        console.warn('SuspenseLoader timeout reached, hiding loader');
        updateProgress(100);
        setTimeout(hideLoader, 200);
      }, timeout);
      
      try {
        await preloadCriticalAssets();
        
        await waitForComponents();
        
        clearTimeout(timeoutId);
        
        updateProgress(100);
        
        setTimeout(hideLoader, 200);
      } catch (error) {
        console.warn('Some assets failed to load, continuing anyway:', error);
        clearTimeout(timeoutId);
        
        await waitForComponents();
        updateProgress(100);
        setTimeout(hideLoader, 200);
      }
    };

    initializeApp();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      document.body.classList.remove('loading');
    };
  }, [onLoadComplete, timeout]);

  if (!isVisible) {
    return null;
  }

  return (
    <div 
      id="suspense-loader" 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900 transition-all duration-500 ${
        !isVisible ? 'opacity-0 pointer-events-none' : ''
      }`}
      aria-label="Loading page content"
      role="status"
      aria-live="polite"
    >
      <div className="flex flex-col items-center space-y-6">
        <div className="relative">
          <img 
            src="/gdgoc_logo.svg" 
            alt="GDGoC Logo" 
            className="w-20 h-20 md:w-24 md:h-24 animate-pulse"
          />
          <div className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 border-4 border-gdgoc-primary-blue border-t-transparent rounded-full animate-spin"></div>
        </div>
        
        <div className="text-center space-y-2">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
            GDGoC USC
          </h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
            Loading amazing things...
          </p>
        </div>
        
        <div className="w-48 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-gdgoc-primary-blue to-gdgoc-primary-green rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
            role="progressbar"
          ></div>
        </div>
        
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-gdgoc-primary-blue rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-gdgoc-primary-green rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-gdgoc-primary-red rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-gdgoc-primary-yellow rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
        </div>
      </div>
    </div>
  );
} 