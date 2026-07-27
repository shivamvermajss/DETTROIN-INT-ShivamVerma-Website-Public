import React from 'react';
import { Link } from 'react-router-dom';

/**
 * FooterLinks Component
 * Reusable list column rendering navigation or admissions links.
 */
const FooterLinks = ({ title, links }) => {
  return (
    <div className="text-left">
      <h3 className="text-base font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-700/80 pb-2">
        {title}
      </h3>

      <ul className="space-y-2.5">
        {links.map((link, idx) => (
          <li key={idx}>
            <Link
              to={link.path}
              className="text-xs sm:text-sm text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 focus:outline-none focus:text-white"
            >
              <span className="text-blue-500 font-bold text-xs">›</span>
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
