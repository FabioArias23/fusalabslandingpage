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

// Product Types
export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  periodEn?: string;
  highlight?: boolean;
}

export interface ProductFeatures {
  es: string[];
  en: string[];
}

export interface Product {
  name: string;
  slug: string;
  icon: string;
  tagline: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  whatSolves: {
    es: string[];
    en: string[];
  };
  whereItAddsValue: {
    es: string[];
    en: string[];
  };
  idealFor: {
    es: string;
    en: string;
  };
  tags: string[];
  features: ProductFeatures;
  pricing: {
    plans: PricingPlan[];
  } | null;
  demoUrl: string;
  appUrl: string;
  docsUrl: string;
  active: boolean;
}

export interface ProductsConfig {
  products: Record<string, Product>;
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

export interface ConsultingArea {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceFormField {
  nameLabel: string;
  namePlaceholder: string;
  companyLabel: string;
  companyPlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  typeLabel: string;
  typeOptions: string[];
  descriptionLabel: string;
  descriptionPlaceholder: string;
}

export interface ServiceForm {
  title: string;
  fields: ServiceFormField;
  submitButton: string;
}

export interface ServiceFormIntro {
  title: string;
  description: string;
}

export interface ServicesPage {
  title: string;
  subtitle: string;
  subtitle2: string;
  devSteps: ServiceStep[];
  consultingAreas: ConsultingArea[];
  formIntro: ServiceFormIntro;
  form: ServiceForm;
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
    servicesPage: ServicesPage;
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
    servicesPage: ServicesPage;
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
