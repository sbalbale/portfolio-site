import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'about',
  title: 'About Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'e.g., About',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      description: 'e.g., Philosophy',
    }),
    defineField({
      name: 'primaryStatement',
      title: 'Primary Statement',
      type: 'text',
      description: 'Large, high-impact introductory text.',
    }),
    defineField({
      name: 'bodyParagraphs',
      title: 'Body Paragraphs',
      type: 'array',
      of: [{ type: 'text' }],
      description: 'Secondary, detailed description paragraphs.',
    }),
  ],
})
