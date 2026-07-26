import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  FileText, 
  ExternalLink, 
  ArrowUpRight,
  Shield,
  Heart
} from 'lucide-react';
import { SCHOOL_INFO, NAVIGATION_HIERARCHY } from '../../data/schoolData';

const Footer = () => {
  return (
    <footer className="bg-[#123458] text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          
          {/* Brand Info (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white text-[#123458] flex items-center justify-center font-black text-2xl shadow-xl">
                P
              </div>
              <div>
                <h3 className="text-2xl font-black tracking-tight leading-none text-white">
                  PAVNA
                </h3>
                <p className="text-xs font-semibold text-amber-400 tracking-wider uppercase mt-1">
                  International School, Aligarh
                </p>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-md">
              Formerly DPS Aligarh (Est. 1998 by Shri Pawan Jain). Committed to shaping future-ready leaders with global STEM education, AI & Robotics, and SEEL character frameworks.
            </p>

            <div className="flex items-center gap-3">
              <a 
                href={SCHOOL_INFO.links.prospectusPdf} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-all border border-white/15"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Download Prospectus</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>
              <Link
                to="/cbse-policies"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-all border border-white/15"
              >
                <Shield className="w-4 h-4 text-blue-400" />
                <span>CBSE Mandate</span>
              </Link>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-slate-300">
              <li><Link to="/overview" className="hover:text-white transition-colors">About Overview</Link></li>
              <li><Link to="/academics" className="hover:text-white transition-colors">Academic Programs</Link></li>
              <li><Link to="/faculty" className="hover:text-white transition-colors">Faculty Directory</Link></li>
              <li><Link to="/infrastructure" className="hover:text-white transition-colors">Campus Infrastructure</Link></li>
              <li><Link to="/hostel" className="hover:text-white transition-colors">Boarding Facilities</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">School Blog</Link></li>
            </ul>
          </div>

          {/* Admissions Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400">
              Admissions
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-slate-300">
              <li><Link to="/admission-process" className="hover:text-white transition-colors">Admission Process</Link></li>
              <li><Link to="/apply-online" className="hover:text-white transition-colors">Apply Online Portal</Link></li>
              <li><Link to="/interaction-syllabus" className="hover:text-white transition-colors">Interaction Syllabus</Link></li>
              <li><Link to="/fee-structure" className="hover:text-white transition-colors">Fee Structure</Link></li>
              <li><Link to="/enquiry" className="hover:text-white transition-colors">Enquiry Form</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">Frequently Asked Questions</Link></li>
            </ul>
          </div>

          {/* Portals & Governance */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400">
              Portals & Legal
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-slate-300">
              <li>
                <a href={SCHOOL_INFO.links.parentLogin} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
                  Parent Portal Login <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href={SCHOOL_INFO.links.alumniLogin} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
                  Alumni Registration <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li><Link to="/managing-committee" className="hover:text-white transition-colors">Managing Committee</Link></li>
              <li><Link to="/assessment-policy" className="hover:text-white transition-colors">Assessment Policy</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Campus</Link></li>
            </ul>
          </div>
        </div>

        {/* Campuses Section */}
        <div className="py-12 border-b border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {SCHOOL_INFO.campuses.map((campus) => (
            <div key={campus.id} className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:border-white/20 transition-all space-y-3">
              <div className="flex items-center justify-between">
                <h5 className="font-bold text-white text-base">
                  {campus.name}
                </h5>
                <a href={campus.mapsUrl} target="_blank" rel="noreferrer" className="text-amber-400 hover:text-amber-300">
                  <MapPin className="w-4 h-4" />
                </a>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {campus.address}
              </p>
              <a href={`tel:${campus.phone}`} className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-300 hover:text-white">
                <Phone className="w-3.5 h-3.5" />
                <span>{campus.phone}</span>
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Pavna International School, Aligarh. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/cbse-policies" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/cbse-policies" className="hover:text-white transition-colors">Terms of Service</Link>
            <span>•</span>
            <Link to="/faq" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
