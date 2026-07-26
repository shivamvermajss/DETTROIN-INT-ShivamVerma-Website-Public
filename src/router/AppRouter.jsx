import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import HomePage from '../pages/Home/HomePage';
import AboutPage from '../pages/About/AboutPage';
import AcademicsPage from '../pages/Academics/AcademicsPage';
import AdmissionsPage from '../pages/Admissions/AdmissionsPage';
import InfrastructurePage from '../pages/Infrastructure/InfrastructurePage';
import GalleryPage from '../pages/Gallery/GalleryPage';
import ContactPage from '../pages/Contact/ContactPage';
import NotFoundPage from '../pages/NotFound/NotFoundPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="academics" element={<AcademicsPage />} />
        <Route path="admissions" element={<AdmissionsPage />} />
        <Route path="infrastructure" element={<InfrastructurePage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
