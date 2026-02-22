import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'text',
        }),
        defineField({
            name: 'link',
            title: 'Project Link',
            type: 'url',
        }),
        defineField({
            name: 'isCaseStudy',
            title: 'Is Case Study?',
            type: 'boolean',
            initialValue: false,
        }),
        defineField({
            name: 'caseStudyBody',
            title: 'Case Study Body',
            type: 'array',
            of: [
                { type: 'block' },
                { type: 'image' }
            ],
            hidden: ({ document }) => !document?.isCaseStudy,
        }),
        defineField({
            name: 'metric',
            title: 'Metric',
            description: 'Optional highlight string for the project card (e.g., "$72M RAISED")',
            type: 'string',
        }),
    ],
})
