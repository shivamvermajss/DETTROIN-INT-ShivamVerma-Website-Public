import React from 'react';
import SEOHead from '../../components/common/SEOHead';
import HeroSection from '../../components/sections/hero/HeroSection';
import AboutSection from '../../components/sections/about/AboutSection';
import StatsSection from '../../components/sections/stats/StatsSection';
import FAQSection from '../../components/sections/faq/FAQSection';

const HomePage = () => {
  return (
    <div className="space-y-8">
      <SEOHead title="Home | Pavna International School" description="Welcome to Pavna International School Aligarh" />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <FAQSection />
    </div>
  );
};

export default HomePage;
