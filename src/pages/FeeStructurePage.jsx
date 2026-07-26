import React from 'react';
import MainLayout from '../layouts/MainLayout';
import SEOHead from '../components/common/SEOHead';
import { SCHOOL_INFO } from '../data/schoolData';
import { CheckCircle2, Download, ShieldCheck } from 'lucide-react';
import Button from '../components/common/Button';

const FeeStructurePage = () => {
  return (
    <MainLayout>
      <SEOHead 
        title="Fee Structure 2026-27 | Pavna International School Aligarh"
        description="Transparent fee structure for Day School and Residential Boarding at Pavna International School Aligarh."
      />
      
      <section className="bg-[#123458] text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-white/10 px-4 py-1 rounded-full">
            Transparent Pricing
          </span>
          <h1 className="text-4xl sm:text-5xl font-black">
            Fee Structure 2026-27
          </h1>
          <p className="text-slate-300 max-w-xl mx-auto">
            Comprehensive education investment details for Day Boarding and Full Boarding.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          
          <div className="apple-card p-8 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
              Schedule of Fees & Guidelines
            </h3>

            <div className="space-y-3 text-sm text-slate-600">
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Includes Tuition Fee, Digital Smart Classes, Lab Charges, and Co-Curricular Sports Coaching.</span>
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Flexible payment options: Quarterly, Bi-Annually, or Annual lumpsum discounts.</span>
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Separate options for Day Boarding (PG - Class XII) and Residential Boarding.</span>
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-slate-900">Official Prospectus & Fee Breakdown</p>
                <p className="text-xs text-slate-500">Download PDF document for complete itemized breakdown.</p>
              </div>
              <a href={SCHOOL_INFO.links.prospectusPdf} target="_blank" rel="noreferrer">
                <Button variant="accent" icon={Download}>
                  Download Prospectus PDF
                </Button>
              </a>
            </div>
          </div>

        </div>
      </section>
    </MainLayout>
  );
};

export default FeeStructurePage;
