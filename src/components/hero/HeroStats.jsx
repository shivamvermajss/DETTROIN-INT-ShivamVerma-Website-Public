import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Trophy, Bus } from 'lucide-react';

const floatingStats = [
  {
    id: 'legacy',
    icon: Award,
    title: '25+ Years',
    sub: 'Academic Excellence (Est. 1998)',
    position: 'top-6 left-6',
    color: 'text-amber-500 bg-amber-50',
    delay: 0.6
  },
  {
    id: 'students',
    icon: Users,
    title: '2000+ Students',
    sub: 'Nurtured Leaders & Innovators',
    position: 'bottom-20 right-6',
    color: 'text-[#2563EB] bg-blue-50',
    delay: 0.7
  },
  {
    id: 'results',
    icon: Trophy,
    title: '100% CBSE Pass',
    sub: 'Consistent Board Exam Rankers',
    position: 'bottom-6 left-6',
    color: 'text-emerald-600 bg-emerald-50',
    delay: 0.8
  }
];

const HeroStats = () => {
  return (
    <>
      {floatingStats.map((stat) => {
        const IconComponent = stat.icon;
        return (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: stat.delay, ease: [0.16, 1, 0.3, 1] }}
            className={`hidden sm:flex absolute ${stat.position} glass-card p-3.5 sm:p-4 rounded-2xl shadow-xl border border-white/80 items-center gap-3 max-w-[220px] pointer-events-none select-none z-20`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-xs ${stat.color}`}>
              <IconComponent className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-extrabold text-[#123458] leading-tight">{stat.title}</p>
              <p className="text-[10px] font-semibold text-slate-500 leading-tight mt-0.5">{stat.sub}</p>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

export default HeroStats;
