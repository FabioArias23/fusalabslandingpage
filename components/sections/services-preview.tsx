"use client";

import * as React from "react";
import {
  Cpu,
  Code2,
  Layers,
  Zap,
  Target,
  Shield,
  TrendingUp,
  Users,
  Search,
  Rocket,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import landingData from "@/data/landingData.json";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";


const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Cpu,
  Layers,
  Zap,
  Target,
  Shield,
  TrendingUp,
  Code2,
  Users,
  Search,
  Rocket,
  CheckCircle,
};

function PillarCarousel({ pillar, Icon }: { pillar: any; Icon: any }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const originalMedia: string[] = pillar.media || [];

  // Autoplay plugin instance
  const autoplay = React.useRef(
    Autoplay({ delay: 3400, stopOnInteraction: false, stopOnMouseEnter: true }),
  );

  // Double media if count is small to ensure seamless loop without gaps
  const media =
    originalMedia.length > 0 && originalMedia.length < 6
      ? [...originalMedia, ...originalMedia]
      : originalMedia;

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap() % originalMedia.length);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() % originalMedia.length);
    });
  }, [api, originalMedia.length]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 60 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="w-full space-y-8"
    >
      {/* Pillar Header */}
      <div className="max-w-[1800px] mx-auto px-6 text-center">
        <div className="flex flex-col items-center">
          <div className="mb-4 sm:mb-6">
            <h3 className="font-heading text-2xl xs:text-3xl sm:text-4xl md:text-6xl scale-y-110 origin-center">
              {pillar.title}
            </h3>
          </div>
          <div className="max-w-5xl mx-auto text-base xs:text-lg sm:text-xl md:text-3xl text-muted-foreground/90 leading-relaxed font-light">
            {pillar.description}
          </div>
        </div>
      </div>

      {/* Full Width Carousel Container */}
      <div className="relative w-full overflow-hidden py-4">
        <Carousel
          setApi={setApi}
          plugins={[autoplay.current]}
          opts={{
            align: "center",
            loop: true,
            containScroll: false,
            duration: 45, // Slower, more premium transition speed (default is 25)
          }}
          className="w-full"
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
        >
          <CarouselContent className="overflow-visible -ml-[2px]">
            {media.map((item: string, idx: number) => {
              const isActive = current === idx % originalMedia.length;
              return (
                <CarouselItem
                  key={idx}
                  className="pl-[2px] basis-[92%] xs:basis-[85%] sm:basis-[75%] md:basis-[65%]"
                >
                  <div
                    className={cn(
                      "relative aspect-[16/9] w-full overflow-hidden rounded-3xl transition-all duration-700",
                      isActive
                        ? "scale-100 opacity-100 shadow-2xl shadow-primary/30 cursor-default"
                        : "scale-[0.96] opacity-75 grayscale-[0.3] blur-[3px] cursor-pointer hover:opacity-90 brightness-[0.9]",
                    )}
                    onClick={() => !isActive && api?.scrollTo(idx)}
                  >
                    <Image
                      src={item}
                      alt={`${pillar.title} - ${idx + 1}`}
                      fill
                      sizes="(max-width: 768px) 92vw, 65vw"
                      className="object-cover"
                    />

                    {isActive && (
                      <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-3xl pointer-events-none" />
                    )}
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:pl-32 mt-6 flex items-center justify-between pointer-events-none absolute inset-0 z-20">
            <CarouselPrevious className="pointer-events-auto h-10 w-10 sm:h-12 sm:w-12 bg-background/80 backdrop-blur-md border hover:bg-background" />
            <CarouselNext className="pointer-events-auto h-10 w-10 sm:h-12 sm:w-12 bg-background/80 backdrop-blur-md border hover:bg-background" />
          </div>
        </Carousel>
      </div>

      {/* Actions - Aligned Left */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
        className="w-full flex justify-center pb-10 sm:pb-16 px-6"
      >
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="link"
              className="group h-auto p-0 text-base xs:text-lg sm:text-2xl font-semibold text-[#1C058E] hover:no-underline transition-all duration-300"
            >
              Read more
              <ArrowRight className="ml-2 size-4 xs:size-5 sm:size-7 transition-transform group-hover:translate-x-1" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-3xl">
            <DialogHeader>
              <div className="flex items-center gap-4 mb-3">
                <Icon className="size-8 text-primary" />
                <DialogTitle className="text-3xl scale-y-110 origin-left">
                  {pillar.title}
                </DialogTitle>
              </div>
            </DialogHeader>

            <div className="space-y-6 text-xl leading-relaxed pt-6 border-t border-border/40 mt-6">
              <h4 className="text-2xl font-semibold italic text-primary/90 leading-tight">
                &quot;{pillar.modalTitle}&quot;
              </h4>
              <p className="text-muted-foreground whitespace-pre-line">
                {pillar.modalMessage}
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </motion.div>
    </motion.div>
  );
}

export function ServicesPreviewSection({
  data,
}: {
  data: typeof landingData.es;
}) {
  const pillars = data.services.pillars || [];

  return (
    <section id="servicios" className="pt-12 sm:pt-16 md:pt-24">
      {/* Section Title */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, y: 60 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-[1800px] mx-auto px-6 text-center mb-8 sm:mb-12 md:mb-16"
      >
        <h2 className="font-heading text-2xl sm:text-4xl md:text-[5.4rem] tracking-tight text-foreground/90 scale-y-110 origin-center">
          {data.services.title}
        </h2>
      </motion.div>

      <div className="flex flex-col">
        {pillars.map((pillar: any, index: number) => (
          <motion.div
            key={pillar.icon || index}
            initial={{ opacity: 0, scale: 0.8, y: 60 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 + (index * 0.05) }}
            className={cn(
              "py-12 sm:py-16 md:py-24",
              index !== pillars.length - 1 && "border-b border-white/5",
            )}
          >
            <PillarCarousel
              pillar={pillar}
              Icon={iconMap[pillar.icon] || Cpu}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
