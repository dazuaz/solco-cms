import {defineField, defineType} from 'sanity'

export const contentAbout = defineType({
  name: 'contentAbout',
  type: 'object',
  title: 'About Content',
  fields: [
    defineField({
      name: 'about',
      type: 'object',
      title: 'About',
      fields: [
        defineField({name: 'title', type: 'string', title: 'Title'}),
        defineField({name: 'subtitle', type: 'string', title: 'Subtitle'}),
        defineField({name: 'description', type: 'text', title: 'Description'}),
      ],
    }),
    defineField({
      name: 'mision',
      type: 'object',
      title: 'Mision',
      fields: [
        defineField({name: 'title', type: 'string', title: 'Title'}),
        defineField({name: 'description', type: 'text', title: 'Description'}),
      ],
    }),
    defineField({
      name: 'vision',
      type: 'object',
      title: 'Vision',
      fields: [
        defineField({name: 'title', type: 'string', title: 'Title'}),
        defineField({name: 'description', type: 'text', title: 'Description'}),
      ],
    }),
    defineField({
      name: 'results',
      type: 'object',
      title: 'Results',
      fields: [
        defineField({name: 'title', type: 'string', title: 'Title'}),
        defineField({name: 'description', type: 'text', title: 'Description'}),
      ],
    }),
  ],
})
