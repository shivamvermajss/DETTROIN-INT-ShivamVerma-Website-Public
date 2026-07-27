import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import PageWrapper from '../../components/layout/PageWrapper';
import { Hero } from '../../components/hero';
import { Statistics } from '../../components/statistics';
import { AboutSection } from '../../components/about';
import { AcademicPrograms } from '../../components/academics';
import { CampusFacilities } from '../../components/facilities';
import { Gallery } from '../../components/gallery';
import { Testimonials } from '../../components/testimonials';
import { FAQ } from '../../components/faq';
import { FinalCTA } from '../../components/footer';

import SectionDivider from '../../components/ui/divider/SectionDivider';

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = location.hash.replace('#', '');
      scroller.scrollTo(target, {
        duration: 500,
        delay: 100,
        smooth: true,
        offset: -80,
      });
    }
  }, [location.hash]);

  return (
    <PageWrapper
      title="Pavna International School | Leading CBSE Boarding & Day School in Aligarh"
      description="Pavna International School, Aligarh (formerly DPS Aligarh), established in 1998, offers world-class CBSE education, AI & Robotics, SEEL framework, state-of-the-art sports facilities, and premium residential boarding."
    >
      <Hero />
      <SectionDivider />
      <Statistics />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <AcademicPrograms />
      <SectionDivider />
      <CampusFacilities />
      <SectionDivider />
      <Gallery />
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <FAQ />
      <SectionDivider />
      <FinalCTA />
    </PageWrapper>
  );
};

export default HomePage;
