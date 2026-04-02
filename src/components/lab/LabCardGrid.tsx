import type {
  ExperimentoEntry,
  PrototipoEntry,
  NotaEntry,
  JournalEntry,
  ArchivoEntry,
} from "./types";
import { ExperimentCard } from "./ExperimentCard";
import { PrototypeCard } from "./PrototypeCard";
import { NoteCard } from "./NoteCard";
import { JournalCard } from "./JournalCard";
import { ArchiveCard } from "./ArchiveCard";

type Entry =
  | ExperimentoEntry
  | PrototipoEntry
  | NotaEntry
  | JournalEntry
  | ArchivoEntry;

interface Props {
  entries: Entry[];
  type: "experimento" | "prototipo" | "nota" | "journal" | "archivo";
  lang: "es" | "en";
}

export function LabCardGrid({ entries, type, lang }: Props) {
  if (entries.length === 0) {
    return (
      <div className="text-white/30 text-center py-20 font-conthrax uppercase tracking-widest text-sm">
        {lang === "es" ? "Sin entradas aún" : "No entries yet"}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {entries.map((entry) => {
        switch (type) {
          case "experimento":
            return <ExperimentCard key={entry.id} entry={entry as ExperimentoEntry} lang={lang} />;
          case "prototipo":
            return <PrototypeCard key={entry.id} entry={entry as PrototipoEntry} lang={lang} />;
          case "nota":
            return <NoteCard key={entry.id} entry={entry as NotaEntry} lang={lang} />;
          case "journal":
            return <JournalCard key={entry.id} entry={entry as JournalEntry} lang={lang} />;
          case "archivo":
            return <ArchiveCard key={entry.id} entry={entry as ArchivoEntry} lang={lang} />;
        }
      })}
    </div>
  );
}