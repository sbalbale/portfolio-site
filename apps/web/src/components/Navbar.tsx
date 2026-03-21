"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const navItems = [
  { name: "About", id: "about", href: "#about" },
  { name: "Experience", id: "experience", href: "#experience" },
  { name: "Projects", id: "projects", href: "#projects" },
  { name: "Research", id: "research", href: "#research" },
  { name: "Skills", id: "skills", href: "#skills" },
  { name: "Contact", id: "contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);

    // Collect all main structural divisions mapped in page.tsx
    const sections = Array.from(document.querySelectorAll("main > div[id]"));

    // Configure observer to track when a section fills 50% of viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setTimeout(() => {
      const targetId = href.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        const elementPosition = elem.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - 80;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 150);
  };

  return (
    <header className="fixed top-0 w-full z-[100] bg-background/90 backdrop-blur-xl border-b border-muted/10 rounded-none transition-all">
      {/* 1. Global Scroll Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-primary origin-left z-[60] pointer-events-none"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between relative z-50">
        <a
          href="/"
          onClick={() => setMobileMenuOpen(false)}
          className="font-headline font-bold text-xl tracking-widest text-foreground uppercase pr-4 flex items-center cursor-pointer"
        >
          SB<span className="text-secondary">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {/* Desktop Links */}
          <nav className="flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className={`font-headline text-xs tracking-[0.2em] uppercase transition-colors font-semibold flex items-center gap-2 cursor-pointer
                    ${isActive ? "text-primary" : "text-muted hover:text-foreground"}
                  `}
                >
                  {isActive && (
                    <span className="text-secondary font-bold">&gt;</span>
                  )}
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Hardware Theme Toggle - Desktop */}
          <div className="border-l border-muted/30 pl-8 flex items-center">
            <button
              type="button"
              onClick={toggleTheme}
              className="flex items-center justify-center p-2 rounded-none hover:bg-foreground/10 transition-colors text-foreground cursor-pointer"
              aria-label="Toggle Theme"
            >
              {mounted ? (
                resolvedTheme === "dark" ? (
                  <Sun className="w-4 h-4 md:w-5 md:h-5 pointer-events-none" />
                ) : (
                  <Moon className="w-4 h-4 md:w-5 md:h-5 pointer-events-none" />
                )
              ) : (
                <div className="w-4 h-4 md:w-5 md:h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-4 relative z-[9999] pointer-events-auto">
          {/* Hardware Theme Toggle - Mobile */}
          <button
            type="button"
            onClick={toggleTheme}
            className="flex items-center justify-center p-2 rounded-none hover:bg-foreground/10 transition-colors text-foreground cursor-pointer"
            aria-label="Toggle Theme"
          >
            {mounted ? (
              resolvedTheme === "dark" ? (
                <Sun className="w-4 h-4 pointer-events-none" />
              ) : (
                <Moon className="w-4 h-4 pointer-events-none" />
              )
            ) : (
              <div className="w-4 h-4" />
            )}
          </button>
          <button
            type="button"
            className="text-foreground p-2 focus:outline-none cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 pointer-events-none" />
            ) : (
              <Menu className="w-6 h-6 pointer-events-none" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Architecture */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-3xl overflow-y-auto border-b border-muted/10 absolute top-20 left-0 w-full z-[90] h-screen"
          >
            <nav className="flex flex-col px-6 py-8 gap-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className={`font-headline text-lg tracking-[0.2em] uppercase font-bold flex items-center gap-3 transition-colors cursor-pointer
                      ${isActive ? "text-primary" : "text-muted hover:text-foreground"}
                    `}
                  >
                    {isActive && (
                      <span className="text-secondary font-bold">&gt;</span>
                    )}
                    {item.name}
                  </a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
