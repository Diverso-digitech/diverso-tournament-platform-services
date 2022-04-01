import { sponsorsSectiondefaultItems } from "./sponsersSectionConstant.js";


export const sponsorsSectionSchemaGenerator = (items) => {
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

export const sponsorsSectionSchema = (req, res) => {
  res.json({
    data: {},
    meta: {
      status: true,
      error: false,
      messageID: 1,
    },
    schema: sponsorsSectionSchemaGenerator(sponsorsSectiondefaultItems),
  });
};
