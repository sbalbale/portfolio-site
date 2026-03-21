import { groq } from "next-sanity";

export const getExperiencesQuery = groq`
  *[_type == "experience"] | order(_createdAt desc) {
    _id,
    company,
    role,
    timeline,
    description
  }
`;

export const getProjectsQuery = groq`
  *[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    category_tag,
    short_description,
    tech_stack,
    github_url
  }
`;

export const getResearchQuery = groq`
  *[_type == "research"] | order(_createdAt desc) {
    _id,
    title,
    subtitle,
    abstract,
    publication_status,
    paper_url
  }
`;
