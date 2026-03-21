import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/Experience";
import ProjectsSection from "@/components/Projects";
import ResearchSection from "@/components/Research";
import SkillsSection from "@/components/Skills";
import ContactSection from "@/components/Contact";
import { client } from "../../lib/sanity";
import { getHeroQuery, getSkillsQuery, getSiteSettingsQuery } from "../../lib/queries";

export const revalidate = 60; // ISR revalidation 

export default async function Home() {
  // Concurrent fetching of our new singleton documents
  // The UI will gracefully fallback if the documents aren't populated yet
  const [heroData, skillsData, siteSettings] = await Promise.all([
    client.fetch(getHeroQuery).catch(() => null),
    client.fetch(getSkillsQuery).catch(() => null),
    client.fetch(getSiteSettingsQuery).catch(() => null),
  ]);

  return (
    <main className="flex flex-col">
      <div id="hero">
        <HeroSection data={heroData} />
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
