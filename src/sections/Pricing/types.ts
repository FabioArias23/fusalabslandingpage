export interface PricingMode {
  label: string;
  card1: {
    title: string;
    description?: string;
    description1?: string;
    description2?: string;
  };
  card2: {
    title?: string;
    subtitle?: string;
    price?: string;
    priceFrom?: string;
    priceTo?: string;
    period: string;
    features: string[];
    deliveryLabel: string;
    deliveryTime: string;
    ctaButton: string;
  };
}

export interface PricingProps {
  badge: string;
  title: string;
  modes: {
    instalacion: PricingMode;
    suscripcion: PricingMode;
  };
}
