"use client";

import Link from "next/link";
import { useLocale } from "@/contexts/locale-context";
import productsData from "@/data/productsConfig.json";
import { Product } from "@/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Layers, Zap } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Cpu,
  Layers,
  Zap,
};

export default function ProductosPage() {
  const { isEnglish } = useLocale();
  const products = productsData.products as Record<string, Product>;
  const productList = Object.values(products).filter((p) => p.active);

  const title = isEnglish ? "Products" : "Productos";
  const subtitle = isEnglish
    ? "Proprietary products designed to automate processes, organize information, and expand operational capacity."
    : "Soluciones proprietarias diseñadas para automatizar procesos, organizar información y ampliar capacidad operativa.";
  const verDetalles = isEnglish ? "View details" : "Ver detalles";

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-8 px-6 py-12 md:py-16">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">{subtitle}</p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {productList.map((product) => {
          const IconComponent = iconMap[product.icon] || Cpu;
          const tagline = product.tagline[isEnglish ? "en" : "es"];
          const description = product.description[isEnglish ? "en" : "es"];
          return (
            <Card key={product.slug} className="flex flex-col">
              <CardHeader className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                    <IconComponent className="size-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    <Badge variant="secondary" className="mt-1">
                      {product.tags[0]}
                    </Badge>
                  </div>
                </div>
                <CardDescription className="line-clamp-2">
                  {tagline}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button asChild className="w-full">
                  <Link href={`/productos/${encodeURIComponent(product.slug)}`}>
                    {verDetalles}
                    <ArrowRight className="size-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </section>
    </main>
  );
}
