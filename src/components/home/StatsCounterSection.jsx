import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { STATS } from '../../data/schoolData';

const StatsCounterSection = () => {
  return (
    <section className="py-16 bg-[#123458] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center space-y-2"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-amber-400 tracking-tight font-sans">
                <CountUp end={stat.value} duration={2.5} enableScrollSpy scrollSpyOnce />
                <span>{stat.suffix}</span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
                {stat.label}
              </h3>
              <p className="text-xs text-slate-300">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounterSection;
