import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../utils/cn';
import Container from '../container/Container';

/**
 * Reusable Section Component
 * Background Variants: light, dark, gray, transparent
 * Padding Variants: sm, md, lg, xl
 * Viewport Reveal Animation Wrapper
 */
const Section = ({ 
  children, 
  variant = 'light',
  padding = 'md',
  animate = true,
  className = '',
  containerClassName = '',
  id,
  ...props 
}) => {
  const bgVariants = {
    light: 'bg-white text-slate-900',
    dark: 'bg-[#123458] text-white',
    gray: 'bg-[#F8FAFC] text-slate-900',
    transparent: 'bg-transparent'
  };

  const paddingVariants = {
    none: 'py-0',
    sm: 'py-10 lg:py-14',
    md: 'py-16 lg:py-24',
    lg: 'py-20 lg:py-32',
  };

  const SectionContent = (
    <Container className={containerClassName}>
      {children}
    </Container>
  );

  return (
    <section
      id={id}
      className={cn('relative overflow-hidden', bgVariants[variant], paddingVariants[padding], className)}
      {...props}
    >
      {animate ? (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          {SectionContent}
        </motion.div>
      ) : (
        SectionContent
      )}
    </section>
  );
};

export default Section;
