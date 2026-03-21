import React from "react";
import { Cpu, Terminal, Cloud } from "lucide-react";

export default function SkillsSection({ data }: { data?: any }) {
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

  const telemetry = data?.telemetry || [
    { percentage: 60 },
    { percentage: 20 },
    { percentage: 15 },
    { percentage: 5 },
  ];

  return (
    <section className="bg-surface-container-low py-24 md:py-32 px-6 md:px-16 lg:px-32">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:mb-20">
          <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase tracking-tighter text-on-surface">
            PROFICIENCIES_
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
          <div className="bg-surface p-8 md:p-12 rounded-none border-t-2 border-primary hover:bg-surface-container transition-colors duration-300 shadow-lg">
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <Cpu className="w-6 h-6 text-primary" strokeWidth={2.5} />
              <h3 className="font-headline text-xl md:text-2xl font-bold uppercase tracking-wide text-on-surface">
                Hardware
              </h3>
            </div>
            <ul className="flex flex-col gap-4 md:gap-5 font-body text-sm md:text-base text-on-surface-variant w-full">
              {hardwareSkills.map((skill: string, index: number) => (
                <li key={index} className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 bg-primary rounded-none shrink-0" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-surface p-8 md:p-12 rounded-none border-t-2 border-secondary hover:bg-surface-container transition-colors duration-300 shadow-lg">
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <Terminal className="w-6 h-6 text-secondary" strokeWidth={2.5} />
              <h3 className="font-headline text-xl md:text-2xl font-bold uppercase tracking-wide text-on-surface">
                Software
              </h3>
            </div>
            <ul className="flex flex-col gap-4 md:gap-5 font-body text-sm md:text-base text-on-surface-variant w-full">
              {softwareSkills.map((skill: string, index: number) => (
                <li key={index} className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-none shrink-0" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-surface p-8 md:p-12 rounded-none border-t-2 border-tertiary hover:bg-surface-container transition-colors duration-300 shadow-lg">
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <Cloud className="w-6 h-6 text-tertiary" strokeWidth={2.5} />
              <h3 className="font-headline text-xl md:text-2xl font-bold uppercase tracking-wide text-on-surface">
                Cloud & DevOps
              </h3>
            </div>
            <ul className="flex flex-col gap-4 md:gap-5 font-body text-sm md:text-base text-on-surface-variant w-full">
              {cloudSkills.map((skill: string, index: number) => (
                <li key={index} className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 bg-tertiary rounded-none shrink-0" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h4 className="font-headline text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-outline mb-4">
            Language & Framework Distribution
          </h4>
          <div className="w-full flex flex-row h-12 md:h-6 bg-surface overflow-hidden group">
            <div
              className="bg-primary relative transition-all duration-300 hover:brightness-125"
              style={{ width: `${telemetry[0]?.percentage || 60}%` }}
            >
              <span className="absolute -top-7 left-1 md:left-2 opacity-0 group-hover:opacity-100 font-headline text-[10px] md:text-xs text-primary font-bold transition-opacity">
                {telemetry[0]?.percentage || 60}%
              </span>
            </div>
            <div
              className="bg-secondary relative transition-all duration-300 hover:brightness-125"
              style={{ width: `${telemetry[1]?.percentage || 20}%` }}
            >
              <span className="absolute -top-7 left-1 md:left-2 opacity-0 group-hover:opacity-100 font-headline text-[10px] md:text-xs text-secondary font-bold transition-opacity">
                {telemetry[1]?.percentage || 20}%
              </span>
            </div>
            <div
              className="bg-tertiary relative transition-all duration-300 hover:brightness-125"
              style={{ width: `${telemetry[2]?.percentage || 15}%` }}
            >
              <span className="absolute -top-7 left-1 md:left-2 opacity-0 group-hover:opacity-100 font-headline text-[10px] md:text-xs text-tertiary font-bold transition-opacity">
                {telemetry[2]?.percentage || 15}%
              </span>
            </div>
            <div
              className="bg-error relative transition-all duration-300 hover:brightness-125"
              style={{ width: `${telemetry[3]?.percentage || 5}%` }}
            >
              <span className="absolute -top-7 right-0 opacity-0 group-hover:opacity-100 font-headline text-[10px] md:text-xs text-error font-bold pr-1 transition-opacity">
                {telemetry[3]?.percentage || 5}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
