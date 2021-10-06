import { validation } from "./utils/validation";

const { required } = validation;

export default {
  name: "tool",
  title: "Tool",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: required,
    },
    {
      name: "exerpt",
      title: "Excerpt",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "url",
      title: "URL",
      type: "string",
      validation: required,
    },
  ],
};
