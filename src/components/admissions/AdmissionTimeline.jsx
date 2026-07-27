import React from 'react';
import { motion } from 'framer-motion';
import AdmissionStepCard from './AdmissionStepCard';
import { admissionData } from './AdmissionData';

const timelineContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 25 },
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
 * AdmissionTimeline Component
 * Displays the 6-step admission process in a responsive grid.
 */
const AdmissionTimeline = () => {
  const { timeline } = admissionData;

  return (
    <div className="mb-16 lg:mb-20">
      <div className="text-center mb-8">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#123458] tracking-tight mb-2">
          6-Step Admission Journey
        </h3>
        <p className="text-sm sm:text-base text-slate-600">
          A seamless, transparent pathway to enrolling your child at Pavna International School.
        </p>
      </div>

      <motion.div
        variants={timelineContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5 lg:gap-6"
      >
        {timeline.map((stepItem) => (
          <AdmissionStepCard
            key={stepItem.step}
            stepItem={stepItem}
            stepVariants={stepVariants}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default AdmissionTimeline;
