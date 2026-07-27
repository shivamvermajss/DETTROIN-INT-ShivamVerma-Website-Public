import React from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../common/SEOHead';
import { slideUp } from '../../utils/animationHelpers';

/**
 * Reusable PageWrapper Component
 * Handles SEO Helmet, skip-to-content accessibility link, main landmark tag, and subtle Framer Motion page entrance transition.
 */
const PageWrapper = ({ 
  children, 
  title, 
  description,
  className = ''
}) => {
  return (
    <motion.div
      variants={slideUp}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`overflow-x-hidden min-h-screen ${className}`}
    >
      <SEOHead title={title} description={description} />
      
      {/* Skip to Main Content Link for Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[#123458] focus:text-white focus:font-bold focus:rounded-xl focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
      >
        Skip to main content
      </a>

      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        {children}
      </main>
    </motion.div>
  );
};

export default PageWrapper;
