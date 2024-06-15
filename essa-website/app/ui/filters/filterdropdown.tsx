// Filter Drop Down buttons, one button that drops down into different options
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';


interface FilterDropdownProps {
  label: string;
  options: string[];
  selectedOption: string;
  onSelectOption: (option: string) => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ label, options, selectedOption, onSelectOption }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    onSelectOption(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('scroll', () => setIsOpen(false), true);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('scroll', () => setIsOpen(false), true);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('scroll', () => setIsOpen(false), true);
    };
  }, [isOpen]);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className={`inline-flex justify-center w-full px-4 py-2 text-sm font-medium ${selectedOption === 'All' ? 'text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none' : 'text-white bg-emerald-800 rounded-md hover:bg-emerald-900 focus:outline-none'}`}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {label}
        {isOpen ? (
          <ChevronUpIcon className="w-5 h-5 ml-2" aria-hidden="true" />
        ) : (
          <ChevronDownIcon className="w-5 h-5 ml-2" aria-hidden="true" />
        )}
      </button>

      {isOpen && (
        <ul
          className="absolute z-10 mt-2 w-40 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg"
          role="menu"
          aria-orientation="vertical"
        >
          {options.map(option => (
            <li key={option}>
              <button
                className={`block w-full text-left px-4 py-2 text-sm ${selectedOption === option ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={() => handleOptionClick(option)}
                role="menuitem"
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterDropdown;
