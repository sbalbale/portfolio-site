"use client";

import React, { useState } from "react";
import { Mail, MapPin } from "lucide-react";

export default function ContactSection({ data }: { data?: any }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const contactEmail = data?.contactEmail || "sean@balbale.engineering";
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
    <section className="bg-surface py-32 px-6 md:px-16 lg:px-32 border-t border-outline/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        
        {/* Left Column */}
        <div className="flex flex-col justify-center">
          <h2 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter text-on-surface mb-8">
            ESTABLISH CONNECTION
          </h2>
          
          <p className="font-body text-lg text-on-surface-variant max-w-sm mb-12">
            Available for select technical implementations and architectural inquiries. Let's build the next infrastructure.
          </p>

          <div className="flex flex-col gap-6 font-headline tracking-widest text-sm text-on-surface">
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-primary" />
              <a href={`mailto:${contactEmail}`} className="hover:text-primary transition-colors">
                {contactEmail}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-primary" />
              <span>{location}</span>
            </div>
          </div>
        </div>

        {/* Right Column (Form) */}
        <div>
          {success ? (
            <div className="h-full flex flex-col justify-center bg-surface-container-low p-12 border-l-4 border-primary">
              <h3 className="font-headline text-3xl font-bold text-on-surface mb-4 uppercase tracking-tight">Transmission Successful</h3>
              <p className="font-body text-on-surface-variant">Your message has been safely received. I will be in contact shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-10">
              
              <div className="flex flex-col relative">
                <label htmlFor="name" className="font-headline text-xs tracking-widest uppercase text-outline mb-2">Identifier</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  className="bg-transparent border-0 border-b-2 border-outline/30 rounded-none focus:ring-0 focus:outline-none focus:border-primary text-on-surface font-body px-0 py-2 transition-colors"
                  placeholder="Enter your name..."
                />
              </div>

              <div className="flex flex-col relative">
                <label htmlFor="email" className="font-headline text-xs tracking-widest uppercase text-outline mb-2">Relay Node (Email)</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  className="bg-transparent border-0 border-b-2 border-outline/30 rounded-none focus:ring-0 focus:outline-none focus:border-primary text-on-surface font-body px-0 py-2 transition-colors"
                  placeholder="name@domain.com"
                />
              </div>

              <div className="flex flex-col relative">
                <label htmlFor="message" className="font-headline text-xs tracking-widest uppercase text-outline mb-2">Payload (Message)</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required
                  rows={4}
                  className="bg-transparent border-0 border-b-2 border-outline/30 rounded-none focus:ring-0 focus:outline-none focus:border-primary text-on-surface font-body px-0 py-2 transition-colors resize-none"
                  placeholder="Transmit your message..."
                />
              </div>

              {error && (
                <div className="text-error font-headline text-sm tracking-wide">
                  ERROR: {error}
                </div>
              )}

              <button 
                type="submit" 
                disabled={loading}
                className="mt-4 rounded-none bg-primary-container text-on-primary-container font-headline font-semibold text-sm px-8 py-5 uppercase tracking-[0.15em] transition-all duration-300 hover:brightness-110 shadow-[0_0_20px_rgba(130,170,255,0.1)] hover:shadow-[0_0_25px_rgba(130,170,255,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
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
