import React from 'react';
import { motion } from 'framer-motion';
import { KEY_HIGHLIGHTS } from '../../data/schoolData';
import { 
  Bot, 
  Sparkles, 
  Trophy, 
  HeartHandshake, 
  Brain, 
  Home, 
  GraduationCap, 
  Bus,
  ArrowUpRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  Bot,
  Sparkles,
  Trophy,
  HeartHandshake,
  Brain,
  Home,
  GraduationCap,
  Bus
};

const QuickInsightsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#2563EB] bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
            A Quick Insight Into Our Path of Learning
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight">
            Comprehensive Excellence Across All Dimensions
          </h2>
          <p className="text-base sm:text-lg text-[#6B7280]">
            At Pavna, we integrate futuristic STEM tools, sports infrastructure, and social-emotional frameworks to nurture well-rounded, compassionate leaders.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {KEY_HIGHLIGHTS.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="apple-card p-6 flex flex-col justify-between group cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#123458]/5 text-[#123458] group-hover:bg-[#2563EB] group-hover:text-white flex items-center justify-center transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2.5 py-1 rounded-lg">
                      {item.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#111827] group-hover:text-[#2563EB] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6B7280] mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#123458] group-hover:text-[#2563EB]">
                  <span>Explore Program</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default QuickInsightsSection;
