import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GalleryCard from './GalleryCard';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/**
 * GalleryGrid Component
 * Displays a responsive 4-column desktop / 3-column tablet / 2-column mobile grid with Framer Motion filter animations.
 */
const GalleryGrid = ({ images, onOpenLightbox }) => {
  return (
    <motion.div
      layout
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 lg:mb-20"
    >
      <AnimatePresence mode="popLayout">
        {images.map((item, index) => (
          <GalleryCard
            key={item.id}
            item={item}
            index={index}
            cardVariants={cardVariants}
            onOpenLightbox={onOpenLightbox}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default GalleryGrid;
