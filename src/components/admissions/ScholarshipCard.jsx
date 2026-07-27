import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Award, ArrowRight } from 'lucide-react';
import Button from '../ui/buttons/Button';
import { admissionData } from './AdmissionData';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/**
 * ScholarshipCard Component
 * Displays a premium glass card highlighting Pavna Merit & Talent Scholarship opportunities.
 */
const ScholarshipCard = () => {
  const { scholarship } = admissionData;
  const { title, badge, description, benefits, ctaText, ctaLink } = scholarship;

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="my-16 lg:my-20 relative rounded-3xl bg-gradient-to-br from-amber-500/10 via-white to-blue-50/30 backdrop-blur-md border border-amber-200/80 p-8 sm:p-10 lg:p-12 shadow-xl overflow-hidden"
    >
      {/* Background Decorative Ambient Badge Watermark */}
      <Award 
        className="w-48 h-48 text-amber-500/10 absolute -bottom-10 -right-10 pointer-events-none" 
        aria-hidden="true"
      />

      <div className="max-w-3xl relative z-10 text-left">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-200 shadow-xs">
          <Award className="w-4 h-4 text-amber-700" aria-hidden="true" />
          <span>{badge}</span>
        </span>

        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#123458] tracking-tight mb-4 leading-tight">
          {title}
        </h3>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
          {description}
        </p>

        {/* Benefits List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-semibold">
              <div className="w-4 h-4 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 stroke-[3]" aria-hidden="true" />
              </div>
              <span>{benefit}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div>
          <Link to={ctaLink} className="focus:outline-none">
            <Button
              variant="accent"
              size="md"
              icon={ArrowRight}
              iconPosition="right"
              aria-label="Apply for Pavna Merit Scholarship"
            >
              {ctaText}
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ScholarshipCard;
