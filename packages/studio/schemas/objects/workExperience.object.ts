import { defineType, defineField } from "sanity";

export const workExperience = defineType(
    {
        name: 'workExperience',
        title: 'Work Experience',
        type: 'object',
        fields: [
            {
                name: 'position',
                title: 'Position',
                type: 'string'
            },
            {
                name: 'company',
                title: 'Company',
                type: 'string',
                validation: Rule => Rule.required()
            },
            {
                name: 'url',
                title: 'Website',
                type: 'string'
            },
            {
                name: 'agency',
                title: 'Agency',
                type: 'string'
            },
            {
                name: 'type',
                title: 'Freelance or salaried',
                type: 'array',
                of: [{ type: 'string' }],
                initialValue: () => ['freelance'],
                options: {
                    list: [
                        { title: 'Freelance', value: 'freelance' },
                        { title: 'Salaried', value: 'salaried' },
                    ]
                },
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
                type: 'text'
            }
        ],
        preview: {
            select: {
              title: 'company',
              startDate: 'startDate',
              endDate: 'endDate',
              type: 'type'
            },
            prepare(selection) {
                const {title, startDate, endDate, type} = selection
                return {
                  title: title,
                  subtitle: `${startDate} - ${endDate} | ${type}`
                }
              }
          }
    }
)