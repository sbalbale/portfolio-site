import React from "react";
import Link from "next/link";
import { FileText } from "lucide-react";

export interface Research {
  _id: string;
  title: string;
  subtitle: string;
  abstract: string;
  publication_status: string;
  paper_url: string;
}

export default function ResearchSection({ data }: { data?: Research[] }) {
  const featured = data?.[0];
  if (!featured) return null;
  return (
    <section className="min-h-screen w-full flex flex-col justify-center bg-background pt-32 pb-48 px-4 md:px-16 lg:px-32 items-center relative overflow-hidden">
      <div className="w-full max-w-6xl relative z-10">
        <div className="bg-foreground/10 p-8 sm:p-12 md:p-24 shadow-2xl relative overflow-hidden rounded-none border border-muted/20">
          <div className="relative z-10 max-w-4xl">
            <span className="font-headline text-primary tracking-widest md:tracking-[0.4em] uppercase text-[10px] md:text-xs mb-6 md:mb-8 block font-bold">
              FEATURED PUBLICATION
            </span>

            <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground mb-6 md:mb-8 leading-tight">
              {featured.title}
              <br />
              <span className="text-muted">
                {featured.subtitle}
              </span>
            </h2>

            <p className="font-body text-sm sm:text-base md:text-lg lg:text-xl text-muted max-w-3xl mb-10 md:mb-12 leading-relaxed">
              {featured.abstract}
            </p>

            <Link
              href={featured.paper_url || "#"}
              className="w-full md:w-auto flex items-center justify-center gap-3 rounded-none bg-primary/20 text-primary font-headline text-xs md:text-sm font-semibold px-6 py-4 md:px-8 md:py-4 uppercase tracking-[0.15em] transition-all duration-300 hover:brightness-110 shadow-[0_0_15px_rgba(130,170,255,0.05)] hover:shadow-[0_0_20px_rgba(130,170,255,0.15)]"
            >
              <FileText className="w-4 h-4 md:w-5 md:h-5" />
              Read Full Paper
            </Link>
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-primary/5 to-transparent pointer-events-none hidden md:block" />
        </div>
      </div>
    </section>
  );
}
