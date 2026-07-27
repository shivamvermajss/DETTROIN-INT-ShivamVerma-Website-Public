import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react'; // Fallback icon

/**
 * StatCard Component
 * Safely handles any icon format without crashing React.
 */
const StatCard = ({ item = {}, cardVariants }) => {
  const { id, number, suffix, title, description, icon, iconGradient } = item;
  const titleId = `stat-title-${id || title || Math.random()}`;

  // Helper to safely render the icon
  const renderIcon = () => {
    if (!icon) return <Award className="w-7 h-7 text-[#123458]" />;

    const iconClasses = "w-7 h-7 text-[#123458] group-hover:text-blue-600 transition-colors duration-300";

    // 1. If icon is already a JSX Element like <Users />
    if (React.isValidElement(icon)) {
      return React.cloneElement(icon, {
        className: `${iconClasses} ${icon.props.className || ''}`,
        'aria-hidden': 'true'
      });
    }

    // 2. If icon is a valid React Component function (e.g. Users)
    if (typeof icon === 'function' || (typeof icon === 'object' && icon.$$typeof)) {
      const IconComponent = icon;
      return <IconComponent className={iconClasses} aria-hidden="true" />;
    }

    // 3. Safe fallback if icon is an object/string that isn't a React component
    return <Award className={iconClasses} aria-hidden="true" />;
  };

  return (
    <motion.div
      variants={cardVariants}
      tabIndex={0}
      role="region"
      aria-labelledby={titleId}
      className="group relative h-full rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 flex flex-col justify-between"
    >
      {/* Top Accent Line */}
      <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/40 transition-all duration-500" />

      <div>
        {/* Icon Header */}
        <div className="flex items-center justify-between mb-6">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${iconGradient || 'from-blue-500 to-indigo-600'} p-0.5 shadow-md shadow-blue-900/10 group-hover:scale-110 transition-transform duration-300`}>
            <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
              {renderIcon()}
            </div>
          </div>
          
          <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors duration-300">
            Key Metric
          </span>
        </div>

        {/* Animated Number */}
        <div className="mb-3">
          <div className="text-4xl sm:text-5xl font-extrabold text-[#123458] tracking-tight flex items-baseline gap-0.5">
            <CountUp
              start={0}
              end={typeof number === 'number' ? number : parseInt(number) || 0}
              duration={2.5}
              separator=","
              suffix={suffix || ''}
              enableScrollSpy
              scrollSpyOnce
            >
              {({ countUpRef }) => (
                <span ref={countUpRef} />
              )}
            </CountUp>
          </div>
        </div>

        {/* Title */}
        <h3 id={titleId} className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#123458] transition-colors duration-200">
          {title || 'Metric'}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed font-normal">
          {description || ''}
        </p>
      </div>

      <span className="sr-only">
        {number}{suffix} - {title}. {description}
      </span>
    </motion.div>
  );
};

export default StatCard;