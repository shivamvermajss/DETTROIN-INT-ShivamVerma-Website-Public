/**
 * FAQ Data
 * Stores 14 comprehensive FAQ items across 7 categories, search keywords, support card info, and section CTAs.
 */
export const faqCategories = [
  "All",
  "Admissions",
  "Academics",
  "Transport",
  "Facilities",
  "Fees",
  "Student Life",
  "Policies"
];

export const faqData = {
  badge: "Frequently Asked Questions",
  heading: "Answers to Common Questions",
  description: "Find quick, detailed answers about admissions, CBSE curriculum, campus facilities, fee structures, transport safety, and student policies.",
  faqs: [
    {
      id: "faq-1",
      category: "Admissions",
      question: "How can I apply for admission at Pavna International School?",
      answer: "Applying is simple. You can fill out our online enquiry form on the website, visit our admissions office on campus during working hours (9:00 AM to 4:00 PM), or call our admissions helpline at +91 99270 00551."
    },
    {
      id: "faq-2",
      category: "Admissions",
      question: "Is there an entrance examination for admission?",
      answer: "For Pre-Primary to Class II, admission is based on informal student-parent interaction. For Class III onwards, a foundational skill assessment in English, Mathematics, and Science is conducted to understand the child's learning stage."
    },
    {
      id: "faq-3",
      category: "Admissions",
      question: "What documents are required during formal admission verification?",
      answer: "Required documents include official Birth Certificate copy, Passport-sized photographs of student & parents, previous school Report Card/Marksheet, original Transfer Certificate (TC for Class II+), Aadhaar Card copies, and Medical Fitness Certificate."
    },
    {
      id: "faq-4",
      category: "Academics",
      question: "What curriculum does Pavna International School follow?",
      answer: "We follow the Central Board of Secondary Education (CBSE) curriculum integrated with global STEM/Robotics modules and the Emory University SEEL (Social, Emotional, and Ethical Learning) framework from Pre-Primary through Class XII."
    },
    {
      id: "faq-5",
      category: "Academics",
      question: "What streams are offered for Senior Secondary (Classes XI & XII)?",
      answer: "We offer three comprehensive streams: Science (PCM/PCB with CS/Biotech), Commerce (Accountancy, Business Studies, Economics with Applied Math), and Humanities (Political Science, Psychology, Sociology, History) along with elective vocational courses."
    },
    {
      id: "faq-6",
      category: "Transport",
      question: "Is school transportation available across Aligarh and surrounding regions?",
      answer: "Yes, Pavna operates a modern fleet of air-conditioned, GPS-tracked school buses equipped with speed governors, CCTV cameras, and trained female attendants covering major routes across Aligarh, Hathras, and nearby areas."
    },
    {
      id: "faq-7",
      category: "Transport",
      question: "How do parents track school bus locations in real-time?",
      answer: "Parents get access to our dedicated mobile app which provides real-time GPS tracking, driver details, estimated pickup/drop-off times, and instant notifications when the bus approaches your designated stop."
    },
    {
      id: "faq-8",
      category: "Facilities",
      question: "Does the school provide smart digital classrooms and AI labs?",
      answer: "Yes, 100% of our classrooms are equipped with 4K interactive digital touch panels. Our campus features specialized AI & Robotics maker spaces, advanced Physics/Chemistry/Biology labs, and high-speed computer suites."
    },
    {
      id: "faq-9",
      category: "Facilities",
      question: "Is medical assistance and emergency care available on campus?",
      answer: "We have an infirmary with a full-time certified nurse, first-aid equipment, emergency oxygen supply, and a dedicated ambulance on standby tied with leading super-specialty hospitals in Aligarh."
    },
    {
      id: "faq-10",
      category: "Fees",
      question: "What is the fee payment schedule and accepted payment modes?",
      answer: "School fees are paid quarterly (April, July, October, January). Payments can be made online via net banking, UPI, credit/debit cards through our ERP parent portal, or via demand draft at the school accounts desk."
    },
    {
      id: "faq-11",
      category: "Fees",
      question: "Are scholarships offered for meritorious students and athletes?",
      answer: "Yes! Under the Pavna Merit & Talent Scholarship Scheme, we award up to 50% tuition fee waivers to academic board toppers, national/state sports medalists, and top rankers in recognized Olympiads."
    },
    {
      id: "faq-12",
      category: "Student Life",
      question: "What co-curricular clubs and sports activities are available?",
      answer: "Students can choose from 15+ academies including swimming, target shooting, basketball, football, martial arts, dramatics, robotics, debate & MUN, classical dance, visual arts, and photography."
    },
    {
      id: "faq-13",
      category: "Student Life",
      question: "What are the school timings for day scholars and residential boarders?",
      answer: "Pre-Primary timings are 8:30 AM to 12:30 PM. Classes I to XII operate from 7:50 AM to 2:00 PM. Remedial classes and sports coaching run until 4:00 PM. Residential boarders follow a structured evening prep schedule."
    },
    {
      id: "faq-14",
      category: "Policies",
      question: "How can parents communicate with teachers and monitor academic progress?",
      answer: "Parents can communicate via our ERP Parent Portal, attend monthly Parent-Teacher Meetings (PTMs), or request scheduled meetings with subject teachers and House Mentors through prior appointment."
    }
  ],
  supportCard: {
    heading: "Still Have Questions?",
    description: "Our dedicated admissions counselors are here to guide you through every step of enrollment.",
    contactText: "Contact Admissions",
    contactLink: "/contact",
    phoneText: "+91 99270 00551",
    phoneLink: "tel:+919927000551",
    emailText: "admissions@pavnaschool.com",
    emailLink: "mailto:admissions@pavnaschool.com"
  },
  cta: {
    heading: "Let's Help You Begin Your Journey",
    description: "Experience our world-class campus, innovative curriculum, and warm educational community first-hand.",
    primaryText: "Apply Online Now",
    primaryPath: "/admissions",
    secondaryText: "Book a Campus Tour",
    secondaryPath: "/admissions",
    brochureText: "Download Admission Brochure"
  }
};
