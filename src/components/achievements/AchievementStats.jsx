import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { achievementData } from './AchievementData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/**
 * AchievementStats Component
 * Displays 4 animated metric cards powered by React CountUp.
 */
const AchievementStats = () => {
  const { stats } = achievementData;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16 lg:mb-20"
    >
      {stats.map((item) => {
        const { id, number, suffix, label, icon: Icon, color } = item;
        const cardTitleId = `stat-card-title-${id}`;

        return (
          <motion.div
            key={id}
            variants={cardVariants}
            tabIndex={0}
            role="region"
            aria-labelledby={cardTitleId}
            className="group relative rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200/80 p-6 sm:p-8 shadow-xs transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 flex flex-col justify-between"
          >
            {/* Subtle Accent Glow */}
            <div 
              className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-transparent via-amber-500/0 to-transparent group-hover:via-amber-500/50 transition-all duration-500" 
              aria-hidden="true"
            />

            <div>
              {/* Header Icon */}
              <div className="flex items-center justify-between mb-5">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} p-0.5 shadow-md shadow-blue-900/10 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#123458] group-hover:text-blue-600 transition-colors duration-300" aria-hidden="true" />
                  </div>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                  Metric
                </span>
              </div>

              {/* Animated CountUp Number */}
              <div className="mb-2">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#123458] tracking-tight flex items-baseline gap-0.5">
                  <CountUp
                    start={0}
                    end={number}
                    duration={2.5}
                    separator=","
                    suffix={suffix}
                    enableScrollSpy
                    scrollSpyOnce
                  >
                    {({ countUpRef }) => (
                      <span ref={countUpRef} />
                    )}
                  </CountUp>
                </div>
              </div>

              {/* Label */}
              <h3 id={cardTitleId} className="text-base font-bold text-slate-800 group-hover:text-[#123458] transition-colors">
                {label}
              </h3>
            </div>

            <span className="sr-only">
              {number}{suffix} {label}
            </span>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default AchievementStats;
