import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/container/Container';
import FacilitiesGrid from './FacilitiesGrid';
import FacilitiesGallery from './FacilitiesGallery';
import FacilityModal from './FacilityModal';
import { facilityData } from './FacilityData';

const headerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/**
 * CampusFacilities Component
 * Phase 9 – Main component showcasing 8 campus facility cards, modal details, and featured technology spotlight.
 */
const CampusFacilities = () => {
  const { badge, heading, description } = facilityData;

  const [selectedFacility, setSelectedFacility] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (facility) => {
    setSelectedFacility(facility);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedFacility(null);
  };

  return (
    <section
      id="facilities"
      className="relative py-12 sm:py-16 lg:py-20 bg-white overflow-hidden"
      aria-labelledby="facilities-heading"
    >
      {/* Background Soft Mesh Ambient Accents */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/40 via-indigo-50/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container maxWidth="max-w-7xl">
        {/* Section Header */}
        <motion.div
          variants={headerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="max-w-3xl mx-auto text-center mb-12 lg:mb-16"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-100/80">
              {badge}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            id="facilities-heading"
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#123458] tracking-tight mb-4 leading-tight"
          >
            {heading}
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        </motion.div>

        {/* 8 Facility Cards Grid */}
        <FacilitiesGrid onOpenModal={handleOpenModal} />

        {/* Featured Facility Spotlight */}
        <FacilitiesGallery />

        {/* Interactive Facility Detail Modal */}
        <FacilityModal
          facility={selectedFacility}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </Container>
    </section>
  );
};

export default CampusFacilities;
