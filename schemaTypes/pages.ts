import {defineField, defineType, isDev} from 'sanity'

export const page = defineField({
  name: 'page',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'site',
      type: 'object',
      title: 'Site',
      description: 'Used in the header for better SEO',
      fields: [
        defineField({name: 'title', type: 'string', title: 'Title'}),
        defineField({name: 'desc', type: 'text', title: 'Description'}),
      ],
    }),
    defineField({
      name: 'servicesContent',
      title: 'Page Content',
      type: 'contentServices',
      hidden: ({document}: {document: any}) => !(document?.slug?.current === 'services'),
    }),
    defineField({
      name: 'projectContent',
      title: 'Page Content',
      type: 'contentProject',
      hidden: ({document}: {document: any}) => !(document?.slug?.current === 'projects'),
    }),
    defineField({
      name: 'aboutContent',
      title: 'Page Content',
      type: 'contentAbout',
      hidden: ({document}: {document: any}) => !(document?.slug?.current === 'about'),
    }),
    defineField({
      name: 'homeContent',
      title: 'Page Content',
      type: 'contentHome',
      hidden: ({document}: {document: any}) => !(document?.slug?.current === 'home'),
    }),
  ],
})
const latestProjectsMatterport = defineField({
  name: 'latestProjectsMatterport',
  type: 'object',
  title: 'Latest Projects Matterport',
  fields: [
    defineField({name: 'urlLeft', type: 'string', title: 'URL Left'}),
    defineField({name: 'urlRight', type: 'string', title: 'URL Right'}),
  ],
})

export const pages = defineType({
  name: 'pages',
  title: 'Pages',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      hidden: !isDev,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'aboutImage',
      type: 'image',
      hidden: ({document}: {document: any}) => !(document?.slug?.current === 'about'),
    }),
    defineField({
      name: 'servicesRemodelingImage',
      type: 'image',
      hidden: ({document}: {document: any}) => !(document?.slug?.current === 'services'),
    }),
    defineField({
      name: 'servicesProjectsImage',
      type: 'image',
      hidden: ({document}: {document: any}) => !(document?.slug?.current === 'services'),
    }),
    defineField({
      name: 'servicesCommercialImage',
      type: 'image',
      hidden: ({document}: {document: any}) => !(document?.slug?.current === 'services'),
    }),
    defineField({
      name: 'latestProjectsMatterport',
      type: 'array',
      of: [{type: 'url'}],
      hidden: ({document}: {document: any}) => !(document?.slug?.current === 'home'),
    }),
    defineField({
      name: 'en',
      type: 'page',
      title: 'English Content',
    }),
    defineField({
      name: 'es',
      type: 'page',
      title: 'Spanish Content',
    }),
  ],
  preview: {
    select: {
      title: 'en.title',
    },
  },
})
