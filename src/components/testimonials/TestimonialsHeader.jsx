import React from 'react';
import { motion } from 'framer-motion';
import { testimonialsData } from './TestimonialsData';

const headerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
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
 * TestimonialsHeader Component
 * Section header displaying section badge, main title, and concise introduction.
 */
const TestimonialsHeader = () => {
  const { badge, heading, description } = testimonialsData;

  return (
    <motion.div
      variants={headerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="max-w-3xl mx-auto text-center mb-12 lg:mb-16"
    >
      {/* Badge */}
      <motion.div variants={itemVariants}>
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-100/80">
          {badge}
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h2
        id="testimonials-heading"
        variants={itemVariants}
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#123458] tracking-tight mb-4 leading-tight"
      >
        {heading}
      </motion.h2>

      {/* Description */}
      <motion.p
        variants={itemVariants}
        className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto"
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default TestimonialsHeader;
