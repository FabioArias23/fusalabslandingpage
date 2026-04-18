"use client";

import { Cpu, Code2, Layers, Zap, Target, Shield, TrendingUp, Users, Search, Rocket, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
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

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Cpu, Layers, Zap, Target, Shield, TrendingUp, Code2, Users, Search, Rocket, CheckCircle,
};

export function ServicesPreviewSection({ data }: { data: typeof landingData.es }) {
  const pillars = data.services.pillars || [];

  return (
    <section id="servicios" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="font-heading text-3xl md:text-4xl">
            {data.services.title}
          </h2>
        </div>

        <div className="flex w-full flex-col gap-6">
          {pillars.map((pillar: any) => {
            const Icon = iconMap[pillar.icon] || Cpu;
            const media: string[] = pillar.media || [];

            return (
              <Card
                key={pillar.title}
                className="group relative overflow-hidden border-border/40 transition-all hover:border-primary/50"
              >
                {/* Background Carousel — full card */}
                <div className="relative w-full">
                  <Carousel className="w-full" opts={{ loop: true }}>
                    <CarouselContent>
                      {media.map((item: string, idx: number) => (
                        <CarouselItem key={idx}>
                          <div className="relative h-[480px] w-full">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={item}
                              alt={`${pillar.title} - slide ${idx + 1}`}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4 z-20 size-12 border-white/20 bg-black/40 text-white hover:bg-black/60 [&>svg]:size-6" />
                    <CarouselNext className="right-4 z-20 size-12 border-white/20 bg-black/40 text-white hover:bg-black/60 [&>svg]:size-6" />
                  </Carousel>
                </div>

                {/* Gradient overlay — bottom-heavy for text readability */}
                <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />

                {/* Content — pinned to bottom, pointer-events restored */}
                <CardContent className="absolute inset-0 z-10 flex flex-col justify-end p-8 pointer-events-none">
                  <div className="pointer-events-auto">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm">
                        <Icon className="size-5 text-white" />
                      </div>
                    </div>
                    <CardTitle className="font-heading text-2xl text-white">
                      {pillar.title}
                    </CardTitle>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/80">
                      {pillar.description}
                    </p>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="mt-4 w-fit border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                      >
                        Ver mensaje
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>{pillar.author || "Fusa Labs"}</DialogTitle>
                        <DialogDescription>Mensaje directo</DialogDescription>
                      </DialogHeader>

                      <div className="space-y-4 text-sm leading-relaxed pt-4">
                        <h3 className="text-lg font-semibold italic text-primary/90">
                          &quot;{pillar.modalTitle}&quot;
                        </h3>
                        <p className="text-muted-foreground">
                          {pillar.modalMessage}
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
