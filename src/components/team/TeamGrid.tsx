import React, { useState, useEffect } from 'react';
import { getAllMembersByRoleHierarchy } from '@/utils/teamUtils';
import TeamMemberSkeleton from '@/components/skeleton/TeamMemberSkeleton';
import type { MemberWithDepartment } from '@/utils/teamUtils';

interface TeamMember extends MemberWithDepartment {
  displayName: string;
  departmentClass: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
  isLoading: boolean;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  member,
  isLoading,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  if (isLoading) {
    return <TeamMemberSkeleton className={member.departmentClass} />;
  }

  return (
    <div
      className={`team-member-card ${member.departmentClass} ${
        member.imageUrl && !imageError ? 'has-image' : ''
      }`}
      style={{ '--hover-bg': 'url(/gdgoc_pp_bg.png)' } as React.CSSProperties}
    >
      {member.imageUrl && !imageError ? (
        <>
          {/* Skeleton overlay while image loads */}
          {!imageLoaded && (
            <div className='absolute inset-0 z-10 bg-gray-300 dark:bg-gray-700'>
              <div className='w-full h-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 dark:from-gray-600 dark:via-gray-700 dark:to-gray-800 relative overflow-hidden'>
                <div className='absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/30 dark:via-white/10 to-transparent'></div>
              </div>
            </div>
          )}

          <img
            src={member.imageUrl}
            alt={`${member.displayName} - ${member.role}`}
            className={`team-member-image transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading='lazy'
            onLoad={handleImageLoad}
            onError={handleImageError}
          />

          <div className='team-member-overlay'>
            {!imageLoaded && (
              <div className='absolute inset-0 flex flex-col justify-end p-6'>
                <div className='inline-block h-5 w-20 bg-gray-400/80 rounded-full mb-2 animate-pulse'></div>
                <div className='h-5 w-32 bg-gray-300/90 rounded mb-1 animate-pulse'></div>
                <div className='h-4 w-24 bg-gray-400/80 rounded animate-pulse'></div>
              </div>
            )}
            <div
              className={`transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className='department-badge overlay'>
                {member.department}
              </div>
              <h3 className='member-role overlay'>{member.role}</h3>
              <p className='member-name overlay'>{member.displayName}</p>
            </div>
          </div>
        </>
      ) : (
        <div
          className='placeholder-card'
          style={
            {
              backgroundImage: 'url(/gdgoc_bg_3.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              '--hover-bg': 'url(/gdgoc_pp_bg.png)',
            } as React.CSSProperties
          }
        >
          <div className='coming-soon-text'>
            <h2 className='text-2xl font-bold text-black drop-shadow-lg'>
              Coming Soon!
            </h2>
            <p className='text-black text-xs'>Hover to see info.</p>
          </div>
          <div className='team-member-overlay-no-image'>
            <div className={`department-badge ${member.departmentClass}`}>
              {member.department}
            </div>
            <h3 className='member-role no-image'>{member.role}</h3>
            <p className='member-name no-image'>{member.displayName}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const TeamGrid: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTeamMembers = () => {
      try {
        const allTeamMembersData = getAllMembersByRoleHierarchy();

        const processedMembers = allTeamMembersData.map(member => {
          let departmentClass = '';
          switch (member.department) {
            case 'Leadership':
              departmentClass = 'leadership';
              break;
            case 'External Relations':
              departmentClass = 'external-relations';
              break;
            case 'Human Resources':
              departmentClass = 'human-resources';
              break;
            case 'Marketing':
              departmentClass = 'marketing';
              break;
            case 'Operations':
              departmentClass = 'operations';
              break;
            case 'Finance':
              departmentClass = 'finance';
              break;
            case 'Technology':
              departmentClass = 'technology';
              break;
          }

          return {
            ...member,
            displayName: member.name,
            departmentClass,
          };
        });

        setTeamMembers(processedMembers);

        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      } catch {
        setIsLoading(false);
      }
    };

    loadTeamMembers();
  }, []);

  return (
    <div className='w-full relative'>
      <div className='team-grid'>
        {isLoading
          ? Array.from({ length: 12 }, (_, index) => (
              <TeamMemberSkeleton key={`skeleton-${index}`} />
            ))
          : teamMembers.map((member, index) => (
              <TeamMemberCard
                key={`${member.name}-${member.role}-${index}`}
                member={member}
                isLoading={false}
              />
            ))}
      </div>
    </div>
  );
};

export default TeamGrid;
