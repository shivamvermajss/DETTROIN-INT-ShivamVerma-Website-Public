import React from 'react';
import { motion } from 'framer-motion';
import MissionVision from './MissionVision';
import AboutFeatures from './AboutFeatures';
import AboutCTA from './AboutCTA';
import { aboutData } from './AboutData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/**
 * AboutContent Component
 * Renders the right-column informational content: section badge, heading, paragraphs, Mission & Vision, 6 feature cards, and single CTA.
 */
const AboutContent = () => {
  const { badge, heading, paragraphs } = aboutData;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="flex flex-col text-left"
    >
      {/* Section Badge */}
      <motion.div variants={itemVariants}>
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-100/80">
          {badge}
        </span>
      </motion.div>

      {/* Main Section Heading */}
      <motion.h2
        id="about-heading"
        variants={itemVariants}
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#123458] tracking-tight mb-6 leading-tight"
      >
        {heading}
      </motion.h2>

      {/* Introduction Paragraphs */}
      <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
        {paragraphs.map((p, idx) => (
          <motion.p key={idx} variants={itemVariants}>
            {p}
          </motion.p>
        ))}
      </div>

      {/* Mission & Vision Cards */}
      <motion.div variants={itemVariants}>
        <MissionVision />
      </motion.div>

      {/* 6 Feature Cards */}
      <motion.div variants={itemVariants}>
        <AboutFeatures />
      </motion.div>

      {/* Single CTA Button */}
      <motion.div variants={itemVariants}>
        <AboutCTA />
      </motion.div>
    </motion.div>
  );
};

export default AboutContent;
