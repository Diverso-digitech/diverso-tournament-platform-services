export const homepageItemTypes = {
  CHIP: "CHIP",
  SWIPER: "SWIPER",
};

export const defaultItems = [
  { headingLabel: "", type: homepageItemTypes.CHIP },
  { headingLabel: "trendingGames", type: homepageItemTypes.SWIPER },
  { headingLabel: "trendingGames", type: homepageItemTypes.SWIPER },
];

export const chipSectionDefaultItems = [
  {
    gameName: "Bgmi",
  },
  {
    gameName: "Freefire",
  },
  {
    gameName: "Bgmi",
  },
  {
    gameName: "Freefire",
  },
  {
    gameName: "Bgmi",
  },
  {
    gameNamsampleImagee: "Freefire",
  },
  {
    gameName: "Bgmi",
  },
  {
    gameName: "Freefire",
  },
  {
    gameName: "Freefire",
  },
  {
    gameName: "Freefire",
  },
  {
    gameName: "Freefire",
  },
];

export const SWIPER_PROPS = {
  slidesPerView: 2.5,
  spaceBetween: 10,
  centeredSlides: false,
  // autoplay: true,
  slidesPerGroupSkip: 3,
  grabCursor: true,
  navigation: true,
  className: "mySwiper",
  modules: ["EffectFade", "Navigation"],
  breakpoints: {
    640: {
      slidesPerView: 2.5,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 8,
      spaceBetween: 10,
    },
  },
};

export const CHIPS_SWIPER_PROPS = {
  slidesPerView: 2.5,
  spaceBetween: 10,
  centeredSlides: false,
  // autoplay: true,
  slidesPerGroupSkip: 3,
  grabCursor: true,
  navigation: false,
  className: "mySwiper",
  modules: ["EffectFade", "Navigation"],
  breakpoints: {
    390: {
      slidesPerView: 4.5,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 12,
      spaceBetween: 10,
    },
  },
};

export const images = {
  FREEFIRE:
    "https://cdn1.dotesports.com/wp-content/uploads/2021/05/25080329/Garena-Free-Fire.jpg",
  PUBG: "https://play-lh.googleusercontent.com/JRd05pyBH41qjgsJuWduRJpDeZG0Hnb0yjf2nWqO7VaGKL10-G5UIygxED-WNOc3pg",
};
