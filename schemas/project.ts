import type { Rule } from "sanity"
export default {
  "name": "projects",
  "title": "Projects",
  "type": "document",
  "fields": [
    {
      "name": "title",
      "type": "object",
      "fields": [
        {
          "name": "en",
          "type": "string"
        },
        {
          "name": "es",
          "type": "string"
        }
      ]
    },
    {
      "name": "description",
      "type": "object",
      "fields": [
        {
          "name": "en",
          "type": "text"
        },
        {
          "name": "es",
          "type": "text"
        }
      ]
    },
    {
      "name": "location",
      "type": "string"
    },
    {
      "name": "date",
      "type": "date",
      options: {
        dateFormat: 'YYYY-MM',
      }
    },
    {
      name: 'galleryImages',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
    },
    {
      "name": "thumbnail",
      "type": "image"
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      validation: (Rule: Rule) => Rule.required(),
      options: {
        source: (doc: any) => `${doc.date} ${doc.title.en}`,
        slugify: (input: string) => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200)
      }
    },
    {
      "name": "featured",
      "type": "boolean"
    }
  ],
  preview: {
    select: {
      media: 'thumbnail',
      title: 'title.en',
      subtitle: 'location'
    }
  },
  orderings: [
    {
      title: 'Project Date, New',
      name: 'projectDateDesc',
      by: [
        { field: 'date', direction: 'desc' }
      ]
    }
  ]
} 