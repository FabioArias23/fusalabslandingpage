"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 500px
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-12 left-1/2 -translate-x-1/2 size-12 rounded-full transition-all duration-500 z-50",
        "bg-transparent border border-[#1C058E]/20 text-[#1C058E] dark:text-[#1C058E] dark:border-[#1C058E]/30 hover:bg-[#1C058E]/5 hover:scale-125 shadow-none",
        isVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-10 pointer-events-none"
      )}
      aria-label="Back to top"
    >
      <ChevronUp className="size-8 stroke-[1.5px]" />
    </Button>
  );
}
