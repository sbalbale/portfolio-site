import React from "react";
import { Cpu, Terminal, Cloud } from "lucide-react";

export default function SkillsSection({ data }: { data?: any }) {
  const hardwareSkills = data?.hardwareSkills || ["FPGA (Verilog)", "PCB Design (Altium)", "ARM Cortex-M", "Signal Processing"];
  const softwareSkills = data?.softwareSkills || ["C++ / Embedded C", "Rust (Safe Systems)", "Python / ML Stack", "Distributed Systems"];
  const cloudSkills = data?.cloudSkills || ["AWS Architecture", "Kubernetes / Docker", "CI/CD Automation", "Terraform"];
  
  const telemetry = data?.telemetry || [
    { percentage: 60 },
    { percentage: 20 },
    { percentage: 15 },
    { percentage: 5 }
  ];

  return (
    <section className="bg-surface-container-low py-32 px-6 md:px-16 lg:px-32">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-20">
          <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase tracking-tighter text-on-surface">
            PROFICIENCIES_
          </h2>
        </div>

        {/* 3-Column Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          
          {/* Hardware */}
          <div className="bg-surface p-12 rounded-none border-t-2 border-primary hover:bg-surface-container transition-colors duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
            <div className="flex items-center gap-4 mb-8">
              <Cpu className="w-6 h-6 text-primary" strokeWidth={2.5} />
              <h3 className="font-headline text-2xl font-bold uppercase tracking-wide text-on-surface">
                Hardware
              </h3>
            </div>
            <ul className="flex flex-col gap-5 font-body text-base text-on-surface-variant">
              {hardwareSkills.map((skill: string, index: number) => (
                <li key={index} className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 bg-primary rounded-none" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Software */}
          <div className="bg-surface p-12 rounded-none border-t-2 border-secondary hover:bg-surface-container transition-colors duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
            <div className="flex items-center gap-4 mb-8">
              <Terminal className="w-6 h-6 text-secondary" strokeWidth={2.5} />
              <h3 className="font-headline text-2xl font-bold uppercase tracking-wide text-on-surface">
                Software
              </h3>
            </div>
            <ul className="flex flex-col gap-5 font-body text-base text-on-surface-variant">
              {softwareSkills.map((skill: string, index: number) => (
                <li key={index} className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-none" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Cloud & DevOps */}
          <div className="bg-surface p-12 rounded-none border-t-2 border-tertiary hover:bg-surface-container transition-colors duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
            <div className="flex items-center gap-4 mb-8">
              <Cloud className="w-6 h-6 text-tertiary" strokeWidth={2.5} />
              <h3 className="font-headline text-2xl font-bold uppercase tracking-wide text-on-surface">
                Cloud & DevOps
              </h3>
            </div>
            <ul className="flex flex-col gap-5 font-body text-base text-on-surface-variant">
              {cloudSkills.map((skill: string, index: number) => (
                <li key={index} className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 bg-tertiary rounded-none" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Spectral Telemetry Bar */}
        <div>
          <h4 className="font-headline text-xs font-semibold tracking-[0.2em] uppercase text-outline mb-4">
            Language & Framework Distribution
          </h4>
          <div className="w-full flex h-4 md:h-6 bg-surface overflow-hidden group">
            {/* Primary */}
            <div className="bg-primary relative cursor-crosshair transition-all duration-300 hover:brightness-125" style={{ width: `${telemetry[0]?.percentage || 60}%` }}>
              <span className="absolute -top-7 left-2 opacity-0 group-hover:opacity-100 font-headline text-xs text-primary font-bold transition-opacity">
                {telemetry[0]?.percentage || 60}%
              </span>
            </div>
            {/* Secondary */}
            <div className="bg-secondary relative cursor-crosshair transition-all duration-300 hover:brightness-125" style={{ width: `${telemetry[1]?.percentage || 20}%` }}>
              <span className="absolute -top-7 left-2 opacity-0 group-hover:opacity-100 font-headline text-xs text-secondary font-bold transition-opacity">
                {telemetry[1]?.percentage || 20}%
              </span>
            </div>
            {/* Tertiary */}
            <div className="bg-tertiary relative cursor-crosshair transition-all duration-300 hover:brightness-125" style={{ width: `${telemetry[2]?.percentage || 15}%` }}>
              <span className="absolute -top-7 left-2 opacity-0 group-hover:opacity-100 font-headline text-xs text-tertiary font-bold transition-opacity">
                {telemetry[2]?.percentage || 15}%
              </span>
            </div>
            {/* Error */}
            <div className="bg-error relative cursor-crosshair transition-all duration-300 hover:brightness-125" style={{ width: `${telemetry[3]?.percentage || 5}%` }}>
              <span className="absolute -top-7 right-0 opacity-0 group-hover:opacity-100 font-headline text-xs text-error font-bold pr-1 transition-opacity">
                {telemetry[3]?.percentage || 5}%
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
