"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function MouseGradient() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (opacity === 0) setOpacity(1);
    };

    const handleMouseLeave = () => setOpacity(0);
    const handleMouseEnter = () => setOpacity(1);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [opacity]);

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-[-1] transition-opacity duration-1000 hidden lg:block"
      style={{
        opacity,
        background: `radial-gradient(1100px circle at ${mousePos.x}px ${mousePos.y}px, rgba(28, 5, 142, 0.18), transparent 85%)`,
      }}
    />
  );
}
