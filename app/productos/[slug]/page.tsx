import productsData from "@/data/productsConfig.json";
import { Product } from "@/types";
import { ProductContent } from "./content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products = productsData.products as Record<string, Product>;
  return Object.values(products)
    .filter((p) => p.active)
    .map((p) => ({ slug: p.slug }));
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  return <ProductContent slug={decodeURIComponent(slug)} />;
}
