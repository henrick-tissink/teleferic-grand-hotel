import { defineType } from 'sanity'

export const localePortableText = defineType({
  name: 'localePortableText',
  title: 'Localized Portable Text',
  type: 'object',
  fields: [
    {
      name: 'ro',
      title: 'Română',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'en',
      title: 'English',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'de',
      title: 'Deutsch',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
})
