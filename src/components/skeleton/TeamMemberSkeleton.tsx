import React from 'react';

interface TeamMemberSkeletonProps {
  className?: string;
}

const TeamMemberSkeleton: React.FC<TeamMemberSkeletonProps> = ({
  className = '',
}) => {
  return (
    <div
      className={`team-member-card ${className} relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-200 dark:from-gray-800 dark:to-gray-900 border-2 border-black dark:border-gray-700`}
    >
      <div className='w-full bg-gray-300 dark:bg-gray-700 relative'>
        <div className='w-full aspect-[3/4] bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 dark:from-gray-600 dark:via-gray-700 dark:to-gray-800 relative overflow-hidden'>
          <div className='absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/30 dark:via-white/10 to-transparent'></div>
        </div>
      </div>

      <div className='absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent'>
        <div className='inline-block h-5 w-20 bg-gray-400/80 rounded-full mb-2 animate-pulse'></div>

        <div className='h-5 w-32 bg-gray-300/90 rounded mb-1 animate-pulse'></div>

        <div className='h-4 w-24 bg-gray-400/80 rounded animate-pulse'></div>
      </div>
    </div>
  );
};

export default TeamMemberSkeleton;
