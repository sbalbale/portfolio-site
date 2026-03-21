"use client";

import React, { useState } from "react";
import { Mail, MapPin } from "lucide-react";

export interface ContactData {
  heading: string;
  subText: string;
  email: string;
  location: string;
}

export default function ContactSection({ data }: { data?: ContactData }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const heading = data?.heading || "ESTABLISH CONNECTION";
  const subText =
    data?.subText ||
    "Available for select technical implementations and architectural inquiries. Let's build the next infrastructure.";
  const contactEmail = data?.email || "sean@balbale.engineering";
  const location = data?.location || "Boston/MA | Hartford, CT";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Failed to transmit payload.");
      }

      setSuccess(true);
    } catch (err: any) {
      setError(err.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full flex flex-col bg-background pt-24 pb-40 md:pt-32 md:pb-48 px-6 md:px-16 lg:px-32 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 my-auto w-full relative z-10 shrink-0 py-12">
        {/* Left Column */}
        <div className="flex flex-col justify-center w-full lg:w-1/2">
          <h2 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter text-foreground mb-6 md:mb-8">
            {heading}
          </h2>

          <p className="font-body text-base md:text-lg text-muted max-w-sm mb-10 md:mb-12">
            {subText}
          </p>

          <div className="flex flex-col gap-5 md:gap-6 font-headline tracking-widest text-xs md:text-sm text-foreground">
            <div className="flex items-center gap-4 pb-1 overflow-hidden">
              <Mail className="w-5 h-5 text-primary shrink-0" />
              <a
                href={`mailto:${contactEmail}`}
                className="hover:text-primary transition-colors block truncate w-full"
              >
                {contactEmail}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-primary shrink-0" />
              <span className="truncate">{location}</span>
            </div>
          </div>
        </div>

        {/* Right Column (Form) */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          {success ? (
            <div className="h-full flex flex-col justify-center bg-foreground/5 p-8 mx-auto md:p-12 border-l-4 border-primary">
              <h3 className="font-headline text-2xl md:text-3xl font-bold text-foreground mb-4 uppercase tracking-tight">
                Transmission Successful
              </h3>
              <p className="font-body text-sm md:text-base text-muted">
                Your message has been safely received. I will be in contact
                shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-8 md:gap-10"
            >
              <div className="flex flex-col relative w-full">
                <label
                  htmlFor="name"
                  className="font-headline text-[10px] md:text-xs tracking-widest uppercase text-muted mb-2"
                >
                  Identifier
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-transparent border-0 border-b-2 border-muted/30 rounded-none focus:ring-0 focus:outline-none focus:border-primary text-foreground font-body px-0 py-2 transition-colors"
                  placeholder="Enter your name..."
                />
              </div>

              <div className="flex flex-col relative w-full">
                <label
                  htmlFor="email"
                  className="font-headline text-[10px] md:text-xs tracking-widest uppercase text-muted mb-2"
                >
                  Relay Node (Email)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-transparent border-0 border-b-2 border-muted/30 rounded-none focus:ring-0 focus:outline-none focus:border-primary text-foreground font-body px-0 py-2 transition-colors"
                  placeholder="name@domain.com"
                />
              </div>

              <div className="flex flex-col relative w-full">
                <label
                  htmlFor="message"
                  className="font-headline text-[10px] md:text-xs tracking-widest uppercase text-muted mb-2"
                >
                  Payload (Message)
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-transparent border-0 border-b-2 border-muted/30 rounded-none focus:ring-0 focus:outline-none focus:border-primary text-foreground font-body px-0 py-2 transition-colors resize-none"
                  placeholder="Transmit your message..."
                />
              </div>

              {error && (
                <div className="text-error font-headline text-xs md:text-sm tracking-wide">
                  ERROR: {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="mt-2 w-full md:w-auto self-start text-center rounded-none bg-primary/20 text-primary font-headline font-semibold text-xs md:text-sm px-6 py-4 md:px-8 md:py-5 uppercase tracking-[0.15em] transition-all duration-300 hover:brightness-110 shadow-[0_0_20px_rgba(130,170,255,0.1)] hover:shadow-[0_0_25px_rgba(130,170,255,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Transmitting..." : "Initialize Transfer"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
