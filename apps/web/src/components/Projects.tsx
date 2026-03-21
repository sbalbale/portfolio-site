"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Activity, Code } from "lucide-react";

const projects = [
  {
    id: "three-idiots",
    title: "Three Idiots",
    tag: "Hardware + Soft",
    icon: Cpu,
    description:
      "A custom-built embedded system designed for synchronized multi-agent robotic communication.",
  },
  {
    id: "ai-coach",
    title: "AI Athletic Coach",
    tag: "Computer Vision",
    icon: Activity,
    description:
      "Deep learning platform utilizing pose estimation to provide real-time biomechanical feedback for athletes.",
  },
  {
    id: "trinity-acapella",
    title: "Trinity Accidentals",
    tag: "Web Development",
    icon: Code,
    description:
      "Digital portal for Trinity's premier a cappella group, featuring media streaming and scheduling integrations.",
  },
];

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  return (
    <section className="min-h-[80vh] md:min-h-screen bg-foreground/5 pt-32 pb-48 px-6 md:px-16 lg:px-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-12 md:mb-20 border-b border-muted/20 pb-6">
          <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase tracking-tighter text-foreground">
            SELECTED PROJECTS
          </h2>
          <div className="font-headline text-lg md:text-xl lg:text-2xl text-primary font-bold tracking-widest">
            0{activeIndex + 1} / 0{projects.length}
          </div>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Scrollable horizontal flex row on mobile, rigid vertical list on desktop */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 [&::-webkit-scrollbar]:hidden scroll-smooth">
            {projects.map((project, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={project.id}
                  onClick={() => setActiveIndex(index)}
                  className={`flex-shrink-0 lg:w-full text-left rounded-none px-6 py-4 md:py-5 transition-all duration-300 font-headline uppercase tracking-widest text-xs md:text-sm font-semibold border-b-4 lg:border-b-0 lg:border-l-4
                    ${
                      isActive
                        ? "bg-foreground/10 border-secondary text-primary"
                        : "bg-transparent border-transparent text-muted hover:text-foreground hover:bg-foreground/5"
                    }`}
                >
                  {project.title}
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-8 bg-foreground/5 p-6 md:p-12 lg:p-14 relative overflow-hidden rounded-none min-h-[450px] lg:min-h-[500px] flex items-center shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.25, ease: "circOut" }}
                className="flex flex-col items-start w-full relative z-10"
              >
                <div className="flex items-center gap-3 mb-6 bg-foreground/10 py-2 px-3 md:px-4 rounded-none border border-muted/20">
                  <activeProject.icon
                    className="text-secondary w-4 h-4 md:w-5 md:h-5"
                    strokeWidth={2}
                  />
                  <span className="font-headline text-[10px] md:text-xs tracking-widest uppercase text-secondary font-semibold">
                    {activeProject.tag}
                  </span>
                </div>

                <h3 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground leading-tight tracking-tight">
                  {activeProject.title}
                </h3>

                <p className="font-body text-sm md:text-base lg:text-xl text-muted mb-10 max-w-xl leading-relaxed">
                  {activeProject.description}
                </p>

                <button className="w-full sm:w-auto text-center rounded-none bg-primary/20 text-primary font-headline font-semibold text-xs md:text-sm px-6 py-4 md:px-8 md:py-4 uppercase tracking-[0.15em] transition-all duration-300 hover:brightness-110 shadow-[0_0_20px_rgba(130,170,255,0.1)]">
                  View Architecture →
                </button>
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 pointer-events-none border border-muted/15" />
          </div>
        </div>
      </div>
    </section>
  );
}
