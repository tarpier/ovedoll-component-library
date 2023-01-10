import { createConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas'
import {visionTool} from '@sanity/vision'


export default createConfig({
  name: 'default',
  title: 'ovedoll.de',

  projectId: 'i56tmt2q',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
