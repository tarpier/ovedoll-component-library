import { defineType } from "sanity";

export const education = defineType(
    {
        name: 'education',
        title: 'Education',
        type: 'object',
        fields: [
            {
                name: 'title',
                title: 'Title',
                description: 'School / University / Employer',
                type: 'string',
                validation: Rule => Rule.required()
            },
            {
                name: 'subject',
                title: 'Subject',
                type: 'string',
            },
            {
                name: 'graduation',
                title: 'Graduation / Certificate',
                type: 'string'
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
            {
                name: 'description',
                title: 'Description',
                type: 'text'
            }
        ],
        preview: {
            select: {
              title: 'title',
              startDate: 'startDate',
              endDate: 'endDate',
            },
            prepare(selection) {
                const {title, startDate, endDate} = selection
                return {
                  title: title,
                  subtitle: `${startDate} - ${endDate}`
                }
              }
          }
    }
)