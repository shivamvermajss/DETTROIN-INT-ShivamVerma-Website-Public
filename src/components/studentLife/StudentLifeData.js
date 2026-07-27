import { 
  Dumbbell, 
  Theater, 
  Palette, 
  Bot, 
  MessageSquareQuote, 
  Sprout, 
  Music, 
  HeartHandshake, 
  Code, 
  FlaskConical, 
  Camera, 
  Sparkles, 
  Trophy, 
  Mic, 
  Rocket 
} from 'lucide-react';

/**
 * Student Life Data
 * Stores spotlight testimonial, 8 activity cards, 8 student clubs, gallery photos, and section CTAs.
 */
export const studentLifeData = {
  badge: "Student Life",
  heading: "Learning Beyond the Classroom",
  description: "At Pavna International School, we foster leadership, creativity, collaboration, physical fitness, and social responsibility through a rich tapestry of co-curricular clubs, sports, and cultural events.",
  spotlight: {
    name: "Priya Verma",
    grade: "Grade XI – Science Stream",
    title: "Robotics & AI Club Captain",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
    testimonial: "Being part of the Robotics Club helped me develop confidence, teamwork, and real-world problem-solving skills. Winning the Regional AI Hackathon with my team was an unforgettable experience!",
    badgeText: "Robotics Captain"
  },
  activities: [
    {
      id: "sports-academies",
      title: "Sports & Athletics",
      description: "Professional training in swimming, basketball, shooting, football, and martial arts.",
      icon: Dumbbell,
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "performing-arts",
      title: "Performing Arts & Theatre",
      description: "Dramatics, stagecraft, public speaking, and annual theatrical productions.",
      icon: Theater,
      image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "visual-arts",
      title: "Visual Arts & Design",
      description: "Painting, sculpture, digital art, pottery, and annual student art exhibitions.",
      icon: Palette,
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "robotics-club",
      title: "Robotics & AI Lab",
      description: "Hands-on coding, micro-controllers, drone building, and AI prototype development.",
      icon: Bot,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "debate-society",
      title: "Debate & Model UN",
      description: "Developing eloquence, parliamentary procedures, and global diplomatic perspective.",
      icon: MessageSquareQuote,
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "eco-club",
      title: "Environmental Eco-Club",
      description: "Tree plantation drives, organic gardening, recycling, and sustainability projects.",
      icon: Sprout,
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "music-dance",
      title: "Music & Dance Academy",
      description: "Classical Indian vocals, Western instruments, choir, and contemporary choreography.",
      icon: Music,
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "community-service",
      title: "Community Outreach",
      description: "Social awareness rallies, literacy drives, and visits to community care centers.",
      icon: HeartHandshake,
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=800"
    }
  ],
  clubs: [
    { id: "coding", title: "Coding & App Dev", description: "Learn Python, web dev, and mobile apps.", icon: Code },
    { id: "science", title: "Young Scientists Club", description: "Fun experiments & scientific discovery.", icon: FlaskConical },
    { id: "photography", title: "Photography & Media", description: "Master DSLR shooting & video editing.", icon: Camera },
    { id: "drama", title: "Drama & Stagecraft", description: "Acting, scriptwriting & stage management.", icon: Sparkles },
    { id: "chess", title: "Grandmaster Chess Club", description: "Strategic thinking & tournament play.", icon: Trophy },
    { id: "public-speaking", title: "Public Speaking & MUN", description: "Master oratorical & negotiation skills.", icon: Mic },
    { id: "entrepreneurship", title: "Young Entrepreneurs", description: "Business ideation, pitching & finance.", icon: Rocket },
    { id: "eco-warriors", title: "Green Eco Warriors", description: "Campus recycling & nature conservation.", icon: Sprout }
  ],
  gallery: [
    { id: 1, title: "Annual Athletic Meet", category: "Sports", image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800" },
    { id: 2, title: "Annual Cultural Function", category: "Performances", image: "https://images.unsplash.com/photo-1469488865564-c2de10f69f96?auto=format&fit=crop&q=80&w=800" },
    { id: 3, title: "AI & Robotics Workshop", category: "Technology", image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&q=80&w=800" },
    { id: 4, title: "Science Lab Experimentation", category: "Academics", image: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?auto=format&fit=crop&q=80&w=800" },
    { id: 5, title: "Educational Field Excursion", category: "Trips", image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800" },
    { id: 6, title: "Student Fine Arts Exhibition", category: "Arts", image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=800" }
  ],
  cta: {
    heading: "Experience Student Life at Pavna School",
    description: "Discover our vibrant campus culture, world-class academies, and supportive learning community.",
    primaryText: "Book a Campus Tour",
    primaryPath: "/admissions",
    secondaryText: "Apply for Admission",
    secondaryPath: "/admissions"
  }
};
