// src/components/gallery/Lightbox.tsx
import React, { useEffect } from 'react';

interface LightboxProps {
  images: any[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNext, onPrev, onClose]);

  return (
    <div
      className='fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md'
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className='absolute top-5 right-5 z-[110] text-4xl text-white/70 transition-colors hover:text-white'
      >
        &times;
      </button>

      <button
        onClick={e => {
          e.stopPropagation();
          onPrev();
        }}
        className='absolute left-5 z-[110] p-4 text-5xl text-white/50 transition-all hover:text-white'
      >
        &lsaquo;
      </button>

      <div
        className='relative flex h-[90vh] w-[90vw] items-center justify-center'
        onClick={e => e.stopPropagation()}
      >
        <img
          src={images[currentIndex].img}
          alt='Gallery view'
          className='max-h-full max-w-full rounded-sm object-contain shadow-2xl transition-all duration-300 ease-in-out'
        />
      </div>

      <button
        onClick={e => {
          e.stopPropagation();
          onNext();
        }}
        className='absolute right-5 z-[110] p-4 text-5xl text-white/50 transition-all hover:text-white'
      >
        &rsaquo;
      </button>

      <div className='absolute bottom-6 text-sm font-light tracking-widest text-white/60'>
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default Lightbox;
