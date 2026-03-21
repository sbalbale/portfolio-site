import { groq } from "next-sanity";

export const getExperiencesQuery = groq`
  *[_type == "experience"] | order(orderRank) {
    _id,
    company,
    role,
    timeline,
    description
  }
`;

export const getProjectsQuery = groq`
  *[_type == "project"] | order(orderRank) {
    _id,
    title,
    category_tag,
    short_description,
    tech_stack,
    github_url
  }
`;

export const getResearchQuery = groq`
  *[_type == "research"] | order(orderRank) {
    _id,
    title,
    subtitle,
    abstract,
    publication_status,
    paper_url
  }
`;

// Singletons
export const getHeroQuery = groq`*[_type == "hero"][0]`;
export const getAboutQuery = groq`*[_type == "about"][0]`;
export const getSkillsQuery = groq`*[_type == "skills"] | order(orderRank)[0]`;
export const getSiteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  ...,
  "resumeUrl": resume.asset->url
}`;
export const getContactQuery = groq`*[_type == "contact"][0]`;
