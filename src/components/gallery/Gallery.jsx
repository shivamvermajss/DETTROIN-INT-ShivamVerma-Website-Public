import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Container from '../ui/container/Container';
import ImageWrapper from '../ui/image/ImageWrapper';
import Button from '../ui/buttons/Button';
import GalleryHeader from './GalleryHeader';
import GalleryFilter from './GalleryFilter';
import GalleryGrid from './GalleryGrid';
import GalleryLightbox from './GalleryLightbox';
import GalleryCTA from './GalleryCTA';
import { galleryData } from './GalleryData';

const featureBannerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/**
 * Gallery Component
 * Phase 13 – Main section featuring interactive category filtering, 4-column masonry grid, full-screen accessible Lightbox modal, featured event spotlight, and visit CTAs.
 */
const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentLightboxIndex, setCurrentLightboxIndex] = useState(0);

  const { featuredBanner } = galleryData;

  // Filter images dynamically based on active category
  const filteredImages = useMemo(() => {
    if (activeCategory === 'All') {
      return galleryData.images;
    }
    return galleryData.images.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  const handleOpenLightbox = (index) => {
    setCurrentLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  const handlePrevImage = () => {
    setCurrentLightboxIndex((prevIndex) =>
      prevIndex === 0 ? filteredImages.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentLightboxIndex((prevIndex) =>
      prevIndex === filteredImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section
      className="relative py-16 sm:py-20 lg:py-28 bg-[#F8FAFC] overflow-hidden"
      aria-labelledby="gallery-heading"
    >
      {/* Background Ambient Mesh Glows */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/40 via-indigo-50/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container maxWidth="max-w-7xl">
        {/* Section Header */}
        <GalleryHeader />

        {/* Category Filters */}
        <GalleryFilter
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {/* Responsive Gallery Grid */}
        <GalleryGrid
          images={filteredImages}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Featured Event Banner Spotlight */}
        <motion.div
          variants={featureBannerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="my-16 lg:my-20 relative rounded-3xl bg-white border border-slate-200/80 shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-8 lg:p-12">
            {/* Image Column */}
            <div className="lg:col-span-7 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <ImageWrapper
                  src={featuredBanner.image}
                  alt={featuredBanner.title}
                  aspectRatio="auto"
                  rounded="lg"
                  shadow={false}
                  className="w-full h-[280px] sm:h-[360px] lg:h-[400px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-5 flex flex-col justify-center text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3 w-fit border border-blue-100/80">
                {featuredBanner.badgeText}
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#123458] tracking-tight mb-4 leading-tight">
                {featuredBanner.title}
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                {featuredBanner.description}
              </p>

              <div>
                <Link to="/about" className="focus:outline-none">
                  <Button
                    variant="primary"
                    size="md"
                    icon={ArrowRight}
                    iconPosition="right"
                    aria-label="View Event Gallery details"
                  >
                    View Event Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section CTA */}
        <GalleryCTA />

        {/* Lightbox Modal Dialog */}
        <GalleryLightbox
          isOpen={lightboxOpen}
          currentIndex={currentLightboxIndex}
          images={filteredImages}
          onClose={handleCloseLightbox}
          onPrev={handlePrevImage}
          onNext={handleNextImage}
        />
      </Container>
    </section>
  );
};

export default Gallery;
