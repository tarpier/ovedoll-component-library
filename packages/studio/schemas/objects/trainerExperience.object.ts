import { defineType} from "sanity";

export const trainerExperience = defineType(
    {
        name: 'trainerExperience',
        title: 'Trainer & Workshops',
        type: 'object',
        fields: [
            {
                name: 'title',
                title: 'Title',
                type: 'string',
                validation: Rule => Rule.required()
            },
            {
                name: 'company',
                title: 'Company or Event',
                type: 'string',
            },
            {
                name: 'date',
                title: 'Date of the event',
                description: 'Only month and year will be used',
                type: 'date',
                validation: Rule => Rule.required(),
                options: {
                    dateFormat: 'DD-MM-YYYY',
                    calendarTodayLabel: 'Today'
                }
            },
            {
                name: 'type',
                title: 'Type of Event',
                description:'Inhouse training, talk, workshop',
                type: 'string'
            },
            {
                name: 'description',
                title: 'Long Description',
                type: 'text'
            }
        ],
        preview: {
            select: {
              title: 'title',
              company: 'company',
              date: 'date'
            },
            prepare(selection) {
                const {title, company, date} = selection
                return {
                  title: title,
                  subtitle: `${date} | ${company}`
                }
              }
          }
    }
)