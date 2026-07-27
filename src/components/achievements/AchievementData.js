import { 
  Trophy, 
  Award, 
  Medal, 
  Cpu, 
  Palette, 
  HeartHandshake, 
  GraduationCap, 
  Users, 
  Star 
} from 'lucide-react';

/**
 * Achievement Data
 * Contains statistics, 6 achievement cards, 5 timeline milestones, student success story, and section CTAs.
 */
export const achievementData = {
  badge: "Achievements",
  heading: "Celebrating Excellence and Success",
  description: "At Pavna International School, our students consistently push boundaries, earning top honors in academics, sports, robotics, Olympiads, and community leadership.",
  stats: [
    {
      id: "awards-won",
      number: 100,
      suffix: "+",
      label: "Awards Won",
      icon: Trophy,
      color: "from-amber-500 to-yellow-600"
    },
    {
      id: "board-results",
      number: 98,
      suffix: "%",
      label: "Board Pass Rate",
      icon: GraduationCap,
      color: "from-blue-600 to-indigo-600"
    },
    {
      id: "state-winners",
      number: 50,
      suffix: "+",
      label: "State Champions",
      icon: Medal,
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: "competition-participants",
      number: 500,
      suffix: "+",
      label: "Competition Participants",
      icon: Users,
      color: "from-purple-600 to-pink-600"
    }
  ],
  achievements: [
    {
      id: "academic-excellence",
      title: "Academic Excellence",
      description: "Consistently achieving 100% pass rates and top merit ranks in CBSE Class X & XII Board Examinations.",
      year: "2024 Board Results",
      ribbon: "Top CBSE Rank",
      icon: Award,
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      id: "sports-achievements",
      title: "Sports & Athletics",
      description: "Champions in State Swimming, Shooting Competitions, and Inter-School Basketball Tournaments.",
      year: "State Championship",
      ribbon: "Gold Medalists",
      icon: Trophy,
      gradient: "from-amber-500 to-orange-600"
    },
    {
      id: "olympiad-success",
      title: "Olympiad Distinction",
      description: "International rank holders and gold medalists in Science, Mathematics, and Cyber Olympiads.",
      year: "International Level",
      ribbon: "Global Ranks",
      icon: Medal,
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      id: "science-innovation",
      title: "Science & AI Innovation",
      description: "First place in Regional Robotics & AI Exhibition for autonomous student-designed prototypes.",
      year: "Robotics Expo 2024",
      ribbon: "1st Prize Winner",
      icon: Cpu,
      gradient: "from-purple-600 to-indigo-600"
    },
    {
      id: "arts-culture",
      title: "Arts & Cultural Events",
      description: "Overall Champions Trophy in Inter-School Performing Arts, Classical Music, and Theatre Competitions.",
      year: "Cultural Fest 2023-24",
      ribbon: "Overall Trophy",
      icon: Palette,
      gradient: "from-rose-500 to-pink-600"
    },
    {
      id: "community-service",
      title: "Community Service",
      description: "Recognized for student-led environmental conservation, literacy drives, and social welfare projects.",
      year: "Community Honor",
      ribbon: "Impact Award",
      icon: HeartHandshake,
      gradient: "from-teal-600 to-cyan-600"
    }
  ],
  timeline: [
    {
      year: "2010",
      title: "School Expansion",
      description: "Expanded modern campus facilities with state-of-the-art sports arenas and modern boarding.",
      icon: Star
    },
    {
      year: "2014",
      title: "Smart Classroom Initiative",
      description: "Digitized all learning spaces with interactive smart boards and high-speed fiber connectivity.",
      icon: Cpu
    },
    {
      year: "2018",
      title: "National Olympiad Honor",
      description: "Students secured top 10 national ranks in Mathematics and Science Olympiads.",
      icon: Medal
    },
    {
      year: "2021",
      title: "100% Board Success",
      description: "Achieved 100% pass rates across Class X & XII CBSE Board Examinations with distinction.",
      icon: Award
    },
    {
      year: "2024",
      title: "Modern Infrastructure Upgrade",
      description: "Launched high-tech AI & Robotics labs, half-Olympic pool, and shooting range.",
      icon: Trophy
    }
  ],
  successStory: {
    name: "Rohan Sharma",
    role: "Class XII CBSE District Topper (98.6%)",
    photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800",
    achievement: "Secured 1st Rank in Aligarh Region & Gold Medal in National Science Olympiad",
    testimonial: "Pavna International School provided me with world-class faculty, AI tools, and personalized mentorship. The encouraging environment helped me achieve my academic dreams and get accepted into top engineering universities.",
    awardBadge: "District Topper 2024",
    icon: Star
  },
  cta: {
    heading: "Be Part of Our Success Story",
    description: "Empower your child with a world-class CBSE education, holistic development, and a proven track record of distinction.",
    primaryText: "Apply for Admission",
    primaryPath: "/admissions",
    secondaryText: "Explore Student Life",
    secondaryPath: "/about"
  }
};
