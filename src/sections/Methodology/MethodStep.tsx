import { useEffect, useRef, useState } from "react";

interface MethodStepProps {
  num: string;
  title: string;
  desc: string;
  index: number;
}

export const MethodStep = ({ num, title, desc, index }: MethodStepProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayNum, setDisplayNum] = useState(num);
  const stepRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (stepRef.current) observer.observe(stepRef.current);
    return () => {
      observer.disconnect();
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    const chars = "0123456789X";
    let iteration = 0;
    const maxLen = num.length;

    intervalRef.current = setInterval(() => {
      setDisplayNum(
        num.split("").map((char, index) => {
          if (index < iteration) return num[index];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join("")
      );

      if (iteration >= maxLen) {
        clearInterval(intervalRef.current);
        setDisplayNum(num);
      }
      iteration += 1 / 2;
    }, 30);
  };

  return (
    <div
      ref={stepRef}
      className={`flex flex-col md:flex-row gap-6 md:gap-10 group cursor-default bg-fusa-indigo/[0.02] border border-fusa-indigo/10 rounded-sm p-8 hover:bg-fusa-indigo/[0.05] hover:border-fusa-indigo/30 hover:shadow-[0_0_30px_rgba(28,5,142,0.1)] transition-all duration-700 opacity-0 ${
        isVisible ? "animate-reveal" : ""
      }`}
      style={{ animationDelay: `${index * 0.15}s` }}
      onMouseEnter={handleMouseEnter}
    >
      <span className="font-conthrax text-4xl md:text-5xl text-white/10 group-hover:text-fusa-indigo transition-colors duration-700 leading-none drop-shadow-sm">
        {displayNum}
      </span>
      <div className="space-y-4 flex-1">
        <h4 className="text-xl md:text-2xl font-conthrax">{title}</h4>
        <p className="text-fusa-white/50 text-lg leading-relaxed group-hover:text-fusa-white/80 transition-colors">
          {desc}
        </p>
      </div>
    </div>
  );
};
