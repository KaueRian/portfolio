"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useScrollTo } from "@/hooks/useScrollTo";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Sobre", id: "hero" },
  { label: "Skills", id: "skills" },
  { label: "Projetos", id: "projects" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const scrollTo = useScrollTo();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    scrollTo(id);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl h-16 flex items-center justify-between">
        {/* Branding */}
        <Link
          href="/"
          className="text-lg font-mono font-bold tracking-tighter"
          onClick={(e) => {
            if (window.location.pathname === "/") {
              handleNavClick(e, "hero");
            }
          }}
        >
          KR<span className="text-emerald-500">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="h-4 w-px bg-border mx-2" />
          <ThemeToggle />
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 -mr-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border p-4 flex flex-col gap-4 shadow-lg">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className="text-base font-medium text-foreground py-2"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
