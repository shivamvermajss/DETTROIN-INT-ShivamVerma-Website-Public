import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import ImageWrapper from '../ui/image/ImageWrapper';

/**
 * GalleryLightbox Component
 * Fullscreen accessible Lightbox modal with keyboard navigation (Escape, Left Arrow, Right Arrow) and touch controls.
 */
const GalleryLightbox = ({ isOpen, currentIndex, images, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !images || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`Lightbox image preview: ${currentImage.title}`}
        >
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md -z-10"
            aria-hidden="true"
          />

          {/* Top Controls: Counter & Close */}
          <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-auto">
            <span className="text-xs sm:text-sm font-bold text-white/90 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              {currentIndex + 1} / {images.length}
            </span>

            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-slate-900 border border-white/20 flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Previous Button */}
          <button
            onClick={onPrev}
            className="absolute left-4 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-slate-900 border border-white/20 flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={onNext}
            className="absolute right-4 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-slate-900 border border-white/20 flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Lightbox Content Area with Spring Entrance */}
          <motion.div
            key={currentImage.id}
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 15 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            className="relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col my-auto max-h-[85vh]"
          >
            {/* Image Container */}
            <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[540px] bg-black">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full"
                >
                  <ImageWrapper
                    src={currentImage.image}
                    alt={currentImage.title}
                    aspectRatio="auto"
                    rounded="none"
                    shadow={false}
                    className="w-full h-full"
                    imgClassName="object-contain w-full h-full"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Details Caption */}
            <div className="p-5 sm:p-6 bg-slate-900 border-t border-white/10 text-left">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
                  {currentImage.category}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                {currentImage.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                {currentImage.description}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default GalleryLightbox;
