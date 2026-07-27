import React from 'react';
import { Search, X } from 'lucide-react';

/**
 * FAQSearch Component
 * Instant live search input bar with search icon, clear button, and accessible focus states.
 */
const FAQSearch = ({ searchQuery, onSearchChange, onClearSearch }) => {
  return (
    <div className="max-w-xl mx-auto mb-8 relative">
      <label htmlFor="faq-search-input" className="sr-only">
        Search frequently asked questions
      </label>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
          <Search className="w-5 h-5" aria-hidden="true" />
        </div>

        <input
          id="faq-search-input"
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search your question..."
          className="w-full pl-11 pr-11 py-3.5 sm:py-4 rounded-2xl bg-white border border-slate-200/80 text-slate-900 text-sm sm:text-base placeholder-slate-400 shadow-xs focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
        />

        {searchQuery && (
          <button
            onClick={onClearSearch}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-700 focus:outline-none focus:text-slate-900"
            aria-label="Clear search query"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default FAQSearch;
