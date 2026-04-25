import landingData from "@/data/landingData.json";
import { TeamMember } from "@/types";
import { TeamMemberContent } from "./content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const members = landingData.es.team.members as TeamMember[];
  return members.map((m) => ({ slug: m.slug }));
}

export default async function TeamMemberPage({ params }: PageProps) {
  const { slug } = await params;
  return <TeamMemberContent slug={decodeURIComponent(slug)} />;
}
