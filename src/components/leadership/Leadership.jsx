import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/container/Container';
import LeadershipHeader from './LeadershipHeader';
import ChairmanCard from './ChairmanCard';
import PrincipalCard from './PrincipalCard';
import LeadershipHighlights from './LeadershipHighlights';
import QuoteCard from './QuoteCard';

const profileContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

/**
 * Leadership Component
 * Phase 10 – Main section showcasing Chairman & Principal profiles, leadership pillars, and featured quote.
 */
const Leadership = () => {
  return (
    <section
      className="relative py-16 sm:py-20 lg:py-28 bg-white overflow-hidden"
      aria-labelledby="leadership-heading"
    >
      {/* Background Soft Mesh Ambient Accents */}
      <div
        className="absolute top-1/4 left-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl pointer-events-none -z-10 -translate-x-1/3"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-0 w-96 h-96 bg-amber-50/40 rounded-full blur-3xl pointer-events-none -z-10 translate-x-1/3"
        aria-hidden="true"
      />

      <Container maxWidth="max-w-7xl">
        {/* Section Header */}
        <LeadershipHeader />

        {/* Chairman & Principal Profiles Container */}
        <motion.div
          variants={profileContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="space-y-8 lg:space-y-12 mb-16 lg:mb-20"
        >
          {/* Chairman Profile */}
          <ChairmanCard />

          {/* Principal Profile */}
          <PrincipalCard />
        </motion.div>

        {/* Leadership Pillars & Highlights */}
        <LeadershipHighlights />

        {/* Featured Institutional Quote */}
        <QuoteCard />
      </Container>
    </section>
  );
};

export default Leadership;
