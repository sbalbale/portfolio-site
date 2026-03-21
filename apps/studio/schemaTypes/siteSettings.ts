import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      description: 'This is where form submissions will be sent.',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g., Boston/MA | Hartford, CT',
    }),
    defineField({
      name: 'githubUrl',
      title: 'Global GitHub URL',
      type: 'url',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'Global LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'copyrightText',
      title: 'Footer Copyright Text',
      type: 'string',
    })
  ],
})
