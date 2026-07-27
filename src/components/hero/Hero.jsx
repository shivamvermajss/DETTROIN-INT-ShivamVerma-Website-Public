import React from 'react';
import Container from '../ui/container/Container';
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';
import ScrollIndicator from './ScrollIndicator';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden min-h-[85vh] lg:min-h-screen flex flex-col justify-between pt-6 pb-12 lg:pt-16 lg:pb-16 bg-gradient-to-b from-[#EFF6FF] via-[#F8FAFC] to-white">
      {/* Background Soft Radial Blue Mesh Gradient Glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[700px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/15 via-indigo-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true"
      />

      <Container className="my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content (7 Cols) */}
          <div className="lg:col-span-7">
            <HeroContent />
          </div>

          {/* Right Column: Hero Visual & Floating Cards (5 Cols with Top Margin on Mobile) */}
          <div className="lg:col-span-5 mt-10 sm:mt-12 lg:mt-0">
            <HeroImage />
          </div>

        </div>
      </Container>

      {/* Bottom Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
};

export default Hero;
