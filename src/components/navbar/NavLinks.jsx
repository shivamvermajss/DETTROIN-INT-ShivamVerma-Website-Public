import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '../../utils/cn';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Academics', path: '/academics' },
  { label: 'Facilities', path: '/infrastructure' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Contact', path: '/contact' },
];

const NavLinks = ({ className = '', onLinkClick }) => {
  return (
    <ul className={cn('flex items-center gap-1 lg:gap-2', className)}>
      {navItems.map((item) => (
        <li key={item.path}>
          <NavLink
            to={item.path}
            end={item.path === '/'}
            onClick={onLinkClick}
            className={({ isActive }) =>
              cn(
                'px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#2563EB]',
                isActive
                  ? 'text-[#2563EB] bg-blue-50/80 font-bold shadow-xs'
                  : 'text-slate-700 hover:text-[#123458] hover:bg-slate-100/80'
              )
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
