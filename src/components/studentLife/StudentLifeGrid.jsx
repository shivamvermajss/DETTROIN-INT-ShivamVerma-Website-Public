import React from 'react';
import { motion } from 'framer-motion';
import ActivityCard from './ActivityCard';
import { studentLifeData } from './StudentLifeData';

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
 * StudentLifeGrid Component
 * Renders the responsive grid of 8 activity cards (Sports, Arts, Robotics, Debate, etc.).
 */
const StudentLifeGrid = () => {
  const { activities } = studentLifeData;

  return (
    <div className="mb-16 lg:mb-20">
      <div className="text-center mb-8">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#123458] tracking-tight mb-2">
          Co-Curricular Activities & Academies
        </h3>
        <p className="text-sm sm:text-base text-slate-600">
          Empowering every student to explore their passions, talents, and creative energy.
        </p>
      </div>

      <motion.div
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
      >
        {activities.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} cardVariants={cardVariants} />
        ))}
      </motion.div>
    </div>
  );
};

export default StudentLifeGrid;
