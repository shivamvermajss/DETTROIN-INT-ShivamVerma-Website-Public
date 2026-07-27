import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import FooterLinks from './FooterLinks';
import FooterContact from './FooterContact';
import FooterNewsletter from './FooterNewsletter';
import CampusMapCard from './CampusMapCard';
import FooterSocials from './FooterSocials';
import { footerData } from './FooterData';

/**
 * FooterTop Component
 * Renders the primary footer grid featuring 4 content columns, newsletter subscription, and campus location map card.
 */
const FooterTop = () => {
  const { branding, quickLinks, admissionLinks } = footerData;

  return (
    <div className="pt-16 pb-12">
      {/* 4-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 mb-12">
        {/* Column 1: Branding (4 Cols) */}
        <div className="lg:col-span-4 text-left">
          <Link to="/" className="inline-block group focus:outline-none mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black text-xl shadow-md group-hover:scale-105 transition-transform">
                P
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight block leading-none">
                  {branding.logoText}
                </span>
                <span className="text-[11px] font-semibold text-blue-400 uppercase tracking-widest block mt-0.5">
                  {branding.tagline}
                </span>
              </div>
            </div>
          </Link>

          <p className="text-xs font-semibold text-amber-400 mb-3">
            {branding.formerlyText}
          </p>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
            {branding.description}
          </p>

          <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 mb-5">
            <p className="text-xs text-slate-300 italic">
              "{branding.mission}"
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-slate-300 mb-6">
            <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" aria-hidden="true" />
            <span>{branding.cbseAffiliation}</span>
          </div>

          {/* Social Media Handles */}
          <FooterSocials />
        </div>

        {/* Column 2: Quick Links (2.5 Cols) */}
        <div className="lg:col-span-3">
          <FooterLinks title="Quick Links" links={quickLinks} />
        </div>

        {/* Column 3: Admissions (2.5 Cols) */}
        <div className="lg:col-span-2">
          <FooterLinks title="Admissions" links={admissionLinks} />
        </div>

        {/* Column 4: Contact Info (3 Cols) */}
        <div className="lg:col-span-3">
          <FooterContact />
        </div>
      </div>

      {/* Bottom Section: Newsletter & Campus Map Card */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 pt-8 border-t border-slate-800">
        <FooterNewsletter />
        <CampusMapCard />
      </div>
    </div>
  );
};

export default FooterTop;
