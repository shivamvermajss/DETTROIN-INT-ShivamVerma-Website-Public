import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/container/Container';
import ProgramGrid from './ProgramGrid';
import CurriculumTimeline from './CurriculumTimeline';
import ProgramHighlights from './ProgramHighlights';
import AcademicCTA from './AcademicCTA';
import { academicData } from './AcademicData';

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
 * AcademicPrograms Component
 * Phase 8 – Main component showcasing Pavna School's 5 academic stages, progression timeline, highlights, and CTAs.
 */
const AcademicPrograms = () => {
  const { badge, heading, description } = academicData;

  return (
    <section
      className="relative py-16 sm:py-20 lg:py-28 bg-white overflow-hidden"
      aria-labelledby="academics-heading"
    >
      {/* Background Soft Mesh Ambient Accents */}
      <div
        className="absolute top-1/4 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl pointer-events-none -z-10 translate-x-1/3"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-0 w-96 h-96 bg-purple-50/40 rounded-full blur-3xl pointer-events-none -z-10 -translate-x-1/3"
        aria-hidden="true"
      />

      <Container maxWidth="max-w-7xl">
        {/* Section Header */}
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
            id="academics-heading"
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

        {/* 5 Academic Program Cards */}
        <ProgramGrid />

        {/* Curriculum Timeline */}
        <CurriculumTimeline />

        {/* Academic Highlights */}
        <ProgramHighlights />

        {/* Call to Action */}
        <AcademicCTA />
      </Container>
    </section>
  );
};

export default AcademicPrograms;
