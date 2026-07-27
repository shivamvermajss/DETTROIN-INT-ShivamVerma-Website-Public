import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Trophy } from 'lucide-react';

const floatingStats = [
  {
    id: 'legacy',
    icon: Award,
    title: '25+ Years',
    sub: 'Academic Excellence',
    position: 'top-5 left-5 sm:top-6 sm:left-6',
    color: 'text-amber-600 bg-amber-50/90 border border-amber-100',
    delay: 0.6
  },
  {
    id: 'results',
    icon: Trophy,
    title: '100% CBSE Pass',
    sub: 'Board Rankers',
    position: 'bottom-5 left-5 sm:bottom-6 sm:left-6',
    color: 'text-emerald-600 bg-emerald-50/90 border border-emerald-100',
    delay: 0.7
  },
  {
    id: 'students',
    icon: Users,
    title: '2000+ Students',
    sub: 'Future Leaders',
    position: 'bottom-5 right-5 sm:bottom-6 sm:right-6',
    color: 'text-[#2563EB] bg-blue-50/90 border border-blue-100',
    delay: 0.8
  }
];

const HeroStats = () => {
  return (
    <>
      {/* Desktop & Tablet Floating Cards (Top-Left, Bottom-Left, Bottom-Right) */}
      {floatingStats.map((stat, idx) => {
        const IconComponent = stat.icon;
        return (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, scale: 0.85, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
            transition={{
              opacity: { duration: 0.5, delay: stat.delay },
              scale: { duration: 0.5, delay: stat.delay },
              y: {
                duration: 3.5 + idx * 0.4,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
                delay: stat.delay,
              },
            }}
            className={`hidden sm:flex absolute ${stat.position} bg-white/95 backdrop-blur-xl p-3 sm:p-3.5 lg:p-4 rounded-2xl shadow-xl hover:shadow-2xl border border-white/80 hover:-translate-y-1 transition-all duration-300 items-center gap-3 w-auto max-w-[200px] sm:max-w-[215px] lg:max-w-[230px] pointer-events-auto select-none z-20 cursor-default group/card`}
          >
            <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 shadow-xs group-hover/card:scale-105 transition-transform duration-300 ${stat.color}`}>
              <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <p className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight leading-tight truncate">{stat.title}</p>
              <p className="text-[10px] sm:text-[11px] font-medium text-slate-600 leading-tight mt-0.5 truncate">{stat.sub}</p>
            </div>
          </motion.div>
        );
      })}

      {/* Mobile Stacked Glassmorphism Micro Cards (320px - 639px) */}
      <div className="sm:hidden absolute inset-x-3 bottom-3 flex flex-col gap-1.5 z-20">
        {floatingStats.map((stat) => {
          const IconComponent = stat.icon;
          return (
            <div
              key={`mobile-${stat.id}`}
              className="bg-white/95 backdrop-blur-xl p-2.5 rounded-xl shadow-lg border border-white/80 flex items-center gap-2.5"
            >
              <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${stat.color}`}>
                <IconComponent className="w-3.5 h-3.5" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-grow flex items-center justify-between gap-2">
                <p className="text-xs font-bold text-slate-900 truncate">{stat.title}</p>
                <p className="text-[10px] font-medium text-slate-600 truncate">{stat.sub}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HeroStats;
