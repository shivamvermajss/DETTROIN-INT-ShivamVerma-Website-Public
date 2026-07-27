import React from 'react';
import { Link } from 'react-router-dom';
import { SCHOOL_INFO } from '../../constants/siteConstants';

const NavLogo = ({ isScrolled = false }) => {
  return (
    <Link to="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#2563EB] rounded-xl p-1 transition-all">
      {/* Brand Icon Badge */}
      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#123458] text-white flex items-center justify-center font-extrabold text-xl shadow-md group-hover:scale-105 group-hover:bg-[#2563EB] transition-all duration-300">
        P
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <span className="font-extrabold text-lg sm:text-xl text-[#123458] tracking-tight leading-none group-hover:text-[#2563EB] transition-colors">
          PAVNA
        </span>
        <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 tracking-wider uppercase mt-0.5">
          International School
        </span>
      </div>
    </Link>
  );
};

export default NavLogo;
