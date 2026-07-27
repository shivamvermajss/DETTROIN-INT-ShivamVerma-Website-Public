import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import TestimonialCard from './TestimonialCard';
import { testimonialsData } from './TestimonialsData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const sliderVariants = {
  hidden: { opacity: 0, y: 25 },
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
 * TestimonialsSlider Component
 * Renders the Swiper.js parent testimonials carousel with 3-column desktop / 2-column tablet / 1-column mobile responsiveness.
 */
const TestimonialsSlider = () => {
  const { parentTestimonials } = testimonialsData;

  return (
    <div className="mb-16 lg:mb-20 relative">
      <div className="text-center mb-8">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#123458] tracking-tight mb-2">
          Parent Experiences & Trust
        </h3>
        <p className="text-sm sm:text-base text-slate-600">
          Read what parents say about our academic rigor, safety, and nurturing environment.
        </p>
      </div>

      <motion.div
        variants={sliderVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="pb-12 px-2"
      >
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          keyboard={{ enabled: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 28,
            },
          }}
          className="testimonials-swiper !pb-12"
        >
          {parentTestimonials.map((item) => (
            <SwiperSlide key={item.id} className="h-auto">
              <TestimonialCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default TestimonialsSlider;
