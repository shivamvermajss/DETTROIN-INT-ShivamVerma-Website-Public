import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';
import { cn } from '../../utils/cn';

const navItems = [
  { label: 'Home', target: 'home' },
  { label: 'About', target: 'about' },
  { label: 'Academics', target: 'academics' },
  { label: 'Facilities', target: 'facilities' },
  { label: 'Gallery', target: 'gallery' },
  { label: 'FAQ', target: 'faq' },
  { label: 'Contact', target: 'contact' },
];

const NavLinks = ({ className = '', onLinkClick }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (target, e) => {
    if (onLinkClick) onLinkClick();
    if (location.pathname !== '/') {
      e?.preventDefault();
      navigate(`/#${target}`);
    }
  };

  return (
    <ul className={cn('flex items-center gap-1 lg:gap-2', className)}>
      {navItems.map((item) => (
        <li key={item.target}>
          <ScrollLink
            to={item.target}
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            activeClass="text-[#2563EB] bg-blue-50/80 font-bold shadow-xs"
            onClick={(e) => handleClick(item.target, e)}
            className="px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-[#123458] hover:bg-slate-100/80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#2563EB] cursor-pointer block"
            aria-label={`Navigate to ${item.label} section`}
          >
            {item.label}
          </ScrollLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
