import React from 'react';
import { MapPin, Phone, Mail, Clock, PhoneCall } from 'lucide-react';
import { footerData } from './FooterData';

/**
 * FooterContact Component
 * Displays institutional address, phone lines, email address, and official office hours.
 */
const FooterContact = () => {
  const { contact } = footerData;

  return (
    <div className="text-left">
      <h3 className="text-base font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-700/80 pb-2">
        Get In Touch
      </h3>

      <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300">
        {/* Address */}
        <li className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
          <span>{contact.address}</span>
        </li>

        {/* Admissions Helpline Phone */}
        <li className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-blue-400 shrink-0" aria-hidden="true" />
          <a
            href={contact.phoneUrl}
            className="hover:text-white transition-colors focus:outline-none focus:underline"
            aria-label={`Call admissions helpline at ${contact.phone}`}
          >
            {contact.phone}
          </a>
        </li>

        {/* Emergency Helpline */}
        <li className="flex items-center gap-3">
          <PhoneCall className="w-5 h-5 text-amber-400 shrink-0" aria-hidden="true" />
          <a
            href={contact.emergencyUrl}
            className="hover:text-white transition-colors focus:outline-none focus:underline text-slate-300"
            aria-label={`Call 24/7 emergency helpline at ${contact.emergencyPhone}`}
          >
            {contact.emergencyPhone} <span className="text-[10px] text-amber-300 font-semibold">(24/7 Helpline)</span>
          </a>
        </li>

        {/* Email */}
        <li className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-blue-400 shrink-0" aria-hidden="true" />
          <a
            href={contact.emailUrl}
            className="hover:text-white transition-colors focus:outline-none focus:underline"
            aria-label={`Email school admissions at ${contact.email}`}
          >
            {contact.email}
          </a>
        </li>

        {/* Office Hours */}
        <li className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-blue-400 shrink-0" aria-hidden="true" />
          <span>{contact.hours}</span>
        </li>
      </ul>
    </div>
  );
};

export default FooterContact;
