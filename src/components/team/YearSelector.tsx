import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Calendar } from 'lucide-react';
import { availableYears, getYearLabel } from '@/config/team-manager';

interface YearSelectorProps {
  currentYear: string;
  onYearChange?: (year: string) => void;
}

const YearSelector: React.FC<YearSelectorProps> = ({
  currentYear,
  onYearChange,
}) => {
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

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleYearSelect = (yearId: string) => {
    setIsOpen(false);
    if (onYearChange) {
      onYearChange(yearId);
    } else {
      window.location.href = `/team/${yearId}`;
    }
  };

  const currentYearLabel = getYearLabel(currentYear);

  return (
    <div className='relative mb-6 sm:md:lg:xl:mb-4' ref={dropdownRef}>
      <button
        onClick={handleToggle}
        className='flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-800 border-2 border-gdgoc-primary-blue dark:border-gray-700 text-gdgoc-primary-blue hover:bg-gdgoc-primary-blue hover:text-white dark:hover:text-white transition-all duration-200 font-medium rounded-full hover:shadow-md hover:cursor-pointer'
        aria-expanded={isOpen}
        aria-haspopup='true'
      >
        <Calendar className='w-5 h-5' />
        <span className='text-lg'>{currentYearLabel}</span>
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className='absolute top-full left-0 mt-2 w-full min-w-[250px] bg-white dark:bg-gray-800 rounded-lg border-2 border-black dark:border-gray-700 z-[100] overflow-hidden'>
          <div>
            {availableYears.map(year => (
              <button
                key={year.id}
                onClick={() => handleYearSelect(year.id)}
                className={`w-full text-left px-6 py-3 transition-colors duration-200 hover:cursor-pointer ${
                  currentYear === year.id
                    ? 'bg-gdgoc-primary-blue text-white font-medium'
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <div className='flex items-center gap-3'>
                  <Calendar className='w-4 h-4' />
                  <span>{year.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default YearSelector;
