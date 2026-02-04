import { defineType, defineField } from 'sanity'

export const historyPage = defineType({
  name: 'historyPage',
  title: 'History Page',
  type: 'document',
  fields: [
    defineField({
      name: 'timeline',
      title: 'Timeline',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'year', type: 'string', title: 'Year / Period' },
            { name: 'title', type: 'localeString', title: 'Title' },
            { name: 'description', type: 'localePortableText', title: 'Description' },
            {
              name: 'image',
              type: 'image',
              title: 'Image',
              options: { hotspot: true },
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'History Page' }
    },
  },
})
