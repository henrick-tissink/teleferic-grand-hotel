import { defineType, defineField } from 'sanity'

export const room = defineType({
  name: 'room',
  title: 'Room',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'localeString' }),
    defineField({ name: 'slug', title: 'Slug', type: 'localeSlug' }),
    defineField({ name: 'description', title: 'Description', type: 'localePortableText' }),
    defineField({ name: 'size', title: 'Size (sqm)', type: 'number' }),
    defineField({
      name: 'capacity',
      title: 'Capacity',
      type: 'object',
      fields: [
        { name: 'adults', type: 'number', title: 'Adults' },
        { name: 'children', type: 'number', title: 'Children' },
        { name: 'maxAdults', type: 'number', title: 'Max Adults' },
      ],
    }),
    defineField({
      name: 'bedType',
      title: 'Bed Type',
      type: 'localeString',
    }),
    defineField({
      name: 'amenities',
      title: 'Amenities',
      type: 'array',
      of: [{ type: 'localeString' }],
    }),
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
    defineField({
      name: 'floorPlan',
      title: 'Floor Plan',
      type: 'image',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  orderings: [
    { title: 'Display Order', name: 'order', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'name.en', subtitle: 'size' },
    prepare({ title, subtitle }) {
      return { title: title || 'Untitled', subtitle: subtitle ? `${subtitle} sqm` : '' }
    },
  },
})
