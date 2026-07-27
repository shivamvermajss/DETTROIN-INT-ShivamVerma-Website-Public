import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import ImageWrapper from '../ui/image/ImageWrapper';

/**
 * FacilityModal Component
 * Accessible, animated modal dialog displaying detailed facility specifications and image gallery.
 */
const FacilityModal = ({ facility, isOpen, onClose }) => {
  const modalRef = useRef(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Lock body scroll when modal is active
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!facility) return null;

  const { title, fullDescription, icon: Icon, image, highlights } = facility;
  const modalTitleId = `facility-modal-title-${facility.id}`;
  const modalDescId = `facility-modal-desc-${facility.id}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby={modalTitleId}
          aria-describedby={modalDescId}
        >
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-md -z-10"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[90vh] flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md text-slate-700 hover:text-slate-900 hover:bg-white shadow-md flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-blue-600"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Scrollable Content */}
            <div className="overflow-y-auto p-6 sm:p-8">
              {/* Modal Banner Image */}
              <div className="relative mb-6 rounded-2xl overflow-hidden h-56 sm:h-64 border border-slate-200">
                <ImageWrapper
                  src={image}
                  alt={title}
                  aspectRatio="auto"
                  rounded="lg"
                  shadow={false}
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Title & Icon Header */}
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 id={modalTitleId} className="text-2xl font-extrabold text-[#123458]">
                    {title}
                  </h3>
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                    Infrastructure Spotlight
                  </span>
                </div>
              </div>

              {/* Full Description */}
              <p id={modalDescId} className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                {fullDescription}
              </p>

              {/* Key Highlights */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80">
                <h4 className="text-sm font-bold text-slate-900 mb-3">
                  Key Infrastructure Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {highlights.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" aria-hidden="true" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default FacilityModal;
