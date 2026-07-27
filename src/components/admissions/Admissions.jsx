import React from 'react';
import Container from '../ui/container/Container';
import AdmissionsHeader from './AdmissionsHeader';
import AdmissionTimeline from './AdmissionTimeline';
import EligibilitySection from './EligibilitySection';
import RequiredDocuments from './RequiredDocuments';
import ScholarshipCard from './ScholarshipCard';
import AdmissionFAQPreview from './AdmissionFAQPreview';

/**
 * Admissions Component
 * Phase 14 – Main admissions section providing step-by-step timeline, eligibility guidelines, required documents, scholarship spotlight, and FAQ preview.
 */
const Admissions = () => {
  return (
    <section
      className="relative py-16 sm:py-20 lg:py-28 bg-white overflow-hidden"
      aria-labelledby="admissions-heading"
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
        <AdmissionsHeader />

        {/* 6-Step Admission Timeline */}
        <AdmissionTimeline />

        {/* Grade-wise Eligibility Section */}
        <EligibilitySection />

        {/* Required Documents Checklist */}
        <RequiredDocuments />

        {/* Pavna Merit Scholarship Spotlight */}
        <ScholarshipCard />

        {/* Admission FAQ Accordion Preview */}
        <AdmissionFAQPreview />
      </Container>
    </section>
  );
};

export default Admissions;
