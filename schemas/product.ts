import { defineType, defineField } from 'sanity'
import { validation } from "./utils/validation";

const { required } = validation;

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: required,
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "exerpt",
      title: "Excerpt",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "examples",
      title: "Examples",
      type: "array",
      of: [{ type: "image" }],
    }), 
    defineField({
      name: "category",
      title: "Category",
      type: "array",
      of: [
        {
          type: "reference",
          to: {
            type: "category",
          },
        },
      ],
      validation: required,
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: required,
    }),
  ],
});
