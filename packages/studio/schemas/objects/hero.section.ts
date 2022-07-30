import { IRuleType } from "../schemaTypes";

export default {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
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
      type: 'string',
    },
  ]

}