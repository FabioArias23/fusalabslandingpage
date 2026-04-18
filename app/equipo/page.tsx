"use client";

import Link from "next/link";
import { useLocale } from "@/contexts/locale-context";
import { TeamMember } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function EquipoPage() {
  const { data, lang, isEnglish } = useLocale();
  const { team } = data;
  const members = team.members as TeamMember[];

  const disponibleLabel = isEnglish ? "Available" : "Disponible";
  const verPerfilLabel = isEnglish ? "View profile" : "Ver perfil";

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-8 px-6 py-12 md:py-16">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{team.title}</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">{team.subtitle}</p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => (
          <Card key={member.slug} className="flex flex-col">
            <CardHeader className="space-y-4">
              <div className="flex items-start gap-4">
                <Avatar className="size-16">
                  <AvatarImage src={member.foto} alt={member.name} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription>{member.title}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              <p className="text-sm text-muted-foreground">{member.bio}</p>
              <div className="flex flex-wrap gap-2">
                {member.keywords.slice(0, 3).map((keyword) => (
                  <Badge key={keyword} variant="secondary">
                    {keyword}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {member.disponible && (
                  <Badge variant="default" className="bg-green-600">
                    {disponibleLabel}
                  </Badge>
                )}
              </div>
              <Button asChild className="w-full">
                <Link href={`/equipo/${encodeURIComponent(member.slug)}`}>
                  {verPerfilLabel}
                  <ArrowRight className="size-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
