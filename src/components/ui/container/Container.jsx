import React from 'react';
import { cn } from '../../../utils/cn';

/**
 * Reusable Container Component
 * Responsive, Centered, Max Width with consistent padding
 */
const Container = ({ 
  children, 
  className = '', 
  clean = false,
  maxWidth = 'max-w-7xl',
  ...props 
}) => {
  return (
    <div
      className={cn(
        'w-full mx-auto',
        !clean && 'px-4 sm:px-6 lg:px-8',
        maxWidth,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
