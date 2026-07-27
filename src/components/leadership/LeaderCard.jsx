import React from 'react';
import { motion } from 'framer-motion';
import { Check, Quote } from 'lucide-react';
import ImageWrapper from '../ui/image/ImageWrapper';

/**
 * LeaderCard Component
 * Reusable profile card displaying portrait, name, designation, biography, inspirational quote, and key achievements.
 */
const LeaderCard = ({ leader, variants }) => {
  const { id, name, designation, image, bio, quote, achievements } = leader;
  const titleId = `leader-card-${id}`;

  return (
    <motion.div
      variants={variants}
      tabIndex={0}
      role="region"
      aria-labelledby={titleId}
      className="group relative h-full rounded-3xl bg-white/90 backdrop-blur-sm border border-slate-200/80 p-6 sm:p-8 shadow-xs transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 flex flex-col lg:flex-row gap-6 lg:gap-8 items-center lg:items-start"
    >
      {/* Top Subtle Border Glow */}
      <div 
        className="absolute inset-x-0 top-0 h-1 rounded-t-3xl bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/40 transition-all duration-500" 
        aria-hidden="true"
      />

      {/* Leader Portrait Column */}
      <div className="w-full sm:w-64 shrink-0 relative">
        <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md">
          <ImageWrapper
            src={image}
            alt={`${name} - ${designation}`}
            aspectRatio="auto"
            rounded="lg"
            shadow={false}
            className="w-full h-72 sm:h-80"
            imgClassName="group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Leader Content Column */}
      <div className="flex-1 flex flex-col justify-between text-left">
        <div>
          {/* Designation Badge */}
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-2 border border-blue-100/80">
            {designation}
          </span>

          {/* Name */}
          <h3 id={titleId} className="text-2xl sm:text-3xl font-extrabold text-[#123458] mb-3 group-hover:text-blue-600 transition-colors">
            {name}
          </h3>

          {/* Short Bio */}
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
            {bio}
          </p>

          {/* Quote */}
          {quote && (
            <div className="relative p-4 rounded-xl bg-slate-50 border-l-4 border-blue-600 mb-5">
              <Quote className="w-4 h-4 text-blue-600/40 absolute top-2 right-2" aria-hidden="true" />
              <p className="text-xs sm:text-sm text-slate-700 italic font-medium leading-relaxed">
                "{quote}"
              </p>
            </div>
          )}
        </div>

        {/* Key Achievements Checkmarks */}
        <div className="pt-3 border-t border-slate-100">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Key Highlights
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {achievements.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" aria-hidden="true" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <span className="sr-only">
        {name}, {designation}. {bio}
      </span>
    </motion.div>
  );
};

export default LeaderCard;
