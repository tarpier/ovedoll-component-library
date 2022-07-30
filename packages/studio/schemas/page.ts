import { IPrepare, IPreviewSelection } from "./schemaTypes";

export default {
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
      //hidden: ({ document }: { document: any }) => document?.isRootPage,
      options: {
        source: 'title',
        slugify: (input: string) => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200)
      }
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
      initialValue: false,
    },
  ],
  preview: {
    select: {
      name: 'name',
      slug: 'slug.current',
    },
    prepare(selection: IPreviewSelection): IPrepare {

      return {
        title: selection.name,
        subtitle: `slug: ${selection.slug}`
      };
    },
  },
}