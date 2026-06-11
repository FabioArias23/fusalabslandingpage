import { useLocale } from "@/contexts/locale-context";

export function useTeamLabels() {
  const { isEnglish } = useLocale();

  return {
    expertiseLabel: isEnglish ? "EXPERIENCE" : "EXPERIENCIA",
    portfolioLabel: isEnglish ? "PROJECT PORTFOLIO" : "PROYECTOS",
    aboutLabel: isEnglish ? "About Me" : "SOBRE MI",
    volverLabel: isEnglish ? "Back to team" : "Volver atrás",
  };
}
