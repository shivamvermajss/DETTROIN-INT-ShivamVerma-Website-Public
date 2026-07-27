import React from 'react';
import { motion } from 'framer-motion';
import HeroStats from './HeroStats';
import ImageWrapper from '../ui/image/ImageWrapper';

const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-lg lg:max-w-none mx-auto"
    >
      {/* Decorative Outer Glow Ring */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 via-amber-400/10 to-indigo-500/10 rounded-[36px] blur-2xl -z-10 pointer-events-none" />

      {/* Main Image Container */}
      <div className="relative p-3 bg-white/80 backdrop-blur-md rounded-[32px] border border-slate-200/80 shadow-2xl overflow-hidden">
        <ImageWrapper
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200"
          alt="Pavna International School Campus Architecture"
          aspectRatio="auto"
          rounded="2xl"
          shadow={false}
          className="w-full h-[380px] sm:h-[460px] lg:h-[500px]"
        />

        {/* Floating Cards Overlay */}
        <HeroStats />
      </div>
    </motion.div>
  );
};

export default HeroImage;
