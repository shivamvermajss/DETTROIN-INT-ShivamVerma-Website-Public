import { 
  GraduationCap, 
  MonitorSmartphone, 
  BookOpen, 
  ShieldCheck, 
  Dumbbell, 
  FlaskConical, 
  Laptop, 
  Star 
} from 'lucide-react';

/**
 * Why Choose Us Data
 * Stores the 8 core features highlighting Pavna School's educational advantages and strengths.
 */
export const whyChooseData = {
  badge: "Why Choose Us",
  heading: "Why Parents Trust Pavna School",
  description: "At Pavna International School, we combine academic rigor, state-of-the-art facilities, and holistic character development to empower every child for a bright, successful future.",
  features: [
    {
      id: "experienced-faculty",
      title: "Experienced Faculty",
      description: "Dedicated educators and subject experts offering personalized guidance, mentorship, and academic excellence.",
      icon: GraduationCap,
      accentColor: "from-blue-600 to-indigo-600",
      iconBg: "bg-blue-50 text-blue-600",
    },
    {
      id: "smart-classrooms",
      title: "Smart Classrooms",
      description: "Digitally-enabled interactive learning environments equipped with modern multimedia and audio-visual tools.",
      icon: MonitorSmartphone,
      accentColor: "from-indigo-600 to-violet-600",
      iconBg: "bg-indigo-50 text-indigo-600",
    },
    {
      id: "cbse-curriculum",
      title: "CBSE Curriculum",
      description: "Comprehensive national board curriculum enriched with AI & Robotics and SEEL social-emotional frameworks.",
      icon: BookOpen,
      accentColor: "from-amber-500 to-orange-600",
      iconBg: "bg-amber-50 text-amber-600",
    },
    {
      id: "safe-campus",
      title: "Safe & Secure Campus",
      description: "24/7 CCTV surveillance, strict access control, and dedicated student safety protocols across campus.",
      icon: ShieldCheck,
      accentColor: "from-emerald-600 to-teal-600",
      iconBg: "bg-emerald-50 text-emerald-600",
    },
    {
      id: "sports-activities",
      title: "Sports & Co-Curricular",
      description: "Professional coaching academies for swimming, basketball, shooting, lawn tennis, football, and martial arts.",
      icon: Dumbbell,
      accentColor: "from-rose-500 to-red-600",
      iconBg: "bg-rose-50 text-rose-600",
    },
    {
      id: "modern-laboratories",
      title: "Modern Laboratories",
      description: "Advanced, well-equipped physics, chemistry, biology, mathematics, and high-tech computer science labs.",
      icon: FlaskConical,
      accentColor: "from-cyan-600 to-blue-600",
      iconBg: "bg-cyan-50 text-cyan-600",
    },
    {
      id: "digital-learning",
      title: "Digital Learning Platform",
      description: "Integrated LMS platform enabling seamless online assignments, digital resource libraries, and parent tracking.",
      icon: Laptop,
      accentColor: "from-purple-600 to-indigo-600",
      iconBg: "bg-purple-50 text-purple-600",
    },
    {
      id: "personality-development",
      title: "Personality & Leadership",
      description: "Focused programs in public speaking, leadership roles, model UN, ethics, and emotional intelligence.",
      icon: Star,
      accentColor: "from-amber-400 to-amber-600",
      iconBg: "bg-amber-50 text-amber-700",
    },
  ],
};
