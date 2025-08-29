import React from 'react';

interface TeamMemberSkeletonProps {
  className?: string;
}

const TeamMemberSkeleton: React.FC<TeamMemberSkeletonProps> = ({
  className = '',
}) => {
  return (
    <div className={`team-member-card ${className} animate-pulse`}>
      <div className='w-full aspect-[3/4] bg-gray-300 dark:bg-gray-700 rounded-t-lg'>
        <div className='w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700'></div>
      </div>

      <div className='absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent'>
        <div className='inline-block w-20 h-5 bg-gray-400 dark:bg-gray-500 rounded-full mb-2'></div>

        <div className='w-32 h-5 bg-gray-300 dark:bg-gray-600 rounded mb-1'></div>

        <div className='w-24 h-4 bg-gray-400 dark:bg-gray-500 rounded'></div>
      </div>

      <div className='absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent'></div>
    </div>
  );
};

export default TeamMemberSkeleton;
