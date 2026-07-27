import React from 'react';
import Container from '../ui/container/Container';
import AchievementHeader from './AchievementHeader';
import AchievementStats from './AchievementStats';
import AchievementGrid from './AchievementGrid';
import AchievementTimeline from './AchievementTimeline';
import SuccessStoryCard from './SuccessStoryCard';
import AchievementCTA from './AchievementCTA';

/**
 * Achievements Component
 * Phase 11 – Main section displaying animated statistics, 6 achievement cards, milestone timeline, student success story spotlight, and CTAs.
 */
const Achievements = () => {
  return (
    <section
      className="relative py-16 sm:py-20 lg:py-28 bg-[#F8FAFC] overflow-hidden"
      aria-labelledby="achievements-heading"
    >
      {/* Background Soft Mesh Ambient Accents */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-100/40 via-blue-50/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container maxWidth="max-w-7xl">
        {/* Section Header */}
        <AchievementHeader />

        {/* Animated Statistics Counters */}
        <AchievementStats />

        {/* 6 Achievement Category Cards */}
        <AchievementGrid />

        {/* Interactive History & Growth Timeline */}
        <AchievementTimeline />

        {/* Featured Student Success Story */}
        <SuccessStoryCard />

        {/* Section CTA */}
        <AchievementCTA />
      </Container>
    </section>
  );
};

export default Achievements;
