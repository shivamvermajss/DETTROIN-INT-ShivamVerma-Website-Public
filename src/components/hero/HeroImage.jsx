import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import HeroStats from './HeroStats';
import ImageWrapper from '../ui/image/ImageWrapper';

/**
 * HeroImage Component
 * Premium hero campus visual featuring high-res campus photography, rounded border frame, subtle depth overlay, mouse parallax tilt, and floating stat badges.
 */
const HeroImage = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-250, 250], [3, -3]);
  const rotateY = useTransform(mouseX, [-250, 250], [-3, 3]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className="relative w-full max-w-lg lg:max-w-none mx-auto group transition-transform duration-200 ease-out"
    >
      {/* Decorative Ambient Outer Glow Ring */}
      <div 
        className="absolute -inset-4 bg-gradient-to-tr from-blue-500/15 via-amber-400/10 to-indigo-500/15 rounded-[36px] blur-2xl -z-10 pointer-events-none" 
        aria-hidden="true"
      />

      {/* Main Image Outer Frame Container */}
      <div className="relative p-3 bg-white/90 backdrop-blur-md rounded-[32px] border border-slate-200/80 shadow-2xl overflow-hidden">
        <ImageWrapper
          src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1400"
          alt="Pavna International School Modern Campus Architecture and Facilities"
          aspectRatio="auto"
          rounded="2xl"
          shadow={false}
          className="w-full h-[420px] sm:h-[500px] lg:h-[550px] overflow-hidden"
          imgClassName="group-hover:scale-105 transition-transform duration-700 ease-out object-cover"
        />

        {/* Subtle Ambient Gradient Overlay for Contrast & Visual Depth */}
        <div 
          className="absolute inset-3 bg-gradient-to-t from-slate-950/50 via-slate-900/15 to-transparent pointer-events-none rounded-[24px]" 
          aria-hidden="true"
        />

        {/* Floating Statistics Cards Overlay */}
        <HeroStats />
      </div>
    </motion.div>
  );
};

export default HeroImage;
