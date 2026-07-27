import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, HelpCircle } from 'lucide-react';
import Button from '../ui/buttons/Button';
import { admissionData } from './AdmissionData';

/**
 * AdmissionFAQPreview Component
 * Renders 4 expandable FAQ accordions addressing key parent questions with smooth animations.
 */
const AdmissionFAQPreview = () => {
  const { faqs } = admissionData;
  const [openId, setOpenId] = useState(faqs[0]?.id || null);

  const toggleAccordion = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="my-16 lg:my-20 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-3">
          <HelpCircle className="w-5 h-5" aria-hidden="true" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#123458] tracking-tight mb-2">
          Frequently Asked Questions
        </h3>
        <p className="text-sm sm:text-base text-slate-600">
          Quick answers to common questions about admission timelines, criteria, and transportation.
        </p>
      </div>

      {/* Accordion Container */}
      <div className="space-y-4 mb-8 text-left">
        {faqs.map((faq) => {
          const { id, question, answer } = faq;
          const isOpen = openId === id;
          const contentId = `faq-content-${id}`;
          const buttonId = `faq-button-${id}`;

          return (
            <div
              key={id}
              className="rounded-2xl bg-white border border-slate-200/80 shadow-xs overflow-hidden transition-all duration-200"
            >
              <button
                id={buttonId}
                onClick={() => toggleAccordion(id)}
                aria-expanded={isOpen}
                aria-controls={contentId}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-inset cursor-pointer"
              >
                <span className="text-base sm:text-lg text-[#123458]">
                  {question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-blue-600' : ''
                  }`}
                  aria-hidden="true"
                />
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
        })}
      </div>

      {/* View All FAQs Action */}
      <div className="text-center">
        <Link to="/cbse-policies" className="focus:outline-none">
          <Button
            variant="outline"
            size="md"
            icon={ArrowRight}
            iconPosition="right"
            aria-label="View all admission FAQs and policy documents"
          >
            View All FAQs & Policies
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AdmissionFAQPreview;
