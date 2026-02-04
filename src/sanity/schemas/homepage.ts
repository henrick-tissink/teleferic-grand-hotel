import { defineType, defineField } from 'sanity'

export const homepage = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'heroImages',
      title: 'Hero Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'alt', type: 'string', title: 'Alt Text' }],
        },
      ],
    }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'localeString' }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'type',
              type: 'string',
              title: 'Section Type',
              options: {
                list: [
                  { title: 'Rooms', value: 'rooms' },
                  { title: 'Dining', value: 'dining' },
                  { title: 'Spa', value: 'spa' },
                  { title: 'Activities', value: 'activities' },
                  { title: 'Awards', value: 'awards' },
                  { title: 'Video', value: 'video' },
                  { title: 'App Download', value: 'appDownload' },
                ],
              },
            },
            { name: 'enabled', type: 'boolean', title: 'Enabled' },
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Homepage' }
    },
  },
})
