import React from 'react';
import SEOHead from '../../components/common/SEOHead';
import ContactSection from '../../components/sections/contact/ContactSection';

const ContactPage = () => {
  return (
    <div className="space-y-8">
      <SEOHead title="Contact Us | Pavna International School" description="Contact Pavna International School Aligarh" />
      <ContactSection />
    </div>
  );
};

export default ContactPage;
