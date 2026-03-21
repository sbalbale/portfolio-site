import Link from "next/link";
import { Download, ArrowLeft, FileWarning } from "lucide-react";
import { client } from "../../../lib/sanity";
import { getSiteSettingsQuery } from "../../../lib/queries";

export const revalidate = 10;

export const metadata = {
  title: "Resume | Sean Balbale",
  description: "Curriculum Vitae — Sean Balbale",
};

export default async function ResumePage() {
  const settings = await client.fetch(getSiteSettingsQuery).catch(() => null);
  const data = { resumeUrl: settings?.resumeUrl };

  return (
    <main className="min-h-screen bg-background flex flex-col pt-20">
      {/* Header */}
      <div className="w-full border-b border-muted/20 bg-foreground/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <Link
              href="/"
              className="font-headline text-xs tracking-[0.2em] uppercase text-muted hover:text-primary transition-colors mb-4 md:mb-6 inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
            <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tighter text-foreground">
              Resume
            </h1>
          </div>

          {/* Action Bar */}
          {data?.resumeUrl && (
            <a
              href={`${data.resumeUrl}?dl=`}
              download
              className="w-full md:w-auto text-center rounded-none bg-primary/20 text-primary font-headline text-xs md:text-sm font-semibold px-8 py-4 uppercase tracking-[0.15em] transition-all duration-300 hover:brightness-110 inline-flex items-center justify-center gap-3 shrink-0"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      {data?.resumeUrl ? (
        <div className="flex-1 flex flex-col w-full max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-12 gap-6">

          {/* PDF Viewer */}
          <iframe
            src={data.resumeUrl}
            title="Resume PDF Viewer"
            className="w-full h-[75vh] md:h-[85vh] border border-muted/20 rounded-none bg-foreground/5"
          />
        </div>
      ) : (
        /* Empty State */
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-24">
          <div className="bg-foreground/5 border border-muted/20 rounded-none p-12 md:p-16 text-center max-w-lg">
            <FileWarning className="w-10 h-10 text-muted mx-auto mb-6" />
            <h2 className="font-headline text-xl md:text-2xl font-bold uppercase tracking-tighter text-foreground mb-4">
              No Resume Payload Detected
            </h2>
            <p className="font-body text-sm md:text-base text-muted mb-8">
              No PDF has been deployed to Sanity yet. Upload a resume file in
              the Site Settings document to activate this route.
            </p>
            <Link
              href="/"
              className="rounded-none bg-primary/20 text-primary font-headline text-xs md:text-sm font-semibold px-8 py-4 uppercase tracking-[0.15em] transition-all duration-300 hover:brightness-110 inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Return to Architecture
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
