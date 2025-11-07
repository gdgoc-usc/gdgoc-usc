import React, { useState } from 'react';
import { ChevronDown, Users } from 'lucide-react';
import { availableYears } from '@/config/team-manager';

interface MobileTeamDropdownProps {
  currentPath?: string;
}

const MobileTeamDropdown: React.FC<MobileTeamDropdownProps> = ({
  currentPath,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleYearSelect = (yearId: string) => {
    setIsExpanded(false);
    window.location.href = `/team/${yearId}`;
  };

  return (
    <div className='w-full'>
      <button
        onClick={handleToggle}
        className='flex w-full items-center justify-between rounded-lg py-2 font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
        aria-expanded={isExpanded}
        aria-haspopup='true'
      >
        <div className='flex items-center gap-2'>
          <Users className='h-4 w-4' />
          <span>Our Team</span>
        </div>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isExpanded && (
        <div className='mt-2 space-y-1'>
          {availableYears.map(year => (
            <button
              key={year.id}
              onClick={() => handleYearSelect(year.id)}
              className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-colors duration-200 ${
                currentPath === `/team/${year.id}`
                  ? 'bg-gdgoc-primary-blue/10 text-gdgoc-primary-blue font-medium'
                  : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {year.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileTeamDropdown;
