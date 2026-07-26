import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Shield, Award, GraduationCap, ChevronRight } from 'lucide-react';
import Button from '../common/Button';
import { SCHOOL_INFO } from '../../data/schoolData';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32 bg-gradient-to-b from-white via-slate-50 to-[#F8FAFC]">
      {/* Background Subtle Mesh Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-tr from-blue-100/40 via-amber-50/30 to-indigo-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8 text-left"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#123458]/5 border border-[#123458]/10 text-[#123458] text-xs sm:text-sm font-bold shadow-sm">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2563EB]"></span>
              </span>
              <span>Admissions Open for Session 2026-27</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-tight leading-[1.1]">
              Shaping Ethical Leaders & Global Innovators{' '}
              <span className="bg-gradient-to-r from-[#123458] via-[#2563EB] to-indigo-600 bg-clip-text text-transparent">
                Since 1998
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-[#6B7280] font-normal leading-relaxed max-w-2xl">
              Welcome to <span className="font-semibold text-slate-900">Pavna International School, Aligarh</span> (formerly DPS Aligarh). Combining world-class CBSE academics, AI & Robotics STEM programs, and SEEL character development in a 35-acre state-of-the-art campus.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link to="/apply-online">
                <Button variant="accent" size="lg" icon={ArrowRight}>
                  Apply Online 2026-27
                </Button>
              </Link>
              <a href={SCHOOL_INFO.links.prospectusPdf} target="_blank" rel="noreferrer">
                <Button variant="outline" size="lg">
                  Download Prospectus
                </Button>
              </a>
            </div>

            {/* Key Trust Points */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-[#2563EB]">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">CBSE Affiliated</p>
                  <p className="text-[11px] text-slate-500">K-12 Education</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center text-[#F59E0B]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Formerly DPS</p>
                  <p className="text-[11px] text-slate-500">25+ Yrs Legacy</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Day & Boarding</p>
                  <p className="text-[11px] text-slate-500">Full Facilities</p>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Hero Visual Card (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl border border-slate-200/80 bg-white p-3">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000" 
                alt="Pavna International School Campus Building"
                className="w-full h-[420px] sm:h-[480px] object-cover rounded-[24px]"
              />

              {/* Floating Card Badge 1 */}
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-8 left-8 right-8 glass-card p-4 rounded-2xl shadow-xl flex items-center justify-between border border-white/80"
              >
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Campus Motto</p>
                  <p className="text-sm font-extrabold text-[#123458] mt-0.5">#BeYourself — Inspire, Grow & Lead</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#2563EB] text-white flex items-center justify-center shrink-0 shadow-md">
                  <Sparkles className="w-5 h-5" />
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
