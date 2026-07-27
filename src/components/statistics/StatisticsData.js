import { GraduationCap, Users, BookOpen, Award } from 'lucide-react';

/**
 * Quick Statistics Section Data
 * Contains metrics showcasing institutional legacy, student body, faculty, and academic success.
 */
export const statisticsData = [
  {
    id: 'years-of-excellence',
    number: 25,
    suffix: '+',
    title: 'Years of Excellence',
    description: 'Nurturing future leaders with over two decades of educational distinction and academic rigor.',
    icon: GraduationCap,
    badgeColor: 'bg-blue-50 text-blue-600 border-blue-100',
    iconGradient: 'from-blue-600 to-indigo-600',
  },
  {
    id: 'students-enrolled',
    number: 2500,
    suffix: '+',
    title: 'Students Enrolled',
    description: 'A thriving, diverse community of passionate learners across our modern campus.',
    icon: Users,
    badgeColor: 'bg-amber-50 text-amber-600 border-amber-100',
    iconGradient: 'from-amber-500 to-orange-600',
  },
  {
    id: 'qualified-faculty',
    number: 150,
    suffix: '+',
    title: 'Qualified Faculty',
    description: 'Dedicated educators and subject experts committed to holistic student growth.',
    icon: BookOpen,
    badgeColor: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    iconGradient: 'from-emerald-600 to-teal-600',
  },
  {
    id: 'board-exam-success',
    number: 100,
    suffix: '%',
    title: 'Board Exam Success',
    description: 'Consistently achieving top academic ranks and outstanding 100% board examination pass rates.',
    icon: Award,
    badgeColor: 'bg-violet-50 text-violet-600 border-violet-100',
    iconGradient: 'from-indigo-600 to-violet-600',
  },
];
