import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ImageWrapper from '../ui/image/ImageWrapper';

/**
 * FacilityCard Component
 * Displays a single facility card with an image, icon, title, description, and "Learn More" action trigger.
 */
const FacilityCard = ({ facility, cardVariants, onOpenModal }) => {
  const { id, title, shortDescription, icon: Icon, image } = facility;
  const titleId = `facility-card-${id}`;

  return (
    <motion.div
      variants={cardVariants}
      tabIndex={0}
      role="region"
      aria-labelledby={titleId}
      className="group relative h-full rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200/80 overflow-hidden shadow-xs transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 flex flex-col justify-between"
    >
      {/* Top Image Banner */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
        <ImageWrapper
          src={image}
          alt={title}
          aspectRatio="auto"
          rounded="none"
          shadow={false}
          className="w-full h-full"
          imgClassName="group-hover:scale-105 transition-transform duration-500"
        />

        {/* Gradient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />

        {/* Floating Icon Badge Overlay */}
        <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md text-[#123458] shadow-md flex items-center justify-center border border-white/80 group-hover:scale-110 group-hover:text-blue-600 transition-all duration-300">
          <Icon className="w-5 h-5" aria-hidden="true" />
        </div>
      </div>

      {/* Card Content Area */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 id={titleId} className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#123458] transition-colors duration-200">
            {title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
            {shortDescription}
          </p>
        </div>

        {/* "Learn More" Action Trigger */}
        <button
          onClick={() => onOpenModal(facility)}
          className="inline-flex items-center gap-2 text-xs font-bold text-[#123458] group-hover:text-blue-600 hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-1 rounded-md py-1 cursor-pointer"
          aria-label={`Learn more about ${title}`}
        >
          <span>Learn More</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
        </button>
      </div>

      <span className="sr-only">
        {title}. {shortDescription}
      </span>
    </motion.div>
  );
};

export default FacilityCard;
