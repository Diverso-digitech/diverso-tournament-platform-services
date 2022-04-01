import { defaultItems } from "./constants/homepageConstants.js";

export const homepageSchemaGenerator = (items) => {
  return {
    schema: {
      sections: items.map(({ id, heading, type, props, data }) => ({
        id,
        heading,
        type,
        props,
        data,
      })),
    },
  };
};

export const homepageSchema = (req, res) => {
  res.json({
    data: {},
    meta: {
      status: true,
      error: false,
      messageID: 1,
    },
    schema: homepageSchemaGenerator(defaultItems),
  });
};
