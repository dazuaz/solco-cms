import type {Rule} from 'sanity'
import {defineField, defineType} from 'sanity'

export const project = defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'object',
      fields: [
        defineField({
          name: 'en',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'es',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'description',
      type: 'object',
      fields: [
        defineField({
          name: 'en',
          type: 'text',
        }),
        defineField({
          name: 'es',
          type: 'text',
        }),
      ],
    }),
    defineField({
      name: 'location',
      type: 'string',
    }),
    defineField({
      name: 'date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM',
      },
    }),
    defineField({
      name: 'virtualTourSrc',
      title: 'Virtual Tour Link',
      description: 'Copy and paste the link to the virtual tour of the project',
      type: 'url',
    }),
    defineField({
      name: 'galleryImages',
      title: 'Gallery Images',
      type: 'array',
      of: [
        defineField({
          name: 'image',
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            }),
          ],
        }),
      ],
      options: {
        layout: 'grid',
      },
    }),
    defineField({
      name: 'thumbnail',
      type: 'image',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: (doc: any) => `${doc.title.en}`,
        slugify: (input: string) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
    }),
  ],
  preview: {
    select: {
      media: 'thumbnail',
      title: 'title.en',
      subtitle: 'location',
    },
  },
  orderings: [
    {
      title: 'Project Date, New',
      name: 'projectDateDesc',
      by: [{field: 'date', direction: 'desc'}],
    },
  ],
})
