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
    description: "A custom-built embedded system designed for synchronized multi-agent robotic communication."
  },
  {
    id: "ai-coach",
    title: "AI Athletic Coach",
    tag: "Computer Vision",
    icon: Activity,
    description: "Deep learning platform utilizing pose estimation to provide real-time biomechanical feedback for athletes."
  },
  {
    id: "trinity-acapella",
    title: "Trinity Accidentals",
    tag: "Web Development",
    icon: Code,
    description: "Digital portal for Trinity's premier a cappella group, featuring media streaming and scheduling integrations."
  }
];

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  return (
    <section className="min-h-screen bg-surface py-32 px-6 md:px-16 lg:px-32 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex items-end gap-6 mb-20 border-b border-outline/20 pb-6">
          <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase tracking-tighter text-on-surface">
            SELECTED PROJECTS
          </h2>
          <div className="font-headline text-xl md:text-2xl text-primary font-bold tracking-widest pb-0.5">
            0{activeIndex + 1} / 0{projects.length}
          </div>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column (Navigation/List) */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {projects.map((project, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={project.id}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left rounded-none px-6 py-5 transition-all duration-300 font-headline uppercase tracking-widest text-sm font-semibold border-l-4
                    ${isActive 
                      ? "bg-surface-container-high border-secondary text-primary" 
                      : "bg-transparent border-transparent text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low"
                    }`}
                >
                  {project.title}
                </button>
              );
            })}
          </div>

          {/* Right Column (The Active Card) */}
          <div className="lg:col-span-8 bg-surface-container p-8 md:p-14 relative overflow-hidden rounded-none min-h-[400px] flex items-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ 
                  duration: 0.25, 
                  ease: "circOut" 
                }}
                className="flex flex-col items-start w-full relative z-10"
              >
                {/* Tag & Icon */}
                <div className="flex items-center gap-3 mb-6 bg-surface-container-high py-2 px-4 rounded-none border border-outline/10">
                  <activeProject.icon className="text-secondary w-5 h-5" strokeWidth={2} />
                  <span className="font-headline text-xs tracking-widest uppercase text-secondary font-semibold">
                    {activeProject.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-headline text-4xl md:text-5xl font-bold mb-6 text-on-surface leading-tight tracking-tight">
                  {activeProject.title}
                </h3>

                {/* Description */}
                <p className="font-body text-base md:text-xl text-on-surface-variant mb-12 max-w-xl leading-relaxed">
                  {activeProject.description}
                </p>

                {/* Action */}
                <button className="rounded-none bg-primary-container text-on-primary-container font-headline font-semibold text-sm px-8 py-4 uppercase tracking-[0.15em] transition-all duration-300 hover:brightness-110 shadow-[0_0_20px_rgba(130,170,255,0.2)]">
                  View Architecture →
                </button>
              </motion.div>
            </AnimatePresence>

            {/* Ghost Border */}
            <div className="absolute inset-0 pointer-events-none border border-outline/15" />
          </div>

        </div>
      </div>
    </section>
  );
}
