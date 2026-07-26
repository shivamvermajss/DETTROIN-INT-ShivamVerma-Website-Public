import React from 'react';
import MainLayout from '../layouts/MainLayout';
import SEOHead from '../components/common/SEOHead';
import { SCHOOL_INFO } from '../data/schoolData';
import LeadershipSection from '../components/home/LeadershipSection';
import CTASection from '../components/home/CTASection';
import { Award, Shield, CheckCircle, Target, Compass } from 'lucide-react';

const OverviewPage = () => {
  return (
    <MainLayout>
      <SEOHead 
        title="About Overview | Pavna International School Aligarh"
        description="Learn about Pavna International School Aligarh's founding legacy, vision, mission, and commitment to holistic child development since 1998."
      />
      
      {/* Page Header Banner */}
      <section className="bg-[#123458] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-400 bg-white/10 px-4 py-1.5 rounded-full border border-white/15">
            About Pavna International School
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
            Our Legacy, Vision & Values
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Founded in 1998 by Shri Pawan Jain (Founder, Pavna Group), formerly known as DPS Aligarh.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-extrabold text-[#111827]">
                Welcome to Pavna School, Aligarh
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                Founded in 1998 by Shri Pawan Jain (Founder, Pavna Group), Pavna School (formerly DPS Aligarh) began as a dream to provide innovative, world-class education, shaping young minds in a supportive environment.
              </p>
              <p className="text-slate-600 leading-relaxed text-base">
                We strive to ignite a passion for learning and develop practical skills for a rapidly evolving world. Our cultural tapestry cohesively envelops a nurturing, inclusive community where every student is empowered to achieve their full potential.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="apple-card p-4 border border-slate-200">
                  <Target className="w-6 h-6 text-[#2563EB] mb-2" />
                  <h4 className="font-bold text-slate-900 text-sm">Our Mission</h4>
                  <p className="text-xs text-slate-500 mt-1">To ignite curiosity and foster ethical leadership.</p>
                </div>
                <div className="apple-card p-4 border border-slate-200">
                  <Compass className="w-6 h-6 text-amber-500 mb-2" />
                  <h4 className="font-bold text-slate-900 text-sm">Our Vision</h4>
                  <p className="text-xs text-slate-500 mt-1">To be a globally recognized beacon of holistic learning.</p>
                </div>
              </div>
            </div>

            <div className="apple-card p-4 overflow-hidden border border-slate-200 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1000" 
                alt="Pavna Campus View" 
                className="w-full h-[400px] object-cover rounded-2xl"
              />
            </div>
          </div>

        </div>
      </section>

      <LeadershipSection />
      <CTASection />
    </MainLayout>
  );
};

export default OverviewPage;
