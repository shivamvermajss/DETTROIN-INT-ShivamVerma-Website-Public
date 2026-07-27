import React from 'react';
import Container from '../ui/container/Container';
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';
import ScrollIndicator from './ScrollIndicator';

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-[85vh] lg:min-h-screen flex flex-col justify-between pt-8 pb-12 lg:pt-16 lg:pb-16 bg-gradient-to-b from-white via-slate-50 to-[#F8FAFC]">
      {/* Background Soft Mesh Gradients */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/50 via-amber-50/40 to-indigo-100/30 rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true"
      />

      <Container className="my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content (7 Cols) */}
          <div className="lg:col-span-7">
            <HeroContent />
          </div>

          {/* Right Column: Hero Visual & Floating Cards (5 Cols) */}
          <div className="lg:col-span-5">
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
