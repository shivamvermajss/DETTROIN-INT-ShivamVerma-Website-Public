import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../utils/cn';

/**
 * Reusable Card Component
 * Variants: default, glass, elevated, bordered
 * Radius: sm, md, lg, xl, 2xl
 * Padding: none, sm, md, lg
 */
const Card = ({
  children,
  variant = 'default',
  radius = '2xl',
  padding = 'md',
  hover = true,
  className = '',
  ...props
}) => {
  const variantStyles = {
    default: 'bg-white border border-slate-200/80 shadow-sm',
    glass: 'bg-white/80 backdrop-blur-xl border border-white/80 shadow-md',
    elevated: 'bg-white shadow-xl shadow-slate-200/60 border border-slate-100',
    bordered: 'bg-white border-2 border-slate-200 shadow-none'
  };

  const radiusStyles = {
    sm: 'rounded-lg',
    md: 'rounded-xl',
    lg: 'rounded-2xl',
    xl: 'rounded-[20px]',
    '2xl': 'rounded-3xl'
  };

  const paddingStyles = {
    none: 'p-0',
    sm: 'p-4 sm:p-5',
    md: 'p-6 sm:p-8',
    lg: 'p-8 sm:p-10'
  };

  return (
    <motion.div
      whileHover={hover ? { y: -4, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } } : {}}
      className={cn(
        'transition-all duration-300 relative overflow-hidden',
        variantStyles[variant],
        radiusStyles[radius],
        paddingStyles[padding],
        hover && 'hover:shadow-xl hover:border-[#2563EB]/30',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
