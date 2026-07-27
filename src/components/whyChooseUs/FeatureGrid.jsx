import React from 'react';
import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';
import { whyChooseData } from './WhyChooseData';

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
 * FeatureGrid Component
 * Displays a responsive grid of 8 feature cards with staggered Framer Motion entrance animations.
 */
const FeatureGrid = () => {
  const { features } = whyChooseData;

  return (
    <motion.div
      variants={gridContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
    >
      {features.map((feature) => (
        <FeatureCard key={feature.id} feature={feature} cardVariants={cardVariants} />
      ))}
    </motion.div>
  );
};

export default FeatureGrid;
