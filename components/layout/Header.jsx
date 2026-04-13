"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useContactScroll } from "@/hooks/useContactScroll";

function isNavActive(href, pathname) {
  if (href === "/#contact") return false; // hash link — never pathname-active
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

const navItems = [
  { name: "Home", href: "/" },
  { name: "Over ons", href: "/over-ons" },
  { name: "Diensten", href: "/tekenwerk" },
  { name: "Projecten", href: "/projecten" },
];

export function Header() {
  const pathname = usePathname();
  const { scrollToContact } = useContactScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleMobileContactClick = (event) => {
    scrollToContact(event);
    setIsMobileMenuOpen(false);
  };
  const transparent = isHome && !scrolled;

  return (
    <header
      className={`sticky top-0 z-40 w-full pt-[env(safe-area-inset-top)] pt-[constant(safe-area-inset-top)] transition-all duration-300 ${
        transparent
          ? "bg-transparent shadow-none"
          : "bg-white/95 backdrop-blur-md shadow-sm"
      }`}
    >
      <section className="flex items-center justify-between max-w-8xl mx-auto px-4 md:px-6 lg:px-10 py-4 md:py-5 lg:py-6">
        {/* Logo — ONE instance only */}
        <Link href="/" className="flex items-center z-10">
          <Image
            src={transparent ? "/icons/footerLogo.svg" : "/icons/headerLogo1.svg"}
            alt="STEK+ Logo"
            width={280}
            height={80}
            className="h-12 w-auto md:h-14 lg:h-16 transition-opacity duration-300"
            priority
          />
        </Link>
        {/* Desktop Navigation */}

        <div className={`hidden lg:flex rounded-full h-14 px-6 items-center transition-all duration-300 ${
          transparent ? "" : "shadow-[0px_8px_24px_rgba(0,0,0,0.06)]"
        }`}>
          <nav className="flex items-center space-x-2">
            {navItems.map((item) => {
              const active = isNavActive(item.href, pathname);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    active
                      ? transparent
                        ? "bg-white text-[#1072B7]"
                        : "bg-brand text-white"
                      : transparent
                        ? "text-white hover:text-white/80"
                        : "text-black hover:text-[#1072B7]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            {/* Contact — hash scroll, never "active" */}
            <Link
              href="/#contact"
              onClick={scrollToContact}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                transparent
                  ? "text-white hover:text-white/80"
                  : "text-black hover:text-[#1072B7]"
              }`}
            >
              Contact
            </Link>
          </nav>
        </div>
        {/* Mobile Menu */}
        <div className="flex items-center gap-3 lg:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={`h-10 w-10 ${transparent ? "text-white hover:bg-white/10" : ""}`}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
              <div className="flex flex-col h-full">
                <nav className="flex flex-col space-y-2 mt-8 flex-1">
                  {navItems.map((item) => {
                    const active = isNavActive(item.href, pathname);
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={handleMobileNavClick}
                        className={`px-4 py-3 rounded-lg text-base font-medium transition-all ${
                          active
                            ? "bg-brand text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                  <Link
                    href="/#contact"
                    onClick={handleMobileContactClick}
                    className="px-4 py-3 rounded-lg text-base font-medium transition-all text-gray-700 hover:bg-gray-100"
                  >
                    Contact
                  </Link>
                </nav>
                <div className="pl-2 pb-6 pt-4 border-t">
                  <Link
                    href="/#contact"
                    onClick={handleMobileContactClick}
                    className="block w-full"
                  >
                    <Button className="w-full bg-brand text-white hover:opacity-90 py-6 text-base font-semibold ">
                      Ontvang Een offerte
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        {/* Desktop CTA Button */}
        <Link
          href="/#contact"
          onClick={scrollToContact}
          className="hidden lg:flex items-center"
        >
          <Button className={`px-6 py-3 text-sm font-semibold rounded-full transition-all ${
            transparent
              ? "bg-brand text-white hover:opacity-90 shadow-sm"
              : "bg-white text-brand border border-transparent hover:bg-brand hover:text-white shadow-sm hover:border-[#1072B7]"
          }`}>
            Ontvang een offerte
          </Button>
        </Link>
      </section>
    </header>
  );
}
