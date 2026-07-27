import { 
  FileText, 
  Users, 
  ClipboardCheck, 
  ShieldCheck, 
  CreditCard, 
  GraduationCap, 
  FileCheck, 
  Image, 
  Award, 
  HeartPulse 
} from 'lucide-react';

/**
 * Admission Data
 * Stores 6 timeline steps, 5 eligibility tiers, 6 required documents, scholarship details, 4 FAQ items, and section CTAs.
 */
export const admissionData = {
  badge: "Admissions 2026-27",
  heading: "Your Journey to Excellence Begins Here",
  description: "Our admission process is simple, transparent, and designed to help families seamlessly become part of the Pavna International School community.",
  timeline: [
    {
      step: "01",
      title: "Submit Enquiry",
      description: "Fill out our quick online enquiry form or visit our admissions office in person.",
      icon: FileText
    },
    {
      step: "02",
      title: "Counseling Session",
      description: "Meet our counselors for a guided campus tour and personalized curriculum overview.",
      icon: Users
    },
    {
      step: "03",
      title: "Assessment",
      description: "Age-appropriate interaction or foundational skill assessment (Grades III and above).",
      icon: ClipboardCheck
    },
    {
      step: "04",
      title: "Document Verification",
      description: "Submit essential student documents and previous academic transcripts.",
      icon: ShieldCheck
    },
    {
      step: "05",
      title: "Fee Confirmation",
      description: "Complete initial fee payment to secure student seat allocation.",
      icon: CreditCard
    },
    {
      step: "06",
      title: "Admission Complete",
      description: "Receive student orientation package, uniforms, books, and class schedule.",
      icon: GraduationCap
    }
  ],
  eligibility: [
    {
      id: "pre-primary",
      category: "Pre-Primary",
      grades: "Nursery – KG",
      age: "Age 3–5 Years",
      description: "Play-based interaction focusing on motor skills, social readiness, and language foundation."
    },
    {
      id: "primary",
      category: "Primary School",
      grades: "Classes I – V",
      age: "Age 6–10 Years",
      description: "Foundational literacy, basic math assessment, and previous academic progress review."
    },
    {
      id: "middle",
      category: "Middle School",
      grades: "Classes VI – VIII",
      age: "Age 11–13 Years",
      description: "Assessment in English, Mathematics, and Science alongside student interview."
    },
    {
      id: "secondary",
      category: "Secondary School",
      grades: "Classes IX – X",
      age: "Age 14–15 Years",
      description: "CBSE curriculum assessment in core subjects and valid transfer certificate from recognized school."
    },
    {
      id: "senior-secondary",
      category: "Senior Secondary",
      grades: "Classes XI – XII",
      age: "Age 16–17 Years",
      description: "Stream selection based on Class X CBSE Board examination percentage and career counseling."
    }
  ],
  documents: [
    {
      id: "birth-cert",
      title: "Birth Certificate",
      description: "Official municipal or Registrar birth certificate copy for age confirmation.",
      icon: FileCheck
    },
    {
      id: "photos",
      title: "Passport Photographs",
      description: "Recent color passport-sized photographs of student and parents/guardians.",
      icon: Image
    },
    {
      id: "report-card",
      title: "Previous Report Card",
      description: "Transcripts or marksheets from the last attended academic year.",
      icon: FileText
    },
    {
      id: "tc",
      title: "Transfer Certificate (TC)",
      description: "Original signed TC from previous recognized school (Classes II and above).",
      icon: Award
    },
    {
      id: "id-proof",
      title: "Aadhaar Card / ID Proof",
      description: "Photocopy of Aadhaar Card or Passport for student and parents.",
      icon: CreditCard
    },
    {
      id: "medical-cert",
      title: "Medical Fitness Certificate",
      description: "Health record and immunization certificate signed by registered doctor.",
      icon: HeartPulse
    }
  ],
  scholarship: {
    title: "Pavna Merit & Talent Scholarship Scheme",
    badge: "Scholarships Available",
    description: "We are committed to empowering exceptional talent. We offer up to 50% tuition fee waivers for academic board toppers, state & national sports champions, and Olympiad rank holders.",
    benefits: [
      "Up to 50% Tuition Fee Waiver",
      "Special Sports & Olympiad Coaching",
      "Academic Excellence Mentorship",
      "Applicable for Grades VI through XII"
    ],
    ctaText: "Apply For Scholarship",
    ctaLink: "/admissions"
  },
  faqs: [
    {
      id: "faq-1",
      question: "When does the admission process start for the upcoming academic session?",
      answer: "Admissions for the 2026-27 academic year open in October. Early bird registrations and campus tours are conducted on all working days from 9:00 AM to 4:00 PM."
    },
    {
      id: "faq-2",
      question: "Is school transportation available across Aligarh and surrounding regions?",
      answer: "Yes, Pavna International School operates a fleet of air-conditioned, GPS-tracked buses with trained female attendants covering major routes across Aligarh and adjacent areas."
    },
    {
      id: "faq-3",
      question: "Is an entrance assessment compulsory for all classes?",
      answer: "For Pre-Primary to Class II, admission is based on informal interaction. For Class III onwards, a foundational skill assessment in English, Mathematics, and Science is conducted."
    },
    {
      id: "faq-4",
      question: "How can parents schedule a campus visit and meeting with the Principal?",
      answer: "Parents can schedule a visit by filling our online tour booking form, contacting our admission helpline at +91 99270 00551, or emailing admissions@pavnaschool.com."
    }
  ],
  cta: {
    heading: "Ready to Join Pavna School?",
    description: "Begin your child's journey toward academic excellence, holistic growth, and lifelong leadership today.",
    primaryText: "Apply Online Now",
    primaryPath: "/admissions",
    secondaryText: "Schedule Campus Visit",
    secondaryPath: "/contact",
    brochureText: "Download Admission Brochure"
  }
};
