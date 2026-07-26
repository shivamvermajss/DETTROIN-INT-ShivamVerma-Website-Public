import React from 'react';
import SEOHead from '../../components/common/SEOHead';
import AboutSection from '../../components/sections/about/AboutSection';
import ManagementSection from '../../components/sections/management/ManagementSection';
import PrincipalSection from '../../components/sections/principal/PrincipalSection';

const AboutPage = () => {
  return (
    <div className="space-y-8">
      <SEOHead title="About Us | Pavna International School" description="About Pavna International School Aligarh" />
      <AboutSection />
      <ManagementSection />
      <PrincipalSection />
    </div>
  );
};

export default AboutPage;
