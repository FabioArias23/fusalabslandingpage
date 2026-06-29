"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { useLocale } from "@/contexts/locale-context";
import { TeamMember } from "@/types";
import { findMemberBySlug } from "@/lib/slug";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, MessageSquare, Globe } from "lucide-react";

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

const Github = ({ className }: { className?: string }) => (
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
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);

interface TeamMemberContentProps {
  slug: string;
}

export function TeamMemberContent({ slug }: TeamMemberContentProps) {
  const { data } = useLocale();
  const members = data.team.members as TeamMember[];
  const member = findMemberBySlug(members, slug);
  const { equipo } = data.pages;

  if (!member) {
    notFound();
  }

  const linkedinUrl = member.linkedin || "https://www.linkedin.com/company/fusa-labs";
  const showGithub = !!member.github;
  const showPortfolio = !!member.portfolio;

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-8 px-6 pt-32 pb-12 sm:pt-40 md:pt-48 md:pb-16">
      <div className="flex w-full items-center justify-between">
      </div>

      <div className="relative w-full">
        <Link 
          href="/#equipo" 
          className="absolute -top-14 left-0 sm:-top-16 sm:left-0 lg:-left-16 lg:top-6 z-10 flex items-center justify-center size-10 sm:size-12 rounded-full border border-border/40 bg-card/50 backdrop-blur-sm shadow-xl hover:bg-card/80 hover:scale-110 transition-all text-foreground"
          title={equipo.volverLabel}
        >
          <ArrowLeft className="size-5" />
        </Link>
        
        <Card className="border-border/40 bg-card/50 backdrop-blur-sm shadow-xl">
        <CardHeader className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-start gap-6">
            <Avatar className="size-32 border-2 border-border/40 mx-auto sm:mx-0">
              <AvatarImage 
                src={member.foto} 
                alt={member.name} 
                className="object-cover"
                style={{ objectPosition: member.position || "center" }}
              />
              <AvatarFallback className="text-3xl">{member.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="space-y-3 text-center sm:text-left">
              <CardTitle className="text-3xl sm:text-4xl font-heading scale-y-110 origin-left sm:origin-left">{member.name}</CardTitle>
              <CardDescription className="text-lg sm:text-xl text-muted-foreground/80">{member.title}</CardDescription>
              <div className="flex items-center justify-center sm:justify-start gap-3 pt-2">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" asChild className="size-[54px] rounded-full bg-white/5 hover:bg-white/10 text-[#1C058E]! transition-all hover:scale-110">
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="size-6" />
                    </a>
                  </Button>
                  {member.instagram && (
                    <Button variant="ghost" size="icon" asChild className="size-[54px] rounded-full bg-white/5 hover:bg-white/10 text-[#1C058E]! transition-all hover:scale-110">
                      <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                        <Instagram className="size-6" />
                      </a>
                    </Button>
                  )}
                  {showGithub && (
                    <Button variant="ghost" size="icon" asChild className="size-[54px] rounded-full bg-white/5 hover:bg-white/10 text-[#1C058E]! transition-all hover:scale-110">
                      <a href={member.github} target="_blank" rel="noopener noreferrer">
                        <Github className="size-6" />
                      </a>
                    </Button>
                  )}
                  {showPortfolio && (
                    <Button variant="ghost" size="icon" asChild className="size-[54px] rounded-full bg-white/5 hover:bg-white/10 text-[#1C058E]! transition-all hover:scale-110">
                      <a href={member.portfolio} target="_blank" rel="noopener noreferrer" title="Portfolio">
                        <Globe className="size-6" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-8">
          <Separator />

          <section className="space-y-4">
            <h3 className="text-lg font-semibold">{equipo.resumenLabel}</h3>
            <div className="text-muted-foreground dark:text-white! leading-relaxed space-y-6">
              <p>{member.bio}</p>
              
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-2 border-t border-border/20">
                <span className="opacity-80 italic mt-4 sm:mt-0">
                  {equipo.charlaText}
                </span>
                <Link 
                  href="/#contacto" 
                  className="inline-flex items-center text-[#1C058E]! hover:text-[#1C058E]/80! dark:text-[#1C058E]! dark:hover:text-[#1C058E]/80! font-bold transition-colors group mt-1 sm:mt-0"
                >
                  <MessageSquare className="size-4 mr-1.5" />
                  {equipo.contactarLabel}
                  <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </section>
        </CardContent>
      </Card>
      </div>
    </main>
  );
}
