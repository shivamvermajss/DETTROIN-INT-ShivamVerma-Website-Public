import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { Send, Calendar, Download, CheckCircle2 } from 'lucide-react';
import Container from '../ui/container/Container';
import Button from '../ui/buttons/Button';
import { footerData } from './FooterData';

const bannerVariants = {
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
 * FinalCTA Component
 * Premium full-width homepage closing banner featuring CTA buttons, trust badges, and brand gradient aesthetics.
 */
const FinalCTA = () => {
  const { finalCTA } = footerData;
  const { heading, description, primaryText, secondaryText, tertiaryText, trustIndicators } = finalCTA;

  return (
    <section id="apply" className="relative py-12 lg:py-16 bg-white" aria-label="Final Admission Call to Action">
      <Container maxWidth="max-w-7xl">
        <motion.div
          variants={bannerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="relative rounded-3xl bg-gradient-to-r from-[#0B1E36] via-[#123458] to-[#1E40AF] text-white p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden text-center"
        >
          {/* Ambient Lighting Accents */}
          <div
            className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl pointer-events-none translate-y-1/2"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-4xl mx-auto">
            {/* CTA Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
              {heading}
            </h2>

            {/* CTA Description */}
            <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
              {description}
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              <ScrollLink to="contact" spy={true} smooth={true} offset={-80} duration={500} className="cursor-pointer">
                <Button
                  variant="primary"
                  size="lg"
                  icon={Send}
                  iconPosition="left"
                  className="!rounded-full shadow-lg hover:shadow-blue-500/25 cursor-pointer"
                  aria-label="Apply for Admission at Pavna School"
                >
                  {primaryText}
                </Button>
              </ScrollLink>

              <ScrollLink to="contact" spy={true} smooth={true} offset={-80} duration={500} className="cursor-pointer">
                <Button
                  variant="secondary"
                  size="lg"
                  icon={Calendar}
                  iconPosition="left"
                  className="!rounded-full shadow-lg cursor-pointer"
                  aria-label="Schedule a Campus Visit at Pavna School"
                >
                  {secondaryText}
                </Button>
              </ScrollLink>

              <ScrollLink to="contact" spy={true} smooth={true} offset={-80} duration={500} className="cursor-pointer">
                <Button
                  variant="outline"
                  size="lg"
                  icon={Download}
                  iconPosition="left"
                  className="!rounded-full text-white border-white/40 hover:bg-white/10 hover:border-white cursor-pointer"
                  aria-label="Contact Us to Download Pavna School Brochure"
                >
                  {tertiaryText}
                </Button>
              </ScrollLink>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm font-bold text-blue-100">
              {trustIndicators.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default FinalCTA;
