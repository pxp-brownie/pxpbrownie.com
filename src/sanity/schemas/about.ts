import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'about',
    title: 'About',
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
            type: 'string',
        }),
        defineField({
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'story',
            title: 'Story',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'skills',
            title: 'Skills',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'experience',
            title: 'Experience',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'company', type: 'string', title: 'Company' },
                        { name: 'role', type: 'string', title: 'Role' },
                        { name: 'duration', type: 'string', title: 'Duration' },
                    ],
                },
            ],
        }),
    ],
})
