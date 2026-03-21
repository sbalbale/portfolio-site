import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/About";
import ExperienceSection from "@/components/Experience";
import ProjectsSection from "@/components/Projects";
import ResearchSection from "@/components/Research";
import SkillsSection from "@/components/Skills";
import ContactSection from "@/components/Contact";
import { client } from "../../lib/sanity";
import {
  getHeroQuery,
  getAboutQuery,
  getSkillsQuery,
  getSiteSettingsQuery,
} from "../../lib/queries";

export const revalidate = 60; // ISR revalidation

export default async function Home() {
  const [heroData, aboutData, skillsData, siteSettings] = await Promise.all([
    client.fetch(getHeroQuery).catch(() => null),
    client.fetch(getAboutQuery).catch(() => null),
    client.fetch(getSkillsQuery).catch(() => null),
    client.fetch(getSiteSettingsQuery).catch(() => null),
  ]);

  return (
    <main className="flex flex-col">
      <div id="hero">
        <HeroSection data={heroData} />
      </div>
      <div id="about">
        <AboutSection data={aboutData} />
      </div>
      <div id="experience">
        <ExperienceSection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="research">
        <ResearchSection />
      </div>
      <div id="skills">
        <SkillsSection data={skillsData} />
      </div>
      <div id="contact">
        <ContactSection data={siteSettings} />
      </div>
    </main>
  );
}
