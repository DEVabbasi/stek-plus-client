"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Over ons", href: "/over-ons" },
  { name: "Tekenwerk", href: "/tekenwerk" },
  { name: "Projecten", href: "/projecten" },
  { name: "Contact", href: "/#contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-[#f5f7fa] py-3 md:py-4">
      <section className="flex items-center justify-between max-w-8xl mx-auto px-4 md:px-6 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center z-10">
          <Image
            src="/icons/headerLogo1.svg"
            alt="STEK+ Logo"
            width={120}
            height={40}
            className="h-12 md:h-16 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex bg-white rounded-full h-14 px-6 items-center shadow-[0px_8px_24px_rgba(0,0,0,0.06)]">
          <nav className="flex items-center space-x-2">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(item.href + "/");
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
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
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden flex items-center gap-3">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-center py-6 border-b">
                  <Image
                    src="/icons/headerLogo1.svg"
                    alt="STEK+ Logo"
                    width={100}
                    height={35}
                    className="h-12 w-auto"
                  />
                </div>
                <nav className="flex flex-col space-y-2 mt-6 flex-1">
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
                <div className="pb-6 pt-4 border-t">
                  <Link href="/contact" className="block">
                    <Button className="w-full bg-brand text-white hover:opacity-90 py-6 text-base font-semibold rounded-xl">
                      Ontvang Een offerte
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop CTA Button */}
        <Link href="/contact" className="hidden lg:flex items-center">
          <Button className="bg-white text-brand border border-transparent hover:bg-brand hover:text-white px-6 py-3 text-sm font-semibold rounded-full shadow-sm hover:border-[#1072B7] transition-all">
            Ontvang Een offerte
          </Button>
        </Link>
      </section>
    </header>
  );
}
