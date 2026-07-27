import React from 'react';
import { motion } from 'framer-motion';

/**
 * AdmissionStepCard Component
 * Displays a single step in the admission timeline with step number badge, icon, title, and description.
 */
const AdmissionStepCard = ({ stepItem, stepVariants }) => {
  const { step, title, description, icon: Icon } = stepItem;
  const titleId = `admission-step-${step}`;

  return (
    <motion.div
      variants={stepVariants}
      tabIndex={0}
      role="region"
      aria-labelledby={titleId}
      className="group relative h-full rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200/80 p-6 shadow-xs transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 flex flex-col justify-between"
    >
      {/* Top Border Accent Glow */}
      <div 
        className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/40 transition-all duration-500" 
        aria-hidden="true"
      />

      <div>
        {/* Step Badge & Icon Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100 group-hover:bg-[#123458] group-hover:text-white transition-colors duration-300 shadow-sm">
            <Icon className="w-6 h-6" aria-hidden="true" />
          </div>

          <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-[#123458] text-white shadow-xs">
            Step {step}
          </span>
        </div>

        {/* Step Title */}
        <h3 id={titleId} className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#123458] transition-colors duration-200">
          {title}
        </h3>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          {description}
        </p>
      </div>

      <span className="sr-only">
        Step {step}: {title}. {description}
      </span>
    </motion.div>
  );
};

export default AdmissionStepCard;
