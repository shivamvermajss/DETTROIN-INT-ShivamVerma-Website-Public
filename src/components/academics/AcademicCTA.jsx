import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText } from 'lucide-react';
import Button from '../ui/buttons/Button';
import { academicData } from './AcademicData';

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
 * AcademicCTA Component
 * Renders primary and secondary call-to-action buttons for Curriculum exploration and Admissions.
 */
const AcademicCTA = () => {
  const { cta } = academicData;

  return (
    <motion.div
      variants={ctaVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-30px' }}
      className="flex flex-wrap items-center justify-center gap-4 pt-4"
    >
      <Link to={cta.primaryPath} className="focus:outline-none">
        <Button
          variant="primary"
          size="lg"
          icon={ArrowRight}
          iconPosition="right"
          aria-label="Explore Pavna School complete curriculum details"
        >
          {cta.primaryText}
        </Button>
      </Link>

      <Link to={cta.secondaryPath} className="focus:outline-none">
        <Button
          variant="outline"
          size="lg"
          icon={FileText}
          iconPosition="left"
          aria-label="Learn about Pavna School admission process"
        >
          {cta.secondaryText}
        </Button>
      </Link>
    </motion.div>
  );
};

export default AcademicCTA;
