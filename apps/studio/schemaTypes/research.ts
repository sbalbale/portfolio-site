import {defineField, defineType} from 'sanity'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export default defineType({
  name: 'research',
  title: 'Research',
  type: 'document',
  orderings: [orderRankOrdering],
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
    orderRankField({ type: 'research' }),
  ],
})
