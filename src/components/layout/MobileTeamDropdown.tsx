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
        className='w-full flex items-center justify-between py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 font-medium rounded-lg'
        aria-expanded={isExpanded}
        aria-haspopup='true'
      >
        <div className='flex items-center gap-2'>
          <Users className='w-4 h-4' />
          <span>Our Team</span>
        </div>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
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
              className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors duration-200 ${
                currentPath === `/team/${year.id}`
                  ? 'bg-gdgoc-primary-blue/10 text-gdgoc-primary-blue font-medium'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
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
