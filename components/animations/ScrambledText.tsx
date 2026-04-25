"use client";

import React, { useEffect, useRef, useState, useCallback } from 'react';

interface ScrambledTextProps {
  children: string;
  radius?: number;
  duration?: number;
  speed?: number;
  scrambleChars?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ScrambledText: React.FC<ScrambledTextProps> = ({
  children,
  radius = 50,
  speed = 0.8,
  scrambleChars = '.:',
  className = '',
  style = {}
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [displayText, setDisplayText] = useState(children);
  const originalChars = useRef<string[]>(children.split(''));
  const currentChars = useRef<string[]>(children.split(''));
  const isAnimating = useRef<boolean[]>(new Array(children.length).fill(false));

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current) return;

    const spans = containerRef.current.querySelectorAll('.scramble-char');
    const rect = containerRef.current.getBoundingClientRect();

    spans.forEach((span, i) => {
      const charRect = span.getBoundingClientRect();
      const dx = e.clientX - (charRect.left + charRect.width / 2);
      const dy = e.clientY - (charRect.top + charRect.height / 2);
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < radius && !isAnimating.current[i]) {
        isAnimating.current[i] = true;
        animateChar(i);
      }
    });
  }, [radius]);

  const animateChar = (index: number) => {
    let frame = 0;
    const maxFrames = 2 + Math.random() * 3;
    
    const interval = setInterval(() => {
      if (frame < maxFrames) {
        currentChars.current[index] = scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
        setDisplayText(currentChars.current.join(''));
        frame++;
      } else {
        clearInterval(interval);
        currentChars.current[index] = originalChars.current[index];
        setDisplayText(currentChars.current.join(''));
        isAnimating.current[index] = false;
      }
    }, speed * 40);
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  // Handle prop changes
  useEffect(() => {
    setDisplayText(children);
    originalChars.current = children.split('');
    currentChars.current = children.split('');
    isAnimating.current = new Array(children.length).fill(false);
  }, [children]);

  return (
    <div 
      ref={containerRef} 
      className={className} 
      style={{ ...style, cursor: 'default' }}
    >
      {children.split('').map((char, i) => (
        <span 
          key={i} 
          className="scramble-char inline-block whitespace-pre"
        >
          {displayText[i] || char}
        </span>
      ))}
    </div>
  );
};

export default ScrambledText;
