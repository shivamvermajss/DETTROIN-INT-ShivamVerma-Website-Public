import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Header />
      <main className="flex-grow p-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
