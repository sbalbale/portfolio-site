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
  getExperiencesQuery,
  getProjectsQuery,
  getResearchQuery,
  getContactQuery,
} from "../../lib/queries";

export const revalidate = 10; // ISR revalidation

export default async function Home() {
  const [
    heroData,
    aboutData,
    skillsData,
    siteSettings,
    experienceData,
    projectsData,
    researchData,
    contactData,
  ] = await Promise.all([
    client.fetch(getHeroQuery).catch(() => null),
    client.fetch(getAboutQuery).catch(() => null),
    client.fetch(getSkillsQuery).catch(() => null),
    client.fetch(getSiteSettingsQuery).catch(() => null),
    client.fetch(getExperiencesQuery).catch(() => []),
    client.fetch(getProjectsQuery).catch(() => []),
    client.fetch(getResearchQuery).catch(() => []),
    client.fetch(getContactQuery).catch(() => null),
  ]);

  return (
    <main className="flex flex-col">
      <div id="hero">
        <HeroSection data={heroData} settings={siteSettings} />
      </div>
      <AboutSection data={aboutData} />
      <ExperienceSection data={experienceData} />
      <ProjectsSection data={projectsData} />
      <ResearchSection data={researchData} />
      <SkillsSection data={skillsData} />
      <ContactSection data={contactData} />
    </main>
  );
}
