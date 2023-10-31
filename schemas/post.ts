import {defineType, defineField} from 'sanity'
import {validation} from './utils/validation'

const {required} = validation

export const post = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: "platform",
      title: "Platform",
      type: "array",
      of: [
        {
          type: "reference",
          to: {
            type: "platform",
          },
        },
      ],
      validation: required,
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: required,
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
      placeholder: `${new Date().getFullYear()}-${`00${new Date().getMonth() + 1}`.slice(
        -2
      )}-${new Date().getDate()}`,
      validation: required,
    }),
    defineField({
      name: 'copy',
      title: 'Copy',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}],
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
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: required,
    }),
  ],
})
