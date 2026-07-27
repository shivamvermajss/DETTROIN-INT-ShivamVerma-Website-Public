import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { Award } from 'lucide-react'; // Fallback icon
import { achievementData } from './AchievementData';

/**
 * Custom Framer Motion Counter
 * Safely replaces react-countup
 */
const AnimatedNumber = ({ end, duration = 2.5 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, end, { 
        duration: duration,
        ease: "easeOut"
      });
      return controls.stop;
    }
  }, [count, end, isInView, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

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
 * Displays 4 animated metric cards powered by Framer Motion.
 */
const AchievementStats = () => {
  const { stats = [] } = achievementData || {};

  if (!stats || stats.length === 0) return null;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16 lg:mb-20"
    >
      {stats.map((item, index) => {
        const { id, number, suffix, label, icon, color } = item;
        const cardTitleId = `stat-card-title-${id || index}`;

        // Helper to safely render the icon
        const renderIcon = () => {
          if (!icon) return <Award className="w-6 h-6 text-[#123458]" />;

          const iconClasses = "w-6 h-6 text-[#123458] group-hover:text-blue-600 transition-colors duration-300";

          if (React.isValidElement(icon)) {
            return React.cloneElement(icon, {
              className: `${iconClasses} ${icon.props.className || ''}`,
              'aria-hidden': 'true'
            });
          }

          if (typeof icon === 'function' || (typeof icon === 'object' && icon.$$typeof)) {
            const IconComponent = icon;
            return <IconComponent className={iconClasses} aria-hidden="true" />;
          }

          return <Award className={iconClasses} aria-hidden="true" />;
        };

        const parsedNumber = typeof number === 'number' ? number : parseInt(number) || 0;

        return (
          <motion.div
            key={id || index}
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
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color || 'from-blue-500 to-indigo-600'} p-0.5 shadow-md shadow-blue-900/10 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                    {renderIcon()}
                  </div>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                  Metric
                </span>
              </div>

              {/* Animated Number */}
              <div className="mb-2">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#123458] tracking-tight flex items-baseline gap-0.5">
                  <AnimatedNumber end={parsedNumber} />
                  {suffix && <span>{suffix}</span>}
                </div>
              </div>

              {/* Label */}
              <h3 id={cardTitleId} className="text-base font-bold text-slate-800 group-hover:text-[#123458] transition-colors">
                {label || 'Statistic'}
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