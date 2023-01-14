import { defineType } from "sanity";

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fieldsets: [
    { name: 'seo', title: 'SEO Meta Data' }

  ],
  fields: [
    {
      name: 'name',
      title: 'Internal Name',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
    }, 
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: "title",
        slugify: (input) =>
          input
            .toLowerCase()
            //Remove spaces
            .replace(/\s+/g, "-")
            //Remove special characters
            .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ""),
          },
          validation: (Rule) => Rule.required(),
    },
    {
      name: 'hero',
      title: 'Hero',
      type: 'hero',
      options: {
        collapsible: true,
      }

    },
    {
      name: 'content',
      title: 'Page Content',
      type: 'array',
      of: [
        { type: 'textWithImage' },
        { type: 'simpleCopy' },
        { type: 'contactForm' },
      ]
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      fieldset: 'seo'

    },
    {
      name: 'noIndex',
      title: 'Disable indexing',
      description: 'This sets the robots meta to no-index & no-follow value',
      type: 'boolean',
      fieldset: 'seo',
    },
  ],
  preview: {
    select: {
      name: 'name',
      slug: 'slug.current',
      noIndex: 'noIndex'
    },
    prepare(selection) {

      return {
        title: selection.name,
        subtitle: `slug: ${selection.slug} ${selection.noIndex ? '- not indexed -' : ''}`
      };
    },
  },
})