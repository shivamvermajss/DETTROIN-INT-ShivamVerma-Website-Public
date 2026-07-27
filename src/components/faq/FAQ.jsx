import React, { useState, useMemo } from 'react';
import Container from '../ui/container/Container';
import FAQHeader from './FAQHeader';
import FAQSearch from './FAQSearch';
import FAQCategories from './FAQCategories';
import FAQAccordion from './FAQAccordion';
import ContactSupportCard from './ContactSupportCard';
import { faqData } from './FAQData';

/**
 * FAQ Component
 * Phase 16 – Main Frequently Asked Questions section featuring instant live search, category chips filtering, single-open accordion items, empty search states, and support card.
 */
const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter FAQs based on active category and live search query
  const filteredFaqs = useMemo(() => {
    return faqData.faqs.filter((faq) => {
      const matchesCategory =
        activeCategory === 'All' || faq.category === activeCategory;

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query) ||
        faq.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setActiveCategory('All');
  };

  return (
    <section
      id="faq"
      className="relative py-12 sm:py-16 lg:py-20 bg-[#F6F9FF] overflow-hidden"
      aria-labelledby="faq-heading"
    >
      {/* Background Soft Ambient Accents */}
      <div
        className="absolute top-1/4 left-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl pointer-events-none -z-10 -translate-x-1/3"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-50/40 rounded-full blur-3xl pointer-events-none -z-10 translate-x-1/3"
        aria-hidden="true"
      />

      <Container maxWidth="max-w-7xl">
        {/* Section Header */}
        <FAQHeader />

        {/* Live Search Bar */}
        <FAQSearch
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onClearSearch={() => setSearchQuery('')}
        />

        {/* Category Filters */}
        <FAQCategories
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {/* Accordion List or Empty Search State */}
        <FAQAccordion
          faqs={filteredFaqs}
          onResetFilters={handleResetFilters}
        />

        {/* Still Have Questions Support Card */}
        <ContactSupportCard />
      </Container>
    </section>
  );
};

export default FAQ;
