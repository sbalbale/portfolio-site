import React from "react";
import Link from "next/link";
import { FileText } from "lucide-react";

export default function ResearchSection() {
  return (
    <section className="bg-surface py-32 px-6 md:px-16 lg:px-32 flex justify-center items-center">
      <div className="w-full max-w-6xl">
        {/* The Spotlight Card */}
        <div className="bg-[#1A1A1A] p-12 md:p-24 shadow-2xl relative overflow-hidden rounded-none border border-outline/10">
          
          <div className="relative z-10 max-w-4xl">
            {/* Meta Tag */}
            <span className="font-headline text-primary tracking-[0.4em] uppercase text-xs mb-8 block font-bold">
              FEATURED PUBLICATION
            </span>
            
            {/* Headline */}
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-on-surface mb-8 leading-tight">
              Embodied Harms and Inferred Data:
              <br />
              <span className="text-on-surface-variant">Redefining Privacy in Extended Reality</span>
            </h2>
            
            {/* Abstract */}
            <p className="font-body text-base md:text-lg text-on-surface-variant max-w-3xl mb-12 leading-relaxed">
              Investigating the ethical implications and technical vulnerabilities of biometric data inference in XR environments. This research proposes a new architectural framework for user-centric data sovereignty.
            </p>
            
            {/* Action */}
            <Link 
              href="#"
              className="inline-flex items-center gap-3 rounded-none bg-primary-container text-on-primary-container font-headline text-sm font-semibold px-8 py-4 uppercase tracking-[0.15em] transition-all duration-300 hover:brightness-110 shadow-[0_0_15px_rgba(130,170,255,0.05)] hover:shadow-[0_0_20px_rgba(130,170,255,0.15)]"
            >
              <FileText className="w-4 h-4" />
              Read Full Paper
            </Link>
          </div>

          {/* Abstract Ghost Accent */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
