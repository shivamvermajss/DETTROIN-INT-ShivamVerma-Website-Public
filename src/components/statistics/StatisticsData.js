import { GraduationCap, Users, Heart, Award } from 'lucide-react';

/**
 * Quick Statistics Section Data
 * Contains metrics showcasing institutional legacy, student body, faculty, and academic success.
 */
export const statisticsData = [
  {
    id: 'years-of-legacy',
    number: 28,
    suffix: '+',
    title: 'Years Legacy',
    description: 'Nurturing future leaders with nearly three decades of educational distinction and academic rigor.',
    icon: Award,
    badgeColor: 'bg-blue-50 text-blue-600 border-blue-100',
    iconGradient: 'from-blue-600 to-indigo-600',
  },
  {
    id: 'learners-base',
    number: 30000,
    suffix: '+',
    title: 'Learners Base',
    description: 'A thriving, diverse community of passionate learners across our modern campuses.',
    icon: Users,
    badgeColor: 'bg-amber-50 text-amber-600 border-amber-100',
    iconGradient: 'from-amber-500 to-orange-600',
  },
  {
    id: 'happy-parents',
    number: 20000,
    suffix: '+',
    title: 'Happy Parents',
    description: 'Trusting families who actively participate and support our holistic educational journey.',
    icon: Heart,
    badgeColor: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    iconGradient: 'from-emerald-600 to-teal-600',
  },
  {
    id: 'educators',
    number: 250,
    suffix: '+',
    title: 'Educators',
    description: 'Dedicated educators and subject experts committed to holistic student growth.',
    icon: GraduationCap,
    badgeColor: 'bg-violet-50 text-violet-600 border-violet-100',
    iconGradient: 'from-indigo-600 to-violet-600',
  },
];