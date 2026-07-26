import React from 'react';
import { motion } from 'framer-motion';
import { DISTINGUISHED_GUESTS } from '../../data/schoolData';
import { Star, Award } from 'lucide-react';

const DistinguishedGuestsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#F59E0B] bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200">
            Distinguished Visitors & Mentors
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight">
            Graced by World Leaders & Icons
          </h2>
          <p className="text-base sm:text-lg text-[#6B7280]">
            Over the last 25+ years, Pavna School has hosted national leaders, scientists, sportspersons, and artists who inspire our students to reach for greatness.
          </p>
        </div>

        {/* Guests Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {DISTINGUISHED_GUESTS.map((guest, index) => (
            <motion.div
              key={guest.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="apple-card p-4 text-center space-y-2 group hover:bg-[#123458] hover:text-white transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 mx-auto flex items-center justify-center group-hover:bg-amber-400 group-hover:text-slate-900 transition-colors">
                <Star className="w-5 h-5 fill-amber-400 text-amber-500 group-hover:fill-slate-900 group-hover:text-slate-900" />
              </div>
              <h3 className="font-bold text-sm text-[#111827] group-hover:text-white transition-colors leading-tight">
                {guest.name}
              </h3>
              <p className="text-[11px] text-[#6B7280] group-hover:text-slate-300 transition-colors leading-snug">
                {guest.title}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DistinguishedGuestsSection;
