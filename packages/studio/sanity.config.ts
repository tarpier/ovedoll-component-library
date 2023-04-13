import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas'
import { codeInput } from "@sanity/code-input";
import {visionTool} from '@sanity/vision'


export default defineConfig({
  name: 'default',
  title: 'ovedoll.de',

  projectId: 'i56tmt2q',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), codeInput()],
  schema: {
    types: schemaTypes,
  },
})
