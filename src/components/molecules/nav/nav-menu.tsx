import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const resources = [
  {
    title: "Documentación",
    href: "/docs",
  },
  {
    title: "Guías",
    href: "/guides",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

const NavMenu = () => {
  return (
    <NavigationMenu className="hidden md:flex flex-1 font-sans font-semibold text-xl">
      <NavigationMenuList className="space-x-2">
        <NavigationMenuItem>
          <Link href="/aprende" legacyBehavior passHref>
            <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-700 hover:text-white focus:bg-purple-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50">
              Aprende
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white bg-purple hover:bg-purple-700 hover:text-white focus:bg-purple-700">
            Recursos
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-3 p-4">
              {resources.map((resource) => (
                <li key={resource.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={resource.href}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      {resource.title}
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/suscripciones" legacyBehavior passHref>
            <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-700 hover:text-white focus:bg-purple-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50">
              Suscripciones
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavMenu;
