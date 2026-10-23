"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MapPin } from "lucide-react";
import { NAV_LINKS } from "@/src/constants/navLinks";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSegment, setActiveSegment] = useState<string>("/");
  const pathname = usePathname();

  useEffect(() => {
    const updateActiveSegment = () => {
      if (pathname !== "/") {
        setActiveSegment(pathname);
        return;
      }

      const activationPoint = window.innerHeight * 0.25;
      let currentSegment: string = NAV_LINKS[0].href;

      for (const link of NAV_LINKS) {
        const sectionId =
          link.href === "/" ? "inicio" : link.href.split("#")[1];
        const section = document.getElementById(sectionId);

        if (section && section.getBoundingClientRect().top <= activationPoint) {
          currentSegment = link.href;
        }
      }

      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2
      ) {
        currentSegment = NAV_LINKS[NAV_LINKS.length - 1].href;
      }

      setActiveSegment(currentSegment);
    };

    updateActiveSegment();
    window.addEventListener("scroll", updateActiveSegment);
    window.addEventListener("hashchange", updateActiveSegment);

    return () => {
      window.removeEventListener("scroll", updateActiveSegment);
      window.removeEventListener("hashchange", updateActiveSegment);
    };
  }, [pathname]);

  return (
    <header className="sticky top-4 z-50 w-full">
      <div className="wrapper">
        <div className="bg-background-header backdrop-blur-md border border-border rounded-full px-4 sm:px-6 py-3 flex items-center justify-between shadow-sm relative">
          {/* Logo Tipográfico */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
          >
            <div className="flex flex-col">
              <span className="font-display font-bold text-base sm:text-lg lg:text-xl tracking-[0.22em] text-text-title uppercase leading-none">
                Benna
              </span>
              <span className="font-jakarta text-[6px] font-semibold tracking-[0.25em] text-berry uppercase mt-1">
                Sorveteria Artesanal
              </span>
            </div>
          </Link>

          {/* Navegação Desktop (Aparece apenas em lg para cima) */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = activeSegment === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveSegment(link.href)}
                  className={`font-medium transition-colors relative py-1 text-sm xl:text-base ${
                    isActive
                      ? "text-text-title font-semibold"
                      : "text-text-main hover:text-primary"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-berry" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Menu Hamburguer Mobile */}
          <div className="flex items-center gap-3">
            {/* Botão de CTA Principal (lg+) */}
            <Link
              href="/#contato"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-baunilha text-xs xl:text-sm tracking-wider uppercase font-semibold hover:bg-primary-hover transition-colors shadow-sm"
            >
              <MapPin className="w-3.5 h-3.5 text-berry" />
              <span>Venha nos visitar</span>
            </Link>

            {/* Botão de Menu Mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-1.5 text-text-title hover:text-primary transition-colors focus:outline-none"
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Dropdown Menu Mobile / Tablet */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 mt-3 p-5 bg-background-alt border border-border rounded-3xl shadow-lg lg:hidden flex flex-col gap-4 animate-in fade-in slide-in-from-top-2">
              <nav className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => {
                      setActiveSegment(link.href);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-sm font-medium py-2 px-3 rounded-xl transition-colors ${
                      activeSegment === link.href
                        ? "bg-background-card text-text-title font-semibold"
                        : "text-text-main hover:bg-background/50 hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="pt-3 border-t border-border">
                <Link
                  href="/#contato"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-primary text-baunilha text-xs tracking-wider uppercase font-semibold hover:bg-primary-hover transition-colors shadow-sm"
                >
                  <MapPin className="w-3.5 h-3.5 text-berry" />
                  <span>Venha nos visitar</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
