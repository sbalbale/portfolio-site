"use client";

import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";

const experienceData = [
  {
    company: "Sonos",
    role: "Embedded Systems Intern",
    date: "Summer 2026",
    description:
      "Developing core audio processing firmware and optimizing kernel performance for next-generation hardware architectures.",
  },
  {
    company: "Bullhorn",
    role: "Software Engineer Intern",
    date: "Summer 2025",
    description:
      "Architecting scalable cloud microservices and optimizing data ingestion pipelines for enterprise-grade CRM systems.",
  },
  {
    company: "Trinity College",
    role: "Teaching Assistant & Lead Dev",
    date: "2023 — Present",
    description:
      "Mentoring students in Data Structures and Algorithms while maintaining department-wide academic resource systems.",
  },
];

export default function ExperienceSection() {
  return (
    <section className="min-h-screen bg-surface-container-low py-32 px-6 md:px-16 lg:px-32 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-on-surface mb-24 uppercase">
          EXPERIENCE.
        </h2>

        <TracingBeam className="pl-6 md:pl-12">
          <div className="flex flex-col gap-20 relative">
            {experienceData.map((exp, index) => (
              <div key={index} className="flex flex-col relative group">
                {/* Visual Square Dot */}
                <div className="absolute -left-6 md:-left-12 top-1 h-3 w-3 bg-surface-container-low border border-primary rounded-none transition-colors duration-500 group-hover:bg-primary shadow-[0_0_10px_rgba(130,170,255,0)] group-hover:shadow-[0_0_15px_rgba(130,170,255,0.6)] transform -translate-x-1/2 mt-1" />

                {/* Content */}
                <div className="flex-1 pl-6 md:pl-0">
                  <span className="font-headline text-xs md:text-sm text-outline mb-2 block tracking-widest uppercase">
                    {exp.date}
                  </span>
                  
                  <h3 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-1">
                    {exp.company}
                  </h3>
                  
                  <h4 className="font-headline text-xs md:text-sm tracking-widest uppercase text-on-surface-variant mb-6">
                    {exp.role}
                  </h4>
                  
                  <p className="font-body text-base md:text-lg text-on-surface-variant max-w-md leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </TracingBeam>
      </div>
    </section>
  );
}
