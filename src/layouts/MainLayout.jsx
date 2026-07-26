import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#111827] font-sans antialiased">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
