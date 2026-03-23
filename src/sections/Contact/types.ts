export interface ContactCard {
  icon: string;
  title: string;
  description: string;
}

export interface ContactProps {
  title: string;
  greeting: string;
  description: string;
  form: {
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    terms: string;
  };
  cards: ContactCard[];
}
