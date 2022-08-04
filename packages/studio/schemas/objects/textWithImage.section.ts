import { IRuleType } from "../schemaTypes";

export default {
  name: 'textWithImage',
  title: 'Text & Image',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Internal Name',
      type: 'string',
    },
    {
      name: 'dateLine',
      title: 'DateLine',
      type: 'string',
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (Rule: IRuleType): IRuleType => Rule.required(),
    },
    {
      name: 'copy',
      title: 'Copy',
      type: 'blockContent'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'string'
      // type: 'image',
      // options: { hotspot: true },
    },
    {
      name: 'imageAlt',
      title: 'Image Alt',
      type: 'string'
    },
    {
      name: 'buttonLabel',
      title: 'Button Label',
      type: 'string',
    },
  ]

}