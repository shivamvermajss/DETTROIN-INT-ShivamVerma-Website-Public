import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * ScrollProgressBar Component
 * Fixed 3.5px height brand blue scroll progress indicator at the very top of the viewport.
 */
const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3.5px] bg-gradient-to-r from-[#2563EB] via-blue-500 to-indigo-600 origin-left z-[60] pointer-events-none shadow-xs shadow-blue-500/50"
      aria-hidden="true"
    />
  );
};

export default ScrollProgressBar;
