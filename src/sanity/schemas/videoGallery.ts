import { defineType, defineField } from 'sanity'

export const videoGallery = defineType({
  name: 'videoGallery',
  title: 'Video Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'localeString', title: 'Category Name' },
            {
              name: 'videos',
              type: 'array',
              title: 'Videos',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'youtubeId', type: 'string', title: 'YouTube ID' },
                    { name: 'title', type: 'localeString', title: 'Title' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Video Gallery' }
    },
  },
})
