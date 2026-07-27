import React from 'react';
import { motion } from 'framer-motion';

/**
 * FeatureCard Component
 * Renders an individual feature card with icon, title, description, glassmorphism styling, and smooth hover dynamics.
 */
const FeatureCard = ({ feature, cardVariants }) => {
  const { id, title, description, icon: Icon, accentColor, iconBg } = feature;
  const titleId = `why-choose-card-${id}`;

  return (
    <motion.div
      variants={cardVariants}
      tabIndex={0}
      role="region"
      aria-labelledby={titleId}
      className="group relative h-full rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200/80 p-6 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 flex flex-col justify-between"
    >
      {/* Top Border Subtle Accent Glow on Hover */}
      <div 
        className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/50 transition-all duration-500" 
        aria-hidden="true"
      />

      <div>
        {/* Icon Container */}
        <div className="mb-5 flex items-center justify-between">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${accentColor} p-0.5 shadow-md shadow-blue-900/10 group-hover:scale-110 transition-transform duration-300`}>
            <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
              <Icon className="w-6 h-6 text-[#123458] group-hover:text-blue-600 transition-colors duration-300" aria-hidden="true" />
            </div>
          </div>

          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${iconBg} opacity-80 group-hover:opacity-100 transition-opacity`}>
            Feature
          </span>
        </div>

        {/* Feature Title */}
        <h3 id={titleId} className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#123458] transition-colors duration-200">
          {title}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-slate-600 leading-relaxed font-normal">
          {description}
        </p>
      </div>

      {/* Accessibility screen-reader readout */}
      <span className="sr-only">
        {title}. {description}
      </span>
    </motion.div>
  );
};

export default FeatureCard;
