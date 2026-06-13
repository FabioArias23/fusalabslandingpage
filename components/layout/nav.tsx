"use client";

import Link from "next/link";
import Image from "next/image";
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
import { useTheme } from "next-themes";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MagicContainer, MagicCard } from "@/components/ui/magic-bento";

export function Nav() {
  const pathname = usePathname();
  const { data, isEnglish, toggleLang } = useLocale();
  const { global } = data;
  const navData = global.nav;

  const menuItems = navData.menuItems;

  const getHref = (item: string): string => {
    const itemLower = item.toLowerCase();
    if (itemLower === "staff") return "/#equipo";
    if (itemLower === "servicios" || itemLower === "services") return "/#servicios";
    return "#";
  };

  return (
    <MagicContainer>
      <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
        <div className="w-full max-w-[1200px] pointer-events-auto">
          <MagicCard
          enableTilt={false}
          enableMagnetism={false}
          glowColor="28, 5, 142"
          className="rounded-full border border-white/10 bg-background/15 dark:bg-[#1C058E]/15 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] transition-all duration-300"
        >
          <div className="flex h-11 sm:h-12 lg:h-16 items-center justify-between px-2 sm:px-8">
            <div className="flex items-center gap-1 sm:gap-6">
              <Link
                href="/"
                className="flex items-center gap-2 sm:gap-4 hover:opacity-80 transition-opacity"
              >
                <div className="flex items-center gap-2 sm:gap-4">
                  {/* Logo Dark Mode */}
                  <Image
                    src="/img/LOGOS/ISOTIPO1.svg"
                    alt="Fusa Labs Logotipo"
                    width={36}
                    height={36}
                    className="h-6 w-auto sm:h-8 lg:h-[40px] hidden dark:block"
                    priority
                  />
                  {/* Logo Light Mode */}
                  <Image
                    src="/img/LOGOS/ISOTIPO 2.svg"
                    alt="Fusa Labs Logotipo"
                    width={36}
                    height={36}
                    className="h-6 w-auto sm:h-8 lg:h-[40px] block dark:hidden"
                    priority
                  />

                  {/* Wordmark Dark Mode */}
                  <Image
                    src="/img/LOGOS/WORDMARK 1.svg"
                    alt="Fusa Labs Wordmark"
                    width={120}
                    height={12}
                    className="h-3 w-auto hidden dark:lg:block"
                    priority
                  />
                  {/* Wordmark Light Mode */}
                  <Image
                    src="/img/LOGOS/WORDMARK 2.svg"
                    alt="Fusa Labs Wordmark"
                    width={120}
                    height={12}
                    className="h-3 w-auto hidden lg:block dark:hidden"
                    priority
                  />
                </div>
              </Link>

              <NavigationMenu className="flex items-center ml-1 sm:ml-0">
                <NavigationMenuList className="gap-0 sm:gap-1">
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
                            "group h-8 sm:h-9 w-max inline-flex items-center justify-center rounded-full bg-transparent px-2 py-1 sm:px-4 sm:py-2 text-[11px] sm:text-sm font-medium transition-colors text-[#1C058E] dark:text-white hover:bg-[#1C058E]/10 dark:hover:bg-white/10 focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                            isActive && "bg-[#1C058E]/10 dark:bg-white/10 font-bold",
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

            <div className="flex items-center gap-2 sm:gap-4">
              <Button asChild className="hidden sm:inline-flex rounded-full bg-[#1C058E] text-white! hover:bg-[#1C058E]/80 transition-all duration-300">
                <Link href="/#contacto">
                  {navData.ctaButton}
                  <ArrowRight className="size-4 ml-2" />
                </Link>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    type="button" 
                    variant="ghost" 
                    className="h-8 sm:h-10 text-[10px] sm:text-xs font-bold tracking-wider rounded-full hover:bg-[#1C058E]/10 text-[#1C058E] dark:text-white dark:hover:bg-white/10 transition-colors px-2 flex items-center gap-1"
                  >
                    {isEnglish ? navData.langLabels.en : navData.langLabels.es}
                    <ChevronDown className="w-3 h-3 opacity-70" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="min-w-[120px] bg-background/90 backdrop-blur-xl border border-border/10 rounded-2xl shadow-xl p-2 z-[60]">
                  {isEnglish ? (
                    <>
                      <DropdownMenuItem 
                        className="rounded-xl px-4 py-2 cursor-default font-medium dark:text-white text-[#1C058E] bg-[#1C058E]/5 dark:bg-white/5"
                      >
                        {navData.langLabels.english}
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        onClick={() => toggleLang()} 
                        className="rounded-xl px-4 py-2 cursor-pointer font-medium opacity-60 hover:opacity-100 hover:bg-[#1C058E]/10 dark:hover:bg-white/10 transition-all focus:bg-[#1C058E]/10 dark:focus:bg-white/10"
                      >
                        {navData.langLabels.spanish}
                      </DropdownMenuItem>
                    </>
                  ) : (
                    <>
                      <DropdownMenuItem 
                        className="rounded-xl px-4 py-2 cursor-default font-medium dark:text-white text-[#1C058E] bg-[#1C058E]/5 dark:bg-white/5"
                      >
                        {navData.langLabels.spanish}
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        onClick={() => toggleLang()} 
                        className="rounded-xl px-4 py-2 cursor-pointer font-medium opacity-60 hover:opacity-100 hover:bg-[#1C058E]/10 dark:hover:bg-white/10 transition-all focus:bg-[#1C058E]/10 dark:focus:bg-white/10"
                      >
                        {navData.langLabels.english}
                      </DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>

              <ThemeToggle />
            </div>
          </div>
        </MagicCard>
        </div>
      </header>
    </MagicContainer>
  );
}
