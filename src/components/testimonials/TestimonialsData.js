import { 
  Star, 
  Users, 
  Heart, 
  GraduationCap, 
  ShieldCheck, 
  Shield, 
  Laptop, 
  Trophy, 
  Sparkles 
} from 'lucide-react';

/**
 * Testimonials Data
 * Contains stats, 6 parent testimonials, 4 student stories, 3 video previews, 6 trust badges, and section CTAs.
 */
export const testimonialsData = {
  badge: "Testimonials",
  heading: "What Our Community Says",
  description: "Hear authentic stories and experiences from parents, students, alumni, and educators who make Pavna International School a trusted institution of excellence.",
  stats: [
    { id: "satisfaction", number: "4.9/5", label: "Parent Satisfaction Rating", icon: Star, color: "text-amber-600 bg-amber-50" },
    { id: "alumni", number: "5,000+", label: "Successful Alumni Worldwide", icon: Users, color: "text-blue-600 bg-blue-50" },
    { id: "recommendation", number: "98%", label: "Parent Recommendation Rate", icon: Heart, color: "text-rose-600 bg-rose-50" },
    { id: "success-rate", number: "95%", label: "University Entrance Success", icon: GraduationCap, color: "text-emerald-600 bg-emerald-50" }
  ],
  parentTestimonials: [
    {
      id: "pt-1",
      name: "Sunita & Rajesh Sharma",
      role: "Parents of Aarav (Grade X)",
      location: "Aligarh",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800",
      rating: 5,
      quote: "Pavna School has provided an exceptional environment for our son. The focus on AI & Robotics combined with strong CBSE fundamentals has transformed his confidence and academic drive."
    },
    {
      id: "pt-2",
      name: "Dr. Arvind Agarwal",
      role: "Parent of Ananya (Grade VII)",
      location: "Aligarh",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
      rating: 5,
      quote: "The faculty's dedication to holistic child development is truly commendable. The sports facilities and SEEL framework have helped my daughter excel both in athletics and academics."
    },
    {
      id: "pt-3",
      name: "Meenakshi Malhotra",
      role: "Parent of Kabir (Grade XII)",
      location: "NCR Region",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
      rating: 5,
      quote: "Enrolling Kabir in Pavna's residential boarding was the best decision. The disciplined environment, career counseling, and JEE coaching gave him an incredible foundation."
    },
    {
      id: "pt-4",
      name: "Vikram & Neha Kapoor",
      role: "Parents of Riya (Grade V)",
      location: "Aligarh",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
      rating: 5,
      quote: "The interactive smart classrooms and caring primary teachers make learning fun. Riya looks forward to school every single morning!"
    },
    {
      id: "pt-5",
      name: "Pooja & Amit Singhal",
      role: "Parents of Yash (Grade III)",
      location: "Aligarh",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
      rating: 5,
      quote: "We appreciate the transparent communication, GPS bus tracking safety, and the school's emphasis on moral values alongside modern education."
    },
    {
      id: "pt-6",
      name: "Sanjay Gupta",
      role: "Parent of Diya (Grade VIII)",
      location: "Hathras",
      photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=800",
      rating: 5,
      quote: "The Model UN and public speaking opportunities at Pavna have helped my daughter overcome stage fear and develop remarkable leadership skills."
    }
  ],
  studentStories: [
    {
      id: "st-1",
      name: "Aditya Roy",
      type: "Alumni (Class of 2022)",
      currentRole: "IIT Delhi Undergraduate",
      photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800",
      story: "Joining Pavna School gave me the confidence, competitive exam rigor, and faculty mentorship to pursue engineering at top national institutes."
    },
    {
      id: "st-2",
      name: "Sneha Verma",
      type: "Current Student (Grade XII)",
      currentRole: "National Shooting Champion",
      photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800",
      story: "The campus indoor shooting range and dedicated sports coaches supported my dream of representing the state while maintaining top academic grades."
    },
    {
      id: "st-3",
      name: "Karan Mehta",
      type: "Alumni (Class of 2020)",
      currentRole: "AI Tech Entrepreneur",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800",
      story: "The early exposure to coding and robotics labs at Pavna sparked my passion for technology and laid the groundwork for my startup journey."
    },
    {
      id: "st-4",
      name: "Tanvi Joshi",
      type: "Current Student (Grade X)",
      currentRole: "Head Girl & MUN President",
      photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=800",
      story: "Pavna provides an empowering environment where every student is encouraged to step into leadership, express ideas, and drive positive community impact."
    }
  ],
  videoTestimonials: [
    {
      id: "vt-1",
      name: "Mrs. Rekha Sharma",
      role: "Parent of Class X Student",
      title: "Why Pavna School is Our Top Choice for CBSE Education",
      duration: "2:45 min",
      thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "vt-2",
      name: "Devansh Gupta",
      role: "Alumni & Robotics Lead",
      title: "From School Robotics to a Global Tech Career",
      duration: "3:10 min",
      thumbnail: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "vt-3",
      name: "Anaya & Student Council",
      role: "Student Leaders",
      title: "A Day in the Life of a Pavna International Student",
      duration: "4:00 min",
      thumbnail: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800"
    }
  ],
  trustBadges: [
    { id: "cbse", title: "CBSE Affiliated", description: "Aligned with national CBSE standards & NEP 2020.", icon: ShieldCheck },
    { id: "faculty", title: "Experienced Faculty", description: "Qualified educators with average 10+ years experience.", icon: Users },
    { id: "safety", title: "24/7 Safe Campus", description: "CCTV, strict access control & female attendants.", icon: Shield },
    { id: "smart", title: "Smart Digital Labs", description: "4K interactive panels, AI & coding setups.", icon: Laptop },
    { id: "sports", title: "Sports Academies", description: "Half-Olympic pool & shooting range.", icon: Trophy },
    { id: "holistic", title: "Holistic Learning", description: "SEEL social-emotional & values integration.", icon: Sparkles }
  ],
  cta: {
    heading: "Become Part of the Pavna School Family",
    description: "Empower your child with a world-class CBSE education, inspiring campus culture, and lifelong success.",
    primaryText: "Apply for Admission",
    primaryPath: "/admissions",
    secondaryText: "Schedule a Campus Tour",
    secondaryPath: "/admissions",
    outlineText: "Contact Us",
    outlinePath: "/contact"
  }
};
