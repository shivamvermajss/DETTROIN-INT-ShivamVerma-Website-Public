import React from 'react';

/**
 * SectionDivider Component
 * Renders a soft gradient separator line with subtle ambient glow to smoothly bridge sections.
 */
const SectionDivider = ({ className = '' }) => {
  return (
    <div className={`relative w-full overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {/* Subtle Horizontal Gradient Line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200/90 to-transparent" />
      </div>
      
      {/* Central Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-8 bg-gradient-to-r from-blue-400/10 via-indigo-400/15 to-blue-400/10 blur-lg rounded-full pointer-events-none" />
    </div>
  );
};

export default SectionDivider;
