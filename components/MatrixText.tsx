import { useState, useEffect } from "react";

interface MatrixTextProps {
  text: string;
}

export const MatrixText = ({ text }: MatrixTextProps) => {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    // Letras estables para evitar vibraciones o saltos horizontales
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let iteration = 0;
    const maxLen = text.length;

    const interval = setInterval(() => {
      setDisplayText(
        text.split("").map((char, index) => {
          if (char === " " || char === "\n") return char;
          if (index < iteration) return text[index];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join("")
      );

      if (iteration >= maxLen) {
        clearInterval(interval);
        setDisplayText(text);
      }
      iteration += 1 / 2; // Avance cinemático de media letra por tick
    }, 30);

    return () => clearInterval(interval);
  }, [text]); // El efecto se dispara cada vez que el "text" cambia (ej: Cambio de idioma)

  return <>{displayText}</>;
};