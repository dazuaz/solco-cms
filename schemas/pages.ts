import type { Rule } from "sanity"
export default {
  name: 'pages',
  title: 'Pages',
  type: 'document',
  fields: [
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title.en',
        maxLength: 96,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      "name": "title",
      "type": "object",
      title: 'Title',
      validation: (Rule: Rule) => Rule.required(),
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
      title: 'Description',
      validation: (Rule: Rule) => Rule.required(),
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
  ],
  preview: {
    select: {
      title: 'title.en',
    }
  }
}

