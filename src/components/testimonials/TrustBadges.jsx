import React from 'react';
import { motion } from 'framer-motion';
import { testimonialsData } from './TestimonialsData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const badgeVariants = {
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
 * TrustBadges Component
 * Displays 6 responsive trust indicators showcasing affiliation, safety, faculty expertise, and smart facilities.
 */
const TrustBadges = () => {
  const { trustBadges } = testimonialsData;

  return (
    <div className="my-16 lg:my-20">
      <div className="text-center mb-8">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#123458] tracking-tight mb-2">
          Institutional Pillars of Trust
        </h3>
        <p className="text-sm sm:text-base text-slate-600">
          Built upon strict safety protocols, national affiliations, and educational standards.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5"
      >
        {trustBadges.map((badge) => {
          const { id, title, description, icon: Icon } = badge;
          return (
            <motion.div
              key={id}
              variants={badgeVariants}
              tabIndex={0}
              role="region"
              aria-label={title}
              className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-200 text-center flex flex-col items-center justify-between group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:bg-[#123458] group-hover:text-white transition-colors duration-300 shadow-xs">
                <Icon className="w-6 h-6" aria-hidden="true" />
              </div>

              <div>
                <h4 className="text-sm font-bold text-[#123458] mb-1">
                  {title}
                </h4>
                <p className="text-[11px] text-slate-500 leading-tight">
                  {description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default TrustBadges;
