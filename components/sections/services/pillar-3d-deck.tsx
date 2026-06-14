"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Pillar3DDeck({ pillar }: { pillar: any }) {
  const media: string[] = pillar.media || [];
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  if (media.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="w-full space-y-12"
    >
      {/* Pillar Header */}
      <div className="max-w-[1800px] mx-auto px-6 text-center">
        <div className="flex flex-col items-center">
          <div className="mb-4 sm:mb-6">
            <h3 className="font-heading text-lg sm:text-2xl md:text-3xl lg:text-5xl scale-y-110 origin-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {pillar.title}
            </h3>
          </div>
          <div className="max-w-5xl mx-auto text-sm sm:text-base md:text-lg lg:text-2xl text-muted-foreground/90 leading-relaxed font-light">
            {pillar.description}
          </div>
        </div>
      </div>

      {/* Interactive 3D Carousel Container */}
      <div className="relative w-full h-[500px] sm:h-[600px] md:h-[800px] lg:h-[900px] flex items-center justify-center overflow-hidden [perspective:1200px]">
        <div className="relative w-full max-w-2xl md:max-w-5xl lg:max-w-[1400px] aspect-[16/10] flex items-center justify-center [transform-style:preserve-3d]">
          <AnimatePresence initial={false}>
            {media.map((src, index) => {
              // Calculamos la distancia relativa al slide actual
              // Para que el loop sea infinito visualmente en un array pequeño (ej. 3 items)
              let offset = index - currentIndex;
              if (offset < -1) offset += media.length;
              if (offset > 1) offset -= media.length;

              const isCenter = offset === 0;
              const isLeft = offset === -1;
              const isRight = offset === 1;

              // Si el array es más grande que 3, ocultamos los que están más lejos
              if (!isCenter && !isLeft && !isRight && media.length > 3) {
                return null;
              }

              // Lógica de transformación 3D (Coverflow effect)
              const rotateY = isCenter ? 0 : isLeft ? 35 : -35;
              const translateX = isCenter ? 0 : isLeft ? -40 : 40;
              const translateZ = isCenter ? 80 : -300;
              const zIndex = isCenter ? 30 : 20;
              const opacity = isCenter ? 1 : 0.4;

              return (
                <motion.div
                  key={index}
                  initial={false}
                  animate={{
                    rotateY,
                    x: `${translateX}%`,
                    z: translateZ,
                    opacity,
                    scale: isCenter ? 1.15 : 0.85,
                  }}
                  transition={{
                    duration: 3,
                    ease: [0.16, 1, 0.3, 1], // Spring-like feel
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                    zIndex,
                  }}
                  className={cn(
                    "absolute inset-0 w-full h-full cursor-pointer",
                    !isCenter && "pointer-events-none", // Previene clicks en tarjetas traseras
                  )}
                  onClick={() => {
                    // Si el usuario hace click en una tarjeta lateral, la traemos al centro
                    if (isLeft) prevSlide();
                    if (isRight) nextSlide();
                  }}
                >
                  <Image
                    src={src}
                    alt={`${pillar.title} slide ${index + 1}`}
                    fill
                    priority={isCenter}
                    className="object-contain drop-shadow-2xl"
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 800px"
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Carousel Controls */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full max-w-[1800px] flex justify-between px-4 sm:px-12 pointer-events-none z-40">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-background/50 backdrop-blur-xl border-white/10 hover:bg-background/80 hover:scale-110 transition-all pointer-events-auto"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-background/50 backdrop-blur-xl border-white/10 hover:bg-background/80 hover:scale-110 transition-all pointer-events-auto"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
