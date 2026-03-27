"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection({
  data,
  settings,
}: {
  data?: any;
  settings?: any;
}) {
  const label = data?.label || "ENGINEER & ARCHITECT";
  const headline = data?.headline || "SEAN BALBALE.";
  const subtitle =
    data?.subtitle ||
    "B.S. Computer Science & B.S. Electrical Engineering. Bridging the gap between physical systems and high-level computation.";
  const resumeUrl = data?.resumeUrl || "/resume";
  const githubUrl =
    settings?.githubUrl || data?.githubUrl || "https://github.com/seanbalbale";

  return (
    <section className="min-h-screen w-full flex flex-col justify-center relative items-center bg-background overflow-hidden px-6 pt-24 pb-40 md:pt-32 md:pb-48 md:px-16 lg:px-32">
      <div className="z-10 flex flex-col items-start max-w-4xl w-full mt-10 md:mt-0 shrink-0 py-12">
        <span className="font-headline text-primary tracking-widest uppercase text-xs md:text-sm font-semibold mb-4 md:mb-6">
          {label}
        </span>

        <h1 className="font-headline text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-foreground tracking-tighter leading-none mb-6">
          {headline}
        </h1>

        <p className="font-body text-base md:text-lg lg:text-xl text-muted max-w-2xl mb-10 md:mb-12 leading-relaxed">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-start gap-4 w-full sm:w-auto">
          <Link
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto text-center rounded-none bg-primary/20 text-primary font-headline text-sm font-semibold px-8 py-4 md:py-5 uppercase tracking-[0.15em] transition-all duration-300 hover:brightness-110"
          >
            View Resume
          </Link>

          <Link
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto text-center rounded-none border border-muted/30 bg-transparent text-foreground font-headline text-sm font-semibold px-8 py-4 md:py-5 uppercase tracking-[0.15em] transition-colors duration-300 hover:bg-foreground/10"
          >
            GitHub
          </Link>
        </div>
      </div>

      <div className="absolute right-6 md:right-16 lg:right-32 top-0 h-full w-1 md:w-2 bg-muted/20 pointer-events-none hidden md:flex">
        <motion.div
          className="w-full bg-primary absolute top-1/3"
          style={{ height: "40vh" }}
          animate={{
            opacity: [0.6, 1, 0.6],
            scaleY: [1, 1.05, 0.95, 1],
          }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
        />
      </div>
    </section>
  );
}
