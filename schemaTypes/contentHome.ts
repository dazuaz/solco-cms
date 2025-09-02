import {defineField, defineType} from 'sanity'

const sectionCards = defineField({
  name: 'sectionCards',
  type: 'object',
  title: 'Section Cards (Demo Only)',
  fields: [
    defineField({
      name: 'hero',
      type: 'object',
      title: 'Hero',
      fields: [defineField({name: 'title', type: 'string', title: 'Title'})],
    }),
    defineField({
      name: 'remodeling',
      type: 'object',
      title: 'Remodeling',
      fields: [
        defineField({name: 'title', type: 'string', title: 'Title'}),
        defineField({name: 'body', type: 'text', title: 'Body'}),
      ],
    }),
    defineField({
      name: 'newhome',
      type: 'object',
      title: 'New Home',
      fields: [
        defineField({name: 'title', type: 'string', title: 'Title'}),
        defineField({name: 'body', type: 'text', title: 'Body'}),
      ],
    }),
    defineField({
      name: 'commercial',
      type: 'object',
      title: 'Commercial',
      fields: [
        defineField({name: 'title', type: 'string', title: 'Title'}),
        defineField({name: 'body', type: 'text', title: 'Body'}),
      ],
    }),
    defineField({
      name: 'cta',
      type: 'object',
      title: 'Call to Action',
      fields: [
        defineField({name: 'title', type: 'text', title: 'Title'}),
        defineField({name: 'quote', type: 'string', title: 'Quote'}),
        defineField({name: 'projects', type: 'string', title: 'Projects'}),
      ],
    }),
  ],
})

const sectionServices = defineField({
  name: 'sectionServices',
  type: 'object',
  title: 'Section Services',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'serv1',
      type: 'object',
      title: 'Service 1',
      fields: [
        defineField({name: 'title', type: 'string', title: 'Title'}),
        defineField({name: 'desc', type: 'text', title: 'Description'}),
      ],
    }),
    defineField({
      name: 'serv2',
      type: 'object',
      title: 'Service 2',
      fields: [
        defineField({name: 'title', type: 'string', title: 'Title'}),
        defineField({name: 'desc', type: 'text', title: 'Description'}),
      ],
    }),
    defineField({
      name: 'serv3',
      type: 'object',
      title: 'Service 3',
      fields: [
        defineField({name: 'title', type: 'string', title: 'Title'}),
        defineField({name: 'desc', type: 'text', title: 'Description'}),
      ],
    }),
    defineField({
      name: 'serv4',
      type: 'object',
      title: 'Service 4',
      fields: [
        defineField({name: 'title', type: 'string', title: 'Title'}),
        defineField({name: 'desc', type: 'text', title: 'Description'}),
      ],
    }),
    defineField({
      name: 'serv5',
      type: 'object',
      title: 'Service 5',
      fields: [
        defineField({name: 'title', type: 'string', title: 'Title'}),
        defineField({name: 'desc', type: 'text', title: 'Description'}),
      ],
    }),
    defineField({
      name: 'serv6',
      type: 'object',
      title: 'Service 6',
      fields: [
        defineField({name: 'title', type: 'string', title: 'Title'}),
        defineField({name: 'desc', type: 'text', title: 'Description'}),
      ],
    }),
  ],
})

const sectionMilestones = defineField({
  name: 'sectionMilestones',
  type: 'object',
  title: 'Section Milestones',
  fields: [
    defineField({
      name: 'experience',
      type: 'string',
      title: 'Experience',
    }),
    defineField({
      name: 'projects',
      type: 'string',
      title: 'Projects',
    }),
    defineField({
      name: 'rating',
      type: 'string',
      title: 'Rating',
    }),
  ],
})

export const contentHome = defineType({
  name: 'contentHome',
  type: 'object',
  title: 'Home Content',
  fields: [sectionCards],
})
