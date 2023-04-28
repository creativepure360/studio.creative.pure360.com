import { defineType, defineField } from 'sanity'
import { validation } from "./utils/validation";

const { required } = validation;

export const category = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: required,
    }),
    defineField({
      name: "exerpt",
      title: "Excerpt",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "icon",
      title: "Icon",
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
      name: "products",
      title: "Products",
      type: "array",
      of: [
        {
          type: "reference",
          to: {
            type: "product",
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
        source: "title",
        maxLength: 96,
      },
      validation: required,
    }),
  ],
});
