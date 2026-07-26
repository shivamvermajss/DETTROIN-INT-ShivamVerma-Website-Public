import React from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../common/SEOHead';
import { slideUp } from '../../utils/animationHelpers';

/**
 * Reusable PageWrapper Component
 * Handles SEO Helmet, Framer Motion page entrance transition (subtle fade/slide under 0.5s)
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
      className={className}
    >
      <SEOHead title={title} description={description} />
      {children}
    </motion.div>
  );
};

export default PageWrapper;
