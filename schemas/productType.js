import { validation } from "./utils/validation";

const { required } = validation;

export default {
  name: "productType",
  title: "Product Type",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: required,
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: required,
    },
  ],
};
