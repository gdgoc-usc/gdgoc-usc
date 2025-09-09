import React, { useEffect } from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Modal({
  isOpen,
  onClose,
  children,
  className,
  ...rest
}: ModalProps) {
  // close on ESC key and lock scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      // Prevent background scroll
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      // Restore scroll
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      {/* Overlay */}
      <div
        className='absolute inset-0 bg-black/30 dark:bg-black/50'
        onClick={onClose}
      />

      {/* Content */}
      <div
        className={`relative z-10 w-[90%] max-w-md rounded-2xl bg-white p-6 shadow-lg dark:bg-[#131314] ${className ?? ''}`}
        {...rest}
      >
        {children}

        {/* Close Button */}
        <button
          onClick={onClose}
          className='absolute top-4 right-4 cursor-pointer text-black hover:opacity-80 dark:text-white'
        >
          ✕
        </button>
      </div>
    </div>
  );
}
