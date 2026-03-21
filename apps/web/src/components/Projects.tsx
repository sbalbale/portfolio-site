"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Activity, Code } from "lucide-react";

export interface Project {
  _id: string;
  title: string;
  category_tag: string;
  short_description: string;
  tech_stack: string[];
  github_url: string;
}

export default function ProjectsSection({ data }: { data?: Project[] }) {
  const projects = data || [];
  const [activeIndex, setActiveIndex] = useState(0);
  if (!data || data.length === 0) {
    return (
      <section
        id="projects"
        className="min-h-screen pt-24 pb-40 md:pt-32 md:pb-48 px-6 md:px-16 lg:px-32 relative overflow-hidden flex flex-col bg-foreground/5"
      >
        <div className="max-w-6xl mx-auto w-full relative z-10 my-auto text-center shrink-0 py-12">
          <h2 className="font-headline text-4xl font-bold uppercase tracking-tighter text-foreground mb-4">
            SELECTED PROJECTS
          </h2>
          <p className="text-muted font-body">
            Architecture data currently compiling. No projects deployed to this
            environment yet.
          </p>
        </div>
      </section>
    );
  }
  const activeProject = projects[activeIndex];

  return (
    <section
      id="projects"
      className="min-h-screen w-full flex flex-col bg-foreground/5 pt-24 pb-40 md:pt-32 md:pb-48 px-6 md:px-16 lg:px-32 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto my-auto w-full relative z-10 shrink-0 py-12">
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
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto touch-pan-x pb-4 lg:pb-0 [&::-webkit-scrollbar]:hidden hide-scrollbar scroll-smooth">
            {projects.map((project, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={project._id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`flex-shrink-0 lg:w-full text-left rounded-none px-6 py-4 md:py-5 transition-all duration-300 font-headline uppercase tracking-widest text-xs md:text-sm font-semibold border-b-4 lg:border-b-0 lg:border-l-4 cursor-pointer
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

          <div className="lg:col-span-8 bg-foreground/5 relative overflow-hidden rounded-none block w-full h-full shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <div className="p-6 md:p-12 lg:p-14 w-full h-full min-h-[450px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject._id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "circOut" }}
                  className="flex flex-col items-start w-full h-full justify-center relative z-10"
                >
                  <h3 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground leading-tight tracking-tight">
                    {activeProject.title}
                  </h3>

                  <p className="font-body text-sm md:text-base lg:text-xl text-muted mb-10 max-w-xl leading-relaxed">
                    {activeProject.short_description}
                  </p>

                  {activeProject.github_url && (
                    <a
                      href={activeProject.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto text-center rounded-none bg-primary/20 text-primary font-headline font-semibold text-xs md:text-sm px-6 py-4 md:px-8 md:py-4 uppercase tracking-[0.15em] transition-all duration-300 hover:brightness-110 shadow-[0_0_20px_rgba(130,170,255,0.1)]"
                    >
                      View Details →
                    </a>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="absolute inset-0 pointer-events-none border border-muted/15" />
          </div>
        </div>
      </div>
    </section>
  );
}
