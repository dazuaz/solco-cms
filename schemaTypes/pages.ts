import { defineField, defineType, isDev } from "sanity";

export const page = defineField({
  name: 'page',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title'
    }),
    defineField({
      name: 'site',
      type: 'object',
      title: 'Site',
      description: 'Used in the header for better SEO',
      fields: [
        defineField({ name: 'title', type: 'string', title: 'Title' }),
        defineField({ name: 'desc', type: 'text', title: 'Description' })
      ]
    }),
    // defineField({
    //   name: 'pageContent',
    //   title: 'Page Content',
    //   type: 'array',
    //   of: [
    //     { type: 'contentAbout', }, { type: 'contentProject' }
    //   ]
    // }),
    defineField({
      name: 'projectContent',
      title: 'Page Content',
      type: 'contentProject',
      hidden: ({ document }: { document: any }) => !(document?.slug?.current === 'projects'),
    }),
    defineField({
      name: 'aboutContent',
      title: 'Page Content',
      type: 'contentAbout',
      hidden: ({ document }: { document: any }) => !(document?.slug?.current === 'about'),
    })
  ]
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
      name: 'en',
      type: 'page',
      title: 'English Content'
    }),
    defineField({
      name: 'es',
      type: 'page',
      title: 'Spanish Content'
    })
  ],
  preview: {
    select: {
      title: 'en.title'
    }
  }
})

