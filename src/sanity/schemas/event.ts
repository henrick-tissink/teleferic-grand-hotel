import { defineType, defineField } from 'sanity'

export const event = defineType({
  name: 'event',
  title: 'Personal Event',
  type: 'document',
  fields: [
    defineField({ name: 'description', title: 'Description', type: 'localePortableText' }),
    defineField({
      name: 'venues',
      title: 'Venues',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'diningVenue' }] }],
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [{ type: 'localeString' }],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Personal Events' }
    },
  },
})
