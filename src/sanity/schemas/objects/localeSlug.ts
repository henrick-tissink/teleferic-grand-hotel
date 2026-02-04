import { defineType } from 'sanity'

export const localeSlug = defineType({
  name: 'localeSlug',
  title: 'Localized Slug',
  type: 'object',
  fields: [
    { name: 'ro', type: 'slug', title: 'Română' },
    { name: 'en', type: 'slug', title: 'English' },
    { name: 'de', type: 'slug', title: 'Deutsch' },
  ],
})
