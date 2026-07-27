import React from 'react';
import { motion } from 'framer-motion';
import { faqCategories } from './FAQData';

/**
 * FAQCategories Component
 * Horizontal scrollable category filter chips with Framer Motion active pill animation.
 */
const FAQCategories = ({ activeCategory, onSelectCategory }) => {
  return (
    <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-2.5 overflow-x-auto pb-4 mb-10 no-scrollbar max-w-4xl mx-auto px-2">
      {faqCategories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            aria-pressed={isActive}
            className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 shrink-0 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 cursor-pointer select-none ${
              isActive
                ? 'bg-[#123458] text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80'
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="activeFaqCategoryBadge"
                className="absolute inset-0 bg-[#123458] rounded-full -z-10"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            <span>{category}</span>
          </button>
        );
      })}
    </div>
  );
};

export default FAQCategories;
