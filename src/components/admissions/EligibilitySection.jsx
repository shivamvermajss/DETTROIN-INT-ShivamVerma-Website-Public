import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck } from 'lucide-react';
import { admissionData } from './AdmissionData';

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
 * EligibilitySection Component
 * Renders 5 cards detailing age and academic eligibility requirements across grade levels.
 */
const EligibilitySection = () => {
  const { eligibility } = admissionData;

  return (
    <div className="my-16 lg:my-20">
      <div className="text-center mb-8">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#123458] tracking-tight mb-2">
          Admission Eligibility Requirements
        </h3>
        <p className="text-sm sm:text-base text-slate-600">
          Age criteria and academic entry guidelines tailored to every educational stage.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 lg:gap-6"
      >
        {eligibility.map((item) => {
          const { id, category, grades, age, description } = item;
          return (
            <motion.div
              key={id}
              variants={cardVariants}
              tabIndex={0}
              role="region"
              aria-label={`${category} eligibility`}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-200 transition-all duration-300 flex flex-col justify-between group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-[#123458] group-hover:text-white transition-colors duration-300">
                  <UserCheck className="w-5 h-5" aria-hidden="true" />
                </div>

                <h4 className="text-lg font-bold text-[#123458] mb-1">
                  {category}
                </h4>

                <p className="text-xs font-bold text-blue-600 mb-3">
                  {grades}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                  {age}
                </span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default EligibilitySection;
