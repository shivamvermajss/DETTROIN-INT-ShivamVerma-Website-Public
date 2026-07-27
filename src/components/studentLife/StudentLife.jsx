import React from 'react';
import Container from '../ui/container/Container';
import StudentLifeHeader from './StudentLifeHeader';
import StudentStory from './StudentStory';
import StudentLifeGrid from './StudentLifeGrid';
import ClubsSection from './ClubsSection';
import StudentLifeGallery from './StudentLifeGallery';
import StudentLifeCTA from './StudentLifeCTA';

/**
 * StudentLife Component
 * Phase 12 – Main section showcasing Pavna School's vibrant student experience, co-curricular academies, clubs, and photo gallery.
 */
const StudentLife = () => {
  return (
    <section
      className="relative py-16 sm:py-20 lg:py-28 bg-white overflow-hidden"
      aria-labelledby="student-life-heading"
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
        <StudentLifeHeader />

        {/* Featured Student Experience Spotlight */}
        <StudentStory />

        {/* 8 Co-Curricular Activities Grid */}
        <StudentLifeGrid />

        {/* Student Interest Clubs & Societies */}
        <ClubsSection />

        {/* Campus Life Photo Gallery */}
        <StudentLifeGallery />

        {/* Section CTA */}
        <StudentLifeCTA />
      </Container>
    </section>
  );
};

export default StudentLife;
