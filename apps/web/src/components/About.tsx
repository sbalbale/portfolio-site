import React from "react";

export interface AboutData {
  heading: string;
  subheading: string;
  primaryStatement: string;
  bodyParagraphs: string[];
}

export default function AboutSection({ data }: { data?: AboutData }) {
  const heading = data?.heading || "About";
  const subheading = data?.subheading || "Philosophy";
  const primaryStatement =
    data?.primaryStatement ||
    "I build high-performance embedded systems and resilient infrastructure, adhering to the principle that architectural clarity yields absolute scale.";
  const bodyParagraphs = data?.bodyParagraphs || [
    "Design systems without geometric compromises. Software should reflect mechanical precision, prioritizing stark structural legibility over soft approximations.",
    "My focus lies in bridging lower-level hardware constraints with top-level cloud orchestration—producing stacks that operate without friction from the silicon layer up to global DNS.",
  ];

  return (
    <section className="min-h-screen w-full flex flex-col justify-center bg-foreground/5 pt-32 pb-48 px-6 md:px-16 lg:px-32 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-12 gap-12 md:gap-16">
        {/* Left Column (Sticky Top Tracker) */}
        <div className="md:col-span-4 relative">
          <div className="md:sticky md:top-32">
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter uppercase text-foreground leading-tight md:leading-none">
              {heading}
              <br />
              <span className="text-primary tracking-tighter">
                {subheading}
              </span>
            </h2>
          </div>
        </div>

        {/* Right Column (Content Matrix) */}
        <div className="md:col-span-8 flex flex-col">
          <p className="font-headline text-2xl md:text-3xl lg:text-4xl font-light leading-snug md:leading-relaxed text-foreground mb-8">
            {primaryStatement}
          </p>

          <div className="flex flex-col gap-6 w-full">
            {bodyParagraphs.map((paragraph: string, index: number) => (
              <p
                key={index}
                className="font-body text-base md:text-lg lg:text-xl text-muted leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
