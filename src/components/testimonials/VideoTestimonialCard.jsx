import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Video } from 'lucide-react';
import ImageWrapper from '../ui/image/ImageWrapper';
import { testimonialsData } from './TestimonialsData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/**
 * VideoTestimonialCard Component
 * Displays 3 video testimonial preview cards with play overlays and an accessible placeholder modal on click.
 */
const VideoTestimonialCard = () => {
  const { videoTestimonials } = testimonialsData;
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <div className="my-16 lg:my-20">
      <div className="text-center mb-8">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#123458] tracking-tight mb-2">
          Video Stories & Campus Interviews
        </h3>
        <p className="text-sm sm:text-base text-slate-600">
          Watch firsthand video accounts from parents, alumni, and student leaders.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
      >
        {videoTestimonials.map((item) => {
          const { id, name, role, title, duration, thumbnail } = item;
          return (
            <motion.div
              key={id}
              variants={cardVariants}
              tabIndex={0}
              role="button"
              aria-label={`Watch video story: ${title} by ${name}`}
              onClick={() => setActiveVideo(item)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveVideo(item);
                }
              }}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              <div className="relative h-60 sm:h-64 w-full">
                <ImageWrapper
                  src={thumbnail}
                  alt={name}
                  aspectRatio="auto"
                  rounded="none"
                  shadow={false}
                  className="w-full h-full"
                  imgClassName="group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/20 pointer-events-none" />

                {/* Duration Badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-950/80 text-white text-[11px] font-bold backdrop-blur-md border border-white/20">
                  {duration}
                </div>

                {/* Center Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-white/90 text-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Play className="w-6 h-6 fill-current ml-1" aria-hidden="true" />
                  </div>
                </div>

                {/* Bottom Details */}
                <div className="absolute bottom-4 left-4 right-4 text-left pointer-events-none">
                  <p className="text-xs font-bold text-blue-300 mb-1">
                    {name} {role && `• ${role}`}
                  </p>
                  <h4 className="text-sm sm:text-base font-bold text-white leading-snug group-hover:text-blue-200 transition-colors">
                    {title}
                  </h4>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Video Modal Placeholder Dialog */}
      <AnimatePresence>
        {activeVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label={`Video preview: ${activeVideo.title}`}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveVideo(null)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md -z-10"
              aria-hidden="true"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-2xl bg-slate-900 rounded-3xl p-6 text-white text-center shadow-2xl border border-white/10"
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 text-white hover:bg-white hover:text-slate-900 flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                <Video className="w-8 h-8" aria-hidden="true" />
              </div>

              <span className="inline-block text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">
                Video Interview Preview
              </span>

              <h3 className="text-xl font-bold text-white mb-2">
                {activeVideo.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 mb-6">
                Featured speaker: <span className="text-white font-semibold">{activeVideo.name}</span>
              </p>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-400">
                Full high-definition video playback is available during live campus tours and official virtual webinars.
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VideoTestimonialCard;
