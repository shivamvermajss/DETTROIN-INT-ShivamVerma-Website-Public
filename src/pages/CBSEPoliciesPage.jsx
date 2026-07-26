import React from 'react';
import MainLayout from '../layouts/MainLayout';
import SEOHead from '../components/common/SEOHead';
import { ShieldCheck, FileText, CheckCircle2, Download } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import Button from '../components/common/Button';

const CBSEPoliciesPage = () => {
  return (
    <MainLayout>
      <SEOHead 
        title="CBSE & School Policies | Mandatory Disclosure | Pavna International School"
        description="Public disclosure and CBSE policies of Pavna International School, Aligarh including affiliation status, safety norms, and compliance documents."
      />
      
      <section className="bg-[#123458] text-white py-16 lg:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-400 bg-white/10 px-4 py-1.5 rounded-full border border-white/15">
            Public Disclosure & Compliance
          </span>
          <h1 className="text-4xl sm:text-5xl font-black">
            CBSE & School Policies
          </h1>
          <p className="text-slate-300 text-base max-w-xl mx-auto">
            Ensuring complete transparency, safety compliance, and educational standards as prescribed by CBSE India.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto px-4 space-y-8">
          
          <div className="apple-card p-8 space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <ShieldCheck className="w-8 h-8 text-[#2563EB]" />
              <div>
                <h3 className="text-xl font-bold text-slate-900">Mandatory Public Disclosure</h3>
                <p className="text-xs text-slate-500">As per CBSE Circular Guidelines</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-semibold text-slate-700">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                <span>Affiliation Status</span>
                <span className="text-[#2563EB] font-bold">CBSE Senior Secondary</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                <span>School Code / Affiliation No.</span>
                <span className="text-[#2563EB] font-bold">2130456 (Verified)</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                <span>No Objection Certificate (NOC)</span>
                <span className="text-emerald-600 font-bold">Granted by UP Govt</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                <span>Fire & Building Safety</span>
                <span className="text-emerald-600 font-bold">Certified Safe</span>
              </div>
            </div>

            <div className="pt-4 flex justify-center">
              <a href={SCHOOL_INFO.links.prospectusPdf} target="_blank" rel="noreferrer">
                <Button variant="primary" icon={Download}>
                  Download Prospectus & Policies PDF
                </Button>
              </a>
            </div>
          </div>

        </div>
      </section>
    </MainLayout>
  );
};

export default CBSEPoliciesPage;
