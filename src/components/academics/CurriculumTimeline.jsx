import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { academicData } from './AcademicData';

const timelineContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/**
 * CurriculumTimeline Component
 * Visually displays the student's educational journey progression from Pre-Primary through Senior Secondary.
 */
const CurriculumTimeline = () => {
  const { timeline } = academicData;

  return (
    <div className="my-16 lg:my-20">
      <div className="text-center mb-10">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#123458] tracking-tight mb-2">
          Educational Journey Progression
        </h3>
        <p className="text-sm sm:text-base text-slate-600">
          A seamless academic path guiding students from early childhood to higher education.
        </p>
      </div>

      <motion.div
        variants={timelineContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="relative bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-sm"
      >
        {/* Desktop Horizontal Connecting Line */}
        <div 
          className="hidden lg:block absolute top-1/2 left-12 right-12 h-1 bg-gradient-to-r from-rose-200 via-blue-200 to-purple-300 -translate-y-6 -z-0 rounded-full" 
          aria-hidden="true"
        />

        {/* Timeline Nodes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 relative z-10">
          {timeline.map((item, idx) => {
            const { step, stage, range, icon: Icon } = item;
            const isLast = idx === timeline.length - 1;

            return (
              <motion.div
                key={step}
                variants={stepVariants}
                className="flex flex-col items-center text-center group"
              >
                {/* Step Node Circle */}
                <div className="relative mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-white border-2 border-blue-600/30 shadow-md group-hover:border-blue-600 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 flex items-center justify-center relative bg-gradient-to-b from-white to-blue-50/30">
                    <Icon className="w-6 h-6 text-[#123458] group-hover:text-blue-600 transition-colors" aria-hidden="true" />
                    
                    {/* Step Badge Pill */}
                    <span className="absolute -top-2.5 -right-2 px-2 py-0.5 rounded-full bg-[#123458] text-white text-[10px] font-bold tracking-wider shadow-sm">
                      {step}
                    </span>
                  </div>
                </div>

                {/* Stage Info */}
                <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {stage}
                </h4>
                <p className="text-xs font-semibold text-slate-500 mt-1">
                  {range}
                </p>

                {/* Mobile / Tablet Connector Icon */}
                {!isLast && (
                  <div className="lg:hidden mt-4 text-slate-300">
                    <ChevronRight className="w-5 h-5 rotate-90 md:rotate-0" aria-hidden="true" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default CurriculumTimeline;
