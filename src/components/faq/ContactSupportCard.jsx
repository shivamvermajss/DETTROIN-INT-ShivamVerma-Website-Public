import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Headphones, Phone, Mail, ArrowRight } from 'lucide-react';
import Button from '../ui/buttons/Button';
import { faqData } from './FAQData';

const cardVariants = {
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
 * ContactSupportCard Component
 * Displays a premium glass card inviting parents to connect directly with admissions via call, email, or contact form.
 */
const ContactSupportCard = () => {
  const { supportCard } = faqData;

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="my-16 lg:my-20 relative rounded-3xl bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/50 backdrop-blur-md border border-blue-200/80 p-8 sm:p-10 lg:p-12 shadow-xl overflow-hidden text-center max-w-4xl mx-auto"
    >
      <div className="w-16 h-16 rounded-2xl bg-[#123458] text-white flex items-center justify-center mx-auto mb-4 shadow-md">
        <Headphones className="w-8 h-8" aria-hidden="true" />
      </div>

      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#123458] mb-3">
        {supportCard.heading}
      </h3>

      <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
        {supportCard.description}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link to={supportCard.contactLink} className="focus:outline-none">
          <Button
            variant="primary"
            size="md"
            icon={ArrowRight}
            iconPosition="right"
            aria-label="Contact Admissions team"
          >
            {supportCard.contactText}
          </Button>
        </Link>

        <a href={supportCard.phoneLink} className="focus:outline-none">
          <Button
            variant="secondary"
            size="md"
            icon={Phone}
            iconPosition="left"
            aria-label={`Call Admissions helpline at ${supportCard.phoneText}`}
          >
            Call {supportCard.phoneText}
          </Button>
        </a>

        <a href={supportCard.emailLink} className="focus:outline-none">
          <Button
            variant="outline"
            size="md"
            icon={Mail}
            iconPosition="left"
            aria-label={`Email Admissions team at ${supportCard.emailText}`}
          >
            Email Us
          </Button>
        </a>
      </div>
    </motion.div>
  );
};

export default ContactSupportCard;
