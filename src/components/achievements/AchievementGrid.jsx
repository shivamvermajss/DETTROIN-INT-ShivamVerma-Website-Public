import React from 'react';
import { motion } from 'framer-motion';
import AchievementCard from './AchievementCard';
import { achievementData } from './AchievementData';

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
 * AchievementGrid Component
 * Displays a responsive grid of 6 achievement category cards.
 */
const AchievementGrid = () => {
  const { achievements } = achievementData;

  return (
    <motion.div
      variants={gridContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20"
    >
      {achievements.map((item) => (
        <AchievementCard key={item.id} achievement={item} cardVariants={cardVariants} />
      ))}
    </motion.div>
  );
};

export default AchievementGrid;
