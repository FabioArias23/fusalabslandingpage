export interface TeamMember {
  name: string;
  slug: string;
  title: string;
  bio: string;
  linkedin: string;
  instagram?: string;
  github?: string;
  foto: string;
  position?: string;
  zoom?: number;
}

export interface TeamSection {
  title: string;
  subtitle: string;
  members: TeamMember[];
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export interface LandingData {
  es: {
    hero: {
      subtitle: string;
      description: string;
    };
    services: {
      sectionNumber: string;
      sectionLabel: string;
      title: string;
      subtitle: string;
      items: ServiceItem[];
    };
    team: TeamSection;
    seo: {
      title: string;
      description: string;
    };
    pages: {
      equipo: {
        volverLabel: string;
        resumenLabel: string;
        contactarLabel: string;
        charlaText: string;
      }
    };
  };
  en: {
    hero: {
      subtitle: string;
      description: string;
    };
    services: {
      sectionNumber: string;
      sectionLabel: string;
      title: string;
      subtitle: string;
      items: ServiceItem[];
    };
    team: TeamSection;
    seo: {
      title: string;
      description: string;
    };
    pages: {
      equipo: {
        volverLabel: string;
        resumenLabel: string;
        contactarLabel: string;
        charlaText: string;
      }
    };
  };
}
