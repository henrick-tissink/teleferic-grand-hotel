import { defineType, defineField } from 'sanity'

export const award = defineType({
  name: 'award',
  title: 'Award',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Award Name', type: 'string' }),
    defineField({ name: 'title', title: 'Title', type: 'localeString' }),
    defineField({ name: 'year', title: 'Year', type: 'number' }),
    defineField({
      name: 'badge',
      title: 'Badge',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
  orderings: [
    { title: 'Year', name: 'year', by: [{ field: 'year', direction: 'desc' }] },
  ],
  preview: {
    select: { title: 'name', subtitle: 'year' },
    prepare({ title, subtitle }) {
      return { title: title || 'Untitled', subtitle: subtitle ? String(subtitle) : '' }
    },
  },
})
