import { createConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas'
import { codeInput } from "@sanity/code-input";


export default createConfig({
  name: 'default',
  title: 'ovedoll.de',

  projectId: 'i56tmt2q',
  dataset: 'production',

  plugins: [deskTool(),codeInput()],

  schema: {
    types: schemaTypes,
  },
})
