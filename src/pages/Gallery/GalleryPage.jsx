import React from 'react';
import SEOHead from '../../components/common/SEOHead';
import Gallery from '../../components/gallery/Gallery';

const GalleryPage = () => {
  return (
    <div>
      <SEOHead title="Gallery | Pavna International School" description="Photo and video gallery of Pavna International School Aligarh" />
      <Gallery />
    </div>
  );
};

export default GalleryPage;
