import React from 'react';
import MainLayout from '../layouts/MainLayout';
import SEOHead from '../components/common/SEOHead';
import HeroSection from '../components/home/HeroSection';
import QuickInsightsSection from '../components/home/QuickInsightsSection';
import StatsCounterSection from '../components/home/StatsCounterSection';
import LeadershipSection from '../components/home/LeadershipSection';
import DistinguishedGuestsSection from '../components/home/DistinguishedGuestsSection';
import FAQAccordionSection from '../components/home/FAQAccordionSection';
import CTASection from '../components/home/CTASection';

const HomePage = () => {
  return (
    <MainLayout>
      <SEOHead 
        title="Pavna International School Aligarh | Formerly DPS Aligarh | Best CBSE School"
        description="Pavna International School, Aligarh (formerly DPS Aligarh), established in 1998, offers world-class CBSE education, AI & Robotics, SEEL framework, state-of-the-art sports facilities, and premium residential boarding."
      />
      <HeroSection />
      <StatsCounterSection />
      <QuickInsightsSection />
      <LeadershipSection />
      <DistinguishedGuestsSection />
      <FAQAccordionSection />
      <CTASection />
    </MainLayout>
  );
};

export default HomePage;
