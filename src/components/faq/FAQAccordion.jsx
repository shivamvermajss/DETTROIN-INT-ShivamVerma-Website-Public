import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SearchX, RotateCcw } from 'lucide-react';
import Button from '../ui/buttons/Button';
import FAQItem from './FAQItem';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

/**
 * FAQAccordion Component
 * Renders filtered FAQ accordion list allowing ONLY ONE accordion item open at a time, or an empty search state.
 */
const FAQAccordion = ({ faqs, onResetFilters }) => {
  const [openId, setOpenId] = useState(faqs[0]?.id || null);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  if (faqs.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-12 px-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm max-w-2xl mx-auto my-8"
      >
        <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-4">
          <SearchX className="w-8 h-8" aria-hidden="true" />
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-[#123458] mb-2">
          No matching questions found
        </h3>

        <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto mb-6">
          Try searching with another keyword or browse all categories to find what you are looking for.
        </p>

        <Button
          variant="outline"
          size="md"
          icon={RotateCcw}
          iconPosition="left"
          onClick={onResetFilters}
          aria-label="Reset FAQ filters and search input"
        >
          Reset Filters & Search
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-4 max-w-4xl mx-auto mb-16 lg:mb-20 text-left"
    >
      <AnimatePresence mode="popLayout">
        {faqs.map((item) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <FAQItem
              item={item}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQAccordion;
