import React from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../../utils/cn';

const MobileMenu = ({ isOpen, onToggle, className = '' }) => {
  return (
    <button
      onClick={onToggle}
      type="button"
      className={cn(
        'lg:hidden p-2.5 rounded-xl bg-slate-100/80 text-slate-700 hover:text-[#123458] hover:bg-slate-200/80 transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563EB] cursor-pointer',
        className
      )}
      aria-label={isOpen ? 'Close main menu' : 'Open main menu'}
      aria-expanded={isOpen}
    >
      {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>
  );
};

export default MobileMenu;
