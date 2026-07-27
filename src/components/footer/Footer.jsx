import React from 'react';
import Container from '../ui/container/Container';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';
import BackToTop from './BackToTop';

/**
 * Footer Component
 * Phase 17 – Primary footer section comprising 4 columns, newsletter, campus map card, legal copyright bar, and floating back-to-top button.
 */
const Footer = () => {
  return (
    <footer id="contact" className="relative bg-[#0A192F] text-slate-200 overflow-hidden" role="contentinfo">
      {/* Background Soft Glow Accents */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/3"
        aria-hidden="true"
      />

      <Container maxWidth="max-w-7xl">
        {/* Main Footer Top Grid & Newsletter */}
        <FooterTop />

        {/* Footer Bottom Bar */}
        <FooterBottom />
      </Container>

      {/* Floating Smooth Scroll Back to Top Button */}
      <BackToTop />
    </footer>
  );
};

export default Footer;
