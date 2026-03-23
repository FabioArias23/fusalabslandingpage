import type { IconName } from "../../components/IconMap";

export interface ServiceItem {
  num: string;
  title: string;
  description: string;
  tags: string[];
  icon: IconName;
}

export interface ServicesProps {
  sectionNumber: string;
  sectionLabel: string;
  title: string;
  subtitle: string;
  items: ServiceItem[];
}
