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
      name: 'sendEmail',
      title: 'Sending Email (From Address)',
      type: 'string',
      description: 'The authorized email address used to send the form submissions (e.g., contactform@seanbalbale.com)',
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
    }),
    defineField({
      name: 'name',
      title: 'Global Site Title',
      type: 'string',
    }),
    defineField({
      name: 'resume',
      title: 'Curriculum Vitae (PDF)',
      type: 'file',
      options: { accept: 'application/pdf' },
    })
  ],
})
