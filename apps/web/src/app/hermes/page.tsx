import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Hermes Agent | Sean Balbale",
  description:
    "Hermes Agent — a private, self-hosted personal assistant operated by Sean Balbale.",
};

export default function HermesPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col pt-20">
      <div className="w-full border-b border-muted/20 bg-foreground/5">
        <div className="max-w-3xl mx-auto px-6 md:px-12 py-8 md:py-12">
          <Link
            href="/"
            className="font-headline text-xs tracking-[0.2em] uppercase text-muted hover:text-primary transition-colors mb-4 md:mb-6 inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
          <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tighter text-foreground">
            Hermes Agent
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 md:px-12 py-8 md:py-12 flex flex-col gap-6 text-foreground/90 leading-relaxed">
        <p>
          Hermes Agent is a private, self-hosted personal assistant run by Sean
          Balbale on his own home server. It is not a public product and is not
          offered to anyone else.
        </p>
        <p>
          With Sean&apos;s permission, Hermes reads his own Gmail and Google
          Calendar using read-only access (
          <code>gmail.readonly</code> and <code>calendar.readonly</code>) to
          prepare reminders and daily briefings for him. It cannot send,
          modify, or delete email or calendar events.
        </p>
        <p>
          See the{" "}
          <Link href="/hermes/privacy" className="text-primary underline">
            privacy policy
          </Link>{" "}
          for details on how this data is handled.
        </p>
      </div>
    </main>
  );
}
