import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';

/**
 * ProgramCard Component
 * Displays an individual academic program card (Pre-Primary to Senior Secondary).
 */
const ProgramCard = ({ program, cardVariants }) => {
  const { id, name, range, description, icon: Icon, gradient, badgeColor, features, link } = program;
  const titleId = `academic-card-${id}`;

  return (
    <motion.div
      variants={cardVariants}
      tabIndex={0}
      role="region"
      aria-labelledby={titleId}
      className="group relative h-full rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200/80 p-6 shadow-xs transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 flex flex-col justify-between"
    >
      {/* Subtle Top Gradient Accent on Hover */}
      <div 
        className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/40 transition-all duration-500" 
        aria-hidden="true"
      />

      <div>
        {/* Header: Icon & Age/Class Badge */}
        <div className="flex items-center justify-between mb-5">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} p-0.5 shadow-md shadow-blue-900/10 group-hover:scale-110 transition-transform duration-300`}>
            <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
              <Icon className="w-6 h-6 text-[#123458] group-hover:text-blue-600 transition-colors duration-300" aria-hidden="true" />
            </div>
          </div>

          <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${badgeColor} transition-colors`}>
            {range}
          </span>
        </div>

        {/* Program Title */}
        <h3 id={titleId} className="text-xl font-extrabold text-[#123458] mb-2 group-hover:text-blue-600 transition-colors duration-200">
          {name}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed font-normal mb-5">
          {description}
        </p>

        {/* Feature List */}
        <ul className="space-y-2.5 mb-6 border-t border-slate-100 pt-4" aria-label={`${name} highlights`}>
          {features.map((feat, idx) => (
            <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
              <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 stroke-[3]" aria-hidden="true" />
              </div>
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Learn More Action Button */}
      <div className="pt-2 border-t border-slate-100/80">
        <Link
          to={link}
          className="inline-flex items-center gap-2 text-xs font-bold text-[#123458] group-hover:text-blue-600 hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-1 rounded-md py-1"
          aria-label={`Learn more about ${name} program`}
        >
          <span>Learn More</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
        </Link>
      </div>

      <span className="sr-only">
        {name} program for {range}. {description}
      </span>
    </motion.div>
  );
};

export default ProgramCard;
