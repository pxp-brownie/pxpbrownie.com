import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'goal',
    title: 'Goal',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Life', value: 'life' },
                    { title: 'Career', value: 'career' },
                    { title: 'Knowledge', value: 'knowledge' },
                    { title: 'Travel', value: 'travel' },
                    { title: 'Fitness', value: 'fitness' },
                ],
            },
        }),
        defineField({
            name: 'status',
            title: 'Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Pending', value: 'pending' },
                    { title: 'In Progress', value: 'in-progress' },
                    { title: 'Completed', value: 'completed' },
                ],
            },
            initialValue: 'pending',
        }),
        defineField({
            name: 'completedDate',
            title: 'Completed Date',
            type: 'date',
            hidden: ({ document }) => document?.status !== 'completed',
        }),
        defineField({
            name: 'order',
            title: 'Order',
            type: 'number',
        }),
    ],
})
