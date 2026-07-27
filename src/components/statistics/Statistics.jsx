import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/container/Container';
import StatisticsGrid from './StatisticsGrid';
import { statisticsData } from './StatisticsData';

const headerVariants = {
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
 * Statistics Component
 * Quick Statistics Section displaying animated metrics to establish institutional trust & credibility.
 */
const Statistics = () => {
  return (
    <section 
      className="relative py-16 lg:py-24 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC] overflow-hidden"
      aria-labelledby="statistics-heading"
    >
      {/* Background Soft Mesh Ambient Glows */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/40 via-amber-50/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container maxWidth="max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={headerVariants}
          >
            {/* Small Eyebrow Badge */}
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-100/80">
              Institutional Legacy
            </span>

            {/* Main Heading */}
            <h2 
              id="statistics-heading" 
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#123458] tracking-tight mb-4 leading-tight"
            >
              Building Excellence Through Education
            </h2>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Empowering students with a holistic CBSE curriculum, cutting-edge facilities, and an expert faculty dedicated to nurturing intellectual curiosity, character, and lifelong achievement.
            </p>
          </motion.div>
        </div>

        {/* Statistics Grid */}
        <StatisticsGrid stats={statisticsData} />
      </Container>
    </section>
  );
};

export default Statistics;
