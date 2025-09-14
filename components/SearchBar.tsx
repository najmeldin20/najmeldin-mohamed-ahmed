
import React from 'react';

interface SearchBarProps {
  searchTerm: string;
  onSearchTermChange: (term: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchTermChange }) => {
  return (
    <div className="flex justify-center my-8">
      <div className="flex w-full max-w-lg" style={{ perspective: '1000px' }}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchTermChange(e.target.value)}
          placeholder="ابحث عن قناة..."
          className="flex-1 py-3 px-6 border-2 border-orange-500 rounded-s-full text-base outline-none bg-[rgba(255,255,255,0.1)] text-white placeholder-gray-300 transition-all duration-300 focus:bg-[rgba(255,255,255,0.15)] focus:shadow-[0_0_20px_rgba(255,140,0,0.4)]"
        />
        <button className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-none px-6 rounded-e-full cursor-pointer transition-all duration-300 font-semibold hover:from-orange-600 hover:to-orange-500 hover:shadow-[0_0_15px_rgba(255,140,0,0.5)]">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
};
