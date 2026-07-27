import { 
  GraduationCap, 
  Globe, 
  Handshake, 
  Lightbulb 
} from 'lucide-react';

/**
 * Leadership Data
 * Stores information for Chairman profile, Principal profile, leadership highlights, featured quote, and section CTAs.
 */
export const leadershipData = {
  badge: "Our Leadership",
  heading: "Visionary Leaders Shaping Tomorrow",
  description: "Guided by decades of educational distinction, our leadership team is dedicated to inspiring academic excellence, character building, and empowering every child for future success.",
  chairman: {
    id: "chairman",
    name: "Dr. Vikram Singh",
    designation: "Chairman & Managing Trustee",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
    bio: "With over 25 years of pioneering leadership in education, Dr. Vikram Singh has been instrumental in establishing Pavna International School as a benchmark of academic and holistic excellence.",
    quote: "Education is not merely about imparting knowledge; it is about kindling curiosity, nurturing character, and empowering young minds to make meaningful contributions to society.",
    achievements: [
      "25+ Years in Educational Leadership",
      "Visionary Institutional Management",
      "Community & Youth Development",
      "Student-Centered Values Philosophy"
    ]
  },
  principal: {
    id: "principal",
    name: "Mrs. Ananya Sharma",
    designation: "Principal & Academic Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    bio: "An accomplished educator with two decades of experience in CBSE curriculum design and school administration, Mrs. Ananya Sharma fosters an inclusive, innovative environment where every student excels.",
    quote: "We believe in nurturing every child's unique potential through rigorous academics, emotional intelligence, and state-of-the-art learning methodologies.",
    achievements: [
      "20+ Years Educational Excellence",
      "CBSE Curriculum Design Mentor",
      "SEEL Framework & Holistic Growth",
      "Innovation in Modern Teaching"
    ]
  },
  highlights: [
    {
      id: "student-success",
      title: "Student Success",
      description: "Personalized mentorship and academic guidance tailored to individual learning paths.",
      icon: GraduationCap
    },
    {
      id: "global-perspective",
      title: "Global Perspective",
      description: "Cultivating international exposure, cultural empathy, and leadership skills.",
      icon: Globe
    },
    {
      id: "parent-partnership",
      title: "Parent Partnership",
      description: "Open communication and transparent collaboration between home and school.",
      icon: Handshake
    },
    {
      id: "innovative-learning",
      title: "Innovative Learning",
      description: "Integrating AI, Robotics, and modern STEM tools with traditional ethical values.",
      icon: Lightbulb
    }
  ],
  featuredQuote: {
    text: "Education is the foundation upon which we build the future of every child. Our mission is to inspire curiosity, instill integrity, and cultivate lifelong leaders.",
    author: "Pavna School Governing Board",
    role: "Institutional Educational Philosophy"
  },
  cta: {
    heading: "Meet Our Leadership Team",
    description: "Learn more about our school's vision, advisory council, and administrative leadership.",
    primaryText: "Learn More",
    primaryPath: "/about",
    secondaryText: "Contact Administration",
    secondaryPath: "/contact"
  }
};
