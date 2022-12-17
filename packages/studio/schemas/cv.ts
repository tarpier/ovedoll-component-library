import { defineType, defineField } from "sanity";


export const cv = defineType({
    name: 'cv',
    title: 'CV',
    type: 'document',
    fields: [
        defineField({
            name: 'cvTitle',
            title: 'Title',
            description: 'It maybe necessary to have multiple CVs, so give them unique names',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        {
            name: 'personalInformation',
            title: 'Personal Information',
            type: 'object',
            groups: [
                {
                    name: 'personal',
                    title: 'Personal Information',
                },
                {
                    name: 'social',
                    title: 'social network',
                },
            ],
            fields: [
                defineField({
                    name: 'name',
                    title: 'Name',
                    type: 'string',
                    group: 'personal',
                    validation: Rule => Rule.required()
                }),
                defineField({
                    name: 'email',
                    title: 'Email',
                    type: 'string',
                    group: 'personal',
                }),
                defineField({
                    name: 'phone',
                    title: 'Phone',
                    type: 'string',
                    group: 'personal',
                }),
                defineField({
                    name: 'address',
                    title: 'Address',
                    type: 'string',
                    group: 'personal',
                }),
                defineField({
                    name: 'website',
                    title: 'Website',
                    type: 'url',
                    group: 'personal',
                }),
                {
                    name: 'xing',
                    title: 'Xing',
                    type: 'string',
                    group: 'social',
                },
                {
                    name: 'linkedIn',
                    title: 'linkedIn',
                    type: 'string',
                    group: 'social',
                },
                {
                    name: 'github',
                    title: 'Github',
                    type: 'string',
                    group: 'social',
                },
            ]
        },
        {
            name: 'workExperience',
            title: 'Work Experience',
            type: 'array',
            of: [{ type: 'workExperience' }]
        },
        {
            name: 'trainerExperience',
            title: 'Trainer, Workshop, Talks',
            type: 'array',
            of: [{ type: 'trainerExperience' }]
        },
        {
            name: 'education',
            title: 'Education',
            type: 'array',
            of: [{ type: 'education' }]
        },
        {
            name: 'languages',
            title: 'spoken languages',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'language',
                            title: 'Language',
                            type: 'string'
                        },
                        {
                            name: 'level',
                            title: 'Level',
                            type: 'string'
                        }
                    ]
                }
            ]
        }
    ],
    preview: {
        select: {
            title: 'cvTitle',
        },
        prepare(selection) {
            const { title } = selection
            return {
                title: title,
            }
        }
    }
}
)
