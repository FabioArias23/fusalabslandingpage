import { TeamMemberContent } from "./content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function TeamMemberPage({ params }: PageProps) {
  const { slug } = await params;
  return <TeamMemberContent slug={decodeURIComponent(slug)} />;
}
