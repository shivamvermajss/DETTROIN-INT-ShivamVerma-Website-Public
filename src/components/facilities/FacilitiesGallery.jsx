import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { Check, ArrowRight } from 'lucide-react';
import ImageWrapper from '../ui/image/ImageWrapper';
import Button from '../ui/buttons/Button';
import { facilityData } from './FacilityData';

const featureContainerVariants = {
  hidden: { opacity: 0, y: 30 },
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
 * FacilitiesGallery Component
 * Renders the Featured Facility Spotlight card highlighting Smart Digital Classrooms.
 */
const FacilitiesGallery = () => {
  const { featuredFacility } = facilityData;
  const { title, badge, description, image, features, ctaText } = featuredFacility;

  return (
    <motion.div
      variants={featureContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="my-16 lg:my-20 relative rounded-3xl bg-white border border-slate-200/80 shadow-xl overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-8 lg:p-12">
        {/* Left Column: Featured Image Collage (6 Cols) */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md group">
            <ImageWrapper
              src={image}
              alt="Students learning in a modern smart classroom at Pavna International School"
              aspectRatio="auto"
              rounded="lg"
              shadow={false}
              className="w-full h-[280px] sm:h-[360px] lg:h-[400px] overflow-hidden"
              imgClassName="group-hover:scale-105 transition-transform duration-500 ease-out object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Right Column: Featured Details & Features List (6 Cols) */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3 w-fit border border-blue-100/80">
            {badge}
          </span>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#123458] tracking-tight mb-4 leading-tight">
            {title}
          </h3>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
            {description}
          </p>

          {/* Feature List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {features.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" aria-hidden="true" />
                </div>
                <span>{feat}</span>
              </div>
            ))}
          </div>

          {/* CTA Action */}
          <div>
            <ScrollLink to="apply" spy={true} smooth={true} offset={-80} duration={500} className="cursor-pointer inline-block">
              <Button
                variant="primary"
                size="md"
                icon={ArrowRight}
                iconPosition="right"
                aria-label={ctaText}
              >
                {ctaText}
              </Button>
            </ScrollLink>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FacilitiesGallery;
