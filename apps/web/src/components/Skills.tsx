import React from "react";
import { Cpu, Terminal, Cloud } from "lucide-react";

export interface SkillsData {
  hardwareSkills: string[];
  softwareSkills: string[];
  cloudSkills: string[];
}

export default function SkillsSection({ data }: { data?: SkillsData }) {
  const hardwareSkills = data?.hardwareSkills || [
    "FPGA (Verilog)",
    "PCB Design (Altium)",
    "ARM Cortex-M",
    "Signal Processing",
  ];
  const softwareSkills = data?.softwareSkills || [
    "C++ / Embedded C",
    "Rust (Safe Systems)",
    "Python / ML Stack",
    "Distributed Systems",
  ];
  const cloudSkills = data?.cloudSkills || [
    "AWS Architecture",
    "Kubernetes / Docker",
    "CI/CD Automation",
    "Terraform",
  ];

  return (
    <section className="min-h-screen w-full flex flex-col justify-center bg-foreground/5 pt-32 pb-48 px-6 md:px-16 lg:px-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12 md:mb-20">
          <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase tracking-tighter text-foreground">
            PROFICIENCIES_
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
          <div className="bg-background p-8 md:p-12 rounded-none border-t-2 border-primary hover:bg-foreground/5 transition-colors duration-300 shadow-lg">
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <Cpu className="w-6 h-6 text-primary" strokeWidth={2.5} />
              <h3 className="font-headline text-xl md:text-2xl font-bold uppercase tracking-wide text-foreground">
                Hardware
              </h3>
            </div>
            <ul className="flex flex-col gap-4 md:gap-5 font-body text-sm md:text-base text-muted w-full">
              {hardwareSkills.map((skill: string, index: number) => (
                <li key={index} className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 bg-primary rounded-none shrink-0" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-background p-8 md:p-12 rounded-none border-t-2 border-secondary hover:bg-foreground/5 transition-colors duration-300 shadow-lg">
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <Terminal className="w-6 h-6 text-secondary" strokeWidth={2.5} />
              <h3 className="font-headline text-xl md:text-2xl font-bold uppercase tracking-wide text-foreground">
                Software
              </h3>
            </div>
            <ul className="flex flex-col gap-4 md:gap-5 font-body text-sm md:text-base text-muted w-full">
              {softwareSkills.map((skill: string, index: number) => (
                <li key={index} className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-none shrink-0" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-background p-8 md:p-12 rounded-none border-t-2 border-success hover:bg-foreground/5 transition-colors duration-300 shadow-lg">
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <Cloud className="w-6 h-6 text-success" strokeWidth={2.5} />
              <h3 className="font-headline text-xl md:text-2xl font-bold uppercase tracking-wide text-foreground">
                Cloud & DevOps
              </h3>
            </div>
            <ul className="flex flex-col gap-4 md:gap-5 font-body text-sm md:text-base text-muted w-full">
              {cloudSkills.map((skill: string, index: number) => (
                <li key={index} className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 bg-success rounded-none shrink-0" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
