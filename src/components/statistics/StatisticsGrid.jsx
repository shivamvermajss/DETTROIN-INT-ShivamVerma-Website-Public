import React from 'react';
import { motion } from 'framer-motion';
import StatCard from './StatCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/**
 * StatisticsGrid Component
 * Displays a responsive grid of StatCards with staggered Framer Motion entrance animations.
 */
const StatisticsGrid = ({ stats = [] }) => {
  // Ensure stats is an array before mapping
  const statsList = Array.isArray(stats) ? stats : [];

  if (statsList.length === 0) {
    return null;
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
    >
      {statsList.map((item, index) => (
        <StatCard 
          key={item.id || item.title || index} 
          item={item} 
          cardVariants={cardVariants} 
        />
      ))}
    </motion.div>
  );
};

export default StatisticsGrid;