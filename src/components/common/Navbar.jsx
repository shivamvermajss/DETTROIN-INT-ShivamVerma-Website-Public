import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  ChevronDown, 
  Menu, 
  X, 
  GraduationCap, 
  LogIn, 
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { NAVIGATION_HIERARCHY, SCHOOL_INFO } from '../../data/schoolData';
import Button from './Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="bg-[#123458] text-white text-xs font-medium py-2 px-4 border-b border-white/10 hidden lg:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 text-amber-400 font-semibold bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
              <Sparkles className="w-3.5 h-3.5" />
              Formerly DPS Aligarh | Est. 1998
            </span>
            <a 
              href={`tel:${SCHOOL_INFO.campuses[0].phone}`} 
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-secondary" />
              <span>Admissions Helpline: {SCHOOL_INFO.campuses[0].phone}</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={SCHOOL_INFO.links.alumniLogin} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <GraduationCap className="w-3.5 h-3.5" />
              Alumni Portal
            </a>
            <span className="text-white/20">|</span>
            <a 
              href={SCHOOL_INFO.links.parentLogin} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <LogIn className="w-3.5 h-3.5" />
              Parent Login
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-md py-3 border-b border-slate-200/80' 
          : 'bg-white/95 backdrop-blur-md py-4 border-b border-slate-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-[#123458] flex items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-[#123458]/20 group-hover:scale-105 transition-transform duration-300">
              P
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl text-[#123458] tracking-tight leading-none group-hover:text-[#2563EB] transition-colors">
                PAVNA
              </span>
              <span className="text-[11px] font-semibold text-slate-500 tracking-wider uppercase mt-0.5">
                International School
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAVIGATION_HIERARCHY.map((item) => (
              <div 
                key={item.title} 
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.children ? (
                  <button className="flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-[#123458] hover:bg-slate-100/80 transition-all cursor-pointer">
                    <span>{item.title}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.title ? 'rotate-180 text-[#2563EB]' : 'text-slate-400'}`} />
                  </button>
                ) : (
                  <Link 
                    to={item.path}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                      location.pathname === item.path 
                        ? 'text-[#2563EB] bg-blue-50' 
                        : 'text-slate-700 hover:text-[#123458] hover:bg-slate-100/80'
                    }`}
                  >
                    {item.title}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.title && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute left-0 top-full pt-2 w-64 z-50"
                      >
                        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.title}
                              to={child.path}
                              className={`block px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                                location.pathname === child.path
                                  ? 'bg-blue-50 text-[#2563EB] font-semibold'
                                  : 'text-slate-600 hover:text-[#123458] hover:bg-slate-50'
                              }`}
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href={SCHOOL_INFO.links.prospectusPdf} target="_blank" rel="noreferrer">
              <Button variant="ghost" size="sm">
                Prospectus
              </Button>
            </a>
            <Link to="/apply-online">
              <Button variant="accent" size="sm" icon={ArrowRight}>
                Apply 2026-27
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 shadow-xl overflow-hidden"
          >
            <div className="px-5 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
              <div className="flex items-center gap-2 px-3 py-2 bg-amber-50 text-amber-800 rounded-xl text-xs font-medium border border-amber-200">
                <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Admissions open for Academic Session 2026-27</span>
              </div>

              {NAVIGATION_HIERARCHY.map((item) => (
                <div key={item.title} className="space-y-1">
                  {item.children ? (
                    <div>
                      <div className="px-3 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                        {item.title}
                      </div>
                      <div className="pl-3 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.title}
                            to={child.path}
                            className={`block px-3 py-2 rounded-xl text-sm font-medium ${
                              location.pathname === child.path
                                ? 'bg-blue-50 text-[#2563EB] font-bold'
                                : 'text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block px-3 py-2.5 rounded-xl text-base font-semibold ${
                        location.pathname === item.path
                          ? 'bg-blue-50 text-[#2563EB]'
                          : 'text-slate-800 hover:bg-slate-100'
                      }`}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                <Link to="/apply-online" className="w-full">
                  <Button variant="accent" size="md" className="w-full" icon={ArrowRight}>
                    Apply Online Now
                  </Button>
                </Link>
                <div className="grid grid-cols-2 gap-2 text-center text-xs font-semibold">
                  <a 
                    href={SCHOOL_INFO.links.parentLogin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200"
                  >
                    Parent Portal
                  </a>
                  <a 
                    href={SCHOOL_INFO.links.alumniLogin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200"
                  >
                    Alumni Portal
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
