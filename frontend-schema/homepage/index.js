import { defaultItems } from "./constants/homepageConstants.js";

export const homepageSchemaGenerator = (items, numberOfElements = 10) => {
  return {
    schema: {
      sections: items.map(({ heading, type }) => ({
        heading,
        type,
        data: Array.from(new Array(numberOfElements), () => ({})),
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
