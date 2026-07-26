import React from 'react';
import SEOHead from '../../components/common/SEOHead';
import AcademicsSection from '../../components/sections/academics/AcademicsSection';

const AcademicsPage = () => {
  return (
    <div className="space-y-8">
      <SEOHead title="Academics | Pavna International School" description="Academics at Pavna International School Aligarh" />
      <AcademicsSection />
    </div>
  );
};

export default AcademicsPage;
