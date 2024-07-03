import { defineField, defineType } from 'sanity';

export const contentServices = defineType({
  name: 'contentServices',
  type: 'object',
  title: 'Services Content',
  fields: [
    defineField({
      name: 'remodeling',
      type: 'object',
      title: 'Remodeling and Renovation',
      fields: [
        defineField({ name: 'title', type: 'string', title: 'Title' }),
        defineField({ name: 'subtitle', type: 'string', title: 'Subtitle' }),
        defineField({ name: 'description', type: 'text', title: 'Description' }),
        defineField({
          name: 'highlights',
          type: 'array',
          title: 'Highlights',
          of: [{ type: 'string' }]
        })
      ]
    }),
    defineField({
      name: 'newhome',
      type: 'object',
      title: 'New Home',
      fields: [
        defineField({ name: 'title', type: 'string', title: 'Title' }),
        defineField({ name: 'subtitle', type: 'string', title: 'Subtitle' }),
        defineField({ name: 'description', type: 'text', title: 'Description' }),
        defineField({
          name: 'highlights',
          type: 'array',
          title: 'Highlights',
          of: [{ type: 'string' }]
        })
      ]
    }),
    defineField({
      name: 'commercial',
      type: 'object',
      title: 'Commercial Contractor',
      fields: [
        defineField({ name: 'title', type: 'string', title: 'Title' }),
        defineField({ name: 'subtitle', type: 'string', title: 'Subtitle' }),
        defineField({ name: 'description', type: 'text', title: 'Description' }),
        defineField({
          name: 'highlights',
          type: 'array',
          title: 'Highlights',
          of: [{ type: 'string' }]
        })
      ]
    })
  ]
});