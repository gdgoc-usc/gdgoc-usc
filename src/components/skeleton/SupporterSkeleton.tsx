import React from 'react';

interface SupporterSkeletonProps {
  className?: string;
}

const SupporterSkeleton: React.FC<SupporterSkeletonProps> = ({
  className = '',
}) => {
  return (
    <div
      className={`supporter-skeleton ${className} flex items-center justify-center rounded-lg border-2 border-black bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800`}
    >
      <div className='relative h-32 w-32 overflow-hidden rounded-lg bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 dark:from-gray-600 dark:via-gray-700 dark:to-gray-800'>
        <div className='absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent dark:via-white/10'></div>
      </div>
    </div>
  );
};

export default SupporterSkeleton;
