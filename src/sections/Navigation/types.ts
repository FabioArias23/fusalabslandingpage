export interface NavigationProps {
  isScrolled: boolean;
  branding: {
    name: string;
    suffix: string;
  };
  menuItems: string[];
  language: string;
  ctaButton: string;
}
