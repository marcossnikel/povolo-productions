"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Pacote Sonorização",
    href: "/services/sound",
    description:
      "Ideal para eventos diurnos ou ocasiões que não requerem iluminação adicional, como festas, churrascos, confraternizações, congressos, feiras de exposição, entre outros.",
  },
  {
    title: "Pacote Slim",
    href: "/services/slim",
    description:
      "Recomendado para eventos noturnos ou ocasiões que demandam iluminação, como festas em geral, casamentos, debutantes, bodas, churrascos, confraternizações, congressos e feiras de exposição com ambiente de balada, entre outros.",
  },
  {
    title: "Pacote Premium",
    href: "/services/premium",
    description:
      "Ideal para eventos noturnos de requinte, nos quais a sinergia entre música e luz cria uma atmosfera cativante. Indicado para festas em geral, casamentos, debutantes, bodas, churrascos, confraternizações, congressos e feiras de exposição com ambiente de balada, entre outras ocasiões especiais.",
  },
  {
    title: "Pacote Home/Service",
    href: "/docs/primitives/scroll-area",
    description: "Anime sua festa com um karaoke top (copy a ser decidido)",
  },
  {
    title: "Items Individuais para suas festas.",
    href: "/docs/primitives/tabs",
    description: "Tapete xadrez, pista paris, plataforma 360º e muito mais...",
  },
];

export function Services() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-xl bg-inherit">
            Pacotes
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
