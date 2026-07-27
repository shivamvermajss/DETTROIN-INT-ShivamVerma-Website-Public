import React from 'react';
import { Link } from 'react-router-dom';
import { footerData } from './FooterData';

/**
 * FooterBottom Component
 * Displays dynamic copyright year, legal policy links, and quality education tagline.
 */
const FooterBottom = () => {
  const { legalLinks } = footerData;
  const currentYear = new Date().getFullYear();

  return (
    <div className="py-6 border-t border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* Copyright */}
      <div className="text-center sm:text-left">
        © {currentYear} Pavna International School. All Rights Reserved.
      </div>

      {/* Legal Links */}
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
        {legalLinks.map((link, idx) => (
          <Link
            key={idx}
            to={link.path}
            className="hover:text-white transition-colors focus:outline-none focus:text-white"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Tagline */}
      <div className="text-center sm:text-right text-slate-400">
        Designed with <span className="text-rose-500" aria-label="love">❤️</span> for quality education
      </div>
    </div>
  );
};

export default FooterBottom;
