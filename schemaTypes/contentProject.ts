import { defineField, defineType } from 'sanity';

export const contentProject = defineType({
  name: 'contentProject',
  type: 'object',
  title: 'Project Content',
  fields: [
    defineField({ name: 'intro', type: 'text', title: 'Projects Introduction' }),
  ]
});