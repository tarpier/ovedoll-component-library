import { createConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas'

export default createConfig({
  name: 'default',
  title: 'ovedoll.de',

  projectId: 'i56tmt2q',
  dataset: 'production',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
