"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Container } from "./Container";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Over ons", href: "/over-ons" },
  { name: "Tekenwerk", href: "/tekenwerk" },
  { name: "Projecten", href: "/projecten" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-[#f5f7fa] py-4">
      <section className="flex items-center justify-between max-w-8xl mx-auto px-6 md:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/icons/headerLogo1.svg"
            alt="STEK+ Logo"
            width={120}
            height={40}
            className="h-16 w-auto"
          />
        </Link>

        <div className="bg-white rounded-full h-16 px-6 flex items-center justify-between shadow-[0px_8px_24px_rgba(0,0,0,0.06)]">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(item.href + "/");
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? "bg-brand text-white"
                      : "text-gray-700 hover:text-[#1072B7]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-75">
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname === item.href || pathname.startsWith(item.href + "/");

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`px-4 py-3 rounded-lg text-base font-medium transition-all ${
                        isActive
                          ? "bg-brand text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        <Link href="/contact" className="flex items-center">
          <Button className="bg-white text-brand border border-transparent hover:bg-brand hover:text-white px-6 py-3 text-sm font-semibold rounded-full shadow-sm hover:border-[#1072B7]">
            Ontvang Een offerte
          </Button>
        </Link>
      </section>
    </header>
  );
}
