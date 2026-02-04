import { defineType, defineField } from 'sanity'

export const diningVenue = defineType({
  name: 'diningVenue',
  title: 'Dining Venue',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'localeSlug' }),
    defineField({ name: 'description', title: 'Description', type: 'localePortableText' }),
    defineField({ name: 'style', title: 'Style', type: 'localeString' }),
    defineField({
      name: 'capacity',
      title: 'Capacity',
      type: 'object',
      fields: [
        { name: 'interior', type: 'number', title: 'Interior' },
        { name: 'terrace', type: 'number', title: 'Terrace' },
      ],
    }),
    defineField({ name: 'hours', title: 'Hours', type: 'string' }),
    defineField({ name: 'dressCode', title: 'Dress Code', type: 'localeString' }),
    defineField({ name: 'menuType', title: 'Menu Type', type: 'localeString' }),
    defineField({ name: 'menuPdf', title: 'Menu PDF', type: 'file' }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'alt', type: 'string', title: 'Alt Text' }],
        },
      ],
    }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'hours' },
  },
})
