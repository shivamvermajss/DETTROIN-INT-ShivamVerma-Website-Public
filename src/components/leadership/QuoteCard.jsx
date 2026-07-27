import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { leadershipData } from './LeadershipData';

const quoteVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/**
 * QuoteCard Component
 * Displays a prominent, styled institutional quote card with large quotation icons.
 */
const QuoteCard = () => {
  const { featuredQuote } = leadershipData;

  return (
    <motion.div
      variants={quoteVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="my-16 lg:my-20 relative rounded-3xl bg-gradient-to-br from-blue-50/80 via-white to-amber-50/50 backdrop-blur-md border border-slate-200/80 p-8 sm:p-12 lg:p-14 shadow-sm text-center overflow-hidden"
    >
      {/* Background Decorative Ambient Watermark Quote Icon */}
      <Quote 
        className="w-32 h-32 text-blue-600/5 absolute -top-4 -left-4 pointer-events-none -scale-x-100" 
        aria-hidden="true"
      />
      <Quote 
        className="w-32 h-32 text-amber-600/5 absolute -bottom-4 -right-4 pointer-events-none" 
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="w-12 h-12 rounded-full bg-blue-100/80 text-blue-700 mx-auto flex items-center justify-center mb-6 shadow-sm">
          <Quote className="w-6 h-6" aria-hidden="true" />
        </div>

        <blockquote className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#123458] leading-tight mb-6 tracking-tight">
          "{featuredQuote.text}"
        </blockquote>

        <figcaption className="text-sm sm:text-base font-bold text-slate-900">
          {featuredQuote.author}
          <span className="block text-xs font-semibold text-slate-500 font-normal mt-0.5">
            {featuredQuote.role}
          </span>
        </figcaption>
      </div>
    </motion.div>
  );
};

export default QuoteCard;
