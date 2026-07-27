import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Send, Calendar, Download } from 'lucide-react';
import Button from '../ui/buttons/Button';
import { faqData } from './FAQData';

const ctaVariants = {
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
 * FAQCTA Component
 * Section Call to Action encouraging online registration, campus tour booking, or brochure download.
 */
const FAQCTA = () => {
  const { cta } = faqData;

  return (
    <motion.div
      variants={ctaVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-30px' }}
      className="text-center bg-slate-50 border border-slate-200/80 rounded-3xl p-8 sm:p-10 lg:p-12"
    >
      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#123458] mb-3">
        {cta.heading}
      </h3>
      <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-6 leading-relaxed">
        {cta.description}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link to={cta.primaryPath} className="focus:outline-none">
          <Button
            variant="primary"
            size="lg"
            icon={Send}
            iconPosition="left"
            aria-label="Apply online now for Pavna School admission"
          >
            {cta.primaryText}
          </Button>
        </Link>

        <Link to={cta.secondaryPath} className="focus:outline-none">
          <Button
            variant="secondary"
            size="lg"
            icon={Calendar}
            iconPosition="left"
            aria-label="Book a campus tour at Pavna School"
          >
            {cta.secondaryText}
          </Button>
        </Link>

        <Link to={cta.primaryPath} className="focus:outline-none">
          <Button
            variant="outline"
            size="lg"
            icon={Download}
            iconPosition="left"
            aria-label="Download Pavna School admission brochure PDF"
          >
            {cta.brochureText}
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default FAQCTA;
