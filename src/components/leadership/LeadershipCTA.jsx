import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';
import Button from '../ui/buttons/Button';
import { leadershipData } from './LeadershipData';

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
 * LeadershipCTA Component
 * Renders call-to-action buttons for exploring leadership background or contacting school administration.
 */
const LeadershipCTA = () => {
  const { cta } = leadershipData;

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
            icon={ArrowRight}
            iconPosition="right"
            aria-label="Learn more about Pavna School leadership team"
          >
            {cta.primaryText}
          </Button>
        </Link>

        <Link to={cta.secondaryPath} className="focus:outline-none">
          <Button
            variant="outline"
            size="lg"
            icon={Mail}
            iconPosition="left"
            aria-label="Contact Pavna School administration"
          >
            {cta.secondaryText}
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default LeadershipCTA;
