"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { useLocale } from "@/contexts/locale-context";
import productsData from "@/data/productsConfig.json";
import { Product } from "@/types";
import { decodeSlug, findBySlug } from "@/lib/slug";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Check, Cpu, Layers, Zap } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Cpu,
  Layers,
  Zap,
};

interface ProductContentProps {
  slug: string;
}

export function ProductContent({ slug }: ProductContentProps) {
  const { isEnglish } = useLocale();
  const products = productsData.products as Record<string, Product>;
  const product = findBySlug(products, slug);

  if (!product) {
    notFound();
  }

  const IconComponent = iconMap[product.icon] || Cpu;
  const lang = isEnglish ? "en" : "es";

  const volverLabel = isEnglish ? "Back to products" : "Volver a productos";
  const queResuelveLabel = isEnglish ? "What it solves" : "Qué resuelve";
  const dondeAgregaLabel = isEnglish ? "Where it adds value" : "Dónde agrega valor";
  const idealParaLabel = isEnglish ? "Ideal for" : "Ideal para";
  const caracteristicasLabel = isEnglish ? "Features" : "Características";
  const planesLabel = isEnglish ? "Plans" : "Planes";
  const popularLabel = isEnglish ? "Popular" : "Popular";

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-8 px-6 py-12 md:py-16">
      <Button variant="ghost" asChild className="w-fit">
        <Link href="/productos">
          <ArrowLeft className="size-4 mr-2" />
          {volverLabel}
        </Link>
      </Button>

      <Card>
        <CardHeader className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="flex size-16 items-center justify-center rounded-xl bg-primary/10">
              <IconComponent className="size-8 text-primary" />
            </div>
            <div>
              <CardTitle className="text-3xl">{product.name}</CardTitle>
              <CardDescription className="text-lg mt-1">{product.tagline[lang]}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg">{product.description[lang]}</p>

          <Separator />

          {/* What it solves */}
          <section className="space-y-3">
            <h3 className="text-xl font-semibold">{queResuelveLabel}</h3>
            <ul className="space-y-2">
              {product.whatSolves[lang].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="size-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <Separator />

          {/* Where it adds value */}
          <section className="space-y-3">
            <h3 className="text-xl font-semibold">{dondeAgregaLabel}</h3>
            <ul className="space-y-2">
              {product.whereItAddsValue[lang].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="size-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <Separator />

          {/* Ideal for */}
          <section className="space-y-2">
            <h3 className="text-xl font-semibold">{idealParaLabel}</h3>
            <p className="text-muted-foreground">{product.idealFor[lang]}</p>
          </section>

          <Separator />

          {/* Features */}
          <section className="space-y-3">
            <h3 className="text-xl font-semibold">{caracteristicasLabel}</h3>
            <div className="grid gap-2 md:grid-cols-2">
              {product.features[lang].map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="size-4 text-primary flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing */}
          {product.pricing && (
            <>
              <Separator />
              <section className="space-y-4">
                <h3 className="text-xl font-semibold">{planesLabel}</h3>
                <div className="grid gap-4 md:grid-cols-3">
                  {product.pricing.plans.map((plan, index) => (
                    <Card key={index} className={plan.highlight ? "border-primary" : ""}>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">
                          {plan.highlight && (
                            <Badge variant="default" className="mb-2">
                              {popularLabel}
                            </Badge>
                          )}
                          {plan.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="text-2xl font-bold">
                            {plan.price}
                            <span className="text-sm font-normal text-muted-foreground">
                              {isEnglish && plan.periodEn ? plan.periodEn : plan.period}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </>
          )}

          {/* Tags */}
          <Separator />
          <div className="flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
