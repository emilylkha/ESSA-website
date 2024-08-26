// Filter buttons, all options are next to each other instead of hidden in a dropdown
import React from 'react';

interface FilterButtonsProps {
    selectedOption: string;
    onSelectOption: (option: string) => void;
    options: string[];
}

const FilterButtons = ({ selectedOption, onSelectOption, options } : FilterButtonsProps) => {
  return (
    <div className="flex flex-wrap justify-center mb-8">
        {options.map((option) => (
            <button key={option} className={`px-4 py-2 mx-2 rounded ${selectedOption == option ? 'bg-emerald-800 text-white' : 'border border-emerald-800 text-black'}`} onClick={() => onSelectOption(option)}>
                {option}
            </button>
        ))}
    </div>
  );
};

export default FilterButtons;
