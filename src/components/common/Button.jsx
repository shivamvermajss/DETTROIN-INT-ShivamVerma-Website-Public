import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable Button Component following Design System specifications
 * Variants: primary, secondary, outline, ghost, accent
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const variantStyles = {
    primary: 'bg-[#123458] hover:bg-[#0b223c] text-white shadow-lg shadow-[#123458]/20 focus:ring-[#123458]',
    secondary: 'bg-[#2563EB] hover:bg-[#1d4ed8] text-white shadow-md shadow-[#2563EB]/25 focus:ring-[#2563EB]',
    accent: 'bg-[#F59E0B] hover:bg-[#d97706] text-slate-900 font-bold shadow-md shadow-[#F59E0B]/25 focus:ring-[#F59E0B]',
    outline: 'border-2 border-[#123458] text-[#123458] hover:bg-[#123458] hover:text-white focus:ring-[#123458]',
    ghost: 'text-[#123458] hover:bg-slate-100 hover:text-[#0b223c] focus:ring-slate-300'
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs font-medium tracking-wide gap-1.5',
    md: 'px-6 py-3 text-sm tracking-wide gap-2',
    lg: 'px-8 py-4 text-base tracking-wide gap-2.5 rounded-3xl'
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </motion.button>
  );
};

export default Button;
