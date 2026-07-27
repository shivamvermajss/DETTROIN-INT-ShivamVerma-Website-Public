import React from 'react';
import { motion } from 'framer-motion';
import { testimonialsData } from './TestimonialsData';

const containerVariants = {
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
  hidden: { opacity: 0, y: 20 },
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
 * CommunityStats Component
 * Displays 4 premium stat cards showcasing parent satisfaction, alumni count, recommendation rate, and success rate.
 */
const CommunityStats = () => {
  const { stats } = testimonialsData;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mb-16 lg:mb-20"
    >
      {stats.map((stat) => {
        const { id, number, label, icon: Icon, color } = stat;
        return (
          <motion.div
            key={id}
            variants={cardVariants}
            tabIndex={0}
            role="region"
            aria-label={`${number} ${label}`}
            className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-200 transition-all duration-300 flex items-center gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            <div className={`w-12 h-12 rounded-2xl ${color} flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform duration-300`}>
              <Icon className="w-6 h-6 fill-current" aria-hidden="true" />
            </div>

            <div className="text-left">
              <div className="text-2xl sm:text-3xl font-black text-[#123458] tracking-tight">
                {number}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600">
                {label}
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default CommunityStats;
