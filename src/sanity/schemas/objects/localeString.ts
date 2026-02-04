import { defineType } from 'sanity'

export const localeString = defineType({
  name: 'localeString',
  title: 'Localized String',
  type: 'object',
  fields: [
    { name: 'ro', type: 'string', title: 'Română' },
    { name: 'en', type: 'string', title: 'English' },
    { name: 'de', type: 'string', title: 'Deutsch' },
  ],
})
