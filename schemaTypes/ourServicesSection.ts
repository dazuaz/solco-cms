import { defineField, defineType } from "sanity";

export const card = defineType({
  "name": "card",
  "title": "Card",
  "type": "object",
  "fields": [
    defineField({
      "name": "image",
      "type": "image",
    }),
    defineField({
      "name": "title",
      "type": "string",
    }),
    defineField({
      "name": "description",
      "type": "text",
    }),
    defineField({
      "name": "link",
      "type": "string",
    }),
  ]
})

export const ourServicesSection = defineType({
  "name": "ourServicesSection",
  "title": "Our Services Section",
  "type": "object",
  "fields": [
    defineField({
      "name": "en",
      "type": "object",
      "fields": [
        defineField({
          "name": "renovation",
          "type": "card",
        }),
        defineField({
          "name": "newhome",
          "type": "card",
        }),
        defineField({
          "name": "commercial",
          "type": "card",
        }),
        defineField({
          "name": "title",
          "type": "string",
        }),
        defineField({
          "name": "linkText",
          "type": "string",
        }),
      ]
    }),
    defineField({
      "name": "es",
      "type": "object",
      "fields": [
        defineField({
          "name": "renovation",
          "type": "card",
        }),
        defineField({
          "name": "newhome",
          "type": "card",
        }),
        defineField({
          "name": "commercial",
          "type": "card",
        }),
        defineField({
          "name": "title",
          "type": "string",
        }),
        defineField({
          "name": "linkText",
          "type": "string",
        }),
      ]
    }),
  ]
})
