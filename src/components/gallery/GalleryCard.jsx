import React from 'react';
import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import ImageWrapper from '../ui/image/ImageWrapper';

/**
 * GalleryCard Component
 * Individual gallery item card featuring image zoom, dark gradient overlay, category tag, and Lightbox trigger.
 */
const GalleryCard = ({ item, index, cardVariants, onOpenLightbox }) => {
  const { id, title, category, image } = item;
  const titleId = `gallery-card-title-${id}`;

  return (
    <motion.div
      layout
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      tabIndex={0}
      role="button"
      aria-labelledby={titleId}
      onClick={() => onOpenLightbox(index)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpenLightbox(index);
        }
      }}
      className="group relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
    >
      <ImageWrapper
        src={image}
        alt={title}
        aspectRatio="auto"
        rounded="none"
        shadow={false}
        className="w-full h-56 sm:h-64 lg:h-72"
        imgClassName="group-hover:scale-105 transition-transform duration-500"
      />

      {/* Dark Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-left pointer-events-none">
        {/* Top Right Expand Icon Badge */}
        <div className="self-end w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
          <Maximize2 className="w-4 h-4" aria-hidden="true" />
        </div>

        {/* Bottom Details */}
        <div>
          <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-600 text-white mb-1 shadow-xs">
            {category}
          </span>
          <h3 id={titleId} className="text-sm sm:text-base font-bold text-white leading-tight">
            {title}
          </h3>
        </div>
      </div>

      <span className="sr-only">
        {title} in category {category}. Click to view full size image.
      </span>
    </motion.div>
  );
};

export default GalleryCard;
