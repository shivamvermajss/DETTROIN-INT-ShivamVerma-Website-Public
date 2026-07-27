import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Compass } from 'lucide-react';
import { scrollToElement } from '../../utils/scrollHelpers';

const HeroButtons = () => {
  const handleExploreClick = (e) => {
    e.preventDefault();
    scrollToElement('quick-highlights', 80);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2 w-full sm:w-auto">
      {/* Primary CTA */}
      <Link to="/admissions" className="w-full sm:w-auto">
        <motion.button
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-base font-bold shadow-lg shadow-[#2563EB]/25 hover:shadow-xl hover:shadow-[#2563EB]/35 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2563EB] cursor-pointer"
        >
          <span>Apply Now</span>
          <ArrowRight className="w-5 h-5 shrink-0" />
        </motion.button>
      </Link>

      {/* Secondary CTA */}
      <a href="#quick-highlights" onClick={handleExploreClick} className="w-full sm:w-auto">
        <motion.button
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white hover:bg-slate-50 text-[#123458] border-2 border-slate-200 hover:border-[#123458] text-base font-bold shadow-xs transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#123458] cursor-pointer"
        >
          <Compass className="w-5 h-5 shrink-0 text-[#2563EB]" />
          <span>Explore Campus</span>
        </motion.button>
      </a>
    </div>
  );
};

export default HeroButtons;
