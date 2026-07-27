import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ImageWrapper from '../ui/image/ImageWrapper';
import Button from '../ui/buttons/Button';
import { studentLifeData } from './StudentLifeData';

const galleryContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/**
 * StudentLifeGallery Component
 * Displays a responsive grid gallery of campus moments with hover zoom dynamics and lazy loading.
 */
const StudentLifeGallery = () => {
  const { gallery } = studentLifeData;

  return (
    <div className="my-16 lg:my-20">
      <div className="text-center mb-8">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#123458] tracking-tight mb-2">
          Campus Life Moments & Gallery
        </h3>
        <p className="text-sm sm:text-base text-slate-600">
          A visual glimpse into our vibrant daily life, annual celebrations, and student events.
        </p>
      </div>

      <motion.div
        variants={galleryContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
      >
        {gallery.map((item) => {
          const { id, title, category, image } = item;
          return (
            <motion.div
              key={id}
              variants={itemVariants}
              tabIndex={0}
              role="region"
              aria-label={title}
              className="group relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <ImageWrapper
                src={image}
                alt={title}
                aspectRatio="auto"
                rounded="none"
                shadow={false}
                className="w-full h-64 sm:h-72"
                imgClassName="group-hover:scale-105 transition-transform duration-500"
              />

              {/* Light Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Category Badge & Title Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/90 text-[#123458] mb-1">
                  {category}
                </span>
                <h4 className="text-base font-bold text-white group-hover:text-blue-200 transition-colors">
                  {title}
                </h4>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* View All Gallery Link Button */}
      <div className="text-center">
        <Link to="/about" className="focus:outline-none">
          <Button
            variant="outline"
            size="md"
            icon={ArrowRight}
            iconPosition="right"
            aria-label="View all campus life photo gallery moments"
          >
            View All Campus Gallery
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default StudentLifeGallery;
