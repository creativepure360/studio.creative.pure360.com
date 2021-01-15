import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import category from "./category";
import product from "./product";
import productType from "./productType";

export default createSchema({
  name: "creative",
  types: schemaTypes.concat([category, product, productType]),
});
