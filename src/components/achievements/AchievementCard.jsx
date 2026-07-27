import React from 'react';
import { motion } from 'framer-motion';

/**
 * AchievementCard Component
 * Displays an individual achievement card with icon, title, description, milestone year, and ribbon badge.
 */
const AchievementCard = ({ achievement, cardVariants }) => {
  const { id, title, description, year, ribbon, icon: Icon, gradient } = achievement;
  const titleId = `achievement-card-title-${id}`;

  return (
    <motion.div
      variants={cardVariants}
      tabIndex={0}
      role="region"
      aria-labelledby={titleId}
      className="group relative h-full rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200/80 p-6 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 flex flex-col justify-between"
    >
      {/* Top Subtle Border Accent Glow */}
      <div 
        className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/40 transition-all duration-500" 
        aria-hidden="true"
      />

      <div>
        {/* Header: Icon & Ribbon Badge */}
        <div className="flex items-center justify-between mb-5">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} p-0.5 shadow-md shadow-blue-900/10 group-hover:scale-110 transition-transform duration-300`}>
            <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
              <Icon className="w-6 h-6 text-[#123458] group-hover:text-blue-600 transition-colors duration-300" aria-hidden="true" />
            </div>
          </div>

          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100/80">
            {ribbon}
          </span>
        </div>

        {/* Achievement Title */}
        <h3 id={titleId} className="text-xl font-extrabold text-[#123458] mb-2 group-hover:text-blue-600 transition-colors duration-200">
          {title}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-slate-600 leading-relaxed font-normal mb-4">
          {description}
        </p>
      </div>

      {/* Footer Milestone Year */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
        <span>Milestone</span>
        <span className="text-slate-800 font-bold">{year}</span>
      </div>

      <span className="sr-only">
        {title}. {description}. Recognized in {year} as {ribbon}.
      </span>
    </motion.div>
  );
};

export default AchievementCard;
