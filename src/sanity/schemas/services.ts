import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'services',
    title: 'Work With Me',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'headline',
            title: 'Headline',
            type: 'text',
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'ctaText',
            title: 'CTA Text',
            type: 'string',
        }),
        defineField({
            name: 'ctaLink',
            title: 'CTA Link',
            type: 'string',
        }),
    ],
})
