import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '../../../utils/cn';

/**
 * Reusable Loader Component
 * Simple, elegant, minimal spinner
 */
const Loader = ({ size = 'md', className = '', label }) => {
  const sizeMap = {
    sm: 'w-5 h-5',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={cn('flex flex-col items-center justify-center p-6 space-y-3', className)}>
      <Loader2 className={cn('animate-spin text-[#2563EB]', sizeMap[size])} />
      {label && <p className="text-xs font-semibold text-slate-500 tracking-wider uppercase">{label}</p>}
    </div>
  );
};

export default Loader;
