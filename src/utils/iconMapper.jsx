import {
  Book,
  GraduationCap,
  Users,
  Award,
  Trophy,
  Calendar,
  Star,
  Target,
  Heart,
  Sparkles,
  FileText,
  Shield,
  DollarSign,
  BookOpen,
  MapPin,
  Phone,
  Mail,
  Clock,
  Briefcase,
} from "lucide-react";

// Icon mapping for dynamic icon rendering
export const iconMap = {
  Book,
  GraduationCap,
  Users,
  Award,
  Trophy,
  Calendar,
  Star,
  Target,
  Heart,
  Sparkles,
  FileText,
  Shield,
  DollarSign,
  BookOpen,
  MapPin,
  Phone,
  Mail,
  Clock,
  Briefcase,
};

// Helper function to get icon component by name
export const getIcon = (iconName, className = "w-6 h-6") => {
  const IconComponent = iconMap[iconName];
  if (!IconComponent) {
    console.warn(`Icon "${iconName}" not found in iconMap`);
    return null;
  }
  return <IconComponent className={className} />;
};
