import React, { useState } from 'react';
import { ChevronDown, Images } from 'lucide-react';
import TeamDropdown from './TeamDropdown';

interface MoreDropdownProps {
  currentPath?: string;
}

const MoreDropdown: React.FC<MoreDropdownProps> = ({
  currentPath: _currentPath,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative'>
      <button
        onClick={handleToggle}
        className='hover:text-gdgoc-primary-blue dark:hover:text-gdgoc-primary-blue flex items-center gap-2 py-2 font-medium text-black transition-colors duration-200 hover:cursor-pointer dark:text-gray-200'
        aria-expanded={isOpen}
        aria-haspopup='true'
      >
        <span>More</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className='absolute top-full left-0 z-50 mt-2 w-48 rounded-lg border-2 border-black bg-white dark:border-gray-700 dark:bg-black'>
          <div>
            <a href='/gallery'>
              <button
                className={`'rounded-md flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700`}
              >
                <Images className='h-4 w-4' />
                <span>Gallery</span>
              </button>
            </a>
            <TeamDropdown />
          </div>
        </div>
      )}
    </div>
  );
};

export default MoreDropdown;
