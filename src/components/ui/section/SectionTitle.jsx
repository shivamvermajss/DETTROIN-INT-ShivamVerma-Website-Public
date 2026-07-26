import React from 'react';
import { cn } from '../../../utils/cn';
import Badge from '../badge/Badge';
import Heading from '../typography/Heading';

/**
 * Reusable SectionTitle Component
 * Includes Badge, Title, Description, Alignment (left, center, right)
 */
const SectionTitle = ({ 
  badge, 
  title, 
  description, 
  align = 'center',
  dark = false,
  className = '',
  badgeVariant = 'secondary',
  ...props 
}) => {
  const alignStyles = {
    left: 'text-left items-start',
    center: 'text-center items-center max-w-3xl mx-auto',
    right: 'text-right items-end ml-auto max-w-3xl'
  };

  return (
    <div className={cn('flex flex-col space-y-4 mb-12 sm:mb-16', alignStyles[align], className)} {...props}>
      {badge && (
        <Badge variant={dark ? 'accent' : badgeVariant}>
          {badge}
        </Badge>
      )}

      {title && (
        <Heading 
          variant="h1" 
          className={cn(dark ? 'text-white' : 'text-[#111827]')}
        >
          {title}
        </Heading>
      )}

      {description && (
        <Heading 
          variant="bodyLarge" 
          className={cn(dark ? 'text-slate-300' : 'text-[#6B7280]', 'max-w-2xl')}
        >
          {description}
        </Heading>
      )}
    </div>
  );
};

export default SectionTitle;
