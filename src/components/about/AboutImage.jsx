import React from 'react';
import { motion } from 'framer-motion';
import ImageWrapper from '../ui/image/ImageWrapper';
import { aboutData } from './AboutData';

/**
 * AboutImage Component
 * Displays the main campus image collage with an animated floating glassmorphism achievement badge overlay.
 */
const AboutImage = () => {
  const { campusImage, floatingBadge } = aboutData;
  const { icon: BadgeIcon, title, subtitle } = floatingBadge;

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-lg lg:max-w-none mx-auto"
    >
      {/* Decorative Outer Glow Backdrop */}
      <div 
        className="absolute -inset-4 bg-gradient-to-tr from-blue-500/15 via-amber-400/10 to-indigo-500/15 rounded-[36px] blur-2xl -z-10 pointer-events-none" 
        aria-hidden="true"
      />

      {/* Main Image Frame Container */}
      <div className="relative p-3 bg-white/90 backdrop-blur-md rounded-[32px] border border-slate-200/80 shadow-xl overflow-hidden">
        <ImageWrapper
          src={campusImage.src}
          alt={campusImage.alt}
          aspectRatio="auto"
          rounded="2xl"
          shadow={false}
          className="w-full h-[380px] sm:h-[480px] lg:h-[560px]"
        />

        {/* Subtle Image Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none" />

        {/* Floating Achievement Badge Overlay */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          className="absolute bottom-6 left-6 right-6 sm:left-8 sm:right-auto sm:max-w-xs glass-card p-4 sm:p-5 rounded-2xl shadow-2xl border border-white/60 bg-white/85 backdrop-blur-xl flex items-center gap-4 group"
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-400 to-amber-600 p-0.5 shadow-md shrink-0 flex items-center justify-center">
            <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
              <BadgeIcon className="w-6 h-6 text-amber-600 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
            </div>
          </div>

          <div>
            <h4 className="text-base font-extrabold text-[#123458] leading-tight">
              {title}
            </h4>
            <p className="text-xs font-medium text-slate-600 mt-0.5">
              {subtitle}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutImage;
