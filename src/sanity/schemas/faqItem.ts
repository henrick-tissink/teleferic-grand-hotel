import { defineType, defineField } from 'sanity'

export const faqItem = defineType({
  name: 'faqItem',
  title: 'FAQ Item',
  type: 'document',
  fields: [
    defineField({ name: 'question', title: 'Question', type: 'localeString' }),
    defineField({ name: 'answer', title: 'Answer', type: 'localePortableText' }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'General', value: 'general' },
          { title: 'Rooms', value: 'rooms' },
          { title: 'Dining', value: 'dining' },
          { title: 'Spa', value: 'spa' },
          { title: 'Facilities', value: 'facilities' },
        ],
      },
    }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  orderings: [
    { title: 'Order', name: 'order', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'question.en', subtitle: 'category' },
  },
})
