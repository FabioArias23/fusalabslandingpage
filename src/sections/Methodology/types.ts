export interface MethodStep {
  num: string;
  title: string;
  description: string;
}

export interface MethodologyProps {
  sectionLabel: string;
  title: string;
  description: string;
  steps: MethodStep[];
}
