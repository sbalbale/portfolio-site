import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'skills',
  title: 'Skills Section',
  type: 'document',
  fields: [
    defineField({
      name: 'hardwareSkills',
      title: 'Hardware Skills',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'softwareSkills',
      title: 'Software Skills',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'cloudSkills',
      title: 'Cloud & DevOps Skills',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'telemetry',
      title: 'Telemetry Distribution',
      type: 'array',
      description: 'Must have exactly 4 items mapping to Primary, Secondary, Tertiary, Error colors. Values should sum to 100.',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'percentage', title: 'Percentage (e.g., 60)', type: 'number' }
          ]
        }
      ]
    })
  ],
})
