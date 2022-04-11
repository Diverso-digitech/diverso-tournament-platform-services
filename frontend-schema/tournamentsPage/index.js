import { tournamentsPageDefaultItems } from "./tournamentPageConstants.js";

export const tournamentsPageSchemaGenerator = (items) => {
  return {
    schema: {
      sections: items.map(({ id, props, data }) => ({
        id,
        props,
        data,
      })),
    },
  };
};

export const tournamentsPageSchema = (req, res) => {
  res.json({
    data: {},
    meta: {
      status: true,
      error: false,
      messageID: 1,
    },
    schema: tournamentsPageSchemaGenerator(tournamentsPageDefaultItems),
  });
};
