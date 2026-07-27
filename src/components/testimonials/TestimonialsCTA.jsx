import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Send, Calendar, Phone } from 'lucide-react';
import Button from '../ui/buttons/Button';
import { testimonialsData } from './TestimonialsData';

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
 * TestimonialsCTA Component
 * Section Call to Action encouraging parents to apply for admission or schedule a visit.
 */
const TestimonialsCTA = () => {
  const { cta } = testimonialsData;

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
            aria-label="Apply for admission at Pavna International School"
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
            aria-label="Schedule a campus tour at Pavna School"
          >
            {cta.secondaryText}
          </Button>
        </Link>

        <Link to={cta.outlinePath} className="focus:outline-none">
          <Button
            variant="outline"
            size="lg"
            icon={Phone}
            iconPosition="left"
            aria-label="Contact Pavna School admissions office"
          >
            {cta.outlineText}
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default TestimonialsCTA;
