import React from 'react';
import { motion } from 'framer-motion';
import { LEADERSHIP_MESSAGES } from '../../data/schoolData';
import { Quote, Award } from 'lucide-react';

const LeadershipSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#123458] bg-slate-100 px-4 py-1.5 rounded-full border border-slate-200">
            Visionary Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight">
            Guided by Passion, Wisdom & Integrity
          </h2>
          <p className="text-base sm:text-lg text-[#6B7280]">
            Hear from our school leaders about our commitment to stress-free, holistic learning and academic distinction.
          </p>
        </div>

        {/* Messages Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {LEADERSHIP_MESSAGES.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="apple-card p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden"
            >
              <Quote className="absolute top-6 right-6 w-20 h-20 text-slate-100 -z-0 pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover shadow-md border-2 border-slate-100"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-[#111827]">
                      {leader.name}
                    </h3>
                    <p className="text-sm font-semibold text-[#2563EB] flex items-center gap-1.5 mt-0.5">
                      <Award className="w-4 h-4 text-amber-500" />
                      {leader.role}
                    </p>
                  </div>
                </div>

                <blockquote className="text-slate-600 text-sm sm:text-base leading-relaxed italic border-l-4 border-[#123458] pl-4 py-1">
                  "{leader.message}"
                </blockquote>
              </div>

              <div className="relative z-10 pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">Pavna International School, Aligarh</span>
                <span className="text-xs font-bold text-[#123458]">Formerly DPS Aligarh</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LeadershipSection;
