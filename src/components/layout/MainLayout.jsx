import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '../common/ScrollToTop';
import BackToTop from '../common/BackToTop';

/**
 * Global Main Layout Component
 * Standard layout structure: Header + Main Outlet + Footer + Scroll Utilities
 */
const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#111827] font-sans antialiased selection:bg-[#2563EB] selection:text-white">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default MainLayout;
