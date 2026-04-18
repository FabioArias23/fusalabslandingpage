import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";

import { Logo } from "./Logo";
import { WhatsAppFAB } from "./WhatsAppFAB";

interface LayoutProps {
  children: ReactNode;
  menuItems?: Array<{ label: string; href: string }>;
  cta?: { label: string; href: string };
}

const defaultMenu = [
  { label: "Servicios", href: "#servicios" },
  { label: "Productos", href: "#productos" },
];

export const Layout = ({
  children,
  menuItems = defaultMenu,
  cta = { label: "Empezar", href: "#contacto" },
}: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 md:px-6">
          <Logo />
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <a href={item.href}>{item.label}</a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <Button asChild size="sm">
            <a href={cta.href}>{cta.label}</a>
          </Button>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-12">
        {children}
      </main>

      <footer className="mx-auto w-full max-w-6xl px-4 pb-8 md:px-6">
        <Separator className="mb-4" />
        <p className="text-muted-foreground text-sm">Fusa Labs</p>
      </footer>

      <WhatsAppFAB />
    </div>
  );
};
