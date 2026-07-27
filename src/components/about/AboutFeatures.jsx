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
 * Renders 6 key feature cards for the merged About + Why Choose Us section.
 */
const AboutFeatures = () => {
  const { featureCards } = aboutData;

  return (
    <div className="my-6">
      <h3 className="text-lg font-extrabold text-[#123458] mb-4">
        Why Parents Trust Pavna School
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {featureCards.map((item) => {
          const { id, title, description, icon: Icon, color } = item;
          return (
            <motion.div
              key={id}
              variants={itemVariants}
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-300 flex items-start gap-3.5 group cursor-default"
            >
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${color} group-hover:scale-110 group-hover:bg-[#123458] group-hover:text-white transition-all duration-300`}>
                <Icon className="w-4 h-4" aria-hidden="true" />
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#123458] transition-colors">
                  {title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
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
