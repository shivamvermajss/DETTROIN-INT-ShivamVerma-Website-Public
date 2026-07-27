import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../utils/cn';

const CTAButton = ({ className = '', onClick }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleApplyClick = (e) => {
    if (onClick) onClick();
    if (location.pathname !== '/') {
      e?.preventDefault();
      navigate('/#apply');
    }
  };

  return (
    <ScrollLink
      to="apply"
      spy={true}
      smooth={true}
      offset={-80}
      duration={500}
      onClick={handleApplyClick}
      className="inline-block cursor-pointer"
    >
      <motion.button
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className={cn(
          'inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-xs sm:text-sm font-bold tracking-wide shadow-md shadow-[#2563EB]/25 hover:shadow-lg hover:shadow-[#2563EB]/35 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2563EB] cursor-pointer',
          className
        )}
        aria-label="Apply Now for Admission"
      >
        <span>Apply Now</span>
        <ArrowRight className="w-4 h-4 shrink-0" />
      </motion.button>
    </ScrollLink>
  );
};

export default CTAButton;
