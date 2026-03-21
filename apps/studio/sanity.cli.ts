import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'mo0q6029',
    dataset: 'production',
  },
  deployment: {
    appId: 'nvzy7ubcezrefzidhyr88m5a',
    autoUpdates: true,
  },
})
