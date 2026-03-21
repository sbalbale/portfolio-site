import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Github, Linkedin } from "lucide-react";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-headline",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sean Balbale | Engineer & Architect",
  description: "B.S. Computer Science & B.S. Electrical Engineering. Bridging the gap between physical systems and high-level computation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-surface text-on-surface">
        
        {/* Dynamic Global Navbar */}
        <Navbar />

        {children}

        {/* Global Footer */}
        <footer className="w-full border-t border-outline/30 bg-surface py-12 px-6 md:px-12 mt-auto relative z-10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="font-headline text-xs tracking-widest text-on-surface-variant uppercase text-center md:text-left">
              © {new Date().getFullYear()} SEAN BALBALE. SECURE TRANSMISSION.
            </div>
            <div className="flex items-center gap-6">
              <a href="https://github.com/seanbalbale" target="_blank" rel="noreferrer" className="text-on-surface-variant hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/seanbalbale" target="_blank" rel="noreferrer" className="text-on-surface-variant hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
