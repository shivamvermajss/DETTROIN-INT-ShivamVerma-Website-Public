import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { ArrowRight, Compass } from 'lucide-react';

const HeroButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2 w-full sm:w-auto">
      {/* Primary CTA: Apply Now */}
      <ScrollLink
        to="apply"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        className="w-full sm:w-auto"
      >
        <motion.button
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-base font-bold shadow-lg shadow-[#2563EB]/25 hover:shadow-xl hover:shadow-[#2563EB]/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2563EB] cursor-pointer"
          aria-label="Apply Now for Admission"
        >
          <span>Apply Now</span>
          <ArrowRight className="w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
        </motion.button>
      </ScrollLink>

      {/* Secondary CTA: Explore Campus */}
      <ScrollLink
        to="about"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        className="w-full sm:w-auto"
      >
        <motion.button
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white hover:bg-slate-50 text-[#123458] border-2 border-slate-200 hover:border-[#123458] text-base font-bold shadow-xs hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#123458] cursor-pointer"
          aria-label="Explore Campus and School Details"
        >
          <Compass className="w-5 h-5 shrink-0 text-[#2563EB] group-hover:rotate-45 transition-transform duration-300" />
          <span>Explore Campus</span>
        </motion.button>
      </ScrollLink>
    </div>
  );
};

export default HeroButtons;
