import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Sparkles, CheckCircle2 } from 'lucide-react';
import Button from '../common/Button';
import { SCHOOL_INFO } from '../../data/schoolData';

const CTASection = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#123458] via-[#0b223c] to-[#123458] text-white relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/5 backdrop-blur-xl border border-white/15 rounded-[32px] p-8 sm:p-12 lg:p-16 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
          
          <div className="space-y-6 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Admissions Open — Session 2026-27</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Begin Your Journey of Excellence at Pavna School
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Step into a world of limitless opportunities. Empowering future leaders through holistic education, global STEM curriculum, and core ethical values.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm font-semibold text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>CBSE National Curriculum</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Day & Residential Boarding</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Dedicated AI & Robotics Labs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Safe GPS Enabled Bus Fleet</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full lg:w-auto shrink-0">
            <Link to="/apply-online" className="w-full">
              <Button variant="accent" size="lg" className="w-full" icon={ArrowRight}>
                Apply Online Now
              </Button>
            </Link>
            <a href={SCHOOL_INFO.links.prospectusPdf} target="_blank" rel="noreferrer" className="w-full">
              <Button variant="outline" size="lg" className="w-full border-white text-white hover:bg-white hover:text-[#123458]" icon={Download}>
                Download Prospectus
              </Button>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;
