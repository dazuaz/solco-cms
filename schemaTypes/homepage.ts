import { defineField, defineType, isDev } from "sanity";

export const homepage = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'en',
      type: 'ourServicesSection',
      title: 'English Content'
    }),
    defineField({
      name: 'es',
      type: 'ourServicesSection',
      title: 'Spanish Content'
    })
  ],
  preview: {
    select: {
      title: 'en.title'
    }
  }
})

