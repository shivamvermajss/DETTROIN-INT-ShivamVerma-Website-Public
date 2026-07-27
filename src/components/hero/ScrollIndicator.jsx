import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { scrollToElement } from '../../utils/scrollHelpers';

const ScrollIndicator = () => {
  const handleClick = () => {
    scrollToElement('quick-highlights', 80);
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.9 }}
      onClick={handleClick}
      className="hidden sm:flex flex-col items-center justify-center gap-1.5 mx-auto text-slate-400 hover:text-[#2563EB] transition-colors focus:outline-none cursor-pointer py-4"
      aria-label="Scroll down to key highlights"
    >
      <span className="text-[11px] font-bold tracking-widest uppercase">Scroll Down</span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        className="w-7 h-7 rounded-full bg-slate-100/80 border border-slate-200/80 flex items-center justify-center"
      >
        <ChevronDown className="w-4 h-4" />
      </motion.div>
    </motion.button>
  );
};

export default ScrollIndicator;
