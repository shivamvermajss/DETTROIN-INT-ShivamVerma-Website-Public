import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../../data/schoolData';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQAccordionSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#2563EB] bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
            <HelpCircle className="w-4 h-4 text-[#2563EB]" />
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight">
            Everything You Need To Know
          </h2>
          <p className="text-base sm:text-lg text-[#6B7280]">
            Get quick answers regarding admissions, board options, boarding, and transport facilities.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={faq.question}
                className="apple-card overflow-hidden border border-slate-200/80"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#111827] hover:text-[#2563EB] transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-[#2563EB] text-white' : 'bg-slate-100 text-slate-500'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-4"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link to="/faq" className="text-sm font-bold text-[#2563EB] hover:underline inline-flex items-center gap-1">
            View All Admission FAQs & Interaction Syllabi →
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FAQAccordionSection;
