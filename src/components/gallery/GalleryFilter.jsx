import React from 'react';
import { motion } from 'framer-motion';
import { galleryCategories } from './GalleryData';

/**
 * GalleryFilter Component
 * Renders category filter buttons with Framer Motion active indicators and keyboard accessibility.
 */
const GalleryFilter = ({ activeCategory, onSelectCategory }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 lg:mb-12">
      {galleryCategories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            aria-pressed={isActive}
            className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 cursor-pointer select-none ${
              isActive
                ? 'bg-[#123458] text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80'
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="activeCategoryBadge"
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

export default GalleryFilter;
