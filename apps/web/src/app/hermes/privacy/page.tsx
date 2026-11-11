import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Hermes Agent Privacy Policy | Sean Balbale",
  description: "Privacy policy for Hermes Agent, a private self-hosted assistant.",
};

const sections = [
  {
    heading: "Who uses this app",
    body: "Hermes Agent is used only by its owner, Sean Balbale. It is not offered to the public, and no other person's Google account is connected to it.",
  },
  {
    heading: "What data it accesses",
    body: "With the owner's consent, Hermes reads Gmail messages and Google Calendar events through Google's read-only scopes (gmail.readonly and calendar.readonly). It cannot send, modify, label, or delete email, and it cannot create or change calendar events.",
  },
  {
    heading: "How data is used",
    body: "Data is used solely to produce reminders, summaries, and briefings for the owner. It is not sold, used for advertising, or used to train AI models.",
  },
  {
    heading: "Where data is stored",
    body: "Data is processed and stored on hardware the owner controls (a home server). It is not shared with third parties, except where the owner directs Hermes to use a service on his behalf.",
  },
  {
    heading: "Retention and deletion",
    body: "Derived data such as reminder records and notes is kept only as long as it is useful to the owner and can be deleted at any time. Access can be revoked at any time from the Google Account permissions page (myaccount.google.com/permissions).",
  },
  {
    heading: "Google API Services User Data Policy",
    body: "Hermes Agent's use of information received from Google APIs adheres to the Google API Services User Data Policy, including the Limited Use requirements.",
  },
];

export default function HermesPrivacyPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col pt-20">
      <div className="w-full border-b border-muted/20 bg-foreground/5">
        <div className="max-w-3xl mx-auto px-6 md:px-12 py-8 md:py-12">
          <Link
            href="/hermes"
            className="font-headline text-xs tracking-[0.2em] uppercase text-muted hover:text-primary transition-colors mb-4 md:mb-6 inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Hermes Agent
          </Link>
          <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tighter text-foreground">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-muted">Last updated November 10, 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 md:px-12 py-8 md:py-12 flex flex-col gap-8 text-foreground/90 leading-relaxed">
        {sections.map((s) => (
          <section key={s.heading} className="flex flex-col gap-2">
            <h2 className="font-headline text-lg font-semibold uppercase tracking-wide text-foreground">
              {s.heading}
            </h2>
            <p>{s.body}</p>
          </section>
        ))}
        <section className="flex flex-col gap-2">
          <h2 className="font-headline text-lg font-semibold uppercase tracking-wide text-foreground">
            Contact
          </h2>
          <p>
            Questions about this policy can be sent to{" "}
            <a href="mailto:hermesagentcherrybrook@gmail.com" className="text-primary underline">
              hermesagentcherrybrook@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
