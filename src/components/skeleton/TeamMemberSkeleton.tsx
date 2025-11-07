import React from 'react';

interface TeamMemberSkeletonProps {
  className?: string;
}

const TeamMemberSkeleton: React.FC<TeamMemberSkeletonProps> = ({
  className = '',
}) => {
  return (
    <div
      className={`team-member-card ${className} relative overflow-hidden border-2 border-black bg-gradient-to-br from-slate-50 to-slate-200 dark:border-gray-700 dark:from-gray-800 dark:to-gray-900`}
    >
      <div className='relative aspect-[3/4] w-full overflow-hidden bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 dark:from-gray-600 dark:via-gray-700 dark:to-gray-800'>
        <div className='absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent dark:via-white/10'></div>

        <div className='absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6'>
          <div className='mb-2 inline-block h-5 w-20 animate-pulse rounded-full bg-gray-400/80'></div>

          <div className='mb-1 h-5 w-32 animate-pulse rounded bg-gray-300/90'></div>

          <div className='h-4 w-24 animate-pulse rounded bg-gray-400/80'></div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberSkeleton;
