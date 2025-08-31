import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Users } from 'lucide-react';
import { availableYears } from '@/config/team-manager';

interface TeamDropdownProps {
  currentPath?: string;
}

const TeamDropdown: React.FC<TeamDropdownProps> = ({ currentPath }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleYearSelect = (yearId: string) => {
    setIsOpen(false);
    window.location.href = `/team/${yearId}`;
  };

  return (
    <div className='relative' ref={dropdownRef}>
      <button
        onClick={handleToggle}
        className='hover:text-gdgoc-primary-blue dark:hover:text-gdgoc-primary-blue flex items-center gap-2 py-2 font-medium text-black transition-colors duration-200 hover:cursor-pointer dark:text-gray-200'
        aria-expanded={isOpen}
        aria-haspopup='true'
      >
        <Users className='h-4 w-4' />
        <span>Our Team</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className='absolute top-full left-0 z-50 mt-2 w-48 rounded-lg border-2 border-black bg-white dark:border-gray-700 dark:bg-black'>
          <div>
            {availableYears.map(year => (
              <button
                key={year.id}
                onClick={() => handleYearSelect(year.id)}
                className={`w-full px-4 py-2 text-left text-sm transition-colors duration-200 ${
                  currentPath === `/team/${year.id}`
                    ? 'bg-gdgoc-primary-blue rounded-md font-medium text-white'
                    : 'rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {year.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamDropdown;
