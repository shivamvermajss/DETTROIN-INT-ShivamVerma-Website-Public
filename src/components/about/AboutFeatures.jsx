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
 * AboutFeatures Component
 * Renders 4 key institutional highlights (Smart Classrooms, Faculty, Infrastructure, Co-curricular).
 */
const AboutFeatures = () => {
  const { highlights } = aboutData;

  return (
    <div className="my-8">
      <h3 className="text-xl font-extrabold text-[#123458] mb-4">
        Key School Highlights
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {highlights.map((item) => {
          const { id, title, description, icon: Icon } = item;
          return (
            <motion.div
              key={id}
              variants={itemVariants}
              className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-200 transition-all duration-200 flex items-start gap-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-[#123458] group-hover:text-white transition-colors duration-300">
                <Icon className="w-5 h-5" aria-hidden="true" />
              </div>

              <div>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-[#123458] transition-colors">
                  {title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
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

export default AboutFeatures;
