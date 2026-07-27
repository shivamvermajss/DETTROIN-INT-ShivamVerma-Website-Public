import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ChevronRight } from 'lucide-react';
import HeroButtons from './HeroButtons';
import HeroBadges from './HeroBadges';

const HeroContent = () => {
  return (
    <div className="space-y-6 lg:space-y-8 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
      {/* Top Admissions Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#123458]/5 border border-[#123458]/10 text-[#123458] text-xs sm:text-sm font-bold shadow-xs"
      >
        <span className="flex h-2.5 w-2.5 relative shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2563EB]"></span>
        </span>
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
          <span>Formerly DPS Aligarh — Admissions Open 2026-27</span>
        </span>
        <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
      </motion.div>

      {/* Main Single H1 Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#111827] tracking-tight leading-[1.1]"
      >
        Shaping Ethical Leaders & Global Innovators{' '}
        <span className="bg-gradient-to-r from-[#123458] via-[#2563EB] to-indigo-600 bg-clip-text text-transparent">
          Since 1998
        </span>
      </motion.h1>

      {/* Supporting Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0"
      >
        Welcome to <strong className="font-bold text-slate-900">Pavna International School, Aligarh</strong>. We blend world-class CBSE academics with futuristic AI & Robotics STEM programs and SEEL character development across a 35-acre eco-friendly campus.
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <HeroButtons />
      </motion.div>

      {/* Trust Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <HeroBadges />
      </motion.div>
    </div>
  );
};

export default HeroContent;
