import React from 'react';
import { cn } from '../../../utils/cn';

/**
 * Reusable Badge Component
 * Variants: primary, secondary, outline, accent, success, warning, danger
 * Sizes: sm, md
 */
const Badge = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  icon: Icon,
  className = '',
  ...props 
}) => {
  const variantStyles = {
    primary: 'bg-[#123458]/10 text-[#123458] border border-[#123458]/20',
    secondary: 'bg-blue-50 text-[#2563EB] border border-blue-100',
    accent: 'bg-amber-50 text-amber-800 border border-amber-200',
    outline: 'bg-transparent text-slate-700 border border-slate-300',
    success: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    warning: 'bg-amber-50 text-amber-700 border border-amber-200',
    danger: 'bg-red-50 text-red-700 border border-red-200'
  };

  const sizeStyles = {
    sm: 'px-2.5 py-0.5 text-[11px] font-bold rounded-full gap-1',
    md: 'px-3.5 py-1 text-xs font-bold rounded-full gap-1.5'
  };

  return (
    <span
      className={cn(
        'inline-flex items-center justify-center font-semibold tracking-wide uppercase shadow-sm',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
      <span>{children}</span>
    </span>
  );
};

export default Badge;
