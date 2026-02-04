import { defineType, defineField } from 'sanity'

export const spa = defineType({
  name: 'spaPage',
  title: 'Spa Page',
  type: 'document',
  fields: [
    defineField({ name: 'description', title: 'Description', type: 'localePortableText' }),
    defineField({
      name: 'facilities',
      title: 'Facilities',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'localeString', title: 'Name' },
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
    defineField({
      name: 'massageTypes',
      title: 'Massage Types',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'localeString', title: 'Name' },
            { name: 'description', type: 'localePortableText', title: 'Description' },
          ],
        },
      ],
    }),
    defineField({ name: 'hours', title: 'Hours', type: 'string' }),
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'object',
      fields: [
        { name: 'phone', type: 'string', title: 'Phone' },
        { name: 'email', type: 'string', title: 'Email' },
      ],
    }),
    defineField({
      name: 'menuPdfs',
      title: 'Menu PDFs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'localeString', title: 'Title' },
            { name: 'file', type: 'file', title: 'File' },
          ],
        },
      ],
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
  ],
  preview: {
    prepare() {
      return { title: 'Spa & Wellness Page' }
    },
  },
})
