import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

/**
 * FAQItem Component
 * Single expandable accordion item component with Framer Motion height animation and chevron indicator.
 */
const FAQItem = ({ item, isOpen, onToggle }) => {
  const { id, category, question, answer } = item;
  const contentId = `faq-accordion-content-${id}`;
  const buttonId = `faq-accordion-button-${id}`;

  return (
    <div className="rounded-2xl bg-white border border-slate-200/80 shadow-xs overflow-hidden transition-all duration-300 hover:border-blue-200">
      <button
        id={buttonId}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={contentId}
        className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 font-bold text-slate-900 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-inset cursor-pointer select-none"
      >
        <div>
          <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 mb-2 border border-blue-100/80">
            {category}
          </span>
          <h3 className="text-base sm:text-lg font-bold text-[#123458] leading-snug">
            {question}
          </h3>
        </div>

        <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-blue-600 text-white rotate-180' : 'text-slate-500'}`}>
          <ChevronDown className="w-5 h-5" aria-hidden="true" />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={contentId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-5 pb-6 sm:px-6 pt-0 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100/80 mt-1">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQItem;
