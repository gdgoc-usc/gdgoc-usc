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
        className='flex items-center gap-2 py-2 text-gray-700 dark:text-gray-200 hover:text-gdgoc-primary-blue dark:hover:text-gdgoc-primary-blue transition-colors duration-200 font-medium hover:cursor-pointer'
        aria-expanded={isOpen}
        aria-haspopup='true'
      >
        <Users className='w-4 h-4' />
        <span>Our Team</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className='absolute top-full left-0 mt-2 w-48 bg-white dark:bg-black rounded-lg border-2 border-black dark:border-gray-700 z-50'>
          <div>
            {availableYears.map(year => (
              <button
                key={year.id}
                onClick={() => handleYearSelect(year.id)}
                className={`w-full text-left px-4 py-2 text-sm transition-colors duration-200 ${
                  currentPath === `/team/${year.id}`
                    ? 'bg-gdgoc-primary-blue text-white font-medium rounded-md'
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md'
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
