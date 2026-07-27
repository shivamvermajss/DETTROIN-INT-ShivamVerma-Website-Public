import React from 'react';
import { motion } from 'framer-motion';
import { admissionData } from './AdmissionData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/**
 * RequiredDocuments Component
 * Displays 6 essential documents required for student admission verification.
 */
const RequiredDocuments = () => {
  const { documents } = admissionData;

  return (
    <div className="my-16 lg:my-20">
      <div className="text-center mb-8">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#123458] tracking-tight mb-2">
          Required Documents Checklist
        </h3>
        <p className="text-sm sm:text-base text-slate-600">
          Essential paperwork required during formal document verification.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
      >
        {documents.map((doc) => {
          const { id, title, description, icon: Icon } = doc;
          return (
            <motion.div
              key={id}
              variants={itemVariants}
              tabIndex={0}
              role="region"
              aria-label={title}
              className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-200 transition-all duration-300 flex items-start gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-[#123458] group-hover:text-white transition-colors duration-300">
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
      </motion.div>
    </div>
  );
};

export default RequiredDocuments;
