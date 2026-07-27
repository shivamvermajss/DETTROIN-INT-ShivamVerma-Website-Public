import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles } from 'lucide-react';
import ImageWrapper from '../ui/image/ImageWrapper';
import { studentLifeData } from './StudentLifeData';

const spotlightVariants = {
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
 * StudentStory Component
 * Displays a featured student experience spotlight card with photo, testimonial, and badge.
 */
const StudentStory = () => {
  const { spotlight } = studentLifeData;
  const { name, grade, title, photo, testimonial, badgeText } = spotlight;

  return (
    <motion.div
      variants={spotlightVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="my-12 lg:my-16 relative rounded-3xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xl overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-8 lg:p-12">
        {/* Left Column: Student Photo (5 Cols) */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md">
            <ImageWrapper
              src={photo}
              alt={`${name} - ${title}`}
              aspectRatio="auto"
              rounded="lg"
              shadow={false}
              className="w-full h-72 sm:h-80 lg:h-96"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent pointer-events-none" />

            {/* Achievement Badge Overlay */}
            <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold shadow-lg">
              <Sparkles className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
              <span>{badgeText}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Spotlight Testimonial (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            Student Spotlight Experience
          </span>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#123458] mb-1">
            {name}
          </h3>

          <p className="text-sm font-semibold text-slate-500 mb-4">
            {grade} • <span className="text-blue-700 font-bold">{title}</span>
          </p>

          {/* Testimonial Quote */}
          <div className="relative p-5 sm:p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80">
            <Quote className="w-6 h-6 text-blue-600/30 absolute top-4 right-4" aria-hidden="true" />
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic font-medium">
              "{testimonial}"
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StudentStory;
