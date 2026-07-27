import React from 'react';
import { motion } from 'framer-motion';
import { aboutData } from './AboutData';

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
  }
};

/**
 * SchoolValues Component
 * Displays a responsive grid of 6 core institutional values.
 */
const SchoolValues = () => {
  const { values } = aboutData;

  return (
    <div className="my-8">
      <h3 className="text-xl font-extrabold text-[#123458] mb-4">
        Our Core Values
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {values.map((val) => {
          const { id, title, description, icon: Icon, color } = val;
          return (
            <motion.div
              key={id}
              variants={itemVariants}
              className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/60 hover:bg-white hover:shadow-sm hover:border-slate-300 transition-all duration-200 flex items-start gap-3 group"
            >
              <div className={`p-2 rounded-lg ${color} shrink-0 mt-0.5 group-hover:scale-105 transition-transform duration-200`}>
                <Icon className="w-4 h-4" aria-hidden="true" />
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#123458] transition-colors">
                  {title}
                </h4>
                <p className="text-xs text-slate-600 leading-snug mt-0.5">
                  {description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SchoolValues;
