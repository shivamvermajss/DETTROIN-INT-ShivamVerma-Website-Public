import React from 'react';
import MainLayout from '../layouts/MainLayout';
import SEOHead from '../components/common/SEOHead';
import { SCHOOL_INFO } from '../data/schoolData';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Button from '../components/common/Button';

const ContactPage = () => {
  return (
    <MainLayout>
      <SEOHead 
        title="Contact Us | Pavna International School Aligarh"
        description="Get in touch with Pavna International School Aligarh campus desk, admissions enquiry, or visit our campuses."
      />
      
      <section className="bg-[#123458] text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-white/10 px-4 py-1 rounded-full">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-black">
            Contact Pavna International School
          </h1>
          <p className="text-slate-300 max-w-xl mx-auto">
            We are here to assist you with admissions, campus tours, and academic queries.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Form */}
          <div className="lg:col-span-7 apple-card p-8 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">Send Us an Enquiry</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Parent Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#2563EB] outline-none text-sm" placeholder="Enter your full name" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Mobile Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#2563EB] outline-none text-sm" placeholder="+91 98765 43210" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#2563EB] outline-none text-sm" placeholder="parent@example.com" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Seeking Admission For</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#2563EB] outline-none text-sm bg-white">
                    <option>Pre-Primary (PG - UKG)</option>
                    <option>Primary (Class I - V)</option>
                    <option>Middle (Class VI - VIII)</option>
                    <option>Secondary (Class IX - X)</option>
                    <option>Senior Secondary (Class XI - XII)</option>
                    <option>Hostel / Boarding</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Query / Message</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#2563EB] outline-none text-sm" placeholder="How can we help you?"></textarea>
              </div>

              <Button variant="accent" size="lg" className="w-full" icon={Send}>
                Submit Admission Enquiry
              </Button>
            </form>
          </div>

          {/* Campus Details */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">Campus Addresses</h3>

            {SCHOOL_INFO.campuses.map((campus) => (
              <div key={campus.id} className="apple-card p-6 border border-slate-200 space-y-3">
                <h4 className="font-bold text-slate-900 text-lg">{campus.name}</h4>
                <p className="text-xs text-slate-600 flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                  <span>{campus.address}</span>
                </p>
                <p className="text-xs text-slate-600 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                  <a href={`tel:${campus.phone}`} className="font-bold text-[#123458] hover:underline">{campus.phone}</a>
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </MainLayout>
  );
};

export default ContactPage;
