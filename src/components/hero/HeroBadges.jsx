import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, GraduationCap, Laptop, Bus } from 'lucide-react';

const badges = [
  { label: 'CBSE Affiliated', icon: ShieldCheck, color: 'text-[#2563EB] bg-blue-50' },
  { label: 'Experienced Faculty', icon: GraduationCap, color: 'text-amber-600 bg-amber-50' },
  { label: 'Smart Classrooms', icon: Laptop, color: 'text-indigo-600 bg-indigo-50' },
  { label: 'Safe GPS Campus', icon: Bus, color: 'text-emerald-600 bg-emerald-50' },
];

const HeroBadges = () => {
  return (
    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-2 max-w-lg mx-auto lg:mx-0">
      {badges.map((b) => {
        const IconComponent = b.icon;
        return (
          <motion.div
            key={b.label}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-2xs text-[11px] sm:text-xs font-bold text-slate-700 select-none shrink-0"
          >
            <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center ${b.color}`}>
              <IconComponent className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </div>
            <span>{b.label}</span>
          </motion.div>
        );
      })}
    </div>
  );
};

export default HeroBadges;
