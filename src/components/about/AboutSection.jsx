import React from 'react';
import Container from '../ui/container/Container';
import AboutImage from './AboutImage';
import AboutContent from './AboutContent';

/**
 * AboutSection Component
 * Premium About School section combining image collage with floating badge and rich institutional details.
 */
const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 lg:py-28 bg-white overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Background Soft Mesh Ambient Accents */}
      <div
        className="absolute top-1/3 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10 -translate-x-1/2"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-0 w-96 h-96 bg-amber-50/40 rounded-full blur-3xl pointer-events-none -z-10 translate-x-1/2"
        aria-hidden="true"
      />

      <Container maxWidth="max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Campus Image Collage & Floating Badge (5 Cols on Desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <AboutImage />
          </div>

          {/* Right Column: Informational Content & Cards (7 Cols on Desktop) */}
          <div className="lg:col-span-7">
            <AboutContent />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
