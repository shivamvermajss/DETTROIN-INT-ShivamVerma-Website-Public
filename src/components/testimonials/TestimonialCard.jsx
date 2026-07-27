import React from 'react';
import { Star, Quote } from 'lucide-react';
import ImageWrapper from '../ui/image/ImageWrapper';

/**
 * TestimonialCard Component
 * Glass card component displaying parent photo, name, grade role, star rating, quote, and location.
 */
const TestimonialCard = ({ item }) => {
  const { id, name, role, location, photo, rating, quote } = item;
  const titleId = `parent-testimonial-${id}`;

  return (
    <div
      tabIndex={0}
      role="region"
      aria-labelledby={titleId}
      className="group relative h-full rounded-3xl bg-white/95 backdrop-blur-md border border-slate-200/80 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
    >
      <Quote className="w-8 h-8 text-blue-600/15 absolute top-6 right-6 pointer-events-none" aria-hidden="true" />

      <div>
        {/* Rating Stars */}
        <div className="flex items-center gap-1 mb-4" aria-label={`Rating: ${rating} out of 5 stars`}>
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" aria-hidden="true" />
          ))}
        </div>

        {/* Quote Text */}
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic font-medium mb-6">
          "{quote}"
        </p>
      </div>

      {/* Author Profile Footer */}
      <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
        <ImageWrapper
          src={photo}
          alt={name}
          aspectRatio="square"
          rounded="full"
          shadow={false}
          className="w-12 h-12 shrink-0 border border-slate-200"
        />

        <div>
          <h3 id={titleId} className="text-base font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
            {name}
          </h3>
          <p className="text-xs text-slate-500 font-medium">
            {role} {location && `• ${location}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
