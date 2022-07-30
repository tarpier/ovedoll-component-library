export default {
  name: 'contactForm',
  title: 'Contact Form',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Internal Name',
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
    {
      name: 'butttonLabel',
      title: 'Button Label',
      type: 'string',
    },
  ]

}