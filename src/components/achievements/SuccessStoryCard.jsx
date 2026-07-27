import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import ImageWrapper from '../ui/image/ImageWrapper';
import { achievementData } from './AchievementData';

const cardVariants = {
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
 * SuccessStoryCard Component
 * Displays a featured student success story in an elegant glass card layout.
 */
const SuccessStoryCard = () => {
  const { successStory } = achievementData;
  const { name, role, photo, achievement, testimonial, awardBadge } = successStory;

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="my-16 lg:my-20 relative rounded-3xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xl overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-8 lg:p-12">
        {/* Left Column: Student Photo (5 Cols) */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md">
            <ImageWrapper
              src={photo}
              alt={`${name} - ${role}`}
              aspectRatio="auto"
              rounded="lg"
              shadow={false}
              className="w-full h-72 sm:h-80 lg:h-96"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent pointer-events-none" />

            {/* Award Badge Pill Overlay */}
            <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-amber-950 text-xs font-bold shadow-lg">
              <Star className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
              <span>{awardBadge}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Story & Testimonial Details (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            Student Spotlight
          </span>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#123458] mb-1">
            {name}
          </h3>

          <p className="text-sm font-bold text-slate-700 mb-4">
            {role}
          </p>

          {/* Achievement Tag */}
          <div className="p-3.5 rounded-xl bg-blue-50/80 border border-blue-100 text-blue-900 text-xs sm:text-sm font-semibold mb-5">
            🏆 {achievement}
          </div>

          {/* Testimonial Quote */}
          <div className="relative p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80">
            <Quote className="w-6 h-6 text-blue-600/30 absolute top-3 right-3" aria-hidden="true" />
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed italic">
              "{testimonial}"
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SuccessStoryCard;
