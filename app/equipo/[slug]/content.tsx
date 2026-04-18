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

  const volverLabel = isEnglish ? "Back to team" : "Volver al equipo";
  const resumenLabel = isEnglish ? "Summary" : "Resumen";
  const aporteLabel = isEnglish ? "Contribution" : "Aporte";
  const areasLabel = isEnglish ? "Focus Areas" : "Áreas de Enfoque";
  const keywordsLabel = isEnglish ? "Keywords" : "Keywords";
  const citaLabel = isEnglish ? "Quote" : "Cita";
  const disponibilidadLabel = isEnglish ? "Availability" : "Disponibilidad";
  const contactarLabel = isEnglish ? "Contact" : "Contactar";

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-8 px-6 py-12 md:py-16">
      <Button variant="ghost" asChild className="w-fit">
        <Link href="/equipo">
          <ArrowLeft className="size-4 mr-2" />
          {volverLabel}
        </Link>
      </Button>

      <Card>
        <CardHeader className="space-y-6">
          <div className="flex items-start gap-6">
            <Avatar className="size-24">
              <AvatarImage src={member.foto} alt={member.name} />
              <AvatarFallback className="text-2xl">{member.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <CardTitle className="text-3xl">{member.name}</CardTitle>
              <CardDescription className="text-lg">{member.title}</CardDescription>
              <div className="flex flex-wrap gap-2 pt-2">
                {member.disponible && (
                  <Badge variant="default" className="bg-green-600">
                    {isEnglish ? "Available" : "Disponible"}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Separator />

          <section className="space-y-2">
            <h3 className="text-lg font-semibold">{resumenLabel}</h3>
            <p className="text-muted-foreground">{member.resumen}</p>
          </section>

          <section className="space-y-2">
            <h3 className="text-lg font-semibold">{aporteLabel}</h3>
            <p className="text-muted-foreground">{member.aporte}</p>
          </section>

          <section className="space-y-3">
            <h3 className="text-lg font-semibold">{areasLabel}</h3>
            <div className="flex flex-wrap gap-2">
              {member.areasEnfoque.map((area) => (
                <Badge key={area} variant="secondary">
                  {area}
                </Badge>
              ))}
            </div>
          </section>

          <section className="space-y-3">
            <h3 className="text-lg font-semibold">{keywordsLabel}</h3>
            <div className="flex flex-wrap gap-2">
              {member.keywords.map((keyword) => (
                <Badge key={keyword} variant="outline">
                  {keyword}
                </Badge>
              ))}
            </div>
          </section>

          <Separator />

          <section className="space-y-3">
            <h3 className="text-lg font-semibold">{citaLabel}</h3>
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
              &ldquo;{member.cita}&rdquo;
            </blockquote>
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
