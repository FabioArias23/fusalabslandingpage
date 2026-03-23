export interface FooterProps {
  branding: {
    footer: string;
  };
  social: string[];
  navigation: {
    title: string;
    links: string[];
  };
  legal: {
    title: string;
    links: string[];
  };
  location: {
    title: string;
    text: string;
  };
  copyright: string;
  status: {
    active: boolean;
    text: string;
  };
}