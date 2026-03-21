import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'e.g., ENGINEER & ARCHITECT',
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'resumeUrl',
      title: 'Resume PDF URL',
      type: 'url',
      validation: Rule => Rule.uri({ allowRelative: true })
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
    }),
  ],
})
