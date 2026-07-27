import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ChevronRight } from 'lucide-react';
import HeroButtons from './HeroButtons';
import HeroBadges from './HeroBadges';

const HeroContent = () => {
  return (
    <div className="space-y-6 sm:space-y-7 lg:space-y-8 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
      {/* Top Admissions Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#123458]/5 border border-[#123458]/10 text-[#123458] text-[11px] sm:text-sm font-bold shadow-xs"
      >
        <span className="flex h-2.5 w-2.5 relative shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2563EB]"></span>
        </span>
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
          <span>Formerly DPS Aligarh — Admissions Open 2026-27</span>
        </span>
        <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 shrink-0" />
      </motion.div>

      {/* Main Single H1 Headline with Natural Line Wrapping */}
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.2,
            },
          },
        }}
        className="text-[1.85rem] xs:text-3xl sm:text-5xl lg:text-6xl font-black text-[#111827] tracking-tight leading-[1.2] sm:leading-[1.1]"
      >
        <motion.span
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
          }}
          className="inline sm:inline-block"
        >
          Shaping Ethical Leaders
        </motion.span>{' '}
        <motion.span
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
          }}
          className="inline sm:inline-block"
        >
          & Global Innovators
        </motion.span>{' '}
        <motion.span
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
          }}
          className="bg-gradient-to-r from-[#123458] via-[#2563EB] to-indigo-600 bg-clip-text text-transparent inline sm:inline-block"
        >
          Since 1998
        </motion.span>
      </motion.h1>

      {/* Supporting Paragraph with Better Reading Flow */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-sm sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0 pt-1 sm:pt-0"
      >
        Welcome to <strong className="font-bold text-slate-900">Pavna International School, Aligarh</strong>. We blend world-class CBSE academics with futuristic AI & Robotics STEM programs and SEEL character development across a 35-acre eco-friendly campus.
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="pt-2 sm:pt-3"
      >
        <HeroButtons />
      </motion.div>

      {/* Trust Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="pt-2 sm:pt-3"
      >
        <HeroBadges />
      </motion.div>
    </div>
  );
};

export default HeroContent;
