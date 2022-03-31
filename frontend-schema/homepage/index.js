import {
  chipSectionDefaultItems,
  CHIPS_SWIPER_PROPS,
  defaultItems,
  images,
  SWIPER_PROPS,
} from "./constants/homepageConstants.js";

export const homepageSchemaGenerator = (items) => {
  return {
    schema: {
      sections: items.map(({ heading, type }) => ({
        heading,
        type,
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

export const homepageChipSchemaGenerator = (items) => {
  return items.map(({ gameName }) => ({
    gameName,
  }));
};

export const homepageChipsSchema = (req, res) => {
  res.json({
    data: {},
    meta: {
      status: true,
      error: false,
      messageID: 1,
    },
    schema: homepageChipSchemaGenerator(chipSectionDefaultItems),
    swiperPropsChips: CHIPS_SWIPER_PROPS,
  });
};

export const homepageTrendingGamesSchemaGenerator = (items) => {
  return items.map(({ gameName }) => ({
    gameName,
    buttonName: "See Tournament...",
    sampleImage: gameName === "Bgmi" ? images.PUBG : images.FREEFIRE,
  }));
};

export const homepageTrendingGamesSchema = (req, res) => {
  res.json({
    data: {},
    meta: {
      status: true,
      error: false,
      messageID: 1,
    },
    schema: homepageTrendingGamesSchemaGenerator(chipSectionDefaultItems),
    swiperProps: SWIPER_PROPS,
  });
};
