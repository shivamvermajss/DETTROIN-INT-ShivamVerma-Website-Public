import React from 'react';
import Container from '../ui/container/Container';
import SectionHeader from './SectionHeader';
import FeatureGrid from './FeatureGrid';

/**
 * WhyChooseUs Component
 * Main component for Phase 7 – Why Choose Us section.
 * Highlights Pavna School's 8 core educational advantages in a responsive grid.
 */
const WhyChooseUs = () => {
  return (
    <section
      className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F8FAFC] via-slate-50 to-[#F8FAFC] overflow-hidden"
      aria-labelledby="why-choose-heading"
    >
      {/* Background Soft Mesh Ambient Glows */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[450px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/40 via-indigo-50/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container maxWidth="max-w-7xl">
        {/* Section Header */}
        <SectionHeader />

        {/* 8 Feature Cards Grid */}
        <FeatureGrid />
      </Container>
    </section>
  );
};

export default WhyChooseUs;
