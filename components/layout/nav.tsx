"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "@/contexts/locale-context";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ArrowRight } from "lucide-react";

export function Nav() {
  const pathname = usePathname();
  const { data, isEnglish, toggleLang } = useLocale();
  const { navigation } = data;

  const menuItems = navigation.menuItems.filter(
    (item) =>
      item.toLowerCase() !== "lab" &&
      item.toLowerCase() !== "equipo" &&
      item.toLowerCase() !== "team" &&
      item.toLowerCase() !== "productos" &&
      item.toLowerCase() !== "products" &&
      item.toLowerCase() !== "servicios" &&
      item.toLowerCase() !== "services" &&
      item.toLowerCase() !== "contacto" &&
      item.toLowerCase() !== "contact",
  );

  const getHref = (item: string): string => {
    const itemLower = item.toLowerCase();
    if (itemLower === "equipo" || itemLower === "team") return "/equipo";
    if (itemLower === "servicios" || itemLower === "services")
      return "/servicios";
    if (itemLower === "productos" || itemLower === "products")
      return "/productos";
    return "#";
  };

  const languageLabel = isEnglish ? "ESPAÑOL" : "ENGLISH";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">FUSA</span>
            <span className="text-xl font-light tracking-tight text-muted-foreground">
              LABS
            </span>
          </Link>

          <NavigationMenu className="hidden md:block">
            <NavigationMenuList>
              {menuItems.map((item) => {
                const href = getHref(item);
                const isActive =
                  pathname === href ||
                  (href !== "/" && pathname.startsWith(href));

                return (
                  <NavigationMenuItem key={item}>
                    <NavigationMenuLink
                      href={href}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "gap-1.5",
                        isActive && "bg-accent",
                      )}
                    >
                      {item}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button
            type="button"
            variant="ghost"
            className="text-xs uppercase tracking-wider"
            onClick={toggleLang}
          >
            {languageLabel}
          </Button>
          <Button asChild className="hidden sm:inline-flex">
            <Link href="#contacto">
              {navigation.ctaButton}
              <ArrowRight className="size-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
