import { tournamentInfodefaultItems } from "./tournamentInfoConstant.js";


export const tournamentInfoSchemaGenerator = (items) => {
  return {
    schema: {
      sections: items.map(({ data, props, isLive, overLayProps }) => ({
      data,
      props,
      isLive,
      overLayProps
      })),
    },
  };
};

export const tournamentInfoSchema = (req, res) => {
  res.json({
    data: {},
    meta: {
      status: true,
      error: false,
      messageID: 1,
    },
    schema: sponsorsSectionSchemaGenerator(tournamentInfodefaultItems),
  });
};
