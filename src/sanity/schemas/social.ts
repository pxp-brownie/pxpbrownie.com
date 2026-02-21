import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'social',
    title: 'Social Link',
    type: 'document',
    fields: [
        defineField({
            name: 'platform',
            title: 'Platform',
            type: 'string',
        }),
        defineField({
            name: 'url',
            title: 'URL',
            type: 'url',
        }),
    ],
})
