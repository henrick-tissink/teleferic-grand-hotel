import { defineType, defineField } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'phone', title: 'Phone', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'whatsapp', title: 'WhatsApp', type: 'string' }),
    defineField({ name: 'address', title: 'Address', type: 'localeString' }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        { name: 'facebook', type: 'url', title: 'Facebook' },
        { name: 'instagram', type: 'url', title: 'Instagram' },
        { name: 'youtube', type: 'url', title: 'YouTube' },
        { name: 'tripadvisor', type: 'url', title: 'TripAdvisor' },
      ],
    }),
    defineField({
      name: 'appLinks',
      title: 'App Links',
      type: 'object',
      fields: [
        { name: 'ios', type: 'url', title: 'iOS App Store' },
        { name: 'android', type: 'url', title: 'Google Play Store' },
      ],
    }),
    defineField({
      name: 'discountTiers',
      title: 'Discount Tiers',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'percent', type: 'number', title: 'Percent' },
            { name: 'label', type: 'localeString', title: 'Label' },
            { name: 'description', type: 'localeString', title: 'Description' },
          ],
        },
      ],
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
    defineField({
      name: 'logoWhite',
      title: 'Logo (White)',
      type: 'image',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Site Settings' }
    },
  },
})
