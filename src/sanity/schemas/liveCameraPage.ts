import { defineType, defineField } from 'sanity'

export const liveCameraPage = defineType({
  name: 'liveCameraPage',
  title: 'Live Camera Page',
  type: 'document',
  fields: [
    defineField({ name: 'youtubeId', title: 'YouTube ID', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'localePortableText' }),
  ],
  preview: {
    prepare() {
      return { title: 'Live Camera Page' }
    },
  },
})
