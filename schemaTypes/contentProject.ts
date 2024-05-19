import { defineField, defineType } from 'sanity';

export const contentProject = defineType({
  name: 'contentProject',
  type: 'object',
  title: 'Project Content',
  fields: [
    defineField({ name: 'intro', type: 'array', title: 'Projects Introduction', of: [{ type: 'block' }] }),
  ]
});