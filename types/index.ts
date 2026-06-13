// Team Member Types
export interface TeamMember {
  name: string;
  slug: string;
  email: string;
  title: string;
  bio: string;
  highlight: string;
  linkedin: string;
  instagram?: string;
  resumen: string;
  aporte: string;
  foto: string;
  categoria: string;
  subcategoria: string;
  logros: { metric: string; label: string }[];
  disponible: boolean;
  links: string[];
  disponibilidad: string;
  position?: string;
  zoom?: number;
  phone?: string;
  proyectos?: {
    title: string;
    description: string;
    image: string;
    url?: string;
  }[];
  github?: string;
}

export interface TeamSection {
  title: string;
  subtitle: string;
  members: TeamMember[];
}


// Service Types
export interface ServiceItem {
  num: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
}

export interface ServiceStep {
  num: string;
  icon?: string;
  title: string;
  description: string;
}


// Landing Data Types
export interface NavigationConfig {
  languageLabel: string;
  menuItems: string[];
  ctaButton: string;
}

export interface LandingData {
  es: {
    branding: {
      name: string;
      suffix: string;
      tagline: string;
      footer: string;
    };
    navigation: NavigationConfig;
    hero: {
      tags: string[];
      title: string;
      subtitle: string;
      description: string;
      highlightedText: string;
      videoUrl: string;
    };
    services: {
      sectionNumber: string;
      sectionLabel: string;
      title: string;
      subtitle: string;
      items: ServiceItem[];
    };
    methodology: {
      sectionLabel: string;
      title: string;
      description: string;
      steps: ServiceStep[];
    };
    team: TeamSection;
    pages: {
      equipo: {
        volverLabel: string;
      }
    };
    footer: {
      social: string[];
      navigation: {
        title: string;
        links: string[];
      };
      location: {
        title: string;
        text: string;
      };
      copyright: string;
      status: {
        text: string;
        active: boolean;
      };
    };
  };
  en: {
    branding: {
      name: string;
      suffix: string;
      tagline: string;
      footer: string;
    };
    navigation: NavigationConfig;
    hero: {
      tags: string[];
      title: string;
      subtitle: string;
      description: string;
      highlightedText: string;
      videoUrl: string;
    };
    services: {
      sectionNumber: string;
      sectionLabel: string;
      title: string;
      subtitle: string;
      items: ServiceItem[];
    };
    methodology: {
      sectionLabel: string;
      title: string;
      description: string;
      steps: ServiceStep[];
    };
    team: TeamSection;
    pages: {
      equipo: {
        volverLabel: string;
      }
    };
    footer: {
      social: string[];
      navigation: {
        title: string;
        links: string[];
      };
      location: {
        title: string;
        text: string;
      };
      copyright: string;
      status: {
        text: string;
        active: boolean;
      };
    };
  };
}
