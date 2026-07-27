import { 
  Baby, 
  BookOpen, 
  Compass, 
  Award, 
  GraduationCap, 
  FlaskConical, 
  Laptop, 
  Globe, 
  BookCheck 
} from 'lucide-react';

/**
 * Academic Programs Data
 * Contains information for the 5 educational stages, timeline milestones, academic highlights, and CTA paths.
 */
export const academicData = {
  badge: "Academic Programs",
  heading: "Empowering Every Student at Every Stage",
  description: "Our progressive CBSE curriculum combines academic excellence, age-appropriate learning, and holistic character development to prepare students for lifelong achievement and future leadership.",
  programs: [
    {
      id: "pre-primary",
      name: "Pre-Primary",
      range: "Age 3–5 Years",
      classes: "Nursery – KG",
      description: "Nurturing early curiosity, creativity, and foundational social skills through play-based experiential learning.",
      icon: Baby,
      gradient: "from-rose-500 to-pink-600",
      badgeColor: "bg-rose-50 text-rose-700 border-rose-100",
      features: [
        "Play-based & Montessori Learning",
        "Sensory & Creative Development",
        "Safe & Stimulating Environment"
      ],
      link: "/academics/pre-primary"
    },
    {
      id: "primary-school",
      name: "Primary School",
      range: "Classes I–V",
      classes: "Grades 1 – 5",
      description: "Building strong foundational literacy, numeracy, communication skills, and core ethical values.",
      icon: BookOpen,
      gradient: "from-blue-600 to-indigo-600",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-100",
      features: [
        "Activity-based CBSE Curriculum",
        "Language & Math Foundation",
        "Co-curricular Exposure"
      ],
      link: "/academics/primary"
    },
    {
      id: "middle-school",
      name: "Middle School",
      range: "Classes VI–VIII",
      classes: "Grades 6 – 8",
      description: "Fostering critical thinking, collaborative problem-solving, analytical skills, and early STEM exposure.",
      icon: Compass,
      gradient: "from-amber-500 to-orange-600",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-100",
      features: [
        "STEM & Robotics Integration",
        "Analytical & Inquiry Learning",
        "Sports & Performing Arts"
      ],
      link: "/academics/middle"
    },
    {
      id: "secondary-school",
      name: "Secondary School",
      range: "Classes IX–X",
      classes: "Grades 9 – 10",
      description: "Deepening concept mastery, exam strategies, and academic discipline for CBSE Board Examination success.",
      icon: Award,
      gradient: "from-emerald-600 to-teal-600",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
      features: [
        "Rigorous Board Exam Prep",
        "Advanced Science & Math Labs",
        "Career Guidance Workshops"
      ],
      link: "/academics/secondary"
    },
    {
      id: "senior-secondary",
      name: "Senior Secondary",
      range: "Classes XI–XII",
      classes: "Grades 11 – 12",
      description: "Specialized academic streams (Science, Commerce, Humanities) preparing students for top universities and competitive exams.",
      icon: GraduationCap,
      gradient: "from-purple-600 to-indigo-600",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-100",
      features: [
        "Science, Commerce & Arts Streams",
        "Competitive Exam Coaching (JEE/NEET)",
        "University & Career Counseling"
      ],
      link: "/academics/senior-secondary"
    }
  ],
  timeline: [
    { step: "01", stage: "Pre-Primary", range: "Age 3–5", icon: Baby },
    { step: "02", stage: "Primary", range: "Classes I–V", icon: BookOpen },
    { step: "03", stage: "Middle", range: "Classes VI–VIII", icon: Compass },
    { step: "04", stage: "Secondary", range: "Classes IX–X", icon: Award },
    { step: "05", stage: "Senior Secondary", range: "Classes XI–XII", icon: GraduationCap }
  ],
  highlights: [
    {
      id: "cbse-curriculum",
      title: "CBSE Curriculum",
      description: "Aligned with national educational standards and holistic NEP 2020 guidelines.",
      icon: BookCheck
    },
    {
      id: "practical-learning",
      title: "Practical Learning",
      description: "Hands-on laboratory experiments, real-world projects, and field studies.",
      icon: FlaskConical
    },
    {
      id: "smart-classrooms",
      title: "Smart Classrooms",
      description: "Interactive multimedia tech integration for immersive learning experiences.",
      icon: Laptop
    },
    {
      id: "global-perspective",
      title: "Global Perspective",
      description: "Cultivating international exposure, cultural awareness, and leadership traits.",
      icon: Globe
    }
  ],
  cta: {
    primaryText: "Explore Our Curriculum",
    primaryPath: "/academics",
    secondaryText: "Admission Process",
    secondaryPath: "/admissions"
  }
};
