import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, ShieldCheck } from 'lucide-react';
import CTAButton from './CTAButton';
import { SCHOOL_INFO } from '../../constants/siteConstants';
import { cn } from '../../utils/cn';

const drawerItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Academics', path: '/academics' },
  { label: 'Facilities', path: '/infrastructure' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Contact', path: '/contact' },
];

const MobileDrawer = ({ isOpen, onClose }) => {
  const location = useLocation();

  // Close drawer on route change
  useEffect(() => {
    if (isOpen) onClose();
  }, [location.pathname]);

  // Handle Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 lg:hidden"
            aria-hidden="true"
          />

          {/* Slide-out Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 lg:hidden flex flex-col shadow-2xl overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation drawer"
          >
            {/* Drawer Header */}
            <div className="p-5 flex items-center justify-between border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#123458] text-white flex items-center justify-center font-extrabold text-lg">
                  P
                </div>
                <div>
                  <span className="font-extrabold text-base text-[#123458] block leading-none">PAVNA</span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">International School</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2.5 rounded-xl bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Sub-header Banner */}
            <div className="px-5 py-3 bg-blue-50/70 border-b border-blue-100 flex items-center gap-2 text-xs font-semibold text-[#123458]">
              <ShieldCheck className="w-4 h-4 text-[#2563EB] shrink-0" />
              <span>Admissions Open Session 2026-27</span>
            </div>

            {/* Navigation Links List */}
            <nav className="p-5 flex-grow space-y-1.5" aria-label="Mobile Navigation">
              {drawerItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  onClick={onClose}
                  className={({ isActive }) =>
                    cn(
                      'block px-4 py-3 rounded-2xl text-base font-bold transition-all duration-200',
                      isActive
                        ? 'bg-[#123458] text-white shadow-md'
                        : 'text-slate-800 hover:bg-slate-100 hover:text-[#123458]'
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Drawer Footer & Action Buttons */}
            <div className="p-5 border-t border-slate-100 bg-slate-50 space-y-4">
              <CTAButton className="w-full text-center justify-center py-3.5" onClick={onClose} />
              
              <a
                href={`tel:${SCHOOL_INFO.campuses[0].phone}`}
                className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:text-[#123458] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#2563EB]" />
                <span>Helpline: {SCHOOL_INFO.campuses[0].phone}</span>
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileDrawer;
