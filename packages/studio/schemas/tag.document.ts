import { defineType, defineField } from "sanity";


export const tag = defineType({
    name: 'tag',
    title: 'Tag',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'highlightColor',
            title: 'Highlight Color',
            type: 'string',
            initialValue: 'FF5733'
        }),
    ]
})



