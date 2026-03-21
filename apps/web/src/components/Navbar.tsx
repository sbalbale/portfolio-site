"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import Link from "next/link";
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

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl border-b border-outline/10 rounded-none transition-all">
      {/* 1. Global Scroll Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-primary origin-left z-[60] pointer-events-none"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between relative z-50">
        <Link
          href="/"
          onClick={() => setMobileMenuOpen(false)}
          className="font-headline font-bold text-xl tracking-widest text-on-surface uppercase pr-4 flex items-center"
        >
          SB<span className="text-secondary">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {/* Desktop Links */}
          <nav className="flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`font-headline text-xs tracking-[0.2em] uppercase transition-colors font-semibold flex items-center gap-2
                    ${isActive ? "text-primary" : "text-on-surface-variant hover:text-on-surface"}
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
          <div className="border-l border-outline/30 pl-8 flex items-center">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center p-2 rounded-none border-2 border-outline/30 hover:bg-surface-container-highest transition-colors text-on-surface"
              aria-label="Toggle Theme"
            >
              {mounted ? (
                resolvedTheme === "dark" ? (
                  <Sun className="w-4 h-4 md:w-5 md:h-5" />
                ) : (
                  <Moon className="w-4 h-4 md:w-5 md:h-5" />
                )
              ) : (
                <div className="w-4 h-4 md:w-5 md:h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-4">
          {/* Hardware Theme Toggle - Mobile */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center p-2 rounded-none border-2 border-outline/30 hover:bg-surface-container-highest transition-colors text-on-surface"
            aria-label="Toggle Theme"
          >
            {mounted ? (
              resolvedTheme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )
            ) : (
              <div className="w-4 h-4" />
            )}
          </button>
          <button
            className="text-on-surface p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
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
            className="md:hidden bg-surface/95 backdrop-blur-3xl overflow-hidden border-b border-outline/10 absolute top-20 left-0 w-full"
          >
            <nav className="flex flex-col px-6 py-8 gap-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-headline text-lg tracking-[0.2em] uppercase font-bold flex items-center gap-3 transition-colors
                      ${isActive ? "text-primary" : "text-on-surface-variant hover:text-on-surface"}
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
