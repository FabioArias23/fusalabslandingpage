"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Aurora from "./Aurora";
import AuroraCSSFallback from "./AuroraCSSFallback";

export default function AdaptiveAurora() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [webglFailed, setWebglFailed] = useState(false);

  useEffect(() => {
    setMounted(true);

    const checkTheme = () => {
      const isDarkClass = document.documentElement.classList.contains("dark");
      setIsDark(isDarkClass);
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  if (!mounted) return null;

  const lightColors = ["#ffffff", "#ffffff", "#e6e6e6"];
  const darkColors = ["#7d769c", "#1C058E", "#7d769c"];

  const currentKey = isDark ? "dark" : "light";

  return (
    <div
      className={`fixed inset-0 z-[-2] pointer-events-none overflow-hidden transition-colors duration-700 ${isDark ? "bg-[#050505]" : "bg-[#e6e6e6]"}`}
    >
      {webglFailed ? (
        <AuroraCSSFallback isDark={isDark} />
      ) : (
        <Aurora
          key={currentKey}
          colorStops={isDark ? darkColors : lightColors}
          blend={isDark ? 0.6 : 1.0}
          amplitude={isDark ? 0.6 : 0.4}
          speed={0.8}
          onError={() => setWebglFailed(true)}
        />
      )}
    </div>
  );
}
