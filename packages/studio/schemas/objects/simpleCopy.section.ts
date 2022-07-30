export default {
  name: 'simpleCopy',
  title: 'Text',
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
    },
    {
      name: 'copy',
      title: 'Copy',
      type: 'blockContent'
    },
  ]

}