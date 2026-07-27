import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NavLogo from './NavLogo';
import NavLinks from './NavLinks';
import CTAButton from './CTAButton';
import MobileMenu from './MobileMenu';
import MobileDrawer from './MobileDrawer';
import Container from '../ui/container/Container';
import { cn } from '../../utils/cn';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300',
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-sm py-2 sm:py-3'
            : 'bg-white/95 backdrop-blur-md border-b border-slate-100 py-2.5 sm:py-4'
        )}
      >
        <Container>
          <nav 
            className="flex items-center justify-between gap-4"
            aria-label="Main Navigation"
          >
            {/* Left Aligned Brand Logo */}
            <NavLogo isScrolled={isScrolled} />

            {/* Desktop & Tablet Nav Links (hidden on mobile <1024px) */}
            <div className="hidden lg:flex items-center justify-center flex-grow mx-8">
              <NavLinks />
            </div>

            {/* Right Aligned CTA Button (desktop & tablet >=768px) */}
            <div className="hidden sm:flex items-center gap-3">
              <CTAButton />
            </div>

            {/* Mobile Hamburger Menu Toggle (<1024px) */}
            <MobileMenu
              isOpen={isMobileOpen}
              onToggle={() => setIsMobileOpen(!isMobileOpen)}
            />
          </nav>
        </Container>
      </motion.header>

      {/* Slide-out Mobile Drawer */}
      <MobileDrawer
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />
    </>
  );
};

export default Navbar;
