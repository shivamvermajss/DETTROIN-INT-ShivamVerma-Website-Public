import React from 'react';
import { motion } from 'framer-motion';
import ProgramCard from './ProgramCard';
import { academicData } from './AcademicData';

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
 * ProgramGrid Component
 * Renders the 5 academic program cards in a responsive grid.
 */
const ProgramGrid = () => {
  const { programs } = academicData;

  return (
    <motion.div
      variants={gridContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16 lg:mb-20"
    >
      {programs.map((program) => (
        <ProgramCard key={program.id} program={program} cardVariants={cardVariants} />
      ))}
    </motion.div>
  );
};

export default ProgramGrid;
