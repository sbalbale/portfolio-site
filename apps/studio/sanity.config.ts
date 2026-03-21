import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'

// Define singletons that shouldn't be created as multiple documents
const singletonActions = new Set(["publish", "discardChanges", "restore"])
const singletonTypes = new Set(["siteSettings", "hero", "about", "contact"])

export default defineConfig({
  name: 'default',
  title: 'Sean Balbale Portfolio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_STUDIO_DATASET! || 'production',
  
  plugins: [
    visionTool(),
    structureTool({
      structure: (S, context) =>
        S.list()
          .title('Architecture Data')
          .items([
            // 1. Site Settings (Singleton)
            S.listItem()
              .title('Site Settings')
              .id('siteSettings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            
            // 2. Hero Section (Singleton)
            S.listItem()
              .title('Hero Section')
              .id('hero')
              .child(S.document().schemaType('hero').documentId('hero')),
            
            // 3. About (Singleton)
            S.listItem()
              .title('About')
              .id('about')
              .child(S.document().schemaType('about').documentId('about')),

            S.divider(),

            // 4. Experience (List)
            orderableDocumentListDeskItem({type: 'experience', title: 'Experience', S, context}),
            
            // 5. Projects (List)
            orderableDocumentListDeskItem({type: 'project', title: 'Projects', S, context}),
            
            // 6. Research (List)
            orderableDocumentListDeskItem({type: 'research', title: 'Research', S, context}),
            
            // 7. Skills (List)
            orderableDocumentListDeskItem({type: 'skills', title: 'Skills', S, context}),

            S.divider(),

            // 8. Contact (Singleton)
            S.listItem()
              .title('Contact')
              .id('contact')
              .child(S.document().schemaType('contact').documentId('contact')),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
    // Filter out singleton types from the global "Create New" menu
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    // Remove "Duplicate" and "Delete" actions for singletons
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
})
