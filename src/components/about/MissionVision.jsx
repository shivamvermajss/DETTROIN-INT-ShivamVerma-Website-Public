import React from 'react';
import { motion } from 'framer-motion';
import { aboutData } from './AboutData';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }
};

/**
 * MissionVision Component
 * Renders premium side-by-side cards for Mission and Vision statements.
 */
const MissionVision = () => {
  const { missionVision } = aboutData;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 my-8">
      {missionVision.map((item) => {
        const { id, title, description, icon: Icon, gradient } = item;
        return (
          <motion.div
            key={id}
            variants={itemVariants}
            className="group relative p-5 sm:p-6 rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} p-0.5 shadow-sm shrink-0`}>
                  <div className="w-full h-full bg-white rounded-[9px] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#123458] group-hover:scale-110 transition-transform duration-200" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#123458]">
                  {title}
                </h3>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default MissionVision;
