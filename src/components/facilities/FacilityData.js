import { 
  MonitorSmartphone, 
  FlaskConical, 
  Laptop, 
  BookOpen, 
  Dumbbell, 
  Bus, 
  HeartPulse, 
  Theater 
} from 'lucide-react';

/**
 * Campus Facilities Data
 * Stores 8 facility cards, modal details, featured facility spotlight, and section CTA content.
 */
export const facilityData = {
  badge: "Campus Facilities",
  heading: "An Inspiring Campus Designed for Learning",
  description: "Pavna International School provides world-class infrastructure and modern amenities designed to foster academic excellence, creative exploration, physical well-being, and complete safety.",
  facilities: [
    {
      id: "smart-classrooms",
      title: "Smart Classrooms",
      shortDescription: "Interactive digital touchboards and multimedia integration for immersive learning.",
      fullDescription: "Our smart classrooms are equipped with high-definition interactive touch panels, high-speed Wi-Fi, ergonomic furniture, and advanced audio-visual systems to transform traditional teaching into an engaging, multi-sensory experience.",
      icon: MonitorSmartphone,
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=1000",
      highlights: [
        "Interactive HD Touch Boards",
        "Ergonomic & Modular Seating",
        "Digital Content Library Access",
        "Climate Controlled Comfort"
      ]
    },
    {
      id: "science-labs",
      title: "Science Laboratories",
      shortDescription: "Advanced Physics, Chemistry, and Biology labs for hands-on experimentation.",
      fullDescription: "State-of-the-art laboratory facilities built to CBSE standards, providing safe, hands-on scientific experimentation and inquiry-based practical learning supervised by experienced educators.",
      icon: FlaskConical,
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1000",
      highlights: [
        "Dedicated Physics, Chem & Bio Labs",
        "Strict Safety Protocols & Safety Showers",
        "Modern Measuring Instruments & Reagents",
        "Individual Workstations for Students"
      ]
    },
    {
      id: "computer-labs",
      title: "High-Tech Computer Labs",
      shortDescription: "Latest desktop workstations, high-speed fiber internet, AI & coding setups.",
      fullDescription: "Modern computer suites equipped with current-generation PCs, high-speed fiber broadband, software programming environments, robotics kits, and cybersecurity learning tools.",
      icon: Laptop,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000",
      highlights: [
        "1:1 Student-to-Computer Ratio",
        "High-Speed Gigabit Internet",
        "AI, Coding & Robotics Software",
        "Monitored & Filtered Internet Access"
      ]
    },
    {
      id: "library",
      title: "Central Library & Resource Center",
      shortDescription: "Over 15,000 books, digital journals, quiet study zones, and e-learning pods.",
      fullDescription: "A tranquil sanctuary for reading and research boasting over 15,000 physical titles, national periodicals, digital e-books, e-journals, and peaceful individual study carrels.",
      icon: BookOpen,
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=1000",
      highlights: [
        "15,000+ Physical & E-Books",
        "Digital Reading & E-Journal Pods",
        "Quiet Study & Group Research Zones",
        "Dedicated Junior & Senior Reading Areas"
      ]
    },
    {
      id: "sports-complex",
      title: "Olympic-Grade Sports Complex",
      shortDescription: "Half-Olympic swimming pool, basketball courts, shooting range, and soccer field.",
      fullDescription: "Sprawling sports infrastructure featuring an indoor shooting range, temperature-controlled half-Olympic swimming pool, synthetic basketball and tennis courts, and professional athletic coaching.",
      icon: Dumbbell,
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1000",
      highlights: [
        "Half-Olympic Swimming Pool",
        "Indoor 10m Shooting Range",
        "Synthetic Basketball & Tennis Courts",
        "Professional Certified Sports Coaches"
      ]
    },
    {
      id: "transportation",
      title: "GPS-Enabled Fleet Transport",
      shortDescription: "AC buses with real-time GPS tracking, speed governors, and trained attendants.",
      fullDescription: "Comprehensive fleet of modern air-conditioned buses covering major routes across Aligarh and surrounding regions, equipped with real-time GPS tracking for parents, speed governors, and female attendants.",
      icon: Bus,
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1000",
      highlights: [
        "Real-Time Parent App GPS Tracking",
        "Air-Conditioned Modern Buses",
        "CCTV & Speed Governors Installed",
        "Dedicated Female Bus Attendants"
      ]
    },
    {
      id: "medical-center",
      title: "24/7 Medical Infirmary",
      shortDescription: "Full-time qualified nurse, emergency care equipment, and doctor on call.",
      fullDescription: "Fully-equipped campus medical infirmary staffed with a registered full-time nurse, emergency oxygen, first-aid amenities, regular health checkups, and tie-ups with leading local hospitals.",
      icon: HeartPulse,
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000",
      highlights: [
        "Full-Time Registered Nurse on Duty",
        "Emergency Care & First-Aid Setup",
        "Annual Student Health Examinations",
        "24/7 Ambulance & Hospital Tie-up"
      ]
    },
    {
      id: "auditorium",
      title: "Multi-Purpose Auditorium & Hall",
      shortDescription: "750-seater acoustic auditorium for cultural events, assemblies, and MUNs.",
      fullDescription: "A state-of-the-art 750-seater air-conditioned auditorium featuring professional stage lighting, surround sound acoustics, green rooms, and facilities for theatrical productions, debates, and conferences.",
      icon: Theater,
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1000",
      highlights: [
        "750-Seater Air-Conditioned Seating",
        "Professional Stage Lighting & Acoustics",
        "Dual Green Rooms for Performers",
        "Host for Model UN & Cultural Festivals"
      ]
    }
  ],
  featuredFacility: {
    title: "Smart Digital Classrooms Spotlight",
    badge: "Featured Technology",
    description: "Our digital classrooms integrate cutting-edge 4K interactive touch panels, high-speed fiber internet, and cloud-based learning resources to make complex concepts intuitive, interactive, and memorable.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=1920",
    features: [
      "Interactive 4K Smart Boards",
      "High-Speed Fiber Connectivity",
      "Cloud Digital Resources & LMS",
      "Project-Based Collaborative Learning"
    ],
    ctaText: "Schedule a Virtual Tour",
    ctaLink: "/admissions"
  },
  cta: {
    heading: "Experience Our Campus in Person",
    description: "Take a guided walkthrough of our classrooms, sports academies, labs, and residential facilities.",
    primaryText: "Schedule a Visit",
    primaryPath: "/admissions",
    secondaryText: "Contact Admissions",
    secondaryPath: "/contact"
  }
};
