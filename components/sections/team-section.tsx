"use client";

import landingData from "@/data/landingData.json";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function TeamSection({ data }: { data: typeof landingData.es }) {
  const { team } = data;

  return (
    <section id="equipo" className="py-24">
      <div className="max-w-[1800px] px-6 lg:pl-32 lg:pr-24">
          <div className="mb-16 max-w-2xl">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4 scale-y-110 origin-left">
              {team.title}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {team.subtitle}
            </p>
          </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.members.map((member: any) => (
            <Link
              key={member.slug}
              href={`/equipo/${member.slug}`}
              className="group block text-center"
            >
              <div className="flex flex-col items-center">
                <div className="relative size-60 mb-6 overflow-hidden rounded-full border-2 border-border/40 transition-all group-hover:border-primary/50 group-hover:scale-105">
                  <Image
                    src={member.foto}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover grayscale transition-all group-hover:grayscale-0"
                    style={{ 
                      transform: `scale(${member.zoom || 1})`,
                      objectPosition: member.position || "center"
                    }}
                    unoptimized
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-heading text-3xl group-hover:text-primary transition-colors scale-y-125">
                    {member.name}
                  </h3>
                  <p className="text-base font-medium text-muted-foreground">
                    {member.title}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
