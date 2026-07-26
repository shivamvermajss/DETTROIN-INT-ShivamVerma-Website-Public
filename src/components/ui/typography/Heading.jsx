import React from 'react';
import { cn } from '../../../utils/cn';

/**
 * Reusable Heading Component with typography scales
 * Levels: displayXL, displayLarge, h1, h2, h3, h4, bodyLarge, body, bodySmall, caption
 */
const Heading = ({ 
  variant = 'h2', 
  as,
  children, 
  className = '', 
  ...props 
}) => {
  const variantMap = {
    displayXL: { tag: 'h1', classes: 'text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none' },
    displayLarge: { tag: 'h1', classes: 'text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight' },
    h1: { tag: 'h1', classes: 'text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug' },
    h2: { tag: 'h2', classes: 'text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight' },
    h3: { tag: 'h3', classes: 'text-xl sm:text-2xl font-bold tracking-snug' },
    h4: { tag: 'h4', classes: 'text-lg sm:text-xl font-bold' },
    bodyLarge: { tag: 'p', classes: 'text-lg sm:text-xl font-normal leading-relaxed text-slate-600' },
    body: { tag: 'p', classes: 'text-base font-normal leading-relaxed text-slate-600' },
    bodySmall: { tag: 'p', classes: 'text-sm font-normal leading-normal text-slate-500' },
    caption: { tag: 'span', classes: 'text-xs font-semibold tracking-wider uppercase text-slate-400' },
  };

  const selected = variantMap[variant] || variantMap.h2;
  const Tag = as || selected.tag;

  return (
    <Tag className={cn(selected.classes, className)} {...props}>
      {children}
    </Tag>
  );
};

export default Heading;
