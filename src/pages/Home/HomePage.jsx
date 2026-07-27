import React from 'react';
import PageWrapper from '../../components/layout/PageWrapper';
import { Hero } from '../../components/hero';
import { Statistics } from '../../components/statistics';
import { AboutSection } from '../../components/about';
import { WhyChooseUs } from '../../components/whyChooseUs';
import { AcademicPrograms } from '../../components/academics';
import { CampusFacilities } from '../../components/facilities';
import { Leadership } from '../../components/leadership';
import { Achievements } from '../../components/achievements';
import { StudentLife } from '../../components/studentLife';
import { Gallery } from '../../components/gallery';
import { Admissions } from '../../components/admissions';

const HomePage = () => {
  return (
    <PageWrapper
      title="Pavna International School | Leading CBSE Boarding & Day School in Aligarh"
      description="Pavna International School, Aligarh (formerly DPS Aligarh), established in 1998, offers world-class CBSE education, AI & Robotics, SEEL framework, state-of-the-art sports facilities, and premium residential boarding."
    >
      <Hero />
      <Statistics />
      <AboutSection />
      <WhyChooseUs />
      <AcademicPrograms />
      <CampusFacilities />
      <Leadership />
      <Achievements />
      <StudentLife />
      <Gallery />
      <Admissions />
    </PageWrapper>
  );
};

export default HomePage;
