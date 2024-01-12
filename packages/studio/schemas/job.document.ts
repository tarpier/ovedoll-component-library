import { defineType, defineField } from "sanity";

export const job = defineType(
    {
        name: 'job',
        title: 'Work Experience',
        type: 'document',
        fields: [
            {
                name: 'position',
                title: 'Position / Role',
                type: 'string'
            },
            {
                name: 'company',
                title: 'Company',
                type: 'string',
                validation: Rule => Rule.required()
            },
            {
                name: 'type',
                title: 'Freelance or salaried',
                type: 'string',
                initialValue: () => 'freelance',
                options: {
                    list: [
                        { title: 'Freelance', value: 'freelance' },
                        { title: 'Salaried', value: 'salaried' },
                    ]
                },
            },
            {
                name: 'active',
                title: 'active',
                type: 'boolean',
                initialValue: true,
            },
            {
                name: 'project',
                title: 'Project',
                type: 'string',
                hidden: ({ document }) => document?.type === 'salaried',
            },
            {
                name: 'url',
                title: 'Website',
                type: 'string'
            },
            {
                name: 'agency',
                title: 'Agency',
                type: 'string',
                hidden: ({ document }) => document?.type === 'salaried',
            },

            {
                name: 'startDate',
                title: 'Start Date',
                type: 'date',
                validation: Rule => Rule.required(),
                options: {
                    dateFormat: 'DD-MM-YYYY',
                    calendarTodayLabel: 'Today'
                }
            },
            {
                name: 'endDate',
                title: 'End Date',
                type: 'date',
                options: {
                    dateFormat: 'DD-MM-YYYY',
                    calendarTodayLabel: 'Today'
                }
            },
            defineField({
                name: 'tags',
                title: 'Tags',
                type: 'array',
                of: [{
                    type: 'reference',
                    to: [{ type: 'tag' }]
                }],
            }),
            {
                name: 'responsibilities',
                title: 'Responsibilities',
                type: 'array',
                of: [{ type: 'string' }]
            },
            {
                name: 'longDescription',
                title: 'Long Description',
                type: 'blockContent'
            }
        ],
        preview: {
            select: {
                title: 'company',
                startDate: 'startDate',
                endDate: 'endDate',
                type: 'type',
                active: 'active'
            },
            prepare(selection) {
                const { title, startDate, endDate, type } = selection
                return {
                    title: `${selection.active ? '🟢' : '🔴'} ${title}`,
                    subtitle: `${startDate} ${endDate ? '- ' + endDate : ''} | ${type}`
                }
            }
        }
    }
)