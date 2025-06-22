"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
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
  UserCircleIcon,
} from "@heroicons/react/24/outline";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import GoogleSignInButton from "./SignIn";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { data: session, status } = useSession();
  const pathname = usePathname();

  const navLinks = [
    { title: "Home", href: "/", icon: HomeIcon },
    { title: "Form", href: "/form", icon: DocumentTextIcon },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm px-4">
      <div className="w-full mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="text-indigo-700 font-extrabold text-2xl">
          🧞 FormGenie
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map(({ title, href, icon: Icon }) => (
                <NavigationMenuItem key={href}>
                  <NavigationMenuLink asChild>
                    <Link href={href}>
                      <div
                        className={clsx(
                          "flex items-center gap-2 px-3 py-2 rounded-md transition font-medium",
                          pathname === href
                            ? "text-indigo-700 bg-indigo-50"
                            : "text-gray-700 hover:text-indigo-600"
                        )}
                      >
                        <Icon
                          className={clsx(
                            "size-5",
                            pathname === href
                              ? "text-indigo-700"
                              : "text-indigo-600"
                          )}
                          aria-hidden="true"
                        />
                        {title}
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}

              {/* Show SignIn or Avatar Dropdown here */}
              {status === "loading" ? null : !session ? (
                <GoogleSignInButton />
              ) : (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="rounded-full focus:ring-2 focus:ring-indigo-500 focus:outline-none">
                      <UserCircleIcon className="w-8 h-8 text-indigo-600" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuLabel className="font-normal text-muted-foreground">
                      Signed in as <br />
                      <span className="font-semibold">
                        {session.user?.name}
                      </span>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => {
                        // Replace with actual navigation to profile page if exists
                        alert("View Profile clicked!");
                      }}
                    >
                      View Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => signOut()}>
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile hamburger */}
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
                <Link key={href} href={href} onClick={() => setOpen(false)}>
                  <div
                    className={clsx(
                      "flex items-center gap-2 px-3 py-2 rounded-md font-medium transition",
                      pathname === href
                        ? "text-indigo-700 bg-indigo-50"
                        : "text-gray-700 hover:text-indigo-600"
                    )}
                  >
                    <Icon
                      className={clsx(
                        "size-5",
                        pathname === href
                          ? "text-indigo-700"
                          : "text-indigo-600"
                      )}
                      aria-hidden="true"
                    />
                    {title}
                  </div>
                </Link>
              ))}

              {/* Mobile sign in / user menu */}
              {!session ? (
                <GoogleSignInButton />
              ) : (
                <div>
                  <p className="text-gray-700 px-3 py-2">
                    Hello, {session.user?.name}
                  </p>
                  <button
                    onClick={() => {
                      setOpen(false);
                      signOut();
                    }}
                    className="w-full text-left px-3 py-2 text-red-600 hover:bg-red-100 rounded-md"
                  >
                    Sign Out
                  </button>
                </div>
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
