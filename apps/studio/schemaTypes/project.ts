import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'category_tag',
      title: 'Category Tag',
      type: 'string',
    }),
    defineField({
      name: 'short_description',
      title: 'Short Description',
      type: 'text',
    }),
    defineField({
      name: 'tech_stack',
      title: 'Tech Stack',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'github_url',
      title: 'GitHub URL',
      type: 'url',
    }),
  ],
})
