import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'research',
  title: 'Research',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'abstract',
      title: 'Abstract',
      type: 'text',
    }),
    defineField({
      name: 'publication_status',
      title: 'Publication Status',
      type: 'string',
    }),
    defineField({
      name: 'paper_url',
      title: 'Paper URL',
      type: 'url',
    }),
  ],
})
