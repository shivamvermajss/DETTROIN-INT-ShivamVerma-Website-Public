import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import ImageWrapper from '../ui/image/ImageWrapper';
import { cn } from '../../utils/cn';

/**
 * FacilityCard Component
 * Displays a facility card with support for a prominent featured card layout, image zoom, subtle gradients, and smooth hover animations.
 */
const FacilityCard = ({ facility, cardVariants, onOpenModal, isFeatured = false }) => {
  const { id, title, shortDescription, icon: Icon, image } = facility;
  const titleId = `facility-card-${id}`;

  return (
    <motion.div
      variants={cardVariants}
      tabIndex={0}
      role="region"
      aria-labelledby={titleId}
      className={cn(
        'group relative rounded-3xl overflow-hidden border transition-all duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 flex flex-col justify-between cursor-pointer',
        isFeatured
          ? 'lg:col-span-2 bg-gradient-to-br from-white via-blue-50/40 to-indigo-50/20 border-blue-200/90 shadow-lg hover:shadow-2xl hover:border-blue-400 hover:-translate-y-2'
          : 'bg-white border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1.5'
      )}
    >
      {/* Top Ambient Highlight Accent Line on Hover */}
      <div 
        className="absolute inset-x-0 top-0 h-1 rounded-t-3xl bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/60 transition-all duration-500 z-20" 
        aria-hidden="true"
      />

      {/* Top Image Banner */}
      <div className={cn('relative w-full overflow-hidden bg-slate-100', isFeatured ? 'h-56 sm:h-64 lg:h-72' : 'h-48')}>
        <ImageWrapper
          src={image}
          alt={title}
          aspectRatio="auto"
          rounded="none"
          shadow={false}
          className="w-full h-full"
          imgClassName="group-hover:scale-108 transition-transform duration-700 ease-out object-cover"
        />

        {/* Subtle Ambient Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent pointer-events-none" />

        {/* Floating Icon Badge Overlay */}
        <div className={cn(
          'absolute bottom-3.5 left-3.5 rounded-2xl bg-white/95 backdrop-blur-md text-[#123458] shadow-md flex items-center justify-center border border-white/80 group-hover:scale-110 group-hover:bg-[#123458] group-hover:text-white transition-all duration-300',
          isFeatured ? 'w-12 h-12' : 'w-10 h-10'
        )}>
          <Icon className={cn(isFeatured ? 'w-6 h-6' : 'w-5 h-5')} aria-hidden="true" />
        </div>

        {/* Featured Chip Badge */}
        {isFeatured && (
          <div className="absolute top-3.5 right-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#2563EB] text-xs font-bold shadow-md border border-white/80">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" aria-hidden="true" />
            <span>Featured Facility</span>
          </div>
        )}
      </div>

      {/* Card Content Area */}
      <div className={cn('p-5 sm:p-6 flex-1 flex flex-col justify-between', isFeatured && 'lg:p-7')}>
        <div>
          <h3 
            id={titleId} 
            className={cn(
              'font-extrabold text-slate-900 mb-2 group-hover:text-[#123458] transition-colors duration-200',
              isFeatured ? 'text-xl sm:text-2xl lg:text-3xl' : 'text-lg'
            )}
          >
            {title}
          </h3>

          <p className={cn('text-slate-600 leading-relaxed mb-4', isFeatured ? 'text-sm sm:text-base' : 'text-xs sm:text-sm')}>
            {shortDescription}
          </p>
        </div>

        {/* "Learn More" Action Trigger */}
        <div className="pt-2 border-t border-slate-100">
          <button
            onClick={() => onOpenModal(facility)}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#123458] group-hover:text-[#2563EB] hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-1 rounded-md py-1 cursor-pointer"
            aria-label={`Learn more about ${title}`}
          >
            <span>Learn More & Explore Details</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" aria-hidden="true" />
          </button>
        </div>
      </div>

      <span className="sr-only">
        {title}. {shortDescription}
      </span>
    </motion.div>
  );
};

export default FacilityCard;
