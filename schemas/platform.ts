import {defineType, defineField} from 'sanity'
import {validation} from './utils/validation'

const {required} = validation

export const platform = defineType({
  name: 'platform',
  title: 'Platform',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: required,
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        },
      ],
    }),
  ],
})
