"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { useLocale } from "@/contexts/locale-context";
import { TeamMember } from "@/types";
import { decodeSlug, findMemberBySlug } from "@/lib/slug";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Mail } from "lucide-react";

const Instagram = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


import { TeamMemberContentNeural } from "./member-content-neural";

interface TeamMemberContentProps {
  slug: string;
}

export function TeamMemberContent({ slug }: TeamMemberContentProps) {
  const { data, isEnglish } = useLocale();
  const members = data.team.members as TeamMember[];
  const member = findMemberBySlug(members, slug);

  if (!member) {
    notFound();
  }

  // Apply the Neural design to everyone except Facundo Majda
  if (slug !== "facundo-majda") {
    return <TeamMemberContentNeural member={member} />;
  }

  const linkedinUrl = member.linkedin || "https://www.linkedin.com/company/fusa-labs";
  const instagramUrl = member.instagram || "https://www.instagram.com/fusa.labs";

  const volverLabel = isEnglish ? "Back to team" : "Volver al equipo";
  const resumenLabel = isEnglish ? "Summary" : "Resumen";
  const aporteLabel = isEnglish ? "Contribution" : "Aporte";
  const disponibilidadLabel = isEnglish ? "Availability" : "Disponibilidad";
  const contactarLabel = isEnglish ? "Contact" : "Contactar";

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-6 sm:gap-8 px-4 sm:px-6 py-10 md:py-16">
      <Button variant="ghost" asChild className="w-fit transition-all hover:translate-x-[-4px]">
        <Link href="/equipo">
          <ArrowLeft className="size-4 mr-2" />
          {volverLabel}
        </Link>
      </Button>

      <Card className="border-border/40 bg-card/50 backdrop-blur-sm shadow-xl">
        <CardHeader className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
            <Avatar className="size-20 sm:size-28 lg:size-32 border-2 border-border/40">
              <AvatarImage
                src={member.foto}
                alt={member.name}
                className="object-cover"
                style={{ objectPosition: member.position || "center" }}
              />
              <AvatarFallback className="text-2xl">{member.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="space-y-2 sm:space-y-3 text-center sm:text-left">
              <CardTitle className="text-2xl sm:text-3xl lg:text-4xl font-heading scale-y-110 origin-left">{member.name}</CardTitle>
              <CardDescription className="text-base sm:text-lg lg:text-xl text-muted-foreground/80">{member.title}</CardDescription>
              <div className="flex items-center gap-3 pt-2">
                {member.disponible && (
                  <Badge variant="default" className="bg-emerald-600/90 hover:bg-emerald-600 text-[10px] uppercase tracking-wider px-3">
                    {isEnglish ? "Available" : "Disponible"}
                  </Badge>
                )}
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" asChild className="size-9 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all hover:scale-110">
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="size-4" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild className="size-9 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all hover:scale-110">
                    <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                      <Instagram className="size-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Separator />

          <section className="space-y-2">
            <h3 className="text-lg font-semibold">{resumenLabel}</h3>
            <p className="text-muted-foreground dark:text-white!">{member.resumen}</p>
          </section>

          <section className="space-y-2">
            <h3 className="text-lg font-semibold">{aporteLabel}</h3>
            <p className="text-muted-foreground dark:text-white!">{member.aporte}</p>
          </section>

          <section className="space-y-2">
            <h3 className="text-lg font-semibold">{disponibilidadLabel}</h3>
            <p className="text-muted-foreground">{member.disponibilidad}</p>
          </section>

          {member.email && (
            <Button asChild className="w-full sm:w-fit">
              <a href={`mailto:${member.email}`}>
                <Mail className="size-4 mr-2" />
                {contactarLabel}
              </a>
            </Button>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
