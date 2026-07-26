import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { cn } from '../../../utils/cn';

/**
 * Reusable Button Component following Design System specifications
 * Supports Variants, Sizes, Loading, Icons, and Accessibility
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  isDisabled = false,
  icon: Icon,
  iconPosition = 'right',
  className = '',
  onClick,
  type = 'button',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none';

  const variantStyles = {
    primary: 'bg-[#123458] hover:bg-[#0b223c] text-white shadow-md hover:shadow-lg shadow-[#123458]/20 focus:ring-[#123458] rounded-2xl',
    secondary: 'bg-[#2563EB] hover:bg-[#1d4ed8] text-white shadow-md hover:shadow-lg shadow-[#2563EB]/25 focus:ring-[#2563EB] rounded-2xl',
    accent: 'bg-[#F59E0B] hover:bg-[#d97706] text-slate-900 font-bold shadow-md hover:shadow-lg shadow-[#F59E0B]/25 focus:ring-[#F59E0B] rounded-2xl',
    outline: 'border-2 border-[#123458] text-[#123458] hover:bg-[#123458] hover:text-white focus:ring-[#123458] rounded-2xl',
    ghost: 'text-[#123458] hover:bg-slate-100 hover:text-[#0b223c] focus:ring-slate-300 rounded-xl',
    text: 'text-[#2563EB] hover:text-[#1d4ed8] underline-offset-4 hover:underline focus:ring-blue-300 p-0 shadow-none'
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-6 py-3 text-sm gap-2',
    lg: 'px-8 py-4 text-base gap-2.5 rounded-3xl',
    xl: 'px-10 py-5 text-lg gap-3 rounded-3xl font-extrabold'
  };

  return (
    <motion.button
      whileHover={!isDisabled && !isLoading ? { y: -2 } : {}}
      whileTap={!isDisabled && !isLoading ? { scale: 0.97 } : {}}
      type={type}
      onClick={onClick}
      disabled={isDisabled || isLoading}
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin shrink-0" />
      ) : (
        <>
          {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
          <span>{children}</span>
          {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
        </>
      )}
    </motion.button>
  );
};

export default Button;
