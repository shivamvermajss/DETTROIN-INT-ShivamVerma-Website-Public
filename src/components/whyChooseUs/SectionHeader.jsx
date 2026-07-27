import React from 'react';
import { motion } from 'framer-motion';
import { whyChooseData } from './WhyChooseData';

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
 * SectionHeader Component
 * Animates the section badge, main title, and concise summary description.
 */
const SectionHeader = () => {
  const { badge, heading, description } = whyChooseData;

  return (
    <motion.div
      variants={headerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="max-w-3xl mx-auto text-center mb-12 lg:mb-16"
    >
      {/* Section Badge */}
      <motion.div variants={itemVariants}>
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-100/80">
          {badge}
        </span>
      </motion.div>

      {/* Main Section Heading */}
      <motion.h2
        id="why-choose-heading"
        variants={itemVariants}
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#123458] tracking-tight mb-4 leading-tight"
      >
        {heading}
      </motion.h2>

      {/* Center-aligned Description */}
      <motion.p
        variants={itemVariants}
        className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto"
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default SectionHeader;
