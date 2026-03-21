import {defineField, defineType} from 'sanity'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
    defineField({
      name: 'timeline',
      title: 'Timeline',
      type: 'string',
      description: 'e.g., Summer 2026',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    orderRankField({ type: 'experience' }),
  ],
})
