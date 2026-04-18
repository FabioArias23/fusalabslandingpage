import {
  Cpu,
  Layers,
  Zap,
  Target,
  Shield,
  TrendingUp,
  Code2,
  Users,
  Search,
  Rocket,
  Heart,
  Plane,
  Megaphone,
  CheckCircle,
  Lightbulb,
  ArrowRight,
  Globe,
  MessageCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { LucideIcon } from "lucide-react";

export const iconMap = {
  Cpu,
  Layers,
  Zap,
  Target,
  Shield,
  TrendingUp,
  Code2,
  Users,
  Search,
  Rocket,
  Heart,
  Plane,
  Megaphone,
  CheckCircle,
  Lightbulb,
  ArrowRight,
  Globe,
  MessageCircle,
};

export type IconName = keyof typeof iconMap;

type IconBadgeProps = {
  name: IconName;
};

export function IconBadge({ name }: IconBadgeProps) {
  const Icon = iconMap[name] as LucideIcon;

  return (
    <Badge variant="secondary" className="h-8 px-2">
      <Icon className="size-4" />
    </Badge>
  );
}
