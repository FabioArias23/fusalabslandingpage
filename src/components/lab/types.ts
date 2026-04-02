export type LabEntryType =
  | "experimento"
  | "prototipo"
  | "nota"
  | "journal"
  | "archivo";

export type LabCategory =
  | "ia-aplicada"
  | "automatizacion"
  | "interfaces"
  | "sistemas"
  | "producto"
  | "operaciones"
  | "research";

export interface LabCategoryDef {
  id: LabCategory;
  name: string;
}

export interface LabHero {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface BaseLabEntry {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  date: string;
}

export interface ExperimentoEntry extends BaseLabEntry {
  type: string;
  status: string;
}

export interface PrototipoEntry extends BaseLabEntry {
  type: string;
  maturity: string;
  nextSteps: string;
}

export interface NotaEntry extends BaseLabEntry {
  type: string;
  excerpt: string;
}

export interface JournalEntry extends BaseLabEntry {
  type: string;
  format: string;
  body: string;
}

export interface ArchivoEntry extends BaseLabEntry {
  type: string;
  status: string;
  reason: string;
}

export type LabEntry =
  | ExperimentoEntry
  | PrototipoEntry
  | NotaEntry
  | JournalEntry
  | ArchivoEntry;

export interface LabContentData {
  hero: LabHero;
  categories: LabCategoryDef[];
  experimentos: ExperimentoEntry[];
  prototipos: PrototipoEntry[];
  notas: NotaEntry[];
  journal: JournalEntry[];
  archivo: ArchivoEntry[];
}
