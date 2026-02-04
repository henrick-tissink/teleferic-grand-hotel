import { defineType, defineField } from 'sanity'

export const activity = defineType({
  name: 'activity',
  title: 'Activity',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'localeString' }),
    defineField({ name: 'slug', title: 'Slug', type: 'localeSlug' }),
    defineField({
      name: 'season',
      title: 'Season',
      type: 'string',
      options: {
        list: [
          { title: 'Winter', value: 'winter' },
          { title: 'Summer', value: 'summer' },
          { title: 'Year-round', value: 'year-round' },
        ],
      },
    }),
    defineField({ name: 'description', title: 'Description', type: 'localePortableText' }),
    defineField({
      name: 'details',
      title: 'Details',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
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
    select: { title: 'name.en', subtitle: 'season' },
  },
})
