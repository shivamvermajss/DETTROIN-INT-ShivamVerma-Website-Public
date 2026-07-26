import React from 'react';
import * as LucideIcons from 'lucide-react';

/**
 * Standardized Icon Wrapper Component using Lucide React
 */
const Icon = ({ 
  name, 
  size = 20, 
  color = 'currentColor', 
  strokeWidth = 2, 
  className = '',
  ...props 
}) => {
  const LucideIcon = LucideIcons[name] || LucideIcons.Sparkles;

  return (
    <LucideIcon
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={`shrink-0 ${className}`}
      {...props}
    />
  );
};

export default Icon;
