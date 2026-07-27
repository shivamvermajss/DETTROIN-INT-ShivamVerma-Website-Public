import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from '../footer/Footer';
import ScrollToTop from '../common/ScrollToTop';
import ScrollProgressBar from '../common/ScrollProgressBar';

/**
 * Global Main Layout Component
 * Standard layout structure: ScrollProgressBar + Header + Main Outlet + Footer
 */
const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#111827] font-sans antialiased selection:bg-[#2563EB] selection:text-white">
      <ScrollProgressBar />
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
