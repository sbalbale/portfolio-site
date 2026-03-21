"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-surface overflow-hidden px-6 md:px-16 lg:px-32">
      {/* 1. The Text Block (Left/Main) */}
      <div className="z-10 flex flex-col items-start max-w-4xl w-full">
        <span className="font-headline text-primary tracking-widest uppercase text-xs md:text-sm font-semibold mb-6">
          ENGINEER & ARCHITECT
        </span>
        
        <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl font-bold text-on-surface tracking-tighter leading-none mb-6">
          SEAN BALBALE.
        </h1>
        
        <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl mb-12 leading-relaxed">
          B.S. Computer Science & B.S. Electrical Engineering. Bridging the gap between physical systems and high-level computation.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link 
            href="/resume.pdf"
            className="w-full sm:w-auto text-center rounded-none bg-primary-container text-on-primary-container font-headline text-sm font-semibold px-8 py-4 uppercase tracking-[0.15em] transition-all duration-300 hover:brightness-110"
          >
            View Resume
          </Link>
          
          <Link 
            href="https://github.com/seanbalbale"
            className="w-full sm:w-auto text-center rounded-none border border-outline/30 bg-transparent text-on-surface font-headline text-sm font-semibold px-8 py-4 uppercase tracking-[0.15em] transition-colors duration-300 hover:bg-surface-container-highest"
          >
            GitHub
          </Link>
        </div>
      </div>

      {/* 2. The Data Pillar (Right/Absolute) */}
      <div className="absolute right-6 md:right-16 lg:right-32 top-0 h-full w-1 md:w-2 bg-outline/20 pointer-events-none hidden sm:block">
        <motion.div 
          className="w-full bg-primary absolute top-1/3"
          style={{ height: "40vh" }}
          animate={{ 
            opacity: [0.6, 1, 0.6],
            scaleY: [1, 1.05, 0.95, 1],
          }}
          transition={{ 
            duration: 3, 
            ease: "easeInOut", 
            repeat: Infinity,
          }}
        />
      </div>
    </section>
  );
}
