import { defineType, defineField } from 'sanity'

export const conferenceRoom = defineType({
  name: 'conferenceRoom',
  title: 'Conference Room',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'localeSlug' }),
    defineField({ name: 'description', title: 'Description', type: 'localePortableText' }),
    defineField({
      name: 'capacity',
      title: 'Capacity',
      type: 'object',
      fields: [
        { name: 'theatre', type: 'number', title: 'Theatre' },
        { name: 'banquet', type: 'number', title: 'Banquet' },
        { name: 'classroom', type: 'number', title: 'Classroom' },
        { name: 'ushape', type: 'number', title: 'U-Shape' },
      ],
    }),
    defineField({
      name: 'equipment',
      title: 'Equipment',
      type: 'array',
      of: [{ type: 'localeString' }],
    }),
    defineField({
      name: 'eventEquipment',
      title: 'Event Equipment',
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
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  preview: {
    select: { title: 'name' },
  },
})
