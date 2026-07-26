import React from 'react';
import SEOHead from '../../components/common/SEOHead';
import GallerySection from '../../components/sections/gallery/GallerySection';

const GalleryPage = () => {
  return (
    <div className="space-y-8">
      <SEOHead title="Gallery | Pavna International School" description="Photo and video gallery of Pavna International School Aligarh" />
      <GallerySection />
    </div>
  );
};

export default GalleryPage;
