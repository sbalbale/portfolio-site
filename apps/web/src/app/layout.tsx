import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Github, Linkedin } from "lucide-react";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { client } from "../../lib/sanity";
import { getSiteSettingsQuery } from "../../lib/queries";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-headline",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sean Balbale | Portfolio",
  description: "Portfolio and architectural web deployment for Sean Balbale.",
  icons: {
    icon: [
      // Primary: Adaptive SVG for modern browsers
      { url: "/favicon.svg", type: "image/svg+xml" },
      // Fallbacks: Specific PNG sizes for older browsers/tabs
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      // Legacy: The .ico file for IE and old bookmarking tools
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      // Crucial for iOS users who "Add to Home Screen"
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await client.fetch(getSiteSettingsQuery).catch(() => null);
  const copyrightText =
    settings?.copyrightText ||
    `© ${new Date().getFullYear()} SEAN BALBALE. SECURE TRANSMISSION.`;
  const githubUrl = settings?.githubUrl || "https://github.com/seanbalbale";
  const linkedinUrl =
    settings?.linkedinUrl || "https://linkedin.com/in/seanbalbale";

  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Dynamic Global Navbar */}
          <Navbar />

          {children}

          {/* Global Footer */}
          <footer className="w-full border-t border-muted/30 bg-background py-12 px-6 md:px-12 mt-auto relative z-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="font-headline text-xs tracking-widest text-muted uppercase text-center md:text-left">
                {copyrightText}
              </div>
              <div className="flex items-center gap-6">
                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {linkedinUrl && (
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </footer>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
