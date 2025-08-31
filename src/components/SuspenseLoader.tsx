import { useEffect, useState } from 'react';

interface SuspenseLoaderProps {
  onLoadComplete?: () => void;
  timeout?: number;
}

export default function SuspenseLoader({
  onLoadComplete,
  timeout = 5000,
}: SuspenseLoaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  const preloadCriticalAssets = async (): Promise<void> => {
    const criticalAssets = ['/usc_logo.svg'];

    return Promise.all(
      criticalAssets.map(asset => {
        return new Promise<void>((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            resolve();
          };
          img.onerror = () => {
            reject(new Error(`Failed to load ${asset}`));
          };
          img.src = asset;
        });
      })
    ).then(() => {});
  };

  const waitForComponents = (): Promise<void> => {
    return new Promise<void>(resolve => {
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
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    document.body.classList.add('loading');

    const initializeApp = async () => {
      initializeTheme();

      timeoutId = setTimeout(() => {
        // console.warn('SuspenseLoader timeout reached, hiding loader');
        setTimeout(hideLoader, 200);
      }, timeout);

      try {
        await preloadCriticalAssets();

        await waitForComponents();

        clearTimeout(timeoutId);

        setTimeout(hideLoader, 200);
      } catch {
        // console.warn('Some assets failed to load, continuing anyway:', error);
        clearTimeout(timeoutId);

        await waitForComponents();
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
      id='suspense-loader'
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-all duration-500 dark:bg-neutral-900 ${
        !isVisible ? 'pointer-events-none opacity-0' : ''
      }`}
      aria-label='Loading page content'
      role='status'
      aria-live='polite'
    >
      <div className='flex flex-col items-center space-y-6'>
        <div className='relative'>
          <img
            src='/loader.gif'
            alt='GDGoC Loading Animation'
            width='120'
            height='120'
            loading='eager'
            decoding='async'
            style={{
              imageRendering: 'auto',
              animation: 'none',
              objectFit: 'contain',
              maxWidth: '100%',
              height: 'auto',
            }}
            className='gif-animation'
            onLoad={e => {
              const img = e.target as HTMLImageElement;
              img.style.animationPlayState = 'running';
              // Force GIF to restart on mobile
              const src = img.src;
              img.src = '';
              img.src = src;
            }}
          />
        </div>

        <div className='space-y-0 text-center'>
          <h2 className='text-xl font-semibold text-gray-900 md:text-2xl dark:text-white'>
            Google Developer Group
          </h2>
          <p className='text-gdgoc-primary-blue text-sm md:text-base'>
            University of San Carlos
          </p>
        </div>
        <div className='flex space-x-2'>
          <div className='bg-gdgoc-primary-blue h-2 w-2 animate-bounce rounded-full'></div>
          <div
            className='bg-gdgoc-primary-green h-2 w-2 animate-bounce rounded-full'
            style={{ animationDelay: '0.1s' }}
          ></div>
          <div
            className='bg-gdgoc-primary-red h-2 w-2 animate-bounce rounded-full'
            style={{ animationDelay: '0.2s' }}
          ></div>
          <div
            className='bg-gdgoc-primary-yellow h-2 w-2 animate-bounce rounded-full'
            style={{ animationDelay: '0.3s' }}
          ></div>
        </div>
      </div>

      <style>{`
        .gif-animation {
          -webkit-animation-play-state: running !important;
          animation-play-state: running !important;
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
          will-change: auto;
        }

        @media (max-width: 768px) {
          .gif-animation {
            -webkit-animation: none;
            animation: none;
            -webkit-animation-play-state: running;
            animation-play-state: running;
          }
        }
      `}</style>
    </div>
  );
}
