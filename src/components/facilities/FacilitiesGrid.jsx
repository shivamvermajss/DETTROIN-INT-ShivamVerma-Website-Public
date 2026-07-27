import React from 'react';
import { motion } from 'framer-motion';
import FacilityCard from './FacilityCard';
import { facilityData } from './FacilityData';

const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/**
 * FacilitiesGrid Component
 * Displays a responsive grid of 8 facility cards with Framer Motion staggered entrance animations.
 */
const FacilitiesGrid = ({ onOpenModal }) => {
  const { facilities } = facilityData;

  return (
    <motion.div
      variants={gridContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16 lg:mb-20"
    >
      {facilities.map((facility) => (
        <FacilityCard
          key={facility.id}
          facility={facility}
          cardVariants={cardVariants}
          onOpenModal={onOpenModal}
        />
      ))}
    </motion.div>
  );
};

export default FacilitiesGrid;
