import React from 'react';
import { motion } from 'framer-motion';
import ImageWrapper from '../ui/image/ImageWrapper';

/**
 * ActivityCard Component
 * Displays an individual activity card with image banner, icon badge, title, description, and hover elevation.
 */
const ActivityCard = ({ activity, cardVariants }) => {
  const { id, title, description, icon: Icon, image } = activity;
  const titleId = `activity-card-${id}`;

  return (
    <motion.div
      variants={cardVariants}
      tabIndex={0}
      role="region"
      aria-labelledby={titleId}
      className="group relative h-full rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200/80 overflow-hidden shadow-xs transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 flex flex-col justify-between"
    >
      {/* Top Image Banner */}
      <div className="relative h-44 w-full overflow-hidden bg-slate-100">
        <ImageWrapper
          src={image}
          alt={title}
          aspectRatio="auto"
          rounded="none"
          shadow={false}
          className="w-full h-full"
          imgClassName="group-hover:scale-105 transition-transform duration-500"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />

        {/* Icon Overlay Badge */}
        <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md text-[#123458] shadow-md flex items-center justify-center border border-white/80 group-hover:scale-110 group-hover:text-blue-600 transition-all duration-300">
          <Icon className="w-5 h-5" aria-hidden="true" />
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 id={titleId} className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#123458] transition-colors duration-200">
            {title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <span className="sr-only">
        {title}. {description}
      </span>
    </motion.div>
  );
};

export default ActivityCard;
