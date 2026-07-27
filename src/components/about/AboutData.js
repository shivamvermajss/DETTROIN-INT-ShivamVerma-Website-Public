import { 
  Trophy, 
  Target, 
  Compass, 
  ShieldCheck, 
  GraduationCap,
  MonitorSmartphone,
  BookOpen,
  Dumbbell,
  FlaskConical
} from 'lucide-react';

/**
 * About Section Data
 * Contains content for About School introduction, mission/vision, 6 core feature cards, and CTA.
 */
export const aboutData = {
  badge: "About Pavna School",
  heading: "Nurturing Future Leaders Through Excellence in Education",
  paragraphs: [
    "Established in 1998, Pavna International School (formerly DPS Aligarh) stands as a beacon of academic distinction, character building, and innovative education. Spread across a state-of-the-art campus, we combine traditional values with modern learning methodologies.",
    "Our student-centered philosophy integrates the CBSE curriculum with AI & Robotics, Social-Emotional Learning (SEEL framework), world-class sports academies, and vibrant co-curricular programs designed to foster critical thinking and leadership."
  ],
  floatingBadge: {
    icon: Trophy,
    title: "25+ Years of Excellence",
    subtitle: "Trusted by Thousands of Families",
    badgeColor: "from-amber-400 to-amber-600 text-amber-900"
  },
  campusImage: {
    src: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=1200",
    alt: "Pavna International School Campus Architecture and Modern Facilities"
  },
  missionVision: [
    {
      id: "mission",
      title: "Our Mission",
      description: "To deliver world-class, holistic education that builds strong moral character, fosters innovation, and equips students with future-ready skills.",
      icon: Target,
      gradient: "from-blue-600 to-indigo-600",
      bgLight: "bg-blue-50/70 border-blue-100 text-blue-700"
    },
    {
      id: "vision",
      title: "Our Vision",
      description: "To cultivate compassionate global leaders and visionaries who drive positive change through academic excellence, integrity, and lifelong learning.",
      icon: Compass,
      gradient: "from-amber-500 to-orange-600",
      bgLight: "bg-amber-50/70 border-amber-100 text-amber-700"
    }
  ],
  featureCards: [
    {
      id: "experienced-faculty",
      title: "Experienced Faculty",
      description: "Dedicated educators offering personalized guidance and academic excellence.",
      icon: GraduationCap,
      color: "bg-blue-50 text-blue-600 border-blue-100"
    },
    {
      id: "smart-classrooms",
      title: "Smart Classrooms",
      description: "Digitally-enabled interactive classrooms with modern audio-visual tools.",
      icon: MonitorSmartphone,
      color: "bg-indigo-50 text-indigo-600 border-indigo-100"
    },
    {
      id: "cbse-curriculum",
      title: "CBSE Curriculum",
      description: "Enriched national framework with AI & Robotics and SEEL frameworks.",
      icon: BookOpen,
      color: "bg-amber-50 text-amber-600 border-amber-100"
    },
    {
      id: "safe-campus",
      title: "Safe & Secure Campus",
      description: "24/7 CCTV surveillance, strict access control, and safety protocols.",
      icon: ShieldCheck,
      color: "bg-emerald-50 text-emerald-600 border-emerald-100"
    },
    {
      id: "sports-activities",
      title: "Sports & Co-Curricular",
      description: "Pro coaching for swimming, basketball, shooting, tennis, and martial arts.",
      icon: Dumbbell,
      color: "bg-rose-50 text-rose-600 border-rose-100"
    },
    {
      id: "modern-laboratories",
      title: "Modern Laboratories",
      description: "Well-equipped physics, chemistry, biology, math, and computer science labs.",
      icon: FlaskConical,
      color: "bg-cyan-50 text-cyan-600 border-cyan-100"
    }
  ],
  cta: {
    label: "Explore Our Legacy & Campus",
    path: "/about"
  }
};
