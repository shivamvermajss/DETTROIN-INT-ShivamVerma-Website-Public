import { 
  Trophy, 
  Target, 
  Compass, 
  ShieldCheck, 
  Heart, 
  Lightbulb, 
  Award, 
  HandHeart, 
  CheckCircle2, 
  Monitor, 
  Users, 
  Building2, 
  Sparkles 
} from 'lucide-react';

/**
 * About Section Data
 * Contains content for About School introduction, mission/vision, core values, highlights, and CTA.
 */
export const aboutData = {
  badge: "About Pavna School",
  heading: "Nurturing Future Leaders Through Excellence in Education",
  paragraphs: [
    "Established in 1998, Pavna International School (formerly DPS Aligarh) stands as a beacon of academic distinction, character building, and innovative education. Spread across a state-of-the-art campus, we combine traditional values with modern learning methodologies.",
    "Our student-centered philosophy integrates the CBSE curriculum with AI & Robotics, Social-Emotional Learning (SEEL framework), world-class sports academies, and vibrant co-curricular programs designed to foster critical thinking and leadership.",
    "We provide a safe, inclusive, and empowering environment where every learner is inspired to discover their unique potential, excel academically, and emerge as responsible global citizens ready to lead."
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
  values: [
    {
      id: "integrity",
      title: "Integrity",
      description: "Upholding honesty, ethical principles, and strong moral character in all endeavors.",
      icon: ShieldCheck,
      color: "text-blue-600 bg-blue-50"
    },
    {
      id: "respect",
      title: "Respect",
      description: "Fostering mutual empathy, inclusivity, and dignity across our diverse school community.",
      icon: Heart,
      color: "text-rose-600 bg-rose-50"
    },
    {
      id: "innovation",
      title: "Innovation",
      description: "Embracing creative problem-solving, modern technology, and forward-thinking ideas.",
      icon: Lightbulb,
      color: "text-amber-600 bg-amber-50"
    },
    {
      id: "excellence",
      title: "Excellence",
      description: "Striving for highest standards in academic rigor, sports, and holistic development.",
      icon: Award,
      color: "text-indigo-600 bg-indigo-50"
    },
    {
      id: "compassion",
      title: "Compassion",
      description: "Encouraging kindness, social responsibility, and active service to society.",
      icon: HandHeart,
      color: "text-emerald-600 bg-emerald-50"
    },
    {
      id: "responsibility",
      title: "Responsibility",
      description: "Instilling accountability, self-discipline, and environmental stewardship.",
      icon: CheckCircle2,
      color: "text-teal-600 bg-teal-50"
    }
  ],
  highlights: [
    {
      id: "smart-classrooms",
      title: "Smart Classrooms",
      description: "Interactive digital boards, high-speed connectivity, and modern learning tools.",
      icon: Monitor
    },
    {
      id: "experienced-faculty",
      title: "Experienced Faculty",
      description: "Qualified educators dedicated to personalized mentorship and academic success.",
      icon: Users
    },
    {
      id: "modern-infrastructure",
      title: "Modern Infrastructure",
      description: "Advanced science & AI labs, sprawling sports facilities, and safe residential boarding.",
      icon: Building2
    },
    {
      id: "co-curricular",
      title: "Co-curricular Activities",
      description: "Extensive programs in music, performing arts, robotics, debate, and athletic sports.",
      icon: Sparkles
    }
  ],
  cta: {
    label: "Learn More About Us",
    path: "/about"
  }
};
