import React from 'react';
import MainLayout from '../layouts/MainLayout';
import SEOHead from '../components/common/SEOHead';
import { SCHOOL_INFO } from '../data/schoolData';
import { Sparkles, ArrowRight, CheckCircle2, FileText } from 'lucide-react';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';

const GenericContentPage = ({ title, subtitle, tag, highlights = [], contentBlocks = [] }) => {
  return (
    <MainLayout>
      <SEOHead 
        title={`${title} | Pavna International School Aligarh`}
        description={subtitle || "Explore Pavna International School Aligarh academic and campus details."}
      />

      <section className="bg-[#123458] text-white py-16 lg:py-24 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 space-y-4">
          {tag && (
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-white/10 px-4 py-1 rounded-full border border-white/15">
              {tag}
            </span>
          )}
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          
          {highlights.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((h, i) => (
                <div key={i} className="apple-card p-6 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-[#2563EB] font-bold text-base">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <h4>{h.title}</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>
          )}

          {contentBlocks.map((block, i) => (
            <div key={i} className="apple-card p-8 border border-slate-200 space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">{block.heading}</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{block.text}</p>
            </div>
          ))}

          <div className="apple-card p-8 bg-gradient-to-r from-blue-50 to-amber-50 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-extrabold text-[#123458] text-lg">Interested in Pavna International School?</h4>
              <p className="text-xs text-slate-600">Download our prospectus or submit an online application today.</p>
            </div>
            <div className="flex gap-3">
              <Link to="/apply-online">
                <Button variant="accent" size="md" icon={ArrowRight}>
                  Apply Online
                </Button>
              </Link>
              <a href={SCHOOL_INFO.links.prospectusPdf} target="_blank" rel="noreferrer">
                <Button variant="outline" size="md" icon={FileText}>
                  Prospectus
                </Button>
              </a>
            </div>
          </div>

        </div>
      </section>
    </MainLayout>
  );
};

export default GenericContentPage;
