// components/Navbar.tsx
"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Bars3Icon,
  HomeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { title: "Home", href: "/", icon: HomeIcon },
    { title: "Form", href: "/form", icon: DocumentTextIcon },
  ];

  const isFormPage = pathname === "/form";

  console.log({ isFormPage, pathname });
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="text-indigo-700 font-extrabold text-2xl">
          🧞 FormGenie
        </Link>

        {/* Desktop nav - visible md+ */}
        <div className="hidden md:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map(({ title, href, icon: Icon }) => (
                <NavigationMenuItem key={href}>
                  <NavigationMenuLink asChild>
                    <Link href={href}>
                      <div className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 font-medium transition">
                        <Icon
                          className="size-5 text-indigo-600"
                          aria-hidden="true"
                        />
                        {title}
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {!isFormPage && (
            <Button
              variant="default"
              className="bg-indigo-600 text-white shadow hover:bg-indigo-700 transition cursor:hover"
            >
              <Link href="/form" onClick={() => setOpen(false)}>
                Get Started
              </Link>
            </Button>
          )}
        </div>

        {/* Mobile hamburger - visible <md */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <Bars3Icon className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </button>
          </SheetTrigger>

          <SheetContent side="right" className="w-64">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>Navigate through FormGenie</SheetDescription>
            </SheetHeader>

            <nav className="flex flex-col space-y-4 mt-6">
              {navLinks.map(({ title, href, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="text-lg px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 font-medium"
                >
                  <div>
                    <Icon
                      className="size-5 text-indigo-600"
                      aria-hidden="true"
                    />
                    {title}
                  </div>
                </Link>
              ))}

              {!isFormPage && (
                <Button
                  variant="default"
                  className="mt-4 w-full bg-indigo-600 text-white shadow hover:bg-indigo-700 transition"
                >
                  <Link href="/form" onClick={() => setOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              )}
            </nav>

            <SheetClose asChild>
              <button
                aria-label="Close menu"
                className="absolute top-4 right-4 p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></button>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
