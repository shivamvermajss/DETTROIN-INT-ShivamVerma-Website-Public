import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/container/Container';
import ImageWrapper from '../ui/image/ImageWrapper';
import TestimonialsHeader from './TestimonialsHeader';
import CommunityStats from './CommunityStats';
import TestimonialsSlider from './TestimonialsSlider';
import VideoTestimonialCard from './VideoTestimonialCard';
import TrustBadges from './TrustBadges';
import TestimonialsCTA from './TestimonialsCTA';
import { testimonialsData } from './TestimonialsData';

const storiesContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const storyCardVariants = {
  hidden: { opacity: 0, y: 25 },
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
 * Testimonials Component
 * Phase 15 – Main section showcasing community voices, parent slider, student stories, video previews, trust badges, and CTAs.
 */
const Testimonials = () => {
  const { studentStories } = testimonialsData;

  return (
    <section
      className="relative py-16 sm:py-20 lg:py-28 bg-[#F8FAFC] overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Background Soft Mesh Glow Accents */}
      <div
        className="absolute top-1/4 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10 translate-x-1/3"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none -z-10 -translate-x-1/3"
        aria-hidden="true"
      />

      <Container maxWidth="max-w-7xl">
        {/* Section Header */}
        <TestimonialsHeader />

        {/* Community Statistics */}
        <CommunityStats />

        {/* Parent Testimonials Swiper Carousel */}
        <TestimonialsSlider />

        {/* Student & Alumni Success Stories */}
        <div className="my-16 lg:my-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#123458] tracking-tight mb-2">
              Student & Alumni Journey Stories
            </h3>
            <p className="text-sm sm:text-base text-slate-600">
              Inspiring paths of leadership, sports excellence, and academic achievement.
            </p>
          </div>

          <motion.div
            variants={storiesContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {studentStories.map((story) => {
              const { id, name, type, currentRole, photo, story: storyText } = story;
              return (
                <motion.div
                  key={id}
                  variants={storyCardVariants}
                  tabIndex={0}
                  role="region"
                  aria-label={`${name} story`}
                  className="group p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-blue-200 transition-all duration-300 flex flex-col justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  <div>
                    <div className="flex items-center gap-3.5 mb-4">
                      <ImageWrapper
                        src={photo}
                        alt={name}
                        aspectRatio="square"
                        rounded="full"
                        shadow={false}
                        className="w-14 h-14 shrink-0 border border-slate-200"
                      />
                      <div>
                        <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {name}
                        </h4>
                        <span className="inline-block text-[11px] font-semibold text-blue-600">
                          {type}
                        </span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="inline-block text-xs font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-800">
                        {currentRole}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                      "{storyText}"
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Video Testimonials Preview */}
        <VideoTestimonialCard />

        {/* Trust Badges */}
        <TrustBadges />

        {/* Section CTA */}
        <TestimonialsCTA />
      </Container>
    </section>
  );
};

export default Testimonials;
