import React from 'react';
import MainLayout from '../layouts/MainLayout';
import SEOHead from '../components/common/SEOHead';
import { SCHOOL_INFO } from '../data/schoolData';
import { ClipboardList, UserCheck, CreditCard, ArrowRight, FileCheck, PhoneCall } from 'lucide-react';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';

const AdmissionProcessPage = () => {
  const steps = [
    {
      num: "01",
      title: "Online Enquiry / Registration",
      desc: "Fill out the online application form or visit our campus admissions office to submit candidate details.",
      icon: ClipboardList
    },
    {
      num: "02",
      title: "Student Interaction & Assessment",
      desc: "Participate in an informal interaction / diagnostic assessment based on the class level syllabus.",
      icon: UserCheck
    },
    {
      num: "03",
      title: "Document Verification",
      desc: "Submit previous school birth certificate, transfer certificate, report cards, and photographs.",
      icon: FileCheck
    },
    {
      num: "04",
      title: "Fee Payment & Seat Confirmation",
      desc: "Complete the admission fee payment to secure your seat for Academic Session 2026-27.",
      icon: CreditCard
    }
  ];

  return (
    <MainLayout>
      <SEOHead 
        title="Admission Process 2026-27 | Pavna International School Aligarh"
        description="Step-by-step admission process for Day School and Residential Boarding at Pavna International School, Aligarh."
      />
      
      <section className="bg-[#123458] text-white py-16 lg:py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-white/10 px-4 py-1 rounded-full">
            Admissions Session 2026-27
          </span>
          <h1 className="text-4xl sm:text-5xl font-black">
            Admission Process & Guidelines
          </h1>
          <p className="text-slate-300 max-w-xl mx-auto">
            Join a vibrant community of scholars, innovators, and leaders.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 space-y-16">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => {
              const IconComp = step.icon;
              return (
                <div key={step.num} className="apple-card p-6 relative flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-black text-amber-500">{step.num}</span>
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="font-bold text-lg text-slate-900">{step.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center space-y-6 bg-white p-8 rounded-3xl border border-slate-200 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900">Ready to Apply?</h3>
            <p className="text-sm text-slate-600">Start your online application process now or speak to our admissions helpline.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/apply-online">
                <Button variant="accent" size="lg" icon={ArrowRight}>
                  Apply Online Now
                </Button>
              </Link>
              <a href={`tel:${SCHOOL_INFO.campuses[0].phone}`}>
                <Button variant="outline" size="lg" icon={PhoneCall}>
                  Call Admission Desk
                </Button>
              </a>
            </div>
          </div>

        </div>
      </section>
    </MainLayout>
  );
};

export default AdmissionProcessPage;
